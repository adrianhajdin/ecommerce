"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = exports.RATE_LIMIT_ERROR = void 0;
exports.RATE_LIMIT_ERROR = 'bullmq:rateLimitExceeded';
/**
 * RateLimitError
 *
 * Error to be thrown when queue reaches a rate limit.
 *
 */
class RateLimitError extends Error {
    constructor(message = exports.RATE_LIMIT_ERROR) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.RateLimitError = RateLimitError;
//# sourceMappingURL=rate-limit-error.js.map