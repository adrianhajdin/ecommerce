"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductTypesTransformQueryConfig = exports.retrieveProductTypeTransformQueryConfig = exports.defaultAdminProductTypeFields = void 0;
exports.defaultAdminProductTypeFields = [
    "id",
    "value",
    "created_at",
    "updated_at",
];
exports.retrieveProductTypeTransformQueryConfig = {
    defaults: exports.defaultAdminProductTypeFields,
    isList: false,
};
exports.listProductTypesTransformQueryConfig = __assign(__assign({}, exports.retrieveProductTypeTransformQueryConfig), { defaultLimit: 20, isList: true });
//# sourceMappingURL=query-config.js.map