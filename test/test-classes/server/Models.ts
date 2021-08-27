import {LoggedInModel} from "./bootstrap/LoggedInModel";
import {PublicModel} from "./bootstrap/PublicModel";
import {RestrictedModel} from "./bootstrap/RestrictedModel";
import {PartialRestrictedModel} from "./bootstrap/PartialRestrictedModel";
import {UserLockedModel} from "./UserLockedModel";
import {ValidationTestModel} from "./ValidationTestModel";
import {QueryTestModel} from "./QueryTestModel";
import {UserWithSingleRole} from "./user/UserWithSingleRole";
import {UserWithMultiRole} from "./user/UserWithMultiRole";
import {User} from "./user/User";
import {ParentModel} from "./relation/ParentModel";
import {ChildOneModel} from "./relation/ChildOneModel";
import {ChildTwoModel} from "./relation/ChildTwoModel";
import {ChildOneOneModel} from "./relation/ChildOneOneModel";

export const BootstrapModels = [
  PublicModel,
  LoggedInModel,
  PartialRestrictedModel,
  RestrictedModel,
  UserLockedModel,
  ValidationTestModel,
];
export const Models = [
  ...BootstrapModels,
  QueryTestModel,
  ParentModel, ChildOneModel, ChildTwoModel, ChildOneOneModel,
];
export const UserModels = [
  User, UserWithSingleRole, UserWithMultiRole,
];
