export declare class StagedJob {
    id: string;
    event_name: string;
    data: Record<string, unknown>;
    options: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema StagedJob
 * title: "Staged Job"
 * description: "A staged job resource"
 * type: object
 * required:
 *   - data
 *   - event_name
 *   - id
 *   - options
 * properties:
 *   id:
 *     description: The staged job's ID
 *     type: string
 *     example: job_01F0YET7BZTARY9MKN1SJ7AAXF
 *   event_name:
 *     description: The name of the event
 *     type: string
 *     example: order.placed
 *   data:
 *     description: Data necessary for the job
 *     type: object
 *     example: {}
 *   option:
 *     description: The staged job's option
 *     type: object
 *     example: {}
 */
