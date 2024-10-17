import { TaxRate } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminTaxRatesRelations: never[];
export declare const defaultAdminTaxRatesFields: (keyof TaxRate)[];
/**
 * @schema AdminTaxRatesDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Shipping Option.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: tax-rate
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminTaxRatesDeleteRes = DeleteResponse;
/**
 * @schema AdminTaxRatesListRes
 * type: object
 * description: "The list of tax rates with pagination fields."
 * required:
 *   - tax_rates
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   tax_rates:
 *     type: array
 *     description: "An array of tax rate details."
 *     items:
 *       $ref: "#/components/schemas/TaxRate"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of tax rates to skip when retrieving the tax rates.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminTaxRatesListRes = PaginatedResponse & {
    tax_rates: TaxRate[];
};
/**
 * @schema AdminTaxRatesRes
 * type: object
 * description: "The tax rate's details."
 * required:
 *   - tax_rate
 * properties:
 *   tax_rate:
 *     description: "Tax rate details."
 *     $ref: "#/components/schemas/TaxRate"
 */
export type AdminTaxRatesRes = {
    tax_rate: TaxRate;
};
export * from "./list-tax-rates";
export * from "./get-tax-rate";
export * from "./remove-from-product-types";
export * from "./remove-from-products";
export * from "./remove-from-shipping-options";
export * from "./add-to-product-types";
export * from "./add-to-products";
export * from "./add-to-shipping-options";
export * from "./create-tax-rate";
export * from "./delete-tax-rate";
export * from "./update-tax-rate";
