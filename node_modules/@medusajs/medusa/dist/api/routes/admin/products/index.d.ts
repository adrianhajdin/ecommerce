import "reflect-metadata";
import { Product, ProductTag, ProductType, ProductVariant } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import { FlagRouter } from "@medusajs/utils";
import { PricedProduct } from "../../../../types/pricing";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultAdminProductRelations: string[];
export declare const defaultAdminProductFields: (keyof Product)[];
export declare const defaultAdminGetProductsVariantsFields: string[];
export declare const defaultAdminGetProductsVariantsRelations: string[];
/**
 * This is temporary.
 */
export declare const defaultAdminProductRemoteQueryObject: {
    fields: (keyof Product)[];
    images: {
        fields: string[];
    };
    tags: {
        fields: string[];
    };
    type: {
        fields: string[];
    };
    collection: {
        fields: string[];
    };
    categories: {
        fields: string[];
    };
    options: {
        fields: string[];
        values: {
            fields: string[];
        };
    };
    variants: {
        fields: string[];
        options: {
            fields: string[];
        };
    };
    profile: {
        fields: string[];
    };
    sales_channels: {
        fields: string[];
    };
};
/**
 * @schema AdminProductsDeleteOptionRes
 * type: object
 * description: "The details of deleting a product's option."
 * x-expanded-relations:
 *   field: product
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - tags
 *     - type
 *     - variants
 *     - variants.options
 *     - variants.prices
 * required:
 *   - option_id
 *   - object
 *   - deleted
 *   - product
 * properties:
 *   option_id:
 *     type: string
 *     description: The ID of the deleted Product Option
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: option
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 *   product:
 *     description: Product details.
 *     $ref: "#/components/schemas/PricedProduct"
 */
export type AdminProductsDeleteOptionRes = {
    option_id: string;
    object: "option";
    deleted: boolean;
    product: Product;
};
/**
 * @schema AdminProductsDeleteVariantRes
 * type: object
 * description: "The details of deleting a product's variant."
 * x-expanded-relations:
 *   field: product
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - tags
 *     - type
 *     - variants
 *     - variants.options
 *     - variants.prices
 * required:
 *   - variant_id
 *   - object
 *   - deleted
 *   - product
 * properties:
 *   variant_id:
 *     type: string
 *     description: The ID of the deleted Product Variant.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-variant
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 *   product:
 *     description: Product details.
 *     $ref: "#/components/schemas/PricedProduct"
 */
export type AdminProductsDeleteVariantRes = {
    variant_id: string;
    object: "product-variant";
    deleted: boolean;
    product: Product;
};
/**
 * @schema AdminProductsDeleteRes
 * type: object
 * description: "The details of deleting a product."
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Product.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminProductsDeleteRes = {
    id: string;
    object: "product";
    deleted: boolean;
};
/**
 * @schema AdminProductsListRes
 * type: object
 * description: "The list of products with pagination fields."
 * x-expanded-relations:
 *   field: products
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - tags
 *     - type
 *     - variants
 *     - variants.options
 *     - variants.prices
 *   totals:
 *     - variants.purchasable
 * required:
 *   - products
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   products:
 *     type: array
 *     description: An array of products details.
 *     items:
 *       $ref: "#/components/schemas/PricedProduct"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of products skipped when retrieving the products.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminProductsListRes = PaginatedResponse & {
    products: (PricedProduct | Product)[];
};
/**
 * @schema AdminProductsListVariantsRes
 * type: object
 * required:
 *   - variants
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   variants:
 *     type: array
 *     description: An array of product variants details.
 *     items:
 *       $ref: "#/components/schemas/ProductVariant"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of product variants skipped when retrieving the product variants.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminProductsListVariantsRes = PaginatedResponse & {
    variants: ProductVariant[];
};
/**
 * @schema AdminProductsListTypesRes
 * type: object
 * required:
 *   - types
 * properties:
 *   types:
 *     type: array
 *     description: An array of product types details.
 *     items:
 *       $ref: "#/components/schemas/ProductType"
 */
export type AdminProductsListTypesRes = {
    types: ProductType[];
};
/**
 * @schema AdminProductsListTagsRes
 * type: object
 * description: "The usage details of product tags."
 * required:
 *   - tags
 * properties:
 *   tags:
 *     description: An array of product tags details.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *         - usage_count
 *         - value
 *       properties:
 *         id:
 *           description: The ID of the tag.
 *           type: string
 *         usage_count:
 *           description: The number of products that use this tag.
 *           type: string
 *         value:
 *           description: The value of the tag.
 *           type: string
 */
export type AdminProductsListTagsRes = {
    tags: Array<Pick<ProductTag, "id" | "value"> & {
        usage_count: number;
    }>;
};
/**
 * @schema AdminProductsRes
 * type: object
 * description: "The product's details."
 * x-expanded-relations:
 *   field: product
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - tags
 *     - type
 *     - variants
 *     - variants.options
 *     - variants.prices
 * required:
 *   - product
 * properties:
 *   product:
 *     description: Product details.
 *     $ref: "#/components/schemas/PricedProduct"
 */
export type AdminProductsRes = {
    product: Product;
};
export * from "./add-option";
export * from "./create-product";
export * from "./create-variant";
export * from "./delete-option";
export * from "./delete-product";
export * from "./delete-variant";
export * from "./get-product";
export * from "./list-products";
export * from "./list-tag-usage-count";
export * from "./list-types";
export * from "./list-variants";
export * from "./set-metadata";
export * from "./update-option";
export * from "./update-product";
export * from "./update-variant";
