"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializedPrimaryKey = exports.PrimaryKey = void 0;
const metadata_1 = require("../metadata");
const enums_1 = require("../enums");
const Utils_1 = require("../utils/Utils");
function createDecorator(options, serialized) {
    return function (target, propertyName) {
        const meta = metadata_1.MetadataStorage.getMetadataFromDecorator(target.constructor);
        metadata_1.MetadataValidator.validateSingleDecorator(meta, propertyName, enums_1.ReferenceType.SCALAR);
        const k = serialized ? 'serializedPrimaryKey' : 'primary';
        options[k] = true;
        meta.properties[propertyName] = Object.assign({ name: propertyName, reference: enums_1.ReferenceType.SCALAR }, options);
        return Utils_1.Utils.propertyDecoratorReturnValue();
    };
}
function PrimaryKey(options = {}) {
    return createDecorator(options, false);
}
exports.PrimaryKey = PrimaryKey;
function SerializedPrimaryKey(options = {}) {
    return createDecorator(options, true);
}
exports.SerializedPrimaryKey = SerializedPrimaryKey;
