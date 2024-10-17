"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanType = void 0;
const Type_1 = require("./Type");
class BooleanType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getBooleanTypeDeclarationSQL();
    }
    compareAsType() {
        return 'boolean';
    }
    ensureComparable() {
        return false;
    }
}
exports.BooleanType = BooleanType;
