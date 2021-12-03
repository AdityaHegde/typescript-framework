import should from "should";
import {Field3Enum} from "../models/Field3Enum";
import {UserWithSingleRole} from "../models/UserWithSingleRole";
import {UserWithMultiRole} from "../models/UserWithMultiRole";
import {UserModel} from "../../../src/models";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";
import {Builder} from "../../../src";
import {UnitTestBase} from "../UnitTestBase";

type ValidateDataProvider = DataProviderData<[UserModel, (user: UserModel) => boolean, boolean]>;

@TestBase.Suite
export class UserModelTest extends UnitTestBase {
  public accessValidationData(): ValidateDataProvider {
    const usersWithSingleRoles = [Field3Enum.F3Enum1, Field3Enum.F3Enum3, Field3Enum.F3Enum5].map(role =>
      Builder(new UserWithSingleRole("")).role(role).build());
    const restrictRoles = [Field3Enum.F3Enum2, Field3Enum.F3Enum4];
    const accessForSingleRoles = [
      // userWithSingleRoles[0]
      [true, true],
      // userWithSingleRoles[1]
      [false, true],
      // userWithSingleRoles[2]
      [false, false],
    ];

    const usersWithMultiRoles = [
      [Field3Enum.F3Enum1, Field3Enum.F3Enum2, Field3Enum.F3Enum3],
      [Field3Enum.F3Enum2, Field3Enum.F3Enum3],
      [Field3Enum.F3Enum4],
    ].map(roles => Builder(new UserWithMultiRole("")).role(roles).build());
    const restrictRolesSingleAccess = [Field3Enum.F3Enum2, Field3Enum.F3Enum4, Field3Enum.F3Enum5];
    const accessForMultiRoleSingleAccess = [
      // userWithMultiRoles[0]
      [true, true, true],
      // userWithMultiRoles[1]
      [true, false, false],
      // userWithMultiRoles[2]
      [false, true, false],
    ]
    const restrictRolesMultiAccess = [
      [Field3Enum.F3Enum2, Field3Enum.F3Enum3], [Field3Enum.F3Enum4], [Field3Enum.F3Enum4, Field3Enum.F3Enum5]
    ];
    const accessForMultiRoleMultiAccess = [
      // userWithMultiRoles[0]
      [true, true, true],
      // userWithMultiRoles[1]
      [true, false, false],
      // userWithMultiRoles[2]
      [false, true, false],
    ];

    return {
      subData: [
        this.getTestDataForSet("UserWithSingleRole", UserWithSingleRole, usersWithSingleRoles,
          restrictRoles, accessForSingleRoles),
        this.getTestDataForSet("UserWithMultiRole single restricting role", UserWithMultiRole, usersWithMultiRoles,
          restrictRolesSingleAccess, accessForMultiRoleSingleAccess),
        this.getTestDataForSet("UserWithMultiRole multi restricting role", UserWithMultiRole, usersWithMultiRoles,
          restrictRolesMultiAccess, accessForMultiRoleMultiAccess),
      ],
    };
  }

  @TestBase.Test("accessValidationData")
  public shouldValidateAccess(user: UserModel, checker: (user: UserModel) => boolean, shouldAllowAccess: boolean) {
    should(checker(user)).be.equal(shouldAllowAccess);
  }

  private getTestDataForSet(title: string, userModel: typeof UserModel, users: Array<UserModel>,
                            restrictRoles: Array<any>, accessForRoles: Array<Array<boolean>>): ValidateDataProvider {
    return {
      title,
      subData: restrictRoles.map((role, roleIdx) => {
        const checker = userModel.getUserRoleChecker(role);
        return {
          title: `Restrict to role=${role.toString()}`,
          subData: users.map((user, userIdx) => {
            const shouldAllowAccess = accessForRoles[userIdx][roleIdx];
            return {
              title: `Should ${shouldAllowAccess ? "allow": "restrict"} User with role=${(user as any).role.toString()}`,
              args: [user, checker, shouldAllowAccess],
            }
          }),
        };
      }),
    };
  }
}
