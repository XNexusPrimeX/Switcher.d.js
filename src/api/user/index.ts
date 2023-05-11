import Endpoint from "../../utils/Endpoint";

import Base from "../base";
import Settings from "./settings";

class User extends Base {
	@Endpoint settings = Settings
}

export default User.preInstancie();
