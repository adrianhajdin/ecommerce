import { PricedVariant } from "../../../../types/pricing";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreVariantRelations: string[];
export declare const allowedStoreVariantRelations: string[];
/**
 * @schema StoreVariantsRes
 * type: object
 * description: "The product variant's details."
 * x-expanded-relations:
 *   field: variant
 *   relations:
 *     - prices
 *     - options
 *     - product
 *   totals:
 *     - purchasable
 * required:
 *   - variant
 * properties:
 *   variant:
 *     description: "Product variant description."
 *     $ref: "#/components/schemas/PricedVariant"
 */
export type StoreVariantsRes = {
    variant: PricedVariant;
};
/**
 * @schema StoreVariantsListRes
 * type: object
 * description: "The list of product variants."
 * x-expanded-relations:
 *   field: variants
 *   relations:
 *     - prices
 *     - options
 *     - product
 *   totals:
 *     - purchasable
 * required:
 *   - variants
 * properties:
 *   variants:
 *     type: array
 *     description: "An array of product variant descriptions."
 *     items:
 *       $ref: "#/components/schemas/PricedVariant"
 */
export type StoreVariantsListRes = {
    variants: PricedVariant[];
};
export * from "./get-variant";
export * from "./list-variants";
