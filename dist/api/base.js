"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token = "NjA3OTk5OTM0NzI1MzU3NTc4.GJNmsj.1y3RTnSJ17eAx6oZwRpgp3_QxqsmuDUXLKu1vk";
class Base {
    async fetch(init) {
        return (await fetch(this.url, {
            ...init,
            headers: new Headers({
                Authorization: token,
                "Content-Type": "application/json",
            }),
        })).json();
    }
    /** Enganar o TS */
    static use() {
        return this;
    }
}
exports.default = Base;
