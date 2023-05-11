"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Endpoint(...args) {
    if (typeof args[0] !== "string") {
        const [_, context] = args;
        return function (initValue) {
            const name = String(context.name).toLowerCase();
            initValue.prototype.url = `${this.url}/${name}`;
            initValue = new initValue();
            return initValue;
        };
    }
    else {
        return (_, context) => {
            return function (initValue) {
                initValue.prototype.url = `${this.url}/${args[0]}`;
                initValue = new initValue();
                return initValue;
            };
        };
    }
}
exports.default = Endpoint;
