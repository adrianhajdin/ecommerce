"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatType = void 0;
const Type_1 = require("./Type");
class FloatType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getFloatDeclarationSQL();
    }
    compareAsType() {
        return 'number';
    }
    ensureComparable() {
        return false;
    }
}
exports.FloatType = FloatType;
