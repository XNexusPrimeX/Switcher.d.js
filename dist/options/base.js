"use strict";
class SelectorOption {
    static bulkBuild(...options) {
        return options.map((option) => {
            const instance = new this();
            instance.name = option.name;
            instance.options = option.options ?? [];
            instance.run = option.run;
        });
    }
}
