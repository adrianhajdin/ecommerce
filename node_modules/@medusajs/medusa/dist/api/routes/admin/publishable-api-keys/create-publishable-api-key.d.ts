import { Request, Response } from "express";
/**
 * @oas [post] /admin/publishable-api-keys
 * operationId: "PostPublishableApiKeys"
 * summary: "Create Publishable API Key"
 * description: "Create a Publishable API Key."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostPublishableApiKeysReq"
 * x-authenticated: true
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.create({
 *        title
 *       })
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreatePublishableApiKey } from "medusa-react"
 *
 *       const CreatePublishableApiKey = () => {
 *         const createKey = useAdminCreatePublishableApiKey()
 *         // ...
 *
 *         const handleCreate = (title: string) => {
 *           createKey.mutate({
 *             title,
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
 *       export default CreatePublishableApiKey
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/publishable-api-keys' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Web API Key"
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
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
/**
 * @schema AdminPostPublishableApiKeysReq
 * type: object
 * description: "The details of the publishable API key to create."
 * required:
 *   - title
 * properties:
 *   title:
 *     description: The title of the publishable API key
 *     type: string
 */
export declare class AdminPostPublishableApiKeysReq {
    title: string;
}
