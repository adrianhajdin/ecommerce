import { OrderEdit } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreOrderEditsRes
 * type: object
 * description: "The order edit's details."
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
 *     description: "Order edit details."
 *     $ref: "#/components/schemas/OrderEdit"
 */
export type StoreOrderEditsRes = {
    order_edit: Omit<OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by">;
};
export * from "./decline-order-edit";
