"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalType = void 0;
const Type_1 = require("./Type");
/**
 * Type that maps an SQL DECIMAL to a JS string.
 */
class DecimalType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getDecimalTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'string';
    }
}
exports.DecimalType = DecimalType;
