"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallIntType = void 0;
const Type_1 = require("./Type");
class SmallIntType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getSmallIntTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'number';
    }
    ensureComparable() {
        return false;
    }
}
exports.SmallIntType = SmallIntType;
