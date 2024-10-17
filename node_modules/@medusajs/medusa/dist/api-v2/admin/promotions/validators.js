"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdatePromotion = exports.AdminCreatePromotion = exports.AdminCreateCampaign = exports.AdminUpdateApplicationMethod = exports.AdminCreateApplicationMethod = exports.AdminUpdatePromotionRule = exports.AdminCreatePromotionRule = exports.AdminGetPromotionsRuleValueParams = exports.AdminGetPromotionRuleTypeParams = exports.AdminGetPromotionRuleParams = exports.AdminGetPromotionsParams = exports.AdminGetPromotionParams = void 0;
var utils_1 = require("@medusajs/utils");
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetPromotionParams = (0, validators_1.createSelectParams)();
exports.AdminGetPromotionsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetPromotionsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetPromotionsParams.array(); }).optional(),
}));
exports.AdminGetPromotionRuleParams = (0, validators_1.createSelectParams)();
exports.AdminGetPromotionRuleTypeParams = (0, validators_1.createSelectParams)();
exports.AdminGetPromotionsRuleValueParams = (0, validators_1.createFindParams)({
    limit: 100,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
}));
exports.AdminCreatePromotionRule = zod_1.z
    .object({
    operator: zod_1.z.nativeEnum(utils_1.PromotionRuleOperator),
    description: zod_1.z.string().optional(),
    attribute: zod_1.z.string(),
    values: zod_1.z.array(zod_1.z.string()),
})
    .strict();
exports.AdminUpdatePromotionRule = zod_1.z
    .object({
    id: zod_1.z.string(),
    operator: zod_1.z.nativeEnum(utils_1.PromotionRuleOperator).optional(),
    description: zod_1.z.string().optional(),
    attribute: zod_1.z.string().optional(),
    values: zod_1.z.array(zod_1.z.string()).optional(),
})
    .strict();
exports.AdminCreateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().optional(),
    value: zod_1.z.number(),
    max_quantity: zod_1.z.number().optional(),
    type: zod_1.z.nativeEnum(utils_1.ApplicationMethodType),
    target_type: zod_1.z.nativeEnum(utils_1.ApplicationMethodTargetType),
    allocation: zod_1.z.nativeEnum(utils_1.ApplicationMethodAllocation).optional(),
    target_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    buy_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    apply_to_quantity: zod_1.z.number().optional(),
    buy_rules_min_quantity: zod_1.z.number().optional(),
})
    .strict();
exports.AdminUpdateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().optional(),
    value: zod_1.z.string().optional(),
    max_quantity: zod_1.z.number().optional(),
    type: zod_1.z.nativeEnum(utils_1.ApplicationMethodType).optional(),
    target_type: zod_1.z.nativeEnum(utils_1.ApplicationMethodTargetType).optional(),
    allocation: zod_1.z.nativeEnum(utils_1.ApplicationMethodAllocation).optional(),
    target_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    buy_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    apply_to_quantity: zod_1.z.number().optional(),
    buy_rules_min_quantity: zod_1.z.number().optional(),
})
    .strict();
var promoRefinement = function (promo) {
    var _a, _b;
    if (promo.campaign && promo.campaign_id) {
        return false;
    }
    if (promo.type === utils_1.PromotionType.BUYGET) {
        var appMethod = promo.application_method;
        return (((_b = (_a = appMethod === null || appMethod === void 0 ? void 0 : appMethod.buy_rules) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 &&
            (appMethod === null || appMethod === void 0 ? void 0 : appMethod.apply_to_quantity) !== undefined &&
            (appMethod === null || appMethod === void 0 ? void 0 : appMethod.buy_rules_min_quantity) !== undefined);
    }
    return true;
};
// Ideally we don't allow for creation of campaigns through promotions, it should be the other way around.
var CreateCampaignBudget = zod_1.z.object({
    type: zod_1.z.nativeEnum(utils_1.CampaignBudgetType),
    limit: zod_1.z.number(),
});
exports.AdminCreateCampaign = zod_1.z.object({
    name: zod_1.z.string(),
    campaign_identifier: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    budget: CreateCampaignBudget.optional(),
    starts_at: zod_1.z.coerce.date().optional(),
    ends_at: zod_1.z.coerce.date().optional(),
    promotions: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional(),
});
exports.AdminCreatePromotion = zod_1.z
    .object({
    code: zod_1.z.string(),
    is_automatic: zod_1.z.boolean().optional(),
    type: zod_1.z.nativeEnum(utils_1.PromotionType),
    campaign_id: zod_1.z.string().optional(),
    campaign: exports.AdminCreateCampaign.optional(),
    application_method: exports.AdminCreateApplicationMethod,
    rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
})
    .strict()
    // In the case of a buyget promotion, we require at least one buy rule and quantities
    .refine(promoRefinement, {
    message: "Buyget promotions require at least one buy rule and quantities to be defined",
});
exports.AdminUpdatePromotion = zod_1.z
    .object({
    code: zod_1.z.string().optional(),
    is_automatic: zod_1.z.boolean().optional(),
    type: zod_1.z.nativeEnum(utils_1.PromotionType).optional(),
    campaign_id: zod_1.z.string().optional(),
    campaign: exports.AdminCreateCampaign.optional(),
    application_method: exports.AdminUpdateApplicationMethod.optional(),
    rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
})
    .strict()
    // In the case of a buyget promotion, we require at least one buy rule and quantities
    .refine(promoRefinement, {
    message: "Buyget promotions require at least one buy rule and quantities to be defined",
});
//# sourceMappingURL=validators.js.map