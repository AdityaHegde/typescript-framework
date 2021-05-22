import {DataStoreModel} from "../../datastore/DataStoreModel";
import bcrypt from "bcrypt";
import {Route} from "../routes/Route";
import {Request} from "express";
import {Log, LoggerBase} from "../../logging/LoggerBase";
import {UserModel} from "../../../models/UserModel";
import {UserInvite} from "../../../models/UserInvite";

const SALT_LENGTH = 10;

@Log
export class UserAuthentication extends LoggerBase {
  private userDataModel: DataStoreModel;
  private userModelClass: typeof UserModel;
  private userInviteClass: typeof UserInvite;
  private userApiRoute: Route;

  private adminChecker: any;

  constructor(userDataModel: DataStoreModel, userModelClass: typeof UserModel,
              userInviteClass: typeof UserInvite, userApiRoute: Route) {
    super();
    this.userDataModel = userDataModel;
    this.userModelClass = userModelClass;
    this.userInviteClass = userInviteClass;
    this.userApiRoute = userApiRoute;
  }

  public async signup(userJson: any) {
    const existing = await this.queryUser(userJson);
    if (existing) {
      throw new Error("UserName already exists");
    }

    const hashedPwd = await bcrypt.hash(userJson.pwd, SALT_LENGTH);

    return this.userApiRoute.datastoreQuery(
      {...userJson, pwd: hashedPwd}, null, {},
      (sanitizedRecord) => {
        if (sanitizedRecord[this.userModelClass.serverMetadata.roleFieldType.field] === undefined) {
          sanitizedRecord[this.userModelClass.serverMetadata.roleFieldType.field] =
            this.userModelClass.serverMetadata.roleFieldType.default;
        }
        return this.userDataModel.create(sanitizedRecord);
      }
    );
  }

  public async login(userJson: any) {
    const existing = await this.queryUser(userJson);
    if (!existing) {
      throw new Error("Username and password do not match");
    }

    await bcrypt.compare(userJson.pwd, existing.pwd);

    return existing;
  }

  public async claimAdmin(user: any) {
    const existingAdmin = await this.userDataModel.querySingle({
      [this.userModelClass.serverMetadata.roleFieldType.field]: this.userModelClass.serverMetadata.roleFieldType.admin,
    });
    if (!existingAdmin) {
      if (this.userModelClass.serverMetadata.roleFieldType.isSet) {
        user[this.userModelClass.serverMetadata.roleFieldType.field]
          .push(this.userModelClass.serverMetadata.roleFieldType.admin);
      } else {
        user[this.userModelClass.serverMetadata.roleFieldType.field] =
          this.userModelClass.serverMetadata.roleFieldType.admin;
      }
      await user.save();
      this.logger.warn(`${user.user} claimed admin role.`);
      return true;
    }
    this.logger.warn(`${user.user} tried to claim admin role.`);
    return false;
  }

  public async updateUserRole(forUser: any, newRole: any) {
    if (!this.adminChecker) {
      this.adminChecker = this.userModelClass
        .getUserRoleChecker(this.userModelClass.serverMetadata.roleFieldType.admin);
    }
    if (this.adminChecker(forUser) && !this.adminChecker({
      [this.userModelClass.serverMetadata.roleFieldType.field]: newRole
    })) {
      const existingAdmins = await this.userDataModel.query({
        [this.userModelClass.serverMetadata.roleFieldType.field]: this.userModelClass.serverMetadata.roleFieldType.admin,
      }, {limit: 2});
      if (existingAdmins.length === 1) {
        throw new Error("Cannot remove admin role from the only remaining admin");
      }
    }

    forUser[this.userModelClass.serverMetadata.roleFieldType.field] = newRole;
    await forUser.save();
  }

  public async getUser(userId: string) {
    return await this.userDataModel.getById(userId);
  }

  public getUserJson(req: Request) {
    return JSON.stringify({
      data: this.userApiRoute.convertToJSON((req as any).user),
    });
  }

  private async queryUser(userJson: any) {
    return await this.userDataModel.querySingle({
      user: userJson.user,
    });
  }
}
