import "reflect-metadata";
import { Payment, Refund } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentFields: string[];
/**
 * @schema AdminPaymentRes
 * type: object
 * description: "The payment's details."
 * required:
 *   - payment
 * properties:
 *   payment:
 *     description: "Payment details"
 *     $ref: "#/components/schemas/Payment"
 */
export type AdminPaymentRes = {
    payment: Payment;
};
/**
 * @schema AdminRefundRes
 * type: object
 * description: "The refund's details."
 * required:
 *   - refund
 * properties:
 *   refund:
 *     description: "Refund details."
 *     $ref: "#/components/schemas/Refund"
 */
export type AdminRefundRes = {
    refund: Refund;
};
export * from "./get-payment";
export * from "./refund-payment";
