"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const metadata_1 = require("../metadata");
function Filter(options) {
    return function (target) {
        const meta = metadata_1.MetadataStorage.getMetadataFromDecorator(target);
        meta.filters[options.name] = options;
        return target;
    };
}
exports.Filter = Filter;
