"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetProductsParams = exports.StoreGetProductVariantsParams = exports.StoreGetProductParams = void 0;
var zod_1 = require("zod");
var common_validators_1 = require("../../utils/common-validators");
var validators_1 = require("../../utils/validators");
exports.StoreGetProductParams = (0, validators_1.createSelectParams)();
exports.StoreGetProductVariantsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: common_validators_1.ProductStatusEnum.array().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.StoreGetProductsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.StoreGetProductsParams.array(); }).optional(),
}));
exports.StoreGetProductsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z
    .object({
    region_id: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    variants: exports.StoreGetProductVariantsParams.optional(),
    $and: zod_1.z.lazy(function () { return exports.StoreGetProductsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.StoreGetProductsParams.array(); }).optional(),
})
    .merge(common_validators_1.GetProductsParams)
    .strict());
//# sourceMappingURL=validators.js.map