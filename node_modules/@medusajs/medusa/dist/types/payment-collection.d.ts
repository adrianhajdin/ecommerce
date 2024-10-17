import { PaymentCollection, PaymentCollectionType } from "../models";
export type CreatePaymentCollectionInput = {
    region_id: string;
    type: PaymentCollectionType;
    currency_code: string;
    amount: number;
    created_by: string;
    metadata?: any;
    description?: string;
};
export type PaymentCollectionsSessionsBatchInput = {
    provider_id: string;
    amount: number;
    session_id?: string;
};
export type PaymentCollectionsSessionsInput = {
    provider_id: string;
};
export declare const defaultPaymentCollectionRelations: string[];
export declare const defaultPaymentCollectionFields: (keyof PaymentCollection)[];
export declare const storePaymentCollectionNotAllowedFieldsAndRelations: string[];
export declare const defaultStorePaymentCollectionRelations: string[];
export declare const defaultStorePaymentCollectionFields: (keyof PaymentCollection)[];
