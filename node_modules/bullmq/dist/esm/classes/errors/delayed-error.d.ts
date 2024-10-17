/**
 * DelayedError
 *
 * Error to be thrown when job is moved to delayed state
 * from job in active state.
 *
 */
export declare class DelayedError extends Error {
    constructor(message?: string);
}
