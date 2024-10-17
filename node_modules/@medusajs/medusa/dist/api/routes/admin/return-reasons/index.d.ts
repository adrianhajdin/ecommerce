import { ReturnReason } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminReturnReasonsFields: (keyof ReturnReason)[];
export declare const defaultAdminReturnReasonsRelations: (keyof ReturnReason)[];
/**
 * @schema AdminReturnReasonsRes
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
 *     description: "The return reason's details."
 *     $ref: "#/components/schemas/ReturnReason"
 */
export type AdminReturnReasonsRes = {
    return_reason: ReturnReason;
};
/**
 * @schema AdminReturnReasonsListRes
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
 *     description: "The list of return reasons."
 *     items:
 *       $ref: "#/components/schemas/ReturnReason"
 */
export type AdminReturnReasonsListRes = {
    return_reasons: ReturnReason[];
};
/**
 * @schema AdminReturnReasonsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted return reason
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: return_reason
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminReturnReasonsDeleteRes = DeleteResponse;
export * from "./create-reason";
export * from "./update-reason";
