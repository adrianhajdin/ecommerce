class Node {
    constructor(value) {
        this.value = undefined;
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length += 1;
        return newNode;
    }
    shift() {
        if (!this.length) {
            return null;
        }
        else {
            const head = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return head;
        }
    }
}
/**
 * AsyncFifoQueue
 *
 * A minimal FIFO queue for asynchronous operations. Allows adding asynchronous operations
 * and consume them in the order they are resolved.
 */
export class AsyncFifoQueue {
    constructor(ignoreErrors = false) {
        this.ignoreErrors = ignoreErrors;
        /**
         * A queue of completed promises. As the pending
         * promises are resolved, they are added to this queue.
         */
        this.queue = new LinkedList();
        /**
         * A set of pending promises.
         */
        this.pending = new Set();
        this.newPromise();
    }
    add(promise) {
        this.pending.add(promise);
        promise
            .then(data => {
            this.pending.delete(promise);
            if (this.queue.length === 0) {
                this.resolvePromise(data);
            }
            this.queue.push(data);
        })
            .catch(err => {
            // Ignore errors
            if (this.ignoreErrors) {
                this.queue.push(undefined);
            }
            this.pending.delete(promise);
            this.rejectPromise(err);
        });
    }
    async waitAll() {
        await Promise.all(this.pending);
    }
    numTotal() {
        return this.pending.size + this.queue.length;
    }
    numPending() {
        return this.pending.size;
    }
    numQueued() {
        return this.queue.length;
    }
    resolvePromise(data) {
        this.resolve(data);
        this.newPromise();
    }
    rejectPromise(err) {
        this.reject(err);
        this.newPromise();
    }
    newPromise() {
        this.nextPromise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    async wait() {
        return this.nextPromise;
    }
    async fetch() {
        var _a;
        if (this.pending.size === 0 && this.queue.length === 0) {
            return;
        }
        while (this.queue.length === 0) {
            try {
                await this.wait();
            }
            catch (err) {
                // Ignore errors
                if (!this.ignoreErrors) {
                    console.error('Unexpected Error in AsyncFifoQueue', err);
                }
            }
        }
        return (_a = this.queue.shift()) === null || _a === void 0 ? void 0 : _a.value;
    }
}
//# sourceMappingURL=async-fifo-queue.js.map