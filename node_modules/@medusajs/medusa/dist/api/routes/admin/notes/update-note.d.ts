/**
 * @oas [post] /admin/notes/{id}
 * operationId: "PostNotesNote"
 * summary: "Update a Note"
 * x-authenticated: true
 * description: "Update a Note's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Note
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostNotesNoteReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.update(noteId, {
 *        value: "We delivered this order"
 *       })
 *       .then(({ note }) => {
 *         console.log(note.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateNote } from "medusa-react"
 *
 *       type Props = {
 *         noteId: string
 *       }
 *
 *       const Note = ({ noteId }: Props) => {
 *         const updateNote = useAdminUpdateNote(noteId)
 *         // ...
 *
 *         const handleUpdate = (
 *           value: string
 *         ) => {
 *           updateNote.mutate({
 *             value
 *           }, {
 *             onSuccess: ({ note }) => {
 *               console.log(note.value)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Note
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/notes/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
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
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostNotesNoteReq
 * type: object
 * description: "The details to update of the note."
 * required:
 *   - value
 * properties:
 *   value:
 *     type: string
 *     description: The description of the Note.
 */
export declare class AdminPostNotesNoteReq {
    value: string;
}
