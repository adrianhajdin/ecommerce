import { ReturnReason } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreReturnReasonFields: (keyof ReturnReason)[];
export declare const defaultStoreReturnReasonRelations: (keyof ReturnReason)[];
/**
 * @schema StoreReturnReasonsListRes
 * type: object
 * description: "The list of return reasons."
 * x-expanded-relations:
 *   field: return_reasons
 *   relations:
 *     - parent_return_reason
 *     - return_reason_children
 * required:
 *   - return_reasons
 * properties:
 *   return_reasons:
 *     type: array
 *     description: "An array of return reasons details."
 *     items:
 *       $ref: "#/components/schemas/ReturnReason"
 */
export type StoreReturnReasonsListRes = {
    return_reasons: ReturnReason[];
};
/**
 * @schema StoreReturnReasonsRes
 * type: object
 * description: "The return reason's details."
 * x-expanded-relations:
 *   field: return_reason
 *   relations:
 *     - parent_return_reason
 *     - return_reason_children
 * required:
 *   - return_reason
 * properties:
 *   return_reason:
 *     description: "Return reason details."
 *     $ref: "#/components/schemas/ReturnReason"
 */
export type StoreReturnReasonsRes = {
    return_reason: ReturnReason;
};
export * from "./get-reason";
