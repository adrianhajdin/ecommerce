import { DateComparisonOperator, StringComparisonOperator } from "./common";
export declare class FilterableLineItemAdjustmentProps {
    id?: string | string[] | StringComparisonOperator;
    item_id?: string | string[];
    description?: string | string[];
    resource_id?: string | string[];
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
