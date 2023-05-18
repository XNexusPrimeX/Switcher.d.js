import Endpoint from "utils/Endpoint";

import Base from "../base";
import SettingsManager from "./settings";

class UserManager extends Base {
	@Endpoint settings = SettingsManager;

	declare id: string;
	declare username: string;
	declare global_name: string | null;
	declare display_name: string | null;
	declare avatar: string | null;
	declare discriminator: `${number}`;
	declare public_flags: number;
	declare flags: number;
	declare purchased_flags: number;
	declare premium_usage_flags: number;
	declare banner: string | null;
	declare banner_color: string | null;
	declare accent_color: number | null;
	declare bio: string | null;
	declare locale: string;
	declare nsfw_allowed: boolean;
	declare mfa_enabled: boolean;
	declare premium_type: number;
	declare linked_users: any[];
	declare avatar_decoration: null;
	declare email: string;
	declare verified: boolean;
	declare phone: string;

	constructor() {
		super();

		this.__init_fetch();
	}
}

export default UserManager.__getInstanceType();
