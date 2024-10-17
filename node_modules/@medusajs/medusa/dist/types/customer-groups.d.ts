import { DateComparisonOperator, StringComparisonOperator } from "./common";
/**
 * Filters to apply on the retrieved customer groups.
 */
export declare class FilterableCustomerGroupProps {
    /**
     * IDs to filter customer groups by.
     */
    id?: string | string[] | StringComparisonOperator;
    /**
     * Search term to search customer groups by their name.
     */
    q?: string;
    /**
     * Names to filter customer groups by.
     */
    name?: string[];
    /**
     * Date filters to apply on the customer groups' `update_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the customer groups' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Filter customer groups by their associated discount condition's ID.
     */
    discount_condition_id?: string;
}
export declare class CustomerGroupsBatchCustomer {
    id: string;
}
export declare class CustomerGroupUpdate {
    name?: string;
    metadata?: Record<string, unknown>;
}
