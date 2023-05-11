import Base from "../base";

class SettingsManager extends Base {
	async getTheme() {
		const request = await this.fetch();
		const theme: "light" | "dark" = await request.theme;

		return theme;
	}

	async setTheme(theme: "light" | "dark") {
		return await this.fetch({
			method: "PATCH",
			body: JSON.stringify({ theme: theme }),
		});
	}
}

export default SettingsManager.use();
