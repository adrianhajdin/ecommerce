import { User } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminAuthRes
 * type: object
 * description: "The user's details."
 * required:
 *   - user
 * properties:
 *   user:
 *     description: User details.
 *     $ref: "#/components/schemas/User"
 */
export type AdminAuthRes = {
    user: Omit<User, "password_hash">;
};
/**
 * @schema AdminBearerAuthRes
 * type: object
 * description: "The access token of the user, if they're authenticated successfully."
 * properties:
 *   access_token:
 *     description: Access token that can be used to send authenticated requests.
 *     type: string
 */
export type AdminBearerAuthRes = {
    access_token: string;
};
export * from "./create-session";
export * from "./delete-session";
export * from "./get-session";
export * from "./get-token";
