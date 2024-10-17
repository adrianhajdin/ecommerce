import { Order, Payment } from "../models";
import { AddressPayload, DateComparisonOperator } from "./common";
export declare function isOrder(object: any): object is Order;
export type TotalsContext = {
    force_taxes?: boolean;
    includes?: {
        returnable_items?: boolean;
    };
};
/**
 * @enum
 *
 * The status of an order.
 */
declare enum OrderStatus {
    /**
     * Order is pending.
     */
    pending = "pending",
    /**
     * Order is completed. An order is completed when it's paid and fulfilled.
     */
    completed = "completed",
    /**
     * Order is archived.
     */
    archived = "archived",
    /**
     * Order is canceled.
     */
    canceled = "canceled",
    /**
     * Order requires an action. This status is applied when the order's payment or fulfillment requires an additional action.
     */
    requires_action = "requires_action"
}
/**
 * @enum
 *
 * The fulfillment status of an order.
 */
declare enum FulfillmentStatus {
    /**
     * The order isn't fulfilled.
     */
    not_fulfilled = "not_fulfilled",
    /**
     * All of the order's items are fulfilled.
     */
    fulfilled = "fulfilled",
    /**
     * Some, but not all, of the order's items are fulfilled.
     */
    partially_fulfilled = "partially_fulfilled",
    /**
     * All of the order's items are shipped.
     */
    shipped = "shipped",
    /**
     * Some, but not all, of the order's items are shipped.
     */
    partially_shipped = "partially_shipped",
    /**
     * The order's fulfillments are canceled.
     */
    canceled = "canceled",
    /**
     * All of the order's items are returned.
     */
    returned = "returned",
    /**
     * Some, but not all, of the order's items are returned.
     */
    partially_returned = "partially_returned",
    /**
     * The order's fulfillment requires an action.
     */
    requires_action = "requires_action"
}
/**
 * @enum
 *
 * The payment status of the order.
 */
declare enum PaymentStatus {
    /**
     * The order's payment is captured.
     */
    captured = "captured",
    /**
     * The order's payment is awaiting.
     */
    awaiting = "awaiting",
    /**
     * The order's payment isn't paid.
     */
    not_paid = "not_paid",
    /**
     * The order's payment is fully refunded.
     */
    refunded = "refunded",
    /**
     * The order's payment is partially refunded.
     */
    partially_refunded = "partially_refunded",
    /**
     * The order's payment is canceled.
     */
    canceled = "canceled",
    /**
     * The order's payment requires an action.
     */
    requires_action = "requires_action"
}
export type CreateOrderInput = {
    status?: OrderStatus;
    email: string;
    billing_address: AddressPayload;
    shipping_address: AddressPayload;
    items: Record<string, unknown>[];
    region: string;
    discounts?: Record<string, unknown>[];
    customer_id: string;
    payment_method: {
        provider_id: string;
        ata?: Record<string, unknown>;
    };
    shipping_method?: {
        provider_id: string;
        profile_id: string;
        price: number;
        data?: Record<string, unknown>;
        items?: Record<string, unknown>[];
    }[];
    no_notification?: boolean;
};
export type UpdateOrderInput = {
    email?: string;
    billing_address?: AddressPayload;
    shipping_address?: AddressPayload;
    items?: object[];
    region?: string;
    discounts?: object[];
    customer_id?: string;
    payment_method?: {
        provider_id?: string;
        data?: Record<string, unknown>;
    };
    shipping_method?: {
        provider_id?: string;
        profile_id?: string;
        price?: number;
        data?: Record<string, unknown>;
        items?: Record<string, unknown>[];
    }[];
    no_notification?: boolean;
    payment?: Payment;
    status?: OrderStatus;
    fulfillment_status?: FulfillmentStatus;
    payment_status?: PaymentStatus;
    metadata?: Record<string, unknown>;
};
export declare const defaultAdminOrdersRelations: string[];
export declare const defaultAdminOrdersFields: (keyof Order)[];
/**
 * Filters to apply on the retrieved orders.
 */
export declare class AdminListOrdersSelector {
    /**
     * Search term to search orders' shipping address, first name, email, and display ID.
     */
    q?: string;
    /**
     * ID to filter orders by.
     */
    id?: string;
    /**
     * Statuses to filter orders by.
     */
    status?: string[];
    /**
     * Fulfillment statuses to filter orders by.
     */
    fulfillment_status?: string[];
    /**
     * Payment statuses to filter orders by.
     */
    payment_status?: string[];
    /**
     * Display ID to filter orders by.
     */
    display_id?: string;
    /**
     * Cart ID to filter orders by.
     */
    cart_id?: string;
    /**
     * Customer ID to filter orders by.
     */
    customer_id?: string;
    /**
     * Email to filter orders by.
     */
    email?: string;
    /**
     * Regions to filter orders by.
     */
    region_id?: string | string[];
    /**
     * Currency code to filter orders by.
     */
    currency_code?: string;
    /**
     * Tax rate to filter orders by.
     */
    tax_rate?: string;
    /**
     * Sales channel IDs to filter orders by.
     */
    sales_channel_id?: string[];
    /**
     * Date filters to apply on the orders' `canceled_at` date.
     */
    canceled_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the orders' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the orders' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
}
export declare class OrdersReturnItem {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
export {};
