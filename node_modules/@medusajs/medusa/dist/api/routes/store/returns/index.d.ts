import { Return } from "./../../../../models/return";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultRelations: string[];
/**
 * @schema StoreReturnsRes
 * type: object
 * description: "The return's details."
 * x-expanded-relations:
 *   field: return
 *   relations:
 *     - items
 *     - items.reason
 *   eager:
 *     - items
 * required:
 *   - return
 * properties:
 *   return:
 *     description: "Return details."
 *     $ref: "#/components/schemas/Return"
 */
export type StoreReturnsRes = {
    return: Return;
};
export * from "./create-return";
