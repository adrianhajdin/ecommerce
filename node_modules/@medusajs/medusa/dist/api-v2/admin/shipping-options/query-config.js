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
exports.listRuleTransformQueryConfig = exports.retrieveRuleTransformQueryConfig = exports.defaultAdminShippingOptionRuleFields = exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminShippingOptionFields = void 0;
exports.defaultAdminShippingOptionFields = [
    "id",
    "name",
    "price_type",
    "data",
    "metadata",
    "created_at",
    "updated_at",
    "*rules",
    "*type",
    "*prices",
    "*service_zone",
    "*shipping_profile",
    "*provider",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminShippingOptionFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
exports.defaultAdminShippingOptionRuleFields = [
    "id",
    "description",
    "attribute",
    "operator",
    "values.value",
];
exports.retrieveRuleTransformQueryConfig = {
    defaults: exports.defaultAdminShippingOptionRuleFields,
    isList: false,
};
exports.listRuleTransformQueryConfig = __assign(__assign({}, exports.retrieveRuleTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map