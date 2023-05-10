import Endpoint from "../../utils/Endpoint";
import User from ".";

@Endpoint("userr")
class Settings extends User {
	getTheme() {}

	setTheme() {}
}

console.log("settings");
console.log(new Settings().url);

export default Settings;
