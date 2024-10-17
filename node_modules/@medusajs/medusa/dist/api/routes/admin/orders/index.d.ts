import { FlagRouter } from "@medusajs/utils";
import "reflect-metadata";
import { Order } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
/**
 * @schema AdminOrdersRes
 * type: object
 * description: "The order's details."
 * x-expanded-relations:
 *   field: order
 *   relations:
 *     - billing_address
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.variant
 *     - claims.claim_items
 *     - claims.claim_items.images
 *     - claims.claim_items.item
 *     - claims.fulfillments
 *     - claims.fulfillments.tracking_links
 *     - claims.return_order
 *     - claims.return_order.shipping_method
 *     - claims.return_order.shipping_method.tax_lines
 *     - claims.shipping_address
 *     - claims.shipping_methods
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.items
 *     - fulfillments.tracking_links
 *     - gift_card_transactions
 *     - gift_cards
 *     - items
 *     - payments
 *     - refunds
 *     - region
 *     - returns
 *     - returns.items
 *     - returns.items.reason
 *     - returns.shipping_method
 *     - returns.shipping_method.tax_lines
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - fulfillments.items
 *     - region.fulfillment_providers
 *     - region.payment_providers
 *     - returns.items
 *     - shipping_methods.shipping_option
 *   implicit:
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.adjustments
 *     - claims.additional_items.refundable
 *     - claims.additional_items.tax_lines
 *     - discounts
 *     - discounts.rule
 *     - gift_card_transactions
 *     - gift_card_transactions.gift_card
 *     - gift_cards
 *     - items
 *     - items.adjustments
 *     - items.refundable
 *     - items.tax_lines
 *     - items.variant
 *     - items.variant.product
 *     - items.variant.product.profiles
 *     - refunds
 *     - region
 *     - shipping_methods
 *     - shipping_methods.tax_lines
 *     - swaps
 *     - swaps.additional_items
 *     - swaps.additional_items.adjustments
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.tax_lines
 *   totals:
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - paid_total
 *     - refundable_amount
 *     - refunded_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - claims.additional_items.discount_total
 *     - claims.additional_items.gift_card_total
 *     - claims.additional_items.original_tax_total
 *     - claims.additional_items.original_total
 *     - claims.additional_items.refundable
 *     - claims.additional_items.subtotal
 *     - claims.additional_items.tax_total
 *     - claims.additional_items.total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 *     - swaps.additional_items.discount_total
 *     - swaps.additional_items.gift_card_total
 *     - swaps.additional_items.original_tax_total
 *     - swaps.additional_items.original_total
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.subtotal
 *     - swaps.additional_items.tax_total
 *     - swaps.additional_items.total
 * required:
 *   - order
 * properties:
 *   order:
 *     description: "Order details."
 *     $ref: "#/components/schemas/Order"
 */
export type AdminOrdersRes = {
    order: Order;
};
/**
 * @schema AdminOrdersListRes
 * type: object
 * description: "The list of orders with pagination fields."
 * x-expanded-relations:
 *   field: orders
 *   relations:
 *     - billing_address
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.variant
 *     - claims.claim_items
 *     - claims.claim_items.images
 *     - claims.claim_items.item
 *     - claims.fulfillments
 *     - claims.fulfillments.tracking_links
 *     - claims.return_order
 *     - claims.return_order.shipping_method
 *     - claims.return_order.shipping_method.tax_lines
 *     - claims.shipping_address
 *     - claims.shipping_methods
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.items
 *     - fulfillments.tracking_links
 *     - gift_card_transactions
 *     - gift_cards
 *     - items
 *     - payments
 *     - refunds
 *     - region
 *     - returns
 *     - returns.items
 *     - returns.items.reason
 *     - returns.shipping_method
 *     - returns.shipping_method.tax_lines
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - fulfillments.items
 *     - region.fulfillment_providers
 *     - region.payment_providers
 *     - returns.items
 *     - shipping_methods.shipping_option
 *   implicit:
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.adjustments
 *     - claims.additional_items.refundable
 *     - claims.additional_items.tax_lines
 *     - discounts
 *     - discounts.rule
 *     - gift_card_transactions
 *     - gift_card_transactions.gift_card
 *     - gift_cards
 *     - items
 *     - items.adjustments
 *     - items.refundable
 *     - items.tax_lines
 *     - items.variant
 *     - items.variant.product
 *     - items.variant.product.profiles
 *     - refunds
 *     - region
 *     - shipping_methods
 *     - shipping_methods.tax_lines
 *     - swaps
 *     - swaps.additional_items
 *     - swaps.additional_items.adjustments
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.tax_lines
 *   totals:
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - paid_total
 *     - refundable_amount
 *     - refunded_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - claims.additional_items.discount_total
 *     - claims.additional_items.gift_card_total
 *     - claims.additional_items.original_tax_total
 *     - claims.additional_items.original_total
 *     - claims.additional_items.refundable
 *     - claims.additional_items.subtotal
 *     - claims.additional_items.tax_total
 *     - claims.additional_items.total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 *     - swaps.additional_items.discount_total
 *     - swaps.additional_items.gift_card_total
 *     - swaps.additional_items.original_tax_total
 *     - swaps.additional_items.original_total
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.subtotal
 *     - swaps.additional_items.tax_total
 *     - swaps.additional_items.total
 * required:
 *   - orders
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   orders:
 *     type: array
 *     description: "An array of order details."
 *     items:
 *       $ref: "#/components/schemas/Order"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of orders skipped when retrieving the orders.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminOrdersListRes = PaginatedResponse & {
    orders: Order[];
};
export declare const filterableAdminOrdersFields: string[];
export declare const AvailableOrderIncludes: {
    RETURNABLE_ITEMS: string;
};
export declare const allowedOrderIncludes: string[];
export * from "./add-shipping-method";
export * from "./archive-order";
export * from "./cancel-claim";
export * from "./cancel-fulfillment";
export * from "./cancel-fulfillment-claim";
export * from "./cancel-fulfillment-swap";
export * from "./cancel-order";
export * from "./cancel-swap";
export * from "./capture-payment";
export * from "./complete-order";
export * from "./create-claim";
export * from "./create-claim-shipment";
export * from "./create-fulfillment";
export * from "./create-shipment";
export * from "./create-swap";
export * from "./create-swap-shipment";
export * from "./fulfill-claim";
export * from "./fulfill-swap";
export * from "./get-order";
export * from "./list-orders";
export * from "./process-swap-payment";
export * from "./refund-payment";
export * from "./request-return";
export * from "./update-claim";
export * from "./update-order";
