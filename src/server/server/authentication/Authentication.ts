import {Application, Request, Response} from "express";
import {UserAuthentication} from "./UserAuthentication";
import {RouteFactory} from "../routes/RouteFactory";
import {AuthenticationConfig} from "./AuthenticationConfig";
import {LoggerBase} from "../../logging/LoggerBase";
import {DataStore} from "../../datastore/DataStore";
import {UserModel} from "../../../models/UserModel";
import {UserInvite} from "../../../models/UserInvite";

export abstract class Authentication extends LoggerBase {
  protected config: AuthenticationConfig;
  protected userModelClass: typeof UserModel;
  protected userInviteClass: typeof UserInvite;
  protected userAuthentication: UserAuthentication;

  constructor(config: AuthenticationConfig, userModelClass: typeof UserModel, userInviteClass: typeof UserInvite) {
    super();
    this.config = config;
    this.userModelClass = userModelClass;
    this.userInviteClass = userInviteClass;
  }

  public abstract initAuth(app: Application, dataStore: DataStore): Promise<void>;

  public async init(app: Application, dataStore: DataStore, routeFactory: RouteFactory): Promise<void> {
    this.userAuthentication = new UserAuthentication(
      dataStore.dataStoreModelFactory.getDataStoreModel(this.userModelClass.metadata.modelName),
      this.userModelClass, this.userInviteClass, routeFactory.getRoute(this.userModelClass.metadata.modelName),
    );

    await this.initAuth(app, dataStore);

    const sendUser = (req: Request, res: Response) => {
      res.status(200);
      res.send(this.userAuthentication.getUserJson(req));
    };

    app.post("/auth/signup", async (req: Request, res: Response, next) => {
      try {
        (req as any).user = await this.userAuthentication.signup(req.body);
        this.logger.debug("User Signed up");
        this.signup(req, res, next);
      } catch (err) {
        this.logger.error(err);
        this.unauthorisedResponse(res);
      }
    }, sendUser);

    app.post("/auth/login", async (req: Request, res: Response, next) => {
      try {
        (req as any).user = await this.userAuthentication.login(req.body);
        this.logger.debug("User logged in");
        this.login(req, res, next);
      } catch (err) {
        this.logger.error(err);
        this.unauthorisedResponse(res);
      }
    }, sendUser);

    app.post("/auth/logout", this.restrict(), (req: Request, res: Response, next) => {
      this.logout(req, res, next);
      res.status(200);
      res.send("{}");
    });

    app.get("/auth/user", this.restrict(), sendUser);

    app.post("/auth/updateRole",
      this.restrict(this.userModelClass.serverMetadata.roleFieldType.admin),
      async (req: Request, res: Response, next) => {
        const updateRoleReq = req.body;
        try {
          const forUser = await this.userAuthentication.getUser(updateRoleReq.userId);
          await this.userAuthentication.updateUserRole(forUser, updateRoleReq.newRole);
          res.status(200);
          res.send("{}");
        } catch (err) {
          this.logger.error(err);
          this.unauthorisedResponse(res);
        }
      });
  }

  public restrict(role?: any): (req, res, next) => any {
    const checker = this.userModelClass.getUserRoleChecker(role);
    return (req, res, next) => {
      this.parseUser(req, res, () => {
        if (role === undefined || checker((req as any).user)) {
          next();
        } else {
          this.unauthorisedResponse(res);
        }
      });
    };
  }

  public async claimAdmin(userJson: any) {
    return await this.userAuthentication.claimAdmin(
      await this.userAuthentication.signup(userJson));
  }

  protected abstract signup(req: Request, res: Response, next);
  protected abstract login(req: Request, res: Response, next);
  protected abstract logout(req: Request, res: Response, next);
  protected abstract parseUser(req: Request, res: Response, next);

  protected unauthorisedResponse(res: Response) {
    this.logger.warn("Tried to access unauthorised endpoint");
    res.status(401);
    res.send("{}");
  }
}
