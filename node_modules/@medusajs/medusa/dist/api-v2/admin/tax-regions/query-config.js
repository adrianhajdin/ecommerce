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
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaults = void 0;
exports.defaults = [
    "id",
    "country_code",
    "province_code",
    "parent_id",
    "provider_id",
    "created_by",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "*children",
    "*children.tax_rates",
    "*children.tax_rates.rules",
    "*parent",
    "*tax_rates",
    "*tax_rates.rules",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaults,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map