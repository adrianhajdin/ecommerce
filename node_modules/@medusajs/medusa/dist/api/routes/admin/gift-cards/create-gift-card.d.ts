/**
 * @oas [post] /admin/gift-cards
 * operationId: "PostGiftCards"
 * summary: "Create a Gift Card"
 * description: "Create a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostGiftCardsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.giftCards.create({
 *         region_id
 *       })
 *       .then(({ gift_card }) => {
 *         console.log(gift_card.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateGiftCard } from "medusa-react"
 *
 *       const CreateCustomGiftCards = () => {
 *         const createGiftCard = useAdminCreateGiftCard()
 *         // ...
 *
 *         const handleCreate = (
 *           regionId: string,
 *           value: number
 *         ) => {
 *           createGiftCard.mutate({
 *             region_id: regionId,
 *             value,
 *           }, {
 *             onSuccess: ({ gift_card }) => {
 *               console.log(gift_card.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateCustomGiftCards
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/gift-cards' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "region_id": "{region_id}"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Gift Cards
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGiftCardsRes"
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
 * @schema AdminPostGiftCardsReq
 * type: object
 * description: "The details of the gift card to create."
 * required:
 *   - region_id
 * properties:
 *   value:
 *     type: integer
 *     description: The value (excluding VAT) that the Gift Card should represent.
 *   is_disabled:
 *     type: boolean
 *     description: >-
 *       Whether the Gift Card is disabled on creation. If set to `true`, the gift card will not be available for customers.
 *   ends_at:
 *     type: string
 *     format: date-time
 *     description: The date and time at which the Gift Card should no longer be available.
 *   region_id:
 *     description: The ID of the Region in which the Gift Card can be used.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostGiftCardsReq {
    value?: number;
    ends_at?: Date;
    is_disabled?: boolean;
    region_id: string;
    metadata?: Record<string, unknown>;
}
