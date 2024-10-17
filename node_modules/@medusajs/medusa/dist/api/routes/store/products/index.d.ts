import "reflect-metadata";
import { FlagRouter } from "@medusajs/utils";
import { Product } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import { PricedProduct } from "../../../../types/pricing";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultStoreProductsRelations: string[];
export declare const defaultStoreProductsFields: (keyof Product)[];
export declare const allowedStoreProductsFields: string[];
export declare const allowedStoreProductsRelations: string[];
/**
 * This is temporary.
 */
export declare const defaultStoreProductRemoteQueryObject: {
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
export * from "./list-products";
export * from "./search";
/**
 * @schema StoreProductsRes
 * type: object
 * x-expanded-relations:
 *   field: product
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - options.values
 *     - tags
 *     - type
 *     - variants
 *     - variants.options
 *     - variants.prices
 *   totals:
 *     - variants.purchasable
 * required:
 *   - product
 * properties:
 *   product:
 *     description: "Product details."
 *     $ref: "#/components/schemas/PricedProduct"
 */
export type StoreProductsRes = {
    product: PricedProduct;
};
/**
 * @schema StorePostSearchRes
 * description: "The list of search results."
 * allOf:
 *   - type: object
 *     required:
 *       - hits
 *     properties:
 *       hits:
 *         description: "Array of search results. The format of the items depends on the search engine installed on the Medusa backend."
 *         type: array
 *   - type: object
 */
export type StorePostSearchRes = {
    hits: unknown[];
} & Record<string, unknown>;
/**
 * @schema StoreProductsListRes
 * type: object
 * description: "The list of products with pagination fields."
 * x-expanded-relations:
 *   field: products
 *   relations:
 *     - collection
 *     - images
 *     - options
 *     - options.values
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
 *     description: "An array of products details."
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
export type StoreProductsListRes = PaginatedResponse & {
    products: PricedProduct[];
};
