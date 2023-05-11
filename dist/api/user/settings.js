"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class Settings extends base_1.default {
    async getTheme() {
        const request = await this.fetch().then((r) => r.json());
        const theme = await request.theme;
        return theme;
    }
    async setTheme(theme) {
        return (await this.fetch({
            method: "PATCH",
            body: JSON.stringify({ theme: theme }),
        })).json();
    }
}
exports.default = Settings;
