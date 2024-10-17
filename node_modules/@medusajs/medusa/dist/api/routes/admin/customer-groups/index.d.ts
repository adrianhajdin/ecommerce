import { CustomerGroup } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCustomerGroupsRes
 * type: object
 * description: "The customer group's details."
 * required:
 *   - customer_group
 * properties:
 *   customer_group:
 *     description: Customer group details.
 *     $ref: "#/components/schemas/CustomerGroup"
 */
export type AdminCustomerGroupsRes = {
    customer_group: CustomerGroup;
};
/**
 * @schema AdminCustomerGroupsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted customer group.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: customer_group
 *   deleted:
 *     type: boolean
 *     description: Whether the customer group was deleted successfully or not.
 *     default: true
 */
export type AdminCustomerGroupsDeleteRes = DeleteResponse;
/**
 * @schema AdminCustomerGroupsListRes
 * type: object
 * required:
 *   - customer_groups
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   customer_groups:
 *     type: array
 *     description: An array of customer group details.
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of customer groups skipped when retrieving the customer groups.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminCustomerGroupsListRes = PaginatedResponse & {
    customer_groups: CustomerGroup[];
};
export declare const defaultAdminCustomerGroupsRelations: never[];
export * from "./add-customers-batch";
export * from "./create-customer-group";
export * from "./delete-customers-batch";
export * from "./get-customer-group";
export * from "./list-customer-groups";
export * from "./update-customer-group";
