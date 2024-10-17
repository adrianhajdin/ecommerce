import { Request, Response } from "express";
/**
 * @oas [post] /admin/sales-channels
 * operationId: "PostSalesChannels"
 * summary: "Create a Sales Channel"
 * description: "Create a Sales Channel."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostSalesChannelsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.salesChannels.create({
 *         name: "App",
 *         description: "Mobile app"
 *       })
 *       .then(({ sales_channel }) => {
 *         console.log(sales_channel.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateSalesChannel } from "medusa-react"
 *
 *       const CreateSalesChannel = () => {
 *         const createSalesChannel = useAdminCreateSalesChannel()
 *         // ...
 *
 *         const handleCreate = (name: string, description: string) => {
 *           createSalesChannel.mutate({
 *             name,
 *             description,
 *           }, {
 *             onSuccess: ({ sales_channel }) => {
 *               console.log(sales_channel.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateSalesChannel
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/sales-channels' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "App"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Sales Channels
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminSalesChannelsRes"
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
 * @schema AdminPostSalesChannelsReq
 * type: object
 * description: "The details of the sales channel to create."
 * required:
 *   - name
 * properties:
 *   name:
 *     description: The name of the Sales Channel
 *     type: string
 *   description:
 *     description: The description of the Sales Channel
 *     type: string
 *   is_disabled:
 *     description: Whether the Sales Channel is disabled.
 *     type: boolean
 */
export declare class AdminPostSalesChannelsReq {
    name: string;
    description: string;
    is_disabled?: boolean;
}
