import api from "../client";

class SettingOption extends SelectorOption {
	global = {
		icon: "",
	};
}

export default SettingOption.bulkBuild({
	name: "Alternar Tema",
	async run() {
		const currentTheme = await api.user.settings.getTheme();

		if (currentTheme == "dark") {
			api.user.settings.setTheme("light");
		} else {
			api.user.settings.setTheme("dark");
		}
	},
});
