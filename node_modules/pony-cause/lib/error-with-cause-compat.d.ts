export class ErrorWithCause extends Error {
    constructor(message: string, { cause }?: {
        cause?: unknown;
    } | undefined);
    // We need to be stricter here because of esnext lib in TS 4.6 and TS 4.7
    cause?: Error;
}
