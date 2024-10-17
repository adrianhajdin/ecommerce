import { Oauth } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminAppsRes
 * type: object
 * required:
 *   - apps
 * properties:
 *   apps:
 *     description: App details.
 *     $ref: "#/components/schemas/OAuth"
 */
export type AdminAppsRes = {
    apps: Oauth;
};
/**
 * @schema AdminAppsListRes
 * type: object
 * required:
 *   - apps
 * properties:
 *   apps:
 *      type: array
 *      description: An array of app details.
 *      items:
 *        $ref: "#/components/schemas/OAuth"
 */
export type AdminAppsListRes = {
    apps: Oauth[];
};
