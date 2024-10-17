/**
 * UnrecoverableError
 *
 * Error to move a job to failed even if the attemptsMade
 * are lower than the expected limit.
 *
 */
export declare class UnrecoverableError extends Error {
    constructor(message?: string);
}
