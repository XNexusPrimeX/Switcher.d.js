import Endpoint from "../utils/Endpoint";

import Base from "./base";
import User from "./user";

class Api extends Base {
	url = "https://discord.com/api"
	
	@Endpoint user = {};
}

new Api();
