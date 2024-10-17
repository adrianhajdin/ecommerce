"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBatchUpdateProduct = exports.AdminUpdateProduct = exports.AdminCreateProduct = exports.AdminCreateProductProductCategory = exports.AdminBatchUpdateProductVariant = exports.AdminUpdateProductVariant = exports.AdminCreateProductVariant = exports.AdminCreateProductType = exports.AdminUpdateVariantPrice = exports.AdminCreateVariantPrice = exports.AdminUpdateProductOption = exports.AdminCreateProductOption = exports.AdminUpdateProductTag = exports.AdminCreateProductTag = exports.AdminGetProductOptionsParams = exports.AdminGetProductsParams = exports.AdminGetProductVariantsParams = exports.AdminGetProductOptionParams = exports.AdminGetProductVariantParams = exports.AdminGetProductParams = void 0;
var utils_1 = require("@medusajs/utils");
var zod_1 = require("zod");
var common_validators_1 = require("../../utils/common-validators");
var validators_1 = require("../../utils/validators");
var statusEnum = zod_1.z.nativeEnum(utils_1.ProductStatus);
exports.AdminGetProductParams = (0, validators_1.createSelectParams)();
exports.AdminGetProductVariantParams = (0, validators_1.createSelectParams)();
exports.AdminGetProductOptionParams = (0, validators_1.createSelectParams)();
exports.AdminGetProductVariantsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    manage_inventory: zod_1.z.boolean().optional(),
    allow_backorder: zod_1.z.boolean().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
}));
exports.AdminGetProductsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z
    .object({
    variants: exports.AdminGetProductVariantsParams.optional(),
    price_list_id: zod_1.z.string().array().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
})
    .merge(common_validators_1.GetProductsParams));
exports.AdminGetProductOptionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    title: zod_1.z.string().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetProductsParams.array(); }).optional(),
}));
exports.AdminCreateProductTag = zod_1.z.object({
    value: zod_1.z.string().optional(),
});
exports.AdminUpdateProductTag = zod_1.z.object({
    id: zod_1.z.string().optional(),
    value: zod_1.z.string().optional(),
});
exports.AdminCreateProductOption = zod_1.z.object({
    title: zod_1.z.string(),
    values: zod_1.z.array(zod_1.z.string()),
});
exports.AdminUpdateProductOption = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    values: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.AdminCreateVariantPrice = zod_1.z.object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number(),
    min_quantity: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().optional(),
});
exports.AdminUpdateVariantPrice = zod_1.z.object({
    id: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    min_quantity: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().optional(),
});
exports.AdminCreateProductType = zod_1.z.object({
    value: zod_1.z.string(),
});
exports.AdminCreateProductVariant = zod_1.z.object({
    title: zod_1.z.string(),
    sku: zod_1.z.string().optional(),
    ean: zod_1.z.string().optional(),
    upc: zod_1.z.string().optional(),
    barcode: zod_1.z.string().optional(),
    hs_code: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    inventory_quantity: zod_1.z.number().optional().default(0),
    allow_backorder: zod_1.z.boolean().optional().default(false),
    manage_inventory: zod_1.z.boolean().optional().default(true),
    variant_rank: zod_1.z.number().optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    origin_country: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    prices: zod_1.z.array(exports.AdminCreateVariantPrice),
    options: zod_1.z.record(zod_1.z.string()).optional(),
});
exports.AdminUpdateProductVariant = exports.AdminCreateProductVariant.extend({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    prices: zod_1.z.array(exports.AdminUpdateVariantPrice).optional(),
    inventory_quantity: zod_1.z.number().optional(),
    allow_backorder: zod_1.z.boolean().optional(),
    manage_inventory: zod_1.z.boolean().optional(),
}).strict();
exports.AdminBatchUpdateProductVariant = exports.AdminUpdateProductVariant.extend({
    id: zod_1.z.string(),
});
exports.AdminCreateProductProductCategory = zod_1.z.object({
    id: zod_1.z.string(),
});
exports.AdminCreateProduct = zod_1.z
    .object({
    title: zod_1.z.string(),
    subtitle: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    is_giftcard: zod_1.z.boolean().optional().default(false),
    discountable: zod_1.z.boolean().optional().default(true),
    images: zod_1.z.array(zod_1.z.object({ url: zod_1.z.string() })).optional(),
    thumbnail: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    status: statusEnum.optional().default(utils_1.ProductStatus.DRAFT),
    type_id: zod_1.z.string().nullable().optional(),
    collection_id: zod_1.z.string().nullable().optional(),
    categories: zod_1.z.array(exports.AdminCreateProductProductCategory).optional(),
    tags: zod_1.z.array(exports.AdminUpdateProductTag).optional(),
    options: zod_1.z.array(exports.AdminCreateProductOption).optional(),
    variants: zod_1.z.array(exports.AdminCreateProductVariant).optional(),
    sales_channels: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    hs_code: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    origin_country: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
})
    .strict();
exports.AdminUpdateProduct = exports.AdminCreateProduct.omit({ is_giftcard: true })
    .extend({
    title: zod_1.z.string().optional(),
    discountable: zod_1.z.boolean().optional(),
    options: zod_1.z.array(exports.AdminUpdateProductOption).optional(),
    variants: zod_1.z.array(exports.AdminUpdateProductVariant).optional(),
    status: statusEnum.optional(),
})
    .strict();
exports.AdminBatchUpdateProduct = exports.AdminUpdateProduct.extend({
    id: zod_1.z.string(),
});
// TODO: Handle in create and update product once ready
// @IsOptional()
// @Type(() => ProductProductCategoryReq)
// @ValidateNested({ each: true })
// @IsArray()
// categories?: ProductProductCategoryReq[]
//# sourceMappingURL=validators.js.map