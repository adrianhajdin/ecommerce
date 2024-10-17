"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateProductCategory = exports.AdminCreateProductCategory = exports.AdminProductCategoriesParams = exports.AdminProductCategoryParams = void 0;
var zod_1 = require("zod");
var is_boolean_1 = require("../../../utils/validators/is-boolean");
var validators_1 = require("../../utils/validators");
exports.AdminProductCategoryParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    include_ancestors_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    include_descendants_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
}));
exports.AdminProductCategoriesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    handle: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    parent_category_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    include_ancestors_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    include_descendants_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    is_internal: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    is_active: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminProductCategoriesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminProductCategoriesParams.array(); }).optional(),
}));
exports.AdminCreateProductCategory = zod_1.z
    .object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_internal: zod_1.z.boolean().optional(),
    is_active: zod_1.z.boolean().optional(),
    parent_category_id: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    rank: zod_1.z.number().nonnegative().optional(),
})
    .strict();
exports.AdminUpdateProductCategory = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_internal: zod_1.z.boolean().optional(),
    is_active: zod_1.z.boolean().optional(),
    parent_category_id: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    rank: zod_1.z.number().nonnegative().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map