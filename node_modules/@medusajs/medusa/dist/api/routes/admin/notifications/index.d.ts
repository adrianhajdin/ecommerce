import { Notification } from "./../../../../";
import { PaginatedResponse } from "@medusajs/types";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminNotificationsRelations: string[];
export declare const defaultAdminNotificationsFields: string[];
/**
 * @schema AdminNotificationsListRes
 * type: object
 * x-expanded-relations:
 *   field: notifications
 *   relations:
 *     - resends
 * required:
 *   - notifications
 * properties:
 *   notifications:
 *     type: array
 *     description: an array of notifications
 *     items:
 *       $ref: "#/components/schemas/Notification"
 *   count:
 *     type: integer
 *     description: The total number of notifications
 *   offset:
 *     type: integer
 *     description: The number of notifications skipped when retrieving the notifications.
 *   limit:
 *     type: integer
 *     description: The number of notifications per page
 */
export type AdminNotificationsListRes = PaginatedResponse & {
    notifications: Notification[];
};
/**
 * @schema AdminNotificationsRes
 * type: object
 * description: "The notification's details."
 * x-expanded-relations:
 *   field: notification
 *   relations:
 *     - resends
 * required:
 *   - notification
 * properties:
 *   notification:
 *     description: Notification details
 *     $ref: "#/components/schemas/Notification"
 */
export type AdminNotificationsRes = {
    notification: Notification;
};
export * from "./list-notifications";
export * from "./resend-notification";
