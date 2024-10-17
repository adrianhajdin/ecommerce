export const RATE_LIMIT_ERROR = 'bullmq:rateLimitExceeded';
/**
 * RateLimitError
 *
 * Error to be thrown when queue reaches a rate limit.
 *
 */
export class RateLimitError extends Error {
    constructor(message = RATE_LIMIT_ERROR) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
//# sourceMappingURL=rate-limit-error.js.map