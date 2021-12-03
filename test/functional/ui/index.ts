import {ProductUser} from "./app/models/ProductUser";
import {getMERNServer} from "../../../src/server/getMERNServer";
import { Models } from "./app/models/Models";

getMERNServer(__dirname + "/public", ProductUser, Models).start();