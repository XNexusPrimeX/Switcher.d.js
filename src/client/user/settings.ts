import Base from "../base";

class SettingsManager extends Base {
	async getTheme() {
		const request = await (await this.__fetch()).json();
		const theme: "light" | "dark" = await request.theme;

		return theme;
	}

	async setTheme(theme: "light" | "dark") {
		return await this.__fetch({
			method: "PATCH",
			body: JSON.stringify({ theme: theme }),
		});
	}
}

export default SettingsManager.__getInstanceType();
