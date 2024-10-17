import { Customer, Order } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultStoreCustomersRelations: string[];
export declare const defaultStoreCustomersFields: (keyof Customer)[];
export declare const allowedStoreCustomersRelations: string[];
export declare const allowedStoreCustomersFields: string[];
/**
 * @schema StoreCustomersRes
 * type: object
 * description: "The customer's details."
 * x-expanded-relations:
 *   field: customer
 *   relations:
 *     - billing_address
 *     - shipping_addresses
 * required:
 *   - customer
 * properties:
 *   customer:
 *     description: "Customer details."
 *     $ref: "#/components/schemas/Customer"
 */
export type StoreCustomersRes = {
    customer: Omit<Customer, "password_hash">;
};
/**
 * @schema StoreCustomersResetPasswordRes
 * type: object
 * required:
 *   - customer
 * properties:
 *   customer:
 *     description: "Customer details."
 *     $ref: "#/components/schemas/Customer"
 */
export type StoreCustomersResetPasswordRes = {
    customer: Omit<Customer, "password_hash">;
};
/**
 * @schema StoreCustomersListOrdersRes
 * type: object
 * description: "The list of the customer's orders with pagination fields."
 * x-expanded-relations:
 *   field: orders
 *   relations:
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.tracking_links
 *     - items
 *     - items.variant
 *     - payments
 *     - region
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 *     - shipping_methods.shipping_option
 *   implicit:
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.adjustments
 *     - claims.additional_items.refundable
 *     - claims.additional_items.tax_lines
 *     - customer
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
 *     - shipping_address
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
 *     description: "An array of orders details."
 *     items:
 *       $ref: "#/components/schemas/Order"
 *   count:
 *     description: The total number of items available
 *     type: integer
 *   offset:
 *     description: The number of orders skipped when retrieving the orders.
 *     type: integer
 *   limit:
 *     description: The number of items per page
 *     type: integer
 */
export type StoreCustomersListOrdersRes = PaginatedResponse & {
    orders: Order[];
};
/**
 * @schema StoreCustomersListPaymentMethodsRes
 * type: object
 * description: "The payment method's details."
 * required:
 *   - payment_methods
 * properties:
 *   payment_methods:
 *     type: array
 *     description: "The details of the saved payment methods."
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - data
 *       properties:
 *         provider_id:
 *           description: The ID of the Payment Provider where the payment method is saved.
 *           type: string
 *         data:
 *           description: The data needed for the Payment Provider to use the saved payment method.
 *           type: object
 */
export type StoreCustomersListPaymentMethodsRes = {
    payment_methods: {
        provider_id: string;
        data: object;
    }[];
};
export * from "./create-address";
export * from "./create-customer";
export * from "./list-orders";
export * from "./reset-password";
export * from "./reset-password-token";
export * from "./update-address";
export * from "./update-customer";
