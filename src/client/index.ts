import Endpoint from "utils/Endpoint";

import Base from "./base";
import UserManager from "./user";

class Client extends Base {
	protected url = "https://discord.com/api";
	@Endpoint("users/@me") user = UserManager;

	static run(token: string) {
		return new Promise<Client>(async (resolve) => {
			Base.token = token;
			const instance = new this();
			await waitFor(() => instance.isReady);

			resolve(instance);

			function waitFor(variable) {
				return new Promise<void>((resolve) => {
					setInterval(() => variable() && resolve(), 100);
				});
			}
		});
	}
}

export default Client;
