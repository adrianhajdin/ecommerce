"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdatePricingRuleType = exports.AdminCreatePricingRuleType = exports.AdminGetPricingRuleTypesParams = exports.AdminGetPricingRuleTypeParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetPricingRuleTypeParams = (0, validators_1.createSelectParams)();
exports.AdminGetPricingRuleTypesParams = (0, validators_1.createFindParams)({
    limit: 100,
    offset: 0,
}).merge(zod_1.z.object({
    rule_attribute: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetPricingRuleTypesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetPricingRuleTypesParams.array(); }).optional(),
}));
exports.AdminCreatePricingRuleType = zod_1.z
    .object({
    name: zod_1.z.string(),
    rule_attribute: zod_1.z.string(),
    default_priority: zod_1.z.number(),
})
    .strict();
exports.AdminUpdatePricingRuleType = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    rule_attribute: zod_1.z.string().optional(),
    default_priority: zod_1.z.number().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map