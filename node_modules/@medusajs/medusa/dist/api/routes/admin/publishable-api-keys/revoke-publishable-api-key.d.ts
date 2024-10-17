import { Request, Response } from "express";
/**
 * @oas [post] /admin/publishable-api-keys/{id}/revoke
 * operationId: "PostPublishableApiKeysPublishableApiKeyRevoke"
 * summary: "Revoke a Publishable API Key"
 * description: "Revoke a Publishable API Key. Revoking the publishable API Key can't be undone, and the key can't be used in future requests."
 * parameters:
 *   - (path) id=* {string} The ID of the Publishable API Key.
 * x-authenticated: true
 * x-codegen:
 *   method: revoke
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.revoke(publishableApiKeyId)
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminRevokePublishableApiKey } from "medusa-react"
 *
 *       type Props = {
 *         publishableApiKeyId: string
 *       }
 *
 *       const PublishableApiKey = ({
 *         publishableApiKeyId
 *       }: Props) => {
 *         const revokeKey = useAdminRevokePublishableApiKey(
 *           publishableApiKeyId
 *         )
 *         // ...
 *
 *         const handleRevoke = () => {
 *           revokeKey.mutate(void 0, {
 *             onSuccess: ({ publishable_api_key }) => {
 *               console.log(publishable_api_key.revoked_at)
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
 *       curl -X POST '{backend_url}/admin/publishable-api-keys/{id}/revoke' \
 *       -H 'x-medusa-access-token: {api_token}'
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
