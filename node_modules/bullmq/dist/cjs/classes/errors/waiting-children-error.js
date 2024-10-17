"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitingChildrenError = void 0;
/**
 * WaitingChildrenError
 *
 * Error to be thrown when job is moved to waiting-children state
 * from job in active state.
 *
 */
class WaitingChildrenError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.WaitingChildrenError = WaitingChildrenError;
//# sourceMappingURL=waiting-children-error.js.map