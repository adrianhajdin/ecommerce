import "reflect-metadata";
import { PaymentCollection } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentCollectionFields: string[];
export declare const defaulPaymentCollectionRelations: string[];
/**
 * @schema AdminPaymentCollectionsRes
 * type: object
 * description: "The payment collection's details."
 * x-expanded-relations:
 *   field: payment_collection
 *   relations:
 *     - payment_sessions
 *     - payments
 *     - region
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - payment_collection
 * properties:
 *   payment_collection:
 *     description: Payment Collection details.
 *     $ref: "#/components/schemas/PaymentCollection"
 */
export type AdminPaymentCollectionsRes = {
    payment_collection: PaymentCollection;
};
/**
 * @schema AdminPaymentCollectionDeleteRes
 * type: object
 * description: "The details of deleting a payment collection."
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Payment Collection.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: payment_collection
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Payment Collection was deleted.
 *     default: true
 */
export type AdminPaymentCollectionDeleteRes = {
    id: string;
    object: "payment_collection";
    deleted: boolean;
};
export * from "./get-payment-collection";
export * from "./update-payment-collection";
