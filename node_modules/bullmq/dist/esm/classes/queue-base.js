import { EventEmitter } from 'events';
import { delay, DELAY_TIME_5, isNotConnectionError, isRedisInstance, } from '../utils';
import { RedisConnection } from './redis-connection';
import { Job } from './job';
import { QueueKeys } from './queue-keys';
import { Scripts } from './scripts';
/**
 * @class QueueBase
 * @extends EventEmitter
 *
 * @description Base class for all classes that need to interact with queues.
 * This class is normally not used directly, but extended by the other classes.
 *
 */
export class QueueBase extends EventEmitter {
    /**
     *
     * @param name - The name of the queue.
     * @param opts - Options for the queue.
     * @param Connection - An optional "Connection" class used to instantiate a Connection. This is useful for
     * testing with mockups and/or extending the Connection class and passing an alternate implementation.
     */
    constructor(name, opts = { connection: {} }, Connection = RedisConnection) {
        super();
        this.name = name;
        this.opts = opts;
        this.closed = false;
        this.opts = Object.assign({ prefix: 'bull' }, opts);
        if (!name) {
            throw new Error('Queue name must be provided');
        }
        if (name.includes(':')) {
            throw new Error('Queue name cannot contain :');
        }
        this.connection = new Connection(opts.connection, isRedisInstance(opts.connection), opts.blockingConnection, opts.skipVersionCheck);
        this.connection.on('error', (error) => this.emit('error', error));
        this.connection.on('close', () => {
            if (!this.closing) {
                this.emit('ioredis:close');
            }
        });
        const queueKeys = new QueueKeys(opts.prefix);
        this.qualifiedName = queueKeys.getQueueQualifiedName(name);
        this.keys = queueKeys.getKeys(name);
        this.toKey = (type) => queueKeys.toKey(name, type);
        this.setScripts();
    }
    /**
     * Returns a promise that resolves to a redis client. Normally used only by subclasses.
     */
    get client() {
        return this.connection.client;
    }
    setScripts() {
        this.scripts = new Scripts(this);
    }
    /**
     * Returns the version of the Redis instance the client is connected to,
     */
    get redisVersion() {
        return this.connection.redisVersion;
    }
    /**
     * Helper to easily extend Job class calls.
     */
    get Job() {
        return Job;
    }
    /**
     * Emits an event. Normally used by subclasses to emit events.
     *
     * @param event - The emitted event.
     * @param args -
     * @returns
     */
    emit(event, ...args) {
        try {
            return super.emit(event, ...args);
        }
        catch (err) {
            try {
                return super.emit('error', err);
            }
            catch (err) {
                // We give up if the error event also throws an exception.
                console.error(err);
                return false;
            }
        }
    }
    waitUntilReady() {
        return this.client;
    }
    base64Name() {
        return Buffer.from(this.name).toString('base64');
    }
    clientName(suffix = '') {
        const queueNameBase64 = this.base64Name();
        return `${this.opts.prefix}:${queueNameBase64}${suffix}`;
    }
    /**
     *
     * Closes the connection and returns a promise that resolves when the connection is closed.
     */
    async close() {
        if (!this.closing) {
            this.closing = this.connection.close();
        }
        await this.closing;
        this.closed = true;
    }
    /**
     *
     * Force disconnects a connection.
     */
    disconnect() {
        return this.connection.disconnect();
    }
    async checkConnectionError(fn, delayInMs = DELAY_TIME_5) {
        try {
            return await fn();
        }
        catch (error) {
            if (isNotConnectionError(error)) {
                this.emit('error', error);
            }
            if (!this.closing && delayInMs) {
                await delay(delayInMs);
            }
            else {
                return;
            }
        }
    }
}
//# sourceMappingURL=queue-base.js.map