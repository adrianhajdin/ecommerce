"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateTaxRate = exports.AdminCreateTaxRate = exports.AdminCreateTaxRateRule = exports.AdminGetTaxRatesParams = exports.AdminGetTaxRateParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetTaxRateParams = (0, validators_1.createSelectParams)();
exports.AdminGetTaxRatesParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    tax_region_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    is_default: zod_1.z.union([zod_1.z.literal("true"), zod_1.z.literal("false")]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetTaxRatesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetTaxRatesParams.array(); }).optional(),
}));
exports.AdminCreateTaxRateRule = zod_1.z.object({
    reference: zod_1.z.string(),
    reference_id: zod_1.z.string(),
});
exports.AdminCreateTaxRate = zod_1.z.object({
    rate: zod_1.z.number().optional(),
    code: zod_1.z.string().optional(),
    rules: zod_1.z.array(exports.AdminCreateTaxRateRule).optional(),
    name: zod_1.z.string(),
    is_default: zod_1.z.boolean().optional(),
    is_combinable: zod_1.z.boolean().optional(),
    tax_region_id: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateTaxRate = zod_1.z.object({
    rate: zod_1.z.number().optional(),
    code: zod_1.z.string().optional(),
    rules: zod_1.z.array(exports.AdminCreateTaxRateRule).optional(),
    name: zod_1.z.string().optional(),
    is_default: zod_1.z.boolean().optional(),
    is_combinable: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
//# sourceMappingURL=validators.js.map