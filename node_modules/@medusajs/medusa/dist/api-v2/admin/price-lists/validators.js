"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdatePriceList = exports.AdminCreatePriceList = exports.AdminUpdatePriceListPrice = exports.AdminCreatePriceListPrice = exports.AdminGetPriceListParams = exports.AdminGetPriceListsParams = exports.AdminGetPriceListPricesParams = void 0;
var types_1 = require("@medusajs/types");
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetPriceListPricesParams = (0, validators_1.createSelectParams)();
exports.AdminGetPriceListsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    starts_at: (0, validators_1.createOperatorMap)().optional(),
    ends_at: (0, validators_1.createOperatorMap)().optional(),
    status: zod_1.z.array(zod_1.z.nativeEnum(types_1.PriceListStatus)).optional(),
    rules_count: zod_1.z.array(zod_1.z.number()).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetPriceListsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetPriceListsParams.array(); }).optional(),
}));
exports.AdminGetPriceListParams = (0, validators_1.createSelectParams)();
exports.AdminCreatePriceListPrice = zod_1.z.object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number(),
    variant_id: zod_1.z.string(),
    min_quantity: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
exports.AdminUpdatePriceListPrice = zod_1.z.object({
    id: zod_1.z.string(),
    currency_code: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    variant_id: zod_1.z.string(),
    min_quantity: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
exports.AdminCreatePriceList = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    starts_at: zod_1.z.string().optional(),
    ends_at: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(types_1.PriceListStatus).optional(),
    type: zod_1.z.nativeEnum(types_1.PriceListType).optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    prices: zod_1.z.array(exports.AdminCreatePriceListPrice).optional(),
});
exports.AdminUpdatePriceList = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    starts_at: zod_1.z.string().optional(),
    ends_at: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(types_1.PriceListStatus).optional(),
    type: zod_1.z.nativeEnum(types_1.PriceListType).optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
});
//# sourceMappingURL=validators.js.map