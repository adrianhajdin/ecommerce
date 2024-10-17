"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelayedError = void 0;
/**
 * DelayedError
 *
 * Error to be thrown when job is moved to delayed state
 * from job in active state.
 *
 */
class DelayedError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.DelayedError = DelayedError;
//# sourceMappingURL=delayed-error.js.map