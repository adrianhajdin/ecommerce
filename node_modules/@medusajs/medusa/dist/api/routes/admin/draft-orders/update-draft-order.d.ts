import { AddressPayload } from "../../../../types/common";
/**
 * @oas [post] /admin/draft-orders/{id}
 * operationId: PostDraftOrdersDraftOrder
 * summary: Update a Draft Order
 * description: "Update a Draft Order's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.update(draftOrderId, {
 *         email: "user@example.com"
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateDraftOrder } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const updateDraftOrder = useAdminUpdateDraftOrder(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handleUpdate = (email: string) => {
 *           updateDraftOrder.mutate({
 *             email,
 *           }, {
 *             onSuccess: ({ draft_order }) => {
 *               console.log(draft_order.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
 * @schema AdminPostDraftOrdersDraftOrderReq
 * type: object
 * description: "The details of the draft order to update."
 * properties:
 *   region_id:
 *     type: string
 *     description: The ID of the Region to create the Draft Order in.
 *   country_code:
 *     type: string
 *     description: "The 2 character ISO code for the Country."
 *     externalDocs:
 *        url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *        description: See a list of codes.
 *   email:
 *     type: string
 *     description: "An email to be used in the Draft Order."
 *     format: email
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *       - type: string
 *   shipping_address:
 *     description: "The Address to be used for shipping purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *       - type: string
 *   discounts:
 *     description: "An array of Discount codes to add to the Draft Order."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code that a Discount is identifed by."
 *           type: string
 *   no_notification_order:
 *     description: "An optional flag passed to the resulting order that indicates whether the customer should receive notifications about order updates."
 *     type: boolean
 *   customer_id:
 *     description: "The ID of the customer this draft order is associated with."
 *     type: string
 */
export declare class AdminPostDraftOrdersDraftOrderReq {
    region_id?: string;
    country_code?: string;
    email?: string;
    billing_address?: AddressPayload | string;
    shipping_address?: AddressPayload | string;
    discounts?: Discount[];
    customer_id?: string;
    no_notification_order?: boolean;
}
declare class Discount {
    code: string;
}
