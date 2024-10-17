"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsParams = exports.ProductStatusEnum = void 0;
var utils_1 = require("@medusajs/utils");
var zod_1 = require("zod");
var validators_1 = require("../../validators");
var common_1 = require("../common");
exports.ProductStatusEnum = zod_1.z.nativeEnum(utils_1.ProductStatus);
exports.GetProductsParams = zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    title: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_giftcard: common_1.OptionalBooleanValidator,
    category_id: zod_1.z.string().array().optional(),
    sales_channel_id: zod_1.z.string().array().optional(),
    collection_id: zod_1.z.string().array().optional(),
    tags: zod_1.z.string().array().optional(),
    type_id: zod_1.z.string().array().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
});
//# sourceMappingURL=index.js.map