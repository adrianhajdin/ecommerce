import "reflect-metadata";
import { Discount } from "../../../..";
import { DiscountCondition } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminDiscountsFields: (keyof Discount)[];
export declare const defaultAdminDiscountsRelations: string[];
export declare const defaultAdminDiscountConditionFields: (keyof DiscountCondition)[];
export declare const defaultAdminDiscountConditionRelations: string[];
/**
 * @schema AdminDiscountsRes
 * type: object
 * description: "The discount's details."
 * x-expanded-relations:
 *   field: discount
 *   relations:
 *     - parent_discount
 *     - regions
 *     - rule
 *     - rule.conditions
 *   eager:
 *     - regions.fulfillment_providers
 *     - regions.payment_providers
 * required:
 *   - discount
 * properties:
 *   discount:
 *     description: "Discount details."
 *     $ref: "#/components/schemas/Discount"
 */
export type AdminDiscountsRes = {
    discount: Discount;
};
/**
 * @schema AdminDiscountConditionsRes
 * type: object
 * x-expanded-relations:
 *   field: discount_condition
 *   relations:
 *     - discount_rule
 * required:
 *   - discount_condition
 * properties:
 *   discount_condition:
 *     description: "Discount condition details."
 *     $ref: "#/components/schemas/DiscountCondition"
 */
export type AdminDiscountConditionsRes = {
    discount_condition: DiscountCondition;
};
/**
 * @schema AdminDiscountsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Discount
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: discount
 *   deleted:
 *     type: boolean
 *     description: Whether the discount was deleted successfully.
 *     default: true
 */
export type AdminDiscountsDeleteRes = DeleteResponse;
/**
 * @schema AdminDiscountConditionsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 *   - discount
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Discount Condition
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: discount-condition
 *   deleted:
 *     type: boolean
 *     description: Whether the discount condition was deleted successfully.
 *     default: true
 *   discount:
 *     description: The Discount to which the condition used to belong to.
 *     $ref: "#/components/schemas/Discount"
 */
export type AdminDiscountConditionsDeleteRes = DeleteResponse & {
    discount: Discount;
};
/**
 * @schema AdminDiscountsListRes
 * type: object
 * description: The list of discounts with pagination fields.
 * x-expanded-relations:
 *   field: discounts
 *   relations:
 *     - parent_discount
 *     - regions
 *     - rule
 *     - rule.conditions
 * required:
 *   - discounts
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   discounts:
 *     type: array
 *     description: "The list of discounts."
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of discounts skipped when retrieving the discounts.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminDiscountsListRes = PaginatedResponse & {
    discounts: Discount[];
};
export * from "./add-region";
export * from "./create-condition";
export * from "./create-discount";
export * from "./create-dynamic-code";
export * from "./delete-condition";
export * from "./delete-discount";
export * from "./delete-dynamic-code";
export * from "./get-condition";
export * from "./get-discount";
export * from "./get-discount-by-code";
export * from "./list-discounts";
export * from "./remove-region";
export * from "./update-condition";
export * from "./update-discount";
export * from "./add-resources-to-condition-batch";
export * from "./delete-resources-from-condition-batch";
