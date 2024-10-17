/// <reference types="node" />
/// <reference types="node" />
import fs = require('fs');
import type { Umzug } from './umzug';
export declare type FileLockerOptions = {
    path: string;
    fs?: typeof fs;
};
/**
 * Simple locker using the filesystem. Only one lock can be held per file. An error will be thrown if the
 * lock file already exists.
 *
 * @example
 * const umzug = new Umzug({ ... })
 * FileLocker.attach(umzug, { path: 'path/to/lockfile' })
 *
 * @docs
 * To wait for the lock to be free instead of throwing, you could extend it (the below example uses `setInterval`,
 * but depending on your use-case, you may want to use a library with retry/backoff):
 *
 * @example
 * class WaitingFileLocker extends FileLocker {
 *   async getLock() {
 *     return new Promise(resolve => setInterval(
 *       () => super.getLock().then(resolve).catch(),
 *       500,
 *     )
 *   }
 * }
 *
 * const locker = new WaitingFileLocker({ path: 'path/to/lockfile' })
 * locker.attachTo(umzug)
 */
export declare class FileLocker {
    private readonly lockFile;
    private readonly fs;
    constructor(params: FileLockerOptions);
    /** Attach `beforeAll` and `afterAll` events to an umzug instance which use the specified filepath */
    static attach(umzug: Umzug, params: FileLockerOptions): void;
    /** Attach lock handlers to `beforeCommand` and `afterCommand` events on an umzug instance */
    attachTo(umzug: Umzug): void;
    private readFile;
    private writeFile;
    private removeFile;
    getLock(): Promise<void>;
    releaseLock(): Promise<void>;
}
