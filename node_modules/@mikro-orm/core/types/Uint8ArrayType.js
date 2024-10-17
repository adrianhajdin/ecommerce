"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uint8ArrayType = void 0;
const Type_1 = require("./Type");
class Uint8ArrayType extends Type_1.Type {
    convertToDatabaseValue(value) {
        if (!value) {
            return value;
        }
        return Buffer.from(value);
    }
    convertToJSValue(value) {
        if (!value) {
            return value;
        }
        /* istanbul ignore else */
        if (value instanceof Buffer) {
            return new Uint8Array(value);
        }
        /* istanbul ignore else */
        if (value.buffer instanceof Buffer) {
            return new Uint8Array(value.buffer);
        }
        /* istanbul ignore next */
        return new Uint8Array(Buffer.from(value));
    }
    compareAsType() {
        return 'Buffer';
    }
    ensureComparable() {
        return false;
    }
    getColumnType(prop, platform) {
        return platform.getBlobDeclarationSQL();
    }
}
exports.Uint8ArrayType = Uint8ArrayType;
