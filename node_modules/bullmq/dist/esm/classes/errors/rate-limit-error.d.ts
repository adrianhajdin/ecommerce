export declare const RATE_LIMIT_ERROR = "bullmq:rateLimitExceeded";
/**
 * RateLimitError
 *
 * Error to be thrown when queue reaches a rate limit.
 *
 */
export declare class RateLimitError extends Error {
    constructor(message?: string);
}
