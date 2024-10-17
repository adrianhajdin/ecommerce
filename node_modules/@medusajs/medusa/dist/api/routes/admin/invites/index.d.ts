import { Invite } from "../../../../models/invite";
import { DeleteResponse } from "../../../../types/common";
import "reflect-metadata";
export declare const unauthenticatedInviteRoutes: (app: any) => void;
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminInviteDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Invite.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: invite
 *   deleted:
 *     type: boolean
 *     description: Whether or not the invite was deleted.
 *     default: true
 */
export type AdminInviteDeleteRes = DeleteResponse;
/**
 * @schema AdminListInvitesRes
 * description: "The list of invites."
 * type: object
 * required:
 *   - invites
 * properties:
 *   invites:
 *     type: array
 *     description: An array of invites
 *     items:
 *       $ref: "#/components/schemas/Invite"
 */
export type AdminListInvitesRes = {
    invites: Invite[];
};
export * from "./accept-invite";
export * from "./create-invite";
export * from "./delete-invite";
export * from "./list-invites";
export * from "./resend-invite";
