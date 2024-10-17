import "reflect-metadata";
import { Cart, Order, Swap } from "../../../../";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultStoreCartFields: (keyof Cart)[];
export declare const defaultStoreCartRelations: string[];
/**
 * @schema StoreCartsRes
 * type: object
 * description: "The cart's details."
 * x-expanded-relations:
 *   field: cart
 *   relations:
 *     - billing_address
 *     - discounts
 *     - discounts.rule
 *     - gift_cards
 *     - items
 *     - items.adjustments
 *     - items.variant
 *     - payment
 *     - payment_sessions
 *     - region
 *     - region.countries
 *     - region.payment_providers
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 *     - shipping_methods.shipping_option
 *   implicit:
 *      - items
 *      - items.variant
 *      - items.variant.product
 *      - items.variant.product.profiles
 *      - items.tax_lines
 *      - items.adjustments
 *      - gift_cards
 *      - discounts
 *      - discounts.rule
 *      - shipping_methods
 *      - shipping_methods.tax_lines
 *      - shipping_address
 *      - region
 *      - region.tax_rates
 *   totals:
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - item_tax_total
 *     - refundable_amount
 *     - refunded_total
 *     - shipping_tax_total
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
 *   - cart
 * properties:
 *   cart:
 *     description: "Cart details."
 *     $ref: "#/components/schemas/Cart"
 */
export type StoreCartsRes = {
    cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};
/**
 * @schema StoreCompleteCartRes
 * type: object
 * description: "If the cart is completed successfully, this will have the created order or the swap's details, based on the cart's type. Otherwise, it'll be the cart's details."
 * required:
 *   - type
 *   - data
 * properties:
 *   type:
 *     type: string
 *     description: >-
 *       The type of the data property. If the cart completion fails, type will be `cart` and the data object will be the cart's details.
 *       If the cart completion is successful and the cart is used for checkout, type will be `order` and the data object will be the order's details.
 *       If the cart completion is successful and the cart is used for swap creation, type will be `swap` and the data object will be the swap's details.
 *     enum: [order, cart, swap]
 *   data:
 *     type: object
 *     description: The data of the result object. Its type depends on the type field.
 *     oneOf:
 *       - type: object
 *         allOf:
 *           - description: Cart was successfully authorized and order was placed successfully.
 *           - $ref: "#/components/schemas/Order"
 *       - type: object
 *         allOf:
 *           - description: Cart was successfully authorized but requires further actions.
 *           - $ref: "#/components/schemas/Cart"
 *       - type: object
 *         allOf:
 *           - description: Cart was used for a swap and it has been completed successfully.
 *           - $ref: "#/components/schemas/Swap"
 */
export type StoreCompleteCartRes = {
    type: "cart";
    data: Cart;
} | {
    type: "order";
    data: Order;
} | {
    type: "swap";
    data: Swap;
};
export * from "./add-shipping-method";
export * from "./create-cart";
export * from "./create-line-item";
export * from "./create-payment-sessions";
export * from "./set-payment-session";
export * from "./update-cart";
export * from "./update-line-item";
export * from "./update-payment-session";
