import { Request, Response } from "express";
import { DateComparisonOperator } from "../../../../types/common";
import { UserRole } from "../../../../types/user";
/**
 * @oas [get] /admin/users
 * operationId: "GetUsers"
 * summary: "List Users"
 * description: "Retrieves a list of users. The users can be filtered by fields such as `q` or `email`. The users can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) email {string} Filter by email.
 *   - (query) first_name {string} Filter by first name.
 *   - (query) last_name {string} Filter by last name.
 *   - (query) q {string} Term used to search users' first name, last name, and email.
 *   - (query) order {string} A user field to sort-order the retrieved users by.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by user IDs.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: ID of the user.
 *         - type: array
 *           items:
 *             type: string
 *             description: ID of a user.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: deleted_at
 *     description: Filter by a deletion date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) offset=0 {integer} The number of users to skip when retrieving the users.
 *   - (query) limit=20 {integer} Limit the number of users returned.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned users.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetUsersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.list()
 *       .then(({ users, limit, offset, count }) => {
 *         console.log(users.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUsers } from "medusa-react"
 *
 *       const Users = () => {
 *         const { users, isLoading } = useAdminUsers()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {users && !users.length && <span>No Users</span>}
 *             {users && users.length > 0 && (
 *               <ul>
 *                 {users.map((user) => (
 *                   <li key={user.id}>{user.email}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Users
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/users' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Users
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminUsersListRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
declare const AdminGetUsersParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved users.
 */
export declare class AdminGetUsersParams extends AdminGetUsersParams_base {
    /**
     * IDs to filter users by.
     */
    id?: string | string[];
    /**
     * Search terms to search users' first name, last name, and email.
     */
    q?: string;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
    /**
     * Date filters to apply on the users' `update_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the customer users' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the users' `deleted_at` date.
     */
    deleted_at?: DateComparisonOperator;
    /**
     * Filter to apply on the users' `email` field.
     */
    email?: string;
    /**
     * Filter to apply on the users' `first_name` field.
     */
    first_name?: string;
    /**
     * Filter to apply on the users' `last_name` field.
     */
    last_name?: string;
    /**
     * Filter to apply on the users' `role` field.
     */
    role?: UserRole;
    /**
     * Comma-separated fields that should be included in the returned users.
     */
    fields?: string;
}
