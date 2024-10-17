import { OrderEdit, OrderEditItemChangeType } from "../models";
export type CreateOrderEditInput = {
    order_id: string;
    internal_note?: string;
};
export type AddOrderEditLineItemInput = {
    quantity: number;
    variant_id: string;
    metadata?: Record<string, unknown>;
};
export type CreateOrderEditItemChangeInput = {
    type: OrderEditItemChangeType;
    order_edit_id: string;
    original_line_item_id?: string;
    line_item_id?: string;
};
export declare const defaultOrderEditRelations: string[];
export declare const defaultOrderEditFields: (keyof OrderEdit)[];
export declare const storeOrderEditNotAllowedFieldsAndRelations: string[];
export declare const defaultStoreOrderEditRelations: string[];
export declare const defaultStoreOrderEditFields: (keyof OrderEdit)[];
