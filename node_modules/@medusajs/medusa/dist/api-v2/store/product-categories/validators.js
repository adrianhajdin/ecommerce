"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProductCategoriesParams = exports.StoreProductCategoryParams = void 0;
var zod_1 = require("zod");
var is_boolean_1 = require("../../../utils/validators/is-boolean");
var validators_1 = require("../../utils/validators");
exports.StoreProductCategoryParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    include_ancestors_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
    include_descendants_tree: zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional()),
}));
exports.StoreProductCategoriesParams = (0, validators_1.createFindParams)({
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
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.StoreProductCategoriesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.StoreProductCategoriesParams.array(); }).optional(),
}));
//# sourceMappingURL=validators.js.map