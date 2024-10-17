import { Customer } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCustomersRes
 * type: object
 * description: "The customer's details."
 * x-expanded-relations:
 *   field: customer
 *   relations:
 *     - orders
 *     - shipping_addresses
 * required:
 *   - customer
 * properties:
 *   customer:
 *     description: "Customer details."
 *     $ref: "#/components/schemas/Customer"
 */
export type AdminCustomersRes = {
    customer: Customer;
};
/**
 * @schema AdminCustomersListRes
 * description: The list of customers with pagination fields.
 * type: object
 * required:
 *   - customers
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   customers:
 *     type: array
 *     description: "An array of customer details."
 *     items:
 *       $ref: "#/components/schemas/Customer"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of customers skipped when retrieving the customers.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminCustomersListRes = PaginatedResponse & {
    customers: Customer[];
};
export declare const defaultAdminCustomersRelations: string[];
export * from "./create-customer";
export * from "./get-customer";
export * from "./list-customers";
export * from "./update-customer";
