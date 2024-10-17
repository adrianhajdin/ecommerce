import { Request, Response } from "express";
import { ProductBatchSalesChannel } from "../../../../types/sales-channels";
/**
 * @oas [post] /admin/publishable-api-keys/{id}/sales-channels/batch
 * operationId: "PostPublishableApiKeySalesChannelsChannelsBatch"
 * summary: "Add Sales Channels"
 * description: "Add a list of sales channels to a publishable API key."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Publishable Api Key.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostPublishableApiKeySalesChannelsBatchReq"
 * x-codegen:
 *   method: addSalesChannelsBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.addSalesChannelsBatch(publishableApiKeyId, {
 *         sales_channel_ids: [
 *           {
 *             id: channelId
 *           }
 *         ]
 *       })
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminAddPublishableKeySalesChannelsBatch,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         publishableApiKeyId: string
 *       }
 *
 *       const PublishableApiKey = ({
 *         publishableApiKeyId
 *       }: Props) => {
 *         const addSalesChannels =
 *           useAdminAddPublishableKeySalesChannelsBatch(
 *             publishableApiKeyId
 *           )
 *         // ...
 *
 *         const handleAdd = (salesChannelId: string) => {
 *           addSalesChannels.mutate({
 *             sales_channel_ids: [
 *               {
 *                 id: salesChannelId,
 *               },
 *             ],
 *           }, {
 *             onSuccess: ({ publishable_api_key }) => {
 *               console.log(publishable_api_key.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PublishableApiKey
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/publishable-api-keys/{pak_id}/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "sales_channel_ids": [
 *             {
 *               "id": "{sales_channel_id}"
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Publishable Api Keys
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPublishableApiKeysRes"
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
 * @schema AdminPostPublishableApiKeySalesChannelsBatchReq
 * type: object
 * description: "The details of the sales channels to add to the publishable API key."
 * required:
 *   - sales_channel_ids
 * properties:
 *   sales_channel_ids:
 *     description: The IDs of the sales channels to add to the publishable API key
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the sales channel
 */
export declare class AdminPostPublishableApiKeySalesChannelsBatchReq {
    sales_channel_ids: ProductBatchSalesChannel[];
}
