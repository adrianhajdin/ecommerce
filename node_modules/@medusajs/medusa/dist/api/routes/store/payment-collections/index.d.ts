import "reflect-metadata";
import { PaymentCollection, PaymentSession } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentCollectionFields: string[];
export declare const defaultPaymentCollectionRelations: string[];
/**
 * @schema StorePaymentCollectionsRes
 * type: object
 * description: "The payment collection's details."
 * x-expanded-relations:
 *   field: payment_collection
 *   relations:
 *     - payment_sessions
 *     - region
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - payment_collection
 * properties:
 *   payment_collection:
 *     description: "Payment collection's details."
 *     $ref: "#/components/schemas/PaymentCollection"
 */
export type StorePaymentCollectionsRes = {
    payment_collection: PaymentCollection;
};
/**
 * @schema StorePaymentCollectionsSessionRes
 * type: object
 * description: "The details of the payment session."
 * required:
 *   - payment_session
 * properties:
 *   payment_session:
 *     description: "Payment session's details."
 *     $ref: "#/components/schemas/PaymentSession"
 */
export type StorePaymentCollectionsSessionRes = {
    payment_session: PaymentSession;
};
export * from "./authorize-batch-payment-sessions";
export * from "./get-payment-collection";
export * from "./manage-batch-payment-sessions";
export * from "./manage-payment-session";
export * from "./refresh-payment-session";
