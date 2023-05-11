import Endpoint from "utils/Endpoint";

import Base from "./base";
import UserManager from "./user";

class Client extends Base {
	url = "https://discord.com/api";

	@Endpoint("users/@me") user = UserManager;

	constructor(token: string) {
		super();

		Base.token = token;
	}
}

export default Client;
