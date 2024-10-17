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
exports.listRuleValueTransformQueryConfig = exports.listRuleTransformQueryConfig = exports.retrieveRuleTransformQueryConfig = exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminPromotionRuleFields = exports.defaultAdminPromotionFields = void 0;
exports.defaultAdminPromotionFields = [
    "id",
    "code",
    "is_automatic",
    "type",
    "created_at",
    "updated_at",
    "deleted_at",
    "*campaign",
    "*campaign.budget",
    "*application_method",
    "*application_method.buy_rules",
    "application_method.buy_rules.values.value",
    "*application_method.target_rules",
    "application_method.target_rules.values.value",
    "rules.id",
    "rules.attribute",
    "rules.operator",
    "rules.values.value",
];
exports.defaultAdminPromotionRuleFields = [
    "id",
    "description",
    "attribute",
    "operator",
    "values.value",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminPromotionFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
exports.retrieveRuleTransformQueryConfig = {
    defaults: exports.defaultAdminPromotionRuleFields,
    isList: false,
};
exports.listRuleTransformQueryConfig = __assign(__assign({}, exports.retrieveRuleTransformQueryConfig), { isList: true });
exports.listRuleValueTransformQueryConfig = {
    defaults: [],
    allowed: [],
    isList: true,
};
//# sourceMappingURL=query-config.js.map