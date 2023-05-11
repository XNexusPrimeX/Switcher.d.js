import Endpoint from "utils/Endpoint";

import Base from "../base";
import SettingsManager from "./settings";

class UserManager extends Base {
	@Endpoint settings = SettingsManager;
}

export default UserManager.use();
