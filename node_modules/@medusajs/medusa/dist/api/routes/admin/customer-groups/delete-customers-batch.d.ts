import { Request, Response } from "express";
import { CustomerGroupsBatchCustomer } from "../../../../types/customer-groups";
/**
 * @oas [delete] /admin/customer-groups/{id}/customers/batch
 * operationId: "DeleteCustomerGroupsGroupCustomerBatch"
 * summary: "Remove Customers from Group"
 * description: "Remove a list of customers from a customer group. This doesn't delete the customer, only the association between the customer and the customer group."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the customer group.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteCustomerGroupsGroupCustomerBatchReq"
 * x-codegen:
 *   method: removeCustomers
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.removeCustomers(customerGroupId, {
 *         customer_ids: [
 *           {
 *             id: customerId
 *           }
 *         ]
 *       })
 *       .then(({ customer_group }) => {
 *         console.log(customer_group.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminRemoveCustomersFromCustomerGroup,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         customerGroupId: string
 *       }
 *
 *       const CustomerGroup = ({ customerGroupId }: Props) => {
 *         const removeCustomers =
 *           useAdminRemoveCustomersFromCustomerGroup(
 *             customerGroupId
 *           )
 *         // ...
 *
 *         const handleRemoveCustomer = (customerId: string) => {
 *           removeCustomers.mutate({
 *             customer_ids: [
 *               {
 *                 id: customerId,
 *               },
 *             ],
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CustomerGroup
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/customer-groups/{id}/customers/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "customer_ids": [
 *               {
 *                   "id": "cus_01G2Q4BS9GAHDBMDEN4ZQZCJB2"
 *               }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customer Groups
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomerGroupsRes"
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
/**
 * @schema AdminDeleteCustomerGroupsGroupCustomerBatchReq
 * type: object
 * description: "The customers to remove from the customer group."
 * required:
 *   - customer_ids
 * properties:
 *   customer_ids:
 *     description: "The ids of the customers to remove"
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: ID of the customer
 *           type: string
 */
export declare class AdminDeleteCustomerGroupsGroupCustomerBatchReq {
    customer_ids: CustomerGroupsBatchCustomer[];
}
