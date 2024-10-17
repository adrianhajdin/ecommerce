import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/claims/{claim_id}
 * operationId: "PostOrdersOrderClaimsClaim"
 * summary: "Update a Claim"
 * description: "Update a Claim's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order associated with the claim.
 *   - (path) claim_id=* {string} The ID of the Claim.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderClaimsClaimReq"
 * x-codegen:
 *   method: updateClaim
 *   params: AdminPostOrdersOrderClaimsClaimParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.updateClaim(orderId, claimId, {
 *         no_notification: true
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateClaim } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *         claimId: string
 *       }
 *
 *       const Claim = ({ orderId, claimId }: Props) => {
 *         const updateClaim = useAdminUpdateClaim(orderId)
 *         // ...
 *
 *         const handleUpdate = () => {
 *           updateClaim.mutate({
 *             claim_id: claimId,
 *             no_notification: false
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.claims)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Claim
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/claims/{claim_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "no_notification": true
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
 * @schema AdminPostOrdersOrderClaimsClaimReq
 * type: object
 * properties:
 *   claim_items:
 *     description: The Claim Items that the Claim will consist of.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *         - images
 *         - tags
 *       properties:
 *         id:
 *           description: The ID of the Claim Item.
 *           type: string
 *         item_id:
 *           description: The ID of the Line Item that will be claimed.
 *           type: string
 *         quantity:
 *           description: The number of items that will be returned
 *           type: integer
 *         note:
 *           description: Short text describing the Claim Item in further detail.
 *           type: string
 *         reason:
 *           description: The reason for the Claim
 *           type: string
 *           enum:
 *             - missing_item
 *             - wrong_item
 *             - production_failure
 *             - other
 *         tags:
 *           description: A list o tags to add to the Claim Item
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Tag ID
 *               value:
 *                 type: string
 *                 description: Tag value
 *         images:
 *           description: A list of image URL's that will be associated with the Claim
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Image ID
 *               url:
 *                 type: string
 *                 description: Image URL
 *         metadata:
 *           description: An optional set of key-value pairs to hold additional information.
 *           type: object
 *           externalDocs:
 *             description: "Learn about the metadata attribute, and how to delete and update it."
 *             url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   shipping_methods:
 *     description: The Shipping Methods to send the additional Line Items with.
 *     type: array
 *     items:
 *        type: object
 *        properties:
 *          id:
 *            description: The ID of an existing Shipping Method
 *            type: string
 *          option_id:
 *            description: The ID of the Shipping Option to create a Shipping Method from
 *            type: string
 *          price:
 *            description: The price to charge for the Shipping Method
 *            type: integer
 *          data:
 *            description: An optional set of key-value pairs to hold additional information.
 *            type: object
 *   no_notification:
 *     description: If set to true no notification will be send related to this Swap.
 *     type: boolean
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostOrdersOrderClaimsClaimReq {
    claim_items?: Item[];
    shipping_methods?: ShippingMethod[];
    no_notification?: boolean;
    metadata?: Record<string, unknown>;
}
declare class ShippingMethod {
    id?: string;
    option_id?: string;
    price?: number;
    data?: Record<string, unknown>;
}
declare class Item {
    id: string;
    note?: string;
    reason?: string;
    images: Image[];
    tags: Tag[];
    metadata?: Record<string, unknown>;
}
declare class Image {
    id?: string;
    url?: string;
}
declare class Tag {
    id?: string;
    value?: string;
}
export declare class AdminPostOrdersOrderClaimsClaimParams extends FindParams {
}
