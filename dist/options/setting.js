"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("api"));
class SettingOption extends SelectorOption {
    global = {
        icon: "",
    };
}
exports.default = SettingOption.bulkBuild({
    name: "Alternar Tema",
    async run() {
        const currentTheme = await api_1.default.user.settings.getTheme();
        if (currentTheme == "dark") {
            api_1.default.user.settings.setTheme("light");
        }
        else {
            api_1.default.user.settings.setTheme("dark");
        }
    },
});
