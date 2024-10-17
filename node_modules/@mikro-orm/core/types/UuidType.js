"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidType = void 0;
const Type_1 = require("./Type");
class UuidType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getUuidTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'string';
    }
}
exports.UuidType = UuidType;
