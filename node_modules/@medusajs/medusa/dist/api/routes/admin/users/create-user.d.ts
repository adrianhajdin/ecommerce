import { UserRoles } from "../../../../models/user";
/**
 * @oas [post] /admin/users
 * operationId: "PostUsers"
 * summary: "Create a User"
 * description: "Create an admin User. The user has the same privileges as all admin users, and will be able to authenticate and perform admin functionalities right after creation."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminCreateUserRequest"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.create({
 *         email: "user@example.com",
 *         password: "supersecret"
 *       })
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateUser } from "medusa-react"
 *
 *       const CreateUser = () => {
 *         const createUser = useAdminCreateUser()
 *         // ...
 *
 *         const handleCreateUser = () => {
 *           createUser.mutate({
 *             email: "user@example.com",
 *             password: "supersecret",
 *           }, {
 *             onSuccess: ({ user }) => {
 *               console.log(user.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateUser
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/users' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "password": "supersecret"
 *       }'
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
 *           $ref: "#/components/schemas/AdminUserRes"
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
 * @schema AdminCreateUserRequest
 * type: object
 * required:
 *   - email
 *   - password
 * properties:
 *   email:
 *     description: "The User's email."
 *     type: string
 *     format: email
 *   first_name:
 *     description: "The first name of the User."
 *     type: string
 *   last_name:
 *     description: "The last name of the User."
 *     type: string
 *   role:
 *     description: "The role assigned to the user. These roles don't provide any different privileges."
 *     type: string
 *     enum: [admin, member, developer]
 *   password:
 *     description: "The User's password."
 *     type: string
 *     format: password
 */
export declare class AdminCreateUserRequest {
    email: string;
    first_name?: string;
    last_name?: string;
    role?: UserRoles;
    password: string;
}
