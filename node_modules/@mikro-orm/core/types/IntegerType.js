"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerType = void 0;
const Type_1 = require("./Type");
class IntegerType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getIntegerTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'number';
    }
    ensureComparable() {
        return false;
    }
}
exports.IntegerType = IntegerType;
