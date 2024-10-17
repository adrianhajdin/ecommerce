import { PaginatedResponse } from "../../../../types/common";
import { PricedVariant } from "../../../../types/pricing";
import { ProductVariant } from "../../../../models/product-variant";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminVariantRelations: string[];
export declare const defaultAdminVariantFields: (keyof ProductVariant)[];
/**
 * @schema AdminVariantsListRes
 * type: object
 * description: "The list of variants with pagination fields."
 * x-expanded-relations:
 *   field: variants
 *   relations:
 *     - options
 *     - prices
 *     - product
 *   totals:
 *     - purchasable
 * required:
 *   - variants
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   variants:
 *     type: array
 *     description: "An array of product variant details."
 *     items:
 *       $ref: "#/components/schemas/PricedVariant"
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
export type AdminVariantsListRes = PaginatedResponse & {
    variants: PricedVariant[];
};
/**
 * @schema AdminVariantsRes
 * type: object
 * description: "The product variant's details."
 * x-expanded-relations:
 *   field: variant
 *   relations:
 *     - options
 *     - prices
 *     - product
 * required:
 *   - variant
 * properties:
 *   variant:
 *     description: "Product variant's details."
 *     $ref: "#/components/schemas/PricedVariant"
 */
export type AdminVariantsRes = {
    variant: PricedVariant;
};
export * from "./list-variants";
export * from "./get-variant";
export * from "./get-inventory";
