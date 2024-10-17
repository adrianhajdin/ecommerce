"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueEvents = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils");
const queue_base_1 = require("./queue-base");
/**
 * The QueueEvents class is used for listening to the global events
 * emitted by a given queue.
 *
 * This class requires a dedicated redis connection.
 *
 */
class QueueEvents extends queue_base_1.QueueBase {
    constructor(name, _a = {
        connection: {},
    }, Connection) {
        var { connection, autorun = true } = _a, opts = tslib_1.__rest(_a, ["connection", "autorun"]);
        super(name, Object.assign(Object.assign({}, opts), { connection: (0, utils_1.isRedisInstance)(connection)
                ? connection.duplicate()
                : connection, blockingConnection: true }), Connection);
        this.running = false;
        this.opts = Object.assign({
            blockingTimeout: 10000,
        }, this.opts);
        if (autorun) {
            this.run().catch(error => this.emit('error', error));
        }
    }
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    off(eventName, listener) {
        super.off(eventName, listener);
        return this;
    }
    on(event, listener) {
        super.on(event, listener);
        return this;
    }
    once(event, listener) {
        super.once(event, listener);
        return this;
    }
    /**
     * Manually starts running the event consumming loop. This shall be used if you do not
     * use the default "autorun" option on the constructor.
     */
    async run() {
        if (!this.running) {
            try {
                this.running = true;
                const client = await this.client;
                // TODO: Planed for deprecation as it has no really a use case
                try {
                    await client.client('SETNAME', this.clientName(utils_1.QUEUE_EVENT_SUFFIX));
                }
                catch (err) {
                    if (!utils_1.clientCommandMessageReg.test(err.message)) {
                        throw err;
                    }
                }
                await this.consumeEvents(client);
            }
            catch (error) {
                this.running = false;
                throw error;
            }
        }
        else {
            throw new Error('Queue Events is already running.');
        }
    }
    async consumeEvents(client) {
        const opts = this.opts;
        const key = this.keys.events;
        let id = opts.lastEventId || '$';
        while (!this.closing) {
            // Cast to actual return type, see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44301
            const data = await this.checkConnectionError(() => client.xread('BLOCK', opts.blockingTimeout, 'STREAMS', key, id));
            if (data) {
                const stream = data[0];
                const events = stream[1];
                for (let i = 0; i < events.length; i++) {
                    id = events[i][0];
                    const args = (0, utils_1.array2obj)(events[i][1]);
                    //
                    // TODO: we may need to have a separate xtream for progress data
                    // to avoid this hack.
                    switch (args.event) {
                        case 'progress':
                            args.data = JSON.parse(args.data);
                            break;
                        case 'completed':
                            args.returnvalue = JSON.parse(args.returnvalue);
                            break;
                    }
                    const { event } = args, restArgs = tslib_1.__rest(args, ["event"]);
                    if (event === 'drained') {
                        this.emit(event, id);
                    }
                    else {
                        this.emit(event, restArgs, id);
                        this.emit(`${event}:${restArgs.jobId}`, restArgs, id);
                    }
                }
            }
        }
    }
    /**
     * Stops consuming events and close the underlying Redis connection if necessary.
     *
     * @returns
     */
    close() {
        if (!this.closing) {
            this.closing = this.disconnect();
        }
        return this.closing;
    }
}
exports.QueueEvents = QueueEvents;
//# sourceMappingURL=queue-events.js.map