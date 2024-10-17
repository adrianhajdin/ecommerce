export class ErrorWithCause<T = undefined> extends Error {
    constructor(message: string, { cause }?: {
        cause?: T;
    });
    cause: T;
}
//# sourceMappingURL=error-with-cause.d.ts.map