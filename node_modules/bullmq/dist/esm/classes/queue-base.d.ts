/// <reference types="node" />
import { EventEmitter } from 'events';
import { QueueBaseOptions, RedisClient } from '../interfaces';
import { MinimalQueue } from '../types';
import { RedisConnection } from './redis-connection';
import { Job } from './job';
import { KeysMap } from './queue-keys';
import { Scripts } from './scripts';
/**
 * @class QueueBase
 * @extends EventEmitter
 *
 * @description Base class for all classes that need to interact with queues.
 * This class is normally not used directly, but extended by the other classes.
 *
 */
export declare class QueueBase extends EventEmitter implements MinimalQueue {
    readonly name: string;
    opts: QueueBaseOptions;
    toKey: (type: string) => string;
    keys: KeysMap;
    closing: Promise<void> | undefined;
    protected closed: boolean;
    protected scripts: Scripts;
    protected connection: RedisConnection;
    readonly qualifiedName: string;
    /**
     *
     * @param name - The name of the queue.
     * @param opts - Options for the queue.
     * @param Connection - An optional "Connection" class used to instantiate a Connection. This is useful for
     * testing with mockups and/or extending the Connection class and passing an alternate implementation.
     */
    constructor(name: string, opts?: QueueBaseOptions, Connection?: typeof RedisConnection);
    /**
     * Returns a promise that resolves to a redis client. Normally used only by subclasses.
     */
    get client(): Promise<RedisClient>;
    protected setScripts(): void;
    /**
     * Returns the version of the Redis instance the client is connected to,
     */
    get redisVersion(): string;
    /**
     * Helper to easily extend Job class calls.
     */
    protected get Job(): typeof Job;
    /**
     * Emits an event. Normally used by subclasses to emit events.
     *
     * @param event - The emitted event.
     * @param args -
     * @returns
     */
    emit(event: string | symbol, ...args: any[]): boolean;
    waitUntilReady(): Promise<RedisClient>;
    protected base64Name(): string;
    protected clientName(suffix?: string): string;
    /**
     *
     * Closes the connection and returns a promise that resolves when the connection is closed.
     */
    close(): Promise<void>;
    /**
     *
     * Force disconnects a connection.
     */
    disconnect(): Promise<void>;
    protected checkConnectionError<T>(fn: () => Promise<T>, delayInMs?: number): Promise<T | undefined>;
}
