"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyIntType = void 0;
const Type_1 = require("./Type");
class TinyIntType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getTinyIntTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'number';
    }
    ensureComparable() {
        return false;
    }
}
exports.TinyIntType = TinyIntType;
