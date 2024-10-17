/**
 * @oas [post] /admin/notes
 * operationId: "PostNotes"
 * summary: "Create a Note"
 * description: "Create a Note which can be associated with any resource."
 * x-authenticated: true
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostNotesReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.create({
 *         resource_id,
 *         resource_type: "order",
 *         value: "We delivered this order"
 *       })
 *       .then(({ note }) => {
 *         console.log(note.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateNote } from "medusa-react"
 *
 *       const CreateNote = () => {
 *         const createNote = useAdminCreateNote()
 *         // ...
 *
 *         const handleCreate = () => {
 *           createNote.mutate({
 *             resource_id: "order_123",
 *             resource_type: "order",
 *             value: "We delivered this order"
 *           }, {
 *             onSuccess: ({ note }) => {
 *               console.log(note.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateNote
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/notes' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "resource_id": "{resource_id}",
 *           "resource_type": "order",
 *           "value": "We delivered this order"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notes
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotesRes"
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
 *
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostNotesReq
 * type: object
 * description: "The details of the note to be created."
 * required:
 *   - resource_id
 *   - resource_type
 *   - value
 * properties:
 *   resource_id:
 *     type: string
 *     description: The ID of the resource which the Note relates to. For example, an order ID.
 *   resource_type:
 *     type: string
 *     description: The type of resource which the Note relates to. For example, `order`.
 *   value:
 *     type: string
 *     description: The content of the Note to create.
 */
export declare class AdminPostNotesReq {
    resource_id: string;
    resource_type: string;
    value: string;
}
