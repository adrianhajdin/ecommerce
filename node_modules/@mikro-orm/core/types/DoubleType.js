"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleType = void 0;
const Type_1 = require("./Type");
class DoubleType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getDoubleDeclarationSQL();
    }
    compareAsType() {
        return 'string';
    }
}
exports.DoubleType = DoubleType;
