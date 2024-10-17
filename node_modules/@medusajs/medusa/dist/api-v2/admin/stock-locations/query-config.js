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
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminStockLocationFields = void 0;
exports.defaultAdminStockLocationFields = [
    "id",
    "name",
    "metadata",
    "created_at",
    "updated_at",
    "address.id",
    "address.address_1",
    "address.address_2",
    "address.city",
    "address.country_code",
    "address.phone",
    "address.province",
    "address.postal_code",
    "address.metadata",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminStockLocationFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map