import { FindParams } from "./common";
/**
 * The context to apply on retrieved prices.
 */
export declare class PriceSelectionParams extends FindParams {
    /**
     * Retrieve prices for a cart ID.
     */
    cart_id?: string;
    /**
     * Retrieve prices for a region ID.
     */
    region_id?: string;
    /**
     * Retrieve prices for a currency code.
     */
    currency_code?: string;
}
/**
 * The context to apply on retrieved prices by a user admin.
 */
export declare class AdminPriceSelectionParams extends PriceSelectionParams {
    /**
     * Retrieve prices for a customer ID.
     */
    customer_id?: string;
}
