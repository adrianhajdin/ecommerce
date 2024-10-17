/**
 * @oas [get] /admin/notifications
 * operationId: "GetNotifications"
 * summary: "List Notifications"
 * description: "Retrieve a list of notifications. The notifications can be filtered by fields such as `event_name` or `resource_type`. The notifications can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} The number of inventory items to skip when retrieving the inventory items.
 *   - (query) limit=50 {integer} Limit the number of notifications returned.
 *   - (query) fields {string} Comma-separated fields that should be included in each returned notification.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned notification.
 *   - (query) event_name {string} Filter by the name of the event that triggered sending this notification.
 *   - (query) resource_type {string} Filter by the resource type.
 *   - (query) resource_id {string} Filter by the resource ID.
 *   - (query) to {string} Filter by the address that the Notification was sent to. This will usually be an email address, but it can also represent other addresses such as a chat bot user id.
 *   - (query) include_resends {string} A boolean indicating whether the result set should include resent notifications or not
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetNotificationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notifications.list()
 *       .then(({ notifications }) => {
 *         console.log(notifications.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminNotifications } from "medusa-react"
 *
 *       const Notifications = () => {
 *         const { notifications, isLoading } = useAdminNotifications()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {notifications && !notifications.length && (
 *               <span>No Notifications</span>
 *             )}
 *             {notifications && notifications.length > 0 && (
 *               <ul>
 *                 {notifications.map((notification) => (
 *                   <li key={notification.id}>{notification.to}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Notifications
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/notifications' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notifications
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotificationsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * Parameters used to filter and configure the pagination of the retrieved notifications.
 */
export declare class AdminGetNotificationsParams {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 50
     */
    limit?: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset?: number;
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string;
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string;
    /**
     * Event name to filter notifications by.
     */
    event_name?: string;
    /**
     * Resource type to filter notifications by.
     */
    resource_type?: string;
    /**
     * Resource ID to filter notifications by.
     */
    resource_id?: string;
    /**
     * Filter notifications by their `to` field.
     */
    to?: string;
    /**
     * Whether to include resends in the results.
     */
    include_resends?: string;
}
