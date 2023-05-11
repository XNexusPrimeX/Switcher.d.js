import Base from "../base";
import fetch from "../../utils/Fetch";

class Settings extends Base {
	async getTheme() {
		const theme: "light" | "dark" = await (await fetch(Settings.url)).json();

		return theme
	}

	setTheme() {}
}

export default Settings.preInstancie();
