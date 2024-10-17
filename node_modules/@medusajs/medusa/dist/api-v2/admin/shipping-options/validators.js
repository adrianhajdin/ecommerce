"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateShippingOption = exports.AdminCreateShippingOption = exports.AdminUpdateShippingOptionPriceWithRegion = exports.AdminUpdateShippingOptionPriceWithCurrency = exports.AdminCreateShippingOptionPriceWithRegion = exports.AdminCreateShippingOptionPriceWithCurrency = exports.AdminCreateShippingOptionTypeObject = exports.AdminUpdateShippingOptionRule = exports.AdminCreateShippingOptionRule = exports.AdminGetShippingOptionRuleParams = exports.AdminGetShippingOptionsParams = exports.AdminGetShippingOptionParams = void 0;
var utils_1 = require("@medusajs/utils");
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetShippingOptionParams = (0, validators_1.createSelectParams)();
exports.AdminGetShippingOptionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 20,
});
exports.AdminGetShippingOptionRuleParams = (0, validators_1.createSelectParams)();
exports.AdminCreateShippingOptionRule = zod_1.z
    .object({
    operator: zod_1.z.nativeEnum(utils_1.RuleOperator),
    attribute: zod_1.z.string(),
    value: zod_1.z.string().or(zod_1.z.array(zod_1.z.string())),
})
    .strict();
exports.AdminUpdateShippingOptionRule = zod_1.z
    .object({
    id: zod_1.z.string(),
    operator: zod_1.z.nativeEnum(utils_1.RuleOperator),
    attribute: zod_1.z.string(),
    value: zod_1.z.string().or(zod_1.z.array(zod_1.z.string())),
})
    .strict();
/**
 * SHIPPING OPTIONS
 */
exports.AdminCreateShippingOptionTypeObject = zod_1.z
    .object({
    label: zod_1.z.string(),
    description: zod_1.z.string(),
    code: zod_1.z.string(),
})
    .strict();
// eslint-disable-next-line max-len
exports.AdminCreateShippingOptionPriceWithCurrency = zod_1.z
    .object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number(),
})
    .strict();
exports.AdminCreateShippingOptionPriceWithRegion = zod_1.z
    .object({
    region_id: zod_1.z.string(),
    amount: zod_1.z.number(),
})
    .strict();
exports.AdminUpdateShippingOptionPriceWithCurrency = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
})
    .strict();
exports.AdminUpdateShippingOptionPriceWithRegion = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    region_id: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
})
    .strict();
exports.AdminCreateShippingOption = zod_1.z
    .object({
    name: zod_1.z.string(),
    service_zone_id: zod_1.z.string(),
    shipping_profile_id: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.unknown()).optional(),
    price_type: zod_1.z.nativeEnum(utils_1.ShippingOptionPriceType),
    provider_id: zod_1.z.string(),
    type: exports.AdminCreateShippingOptionTypeObject,
    prices: exports.AdminCreateShippingOptionPriceWithCurrency.or(exports.AdminCreateShippingOptionPriceWithRegion).array(),
    rules: exports.AdminCreateShippingOptionRule.array().optional(),
})
    .strict();
exports.AdminUpdateShippingOption = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    data: zod_1.z.record(zod_1.z.unknown()).optional(),
    price_type: zod_1.z.nativeEnum(utils_1.ShippingOptionPriceType).optional(),
    provider_id: zod_1.z.string().optional(),
    type: exports.AdminCreateShippingOptionTypeObject.optional(),
    prices: exports.AdminUpdateShippingOptionPriceWithCurrency.or(exports.AdminUpdateShippingOptionPriceWithRegion)
        .array()
        .optional(),
    rules: exports.AdminUpdateShippingOptionRule.or(exports.AdminCreateShippingOptionRule).array().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map