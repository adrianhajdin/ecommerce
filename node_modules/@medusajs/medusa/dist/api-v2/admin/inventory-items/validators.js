"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateInventoryItem = exports.AdminCreateInventoryItem = exports.AdminUpdateInventoryLocationLevel = exports.AdminCreateInventoryLocationLevel = exports.AdminGetInventoryLocationLevelsParams = exports.AdminGetInventoryLocationLevelParams = exports.AdminGetInventoryItemsParams = exports.AdminGetInventoryItemParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
var is_boolean_1 = require("../../../utils/validators/is-boolean");
exports.AdminGetInventoryItemParams = (0, validators_1.createSelectParams)();
exports.AdminGetInventoryItemsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    sku: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    origin_country: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    mid_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    hs_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    material: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    requires_shipping: zod_1.z
        .preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional())
        .optional(),
    weight: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    length: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    height: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    width: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetInventoryItemsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetInventoryItemsParams.array(); }).optional(),
}));
exports.AdminGetInventoryLocationLevelParams = (0, validators_1.createSelectParams)();
exports.AdminGetInventoryLocationLevelsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z
        .lazy(function () { return exports.AdminGetInventoryLocationLevelsParams.array(); })
        .optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetInventoryLocationLevelsParams.array(); }).optional(),
}));
exports.AdminCreateInventoryLocationLevel = zod_1.z
    .object({
    location_id: zod_1.z.string(),
    stocked_quantity: zod_1.z.number().min(0).optional(),
    incoming_quantity: zod_1.z.number().min(0).optional(),
})
    .strict();
exports.AdminUpdateInventoryLocationLevel = zod_1.z
    .object({
    stocked_quantity: zod_1.z.number().min(0).optional(),
    incoming_quantity: zod_1.z.number().min(0).optional(),
})
    .strict();
exports.AdminCreateInventoryItem = zod_1.z
    .object({
    sku: zod_1.z.string().optional(),
    hs_code: zod_1.z.string().optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    origin_country: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    requires_shipping: zod_1.z.boolean().optional(),
    thumbnail: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
exports.AdminUpdateInventoryItem = zod_1.z
    .object({
    sku: zod_1.z.string().optional(),
    hs_code: zod_1.z.string().optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    origin_country: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    requires_shipping: zod_1.z.boolean().optional(),
    thumbnail: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map