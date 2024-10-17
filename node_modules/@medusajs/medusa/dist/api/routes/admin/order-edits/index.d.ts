import { OrderEdit } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminOrderEditsRes
 * type: object
 * description: "The order edit details."
 * x-expanded-relations:
 *   field: order_edit
 *   relations:
 *     - changes
 *     - changes.line_item
 *     - changes.line_item.variant
 *     - changes.original_line_item
 *     - changes.original_line_item.variant
 *     - items
 *     - items.adjustments
 *     - items.tax_lines
 *     - items.variant
 *     - payment_collection
 *   implicit:
 *     - items
 *     - items.tax_lines
 *     - items.adjustments
 *     - items.variant
 *   totals:
 *     - difference_due
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 * required:
 *   - order_edit
 * properties:
 *   order_edit:
 *     description: "Order edit details"
 *     $ref: "#/components/schemas/OrderEdit"
 */
export type AdminOrderEditsRes = {
    order_edit: OrderEdit;
};
/**
 * @schema AdminOrderEditsListRes
 * type: object
 * description: "The list of order edits with pagination fields."
 * x-expanded-relations:
 *   field: order_edits
 *   relations:
 *     - changes
 *     - changes.line_item
 *     - changes.line_item.variant
 *     - changes.original_line_item
 *     - changes.original_line_item.variant
 *     - items
 *     - items.adjustments
 *     - items.tax_lines
 *     - items.variant
 *     - payment_collection
 *   implicit:
 *     - items
 *     - items.tax_lines
 *     - items.adjustments
 *     - items.variant
 *   totals:
 *     - difference_due
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 * required:
 *   - order_edits
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   order_edits:
 *     type: array
 *     description: "An array of order edit details"
 *     items:
 *       $ref: "#/components/schemas/OrderEdit"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of order edits skipped when retrieving the order edits.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminOrderEditsListRes = PaginatedResponse & {
    order_edits: OrderEdit[];
};
/**
 * @schema AdminOrderEditDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Order Edit.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: order_edit
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Order Edit was deleted.
 *     default: true
 */
export type AdminOrderEditDeleteRes = DeleteResponse;
/**
 * @schema AdminOrderEditItemChangeDeleteRes
 * type: object
 * description: "The details of deleting order edit item changes."
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Order Edit Item Change.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: item_change
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Order Edit Item Change was deleted.
 *     default: true
 */
export type AdminOrderEditItemChangeDeleteRes = {
    id: string;
    object: "item_change";
    deleted: boolean;
};
export * from "./add-line-item";
export * from "./create-order-edit";
export * from "./get-order-edit";
export * from "./list-order-edit";
export * from "./request-confirmation";
export * from "./update-order-edit";
export * from "./update-order-edit-line-item";
