/**
 * AsyncFifoQueue
 *
 * A minimal FIFO queue for asynchronous operations. Allows adding asynchronous operations
 * and consume them in the order they are resolved.
 */
export declare class AsyncFifoQueue<T> {
    private ignoreErrors;
    /**
     * A queue of completed promises. As the pending
     * promises are resolved, they are added to this queue.
     */
    private queue;
    /**
     * A set of pending promises.
     */
    private pending;
    /**
     * The next promise to be resolved. As soon as a pending promise
     * is resolved, this promise is resolved with the result of the
     * pending promise.
     */
    private nextPromise;
    private resolve;
    private reject;
    constructor(ignoreErrors?: boolean);
    add(promise: Promise<T>): void;
    waitAll(): Promise<void>;
    numTotal(): number;
    numPending(): number;
    numQueued(): number;
    private resolvePromise;
    private rejectPromise;
    private newPromise;
    private wait;
    fetch(): Promise<T | void>;
}
