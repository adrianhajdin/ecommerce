"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextType = void 0;
const Type_1 = require("./Type");
class TextType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getTextTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'string';
    }
    ensureComparable() {
        return false;
    }
}
exports.TextType = TextType;
