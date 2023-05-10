import { Base } from "../base";
import Endpoint from "../../utils/Endpoint";
import Settings from "./settings";

@Endpoint
class User extends Base {
	settings: Settings;
}

console.log("user");
console.log(new User().url);

export default User;
