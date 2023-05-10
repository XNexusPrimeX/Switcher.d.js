import api from "../api";

export default [
	{
		name: "Alternar Tema",
		async run() {
			await fetch("https://discord.com/api/users/@me/settings", {
				method: "PATCH",
				body: JSON.stringify({
					theme: "",
				}),
			});
			await fetch("https://discord.com/api/users/@me/settings", {
				method: "PATCH",
				body: JSON.stringify({
					theme: "",
				}),
			});
		},
	},
];

api.user.api.user.settings.setTheme();
api.user.settings.getTheme();
