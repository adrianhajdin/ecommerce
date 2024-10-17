import { Currency } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCurrenciesListRes
 * type: object
 * description: List of currencies with pagination fields.
 * required:
 *   - currencies
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   currencies:
 *     type: array
 *     description: An array of currency details.
 *     items:
 *       $ref: "#/components/schemas/Currency"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of currencies skipped when retrieving the currencies.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminCurrenciesListRes = PaginatedResponse & {
    currencies: Currency[];
};
/**
 * @schema AdminCurrenciesRes
 * type: object
 * description: A currency's details.
 * required:
 *   - currency
 * properties:
 *   currency:
 *     description: Currency details.
 *     $ref: "#/components/schemas/Currency"
 */
export type AdminCurrenciesRes = {
    currency: Currency;
};
export * from "./list-currencies";
export * from "./update-currency";
