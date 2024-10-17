import { BatchJob } from "../../../../models";
/**
 * @oas [post] /admin/batch-jobs
 * operationId: "PostBatchJobs"
 * summary: "Create a Batch Job"
 * description: "Create a Batch Job to be executed asynchronously in the Medusa backend. If `dry_run` is set to `true`, the batch job will not be executed until the it is confirmed,
 *  which can be done using the Confirm Batch Job API Route."
 * externalDocs:
 *   description: "How to create a batch job"
 *   url: "https://docs.medusajs.com/development/batch-jobs/create#create-batch-job"
 * x-authenticated: true
 * requestBody:
 *   content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostBatchesReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.batchJobs.create({
 *         type: 'product-export',
 *         context: {},
 *         dry_run: false
 *       }).then((({ batch_job }) => {
 *         console.log(batch_job.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateBatchJob } from "medusa-react"
 *
 *       const CreateBatchJob = () => {
 *         const createBatchJob = useAdminCreateBatchJob()
 *         // ...
 *
 *         const handleCreateBatchJob = () => {
 *           createBatchJob.mutate({
 *             type: "publish-products",
 *             context: {},
 *             dry_run: true
 *           }, {
 *             onSuccess: ({ batch_job }) => {
 *               console.log(batch_job)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateBatchJob
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/batch-jobs' \
 *       -H 'Content-Type: application/json' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       --data-raw '{
 *           "type": "product-export",
 *           "context": { }
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Batch Jobs
 * responses:
 *   201:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminBatchJobRes"
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
 * @schema AdminPostBatchesReq
 * type: object
 * description: The details of the batch job to create.
 * required:
 *   - type
 *   - context
 * properties:
 *   type:
 *     type: string
 *     description: >-
 *       The type of batch job to start, which is defined by the `batchType` property of the associated batch job strategy.
 *     example: product-export
 *   context:
 *     type: object
 *     description: Additional infomration regarding the batch to be used for processing.
 *     example:
 *       shape:
 *         prices:
 *           - region: null
 *             currency_code: "eur"
 *         dynamicImageColumnCount: 4
 *         dynamicOptionColumnCount: 2
 *       list_config:
 *         skip: 0
 *         take: 50
 *         order:
 *           created_at: "DESC"
 *         relations:
 *           - variants
 *           - variant.prices
 *           - images
 *   dry_run:
 *     type: boolean
 *     description: Set a batch job in dry_run mode, which would delay executing the batch job until it's confirmed.
 *     default: false
 */
export declare class AdminPostBatchesReq {
    type: string;
    context: BatchJob["context"];
    dry_run: boolean;
}
