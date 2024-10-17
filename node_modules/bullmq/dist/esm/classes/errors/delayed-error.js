/**
 * DelayedError
 *
 * Error to be thrown when job is moved to delayed state
 * from job in active state.
 *
 */
export class DelayedError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
//# sourceMappingURL=delayed-error.js.map