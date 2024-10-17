"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unique = exports.Index = void 0;
const metadata_1 = require("../metadata");
const Utils_1 = require("../utils/Utils");
function createDecorator(options, unique) {
    return function (target, propertyName) {
        const meta = metadata_1.MetadataStorage.getMetadataFromDecorator(propertyName ? target.constructor : target);
        options.properties = options.properties || propertyName;
        const key = unique ? 'uniques' : 'indexes';
        meta[key].push(options);
        if (!propertyName) {
            return target;
        }
        return Utils_1.Utils.propertyDecoratorReturnValue();
    };
}
function Index(options = {}) {
    return createDecorator(options, false);
}
exports.Index = Index;
function Unique(options = {}) {
    return createDecorator(options, true);
}
exports.Unique = Unique;
