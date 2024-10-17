"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrecoverableError = void 0;
/**
 * UnrecoverableError
 *
 * Error to move a job to failed even if the attemptsMade
 * are lower than the expected limit.
 *
 */
class UnrecoverableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.UnrecoverableError = UnrecoverableError;
//# sourceMappingURL=unrecoverable-error.js.map