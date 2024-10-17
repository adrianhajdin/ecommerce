"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateProductType = exports.AdminCreateProductType = exports.AdminGetProductTypesParams = exports.AdminGetProductTypeParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetProductTypeParams = (0, validators_1.createSelectParams)();
exports.AdminGetProductTypesParams = (0, validators_1.createFindParams)({
    limit: 10,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    // TODO: To be added in next iteration
    // discount_condition_id: z.string().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetProductTypesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetProductTypesParams.array(); }).optional(),
}));
exports.AdminCreateProductType = zod_1.z
    .object({
    value: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
exports.AdminUpdateProductType = zod_1.z
    .object({
    value: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map