/**
 * @oas [post] /admin/customers/{id}
 * operationId: "PostCustomersCustomer"
 * summary: "Update a Customer"
 * description: "Update a Customer's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Customer.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned customer.
 *   - (query) fields {string} Comma-separated fields that should be retrieved in the returned customer.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCustomersCustomerReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customers.update(customerId, {
 *         first_name: "Dolly"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateCustomer } from "medusa-react"
 *
 *       type CustomerData = {
 *         first_name: string
 *         last_name: string
 *         email: string
 *         password: string
 *       }
 *
 *       type Props = {
 *         customerId: string
 *       }
 *
 *       const Customer = ({ customerId }: Props) => {
 *         const updateCustomer = useAdminUpdateCustomer(customerId)
 *         // ...
 *
 *         const handleUpdate = (customerData: CustomerData) => {
 *           updateCustomer.mutate(customerData)
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Customer
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/customers/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Dolly"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomersRes"
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
declare class Group {
    id: string;
}
/**
 * @schema AdminPostCustomersCustomerReq
 * type: object
 * description: "The details of the customer to update."
 * properties:
 *   email:
 *     type: string
 *     description: The Customer's email. You can't update the email of a registered customer.
 *     format: email
 *   first_name:
 *     type: string
 *     description:  The Customer's first name.
 *   last_name:
 *     type: string
 *     description:  The Customer's last name.
 *   phone:
 *     type: string
 *     description: The Customer's phone number.
 *   password:
 *     type: string
 *     description: The Customer's password.
 *     format: password
 *   groups:
 *     type: array
 *     description: A list of customer groups to which the customer belongs.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a customer group
 *           type: string
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostCustomersCustomerReq {
    email?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    groups?: Group[];
}
