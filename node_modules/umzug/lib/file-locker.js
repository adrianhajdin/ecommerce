"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLocker = void 0;
const fs = require("fs");
const path = require("path");
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
class FileLocker {
    constructor(params) {
        var _a;
        this.lockFile = params.path;
        this.fs = (_a = params.fs) !== null && _a !== void 0 ? _a : fs;
    }
    /** Attach `beforeAll` and `afterAll` events to an umzug instance which use the specified filepath */
    static attach(umzug, params) {
        const locker = new FileLocker(params);
        locker.attachTo(umzug);
    }
    /** Attach lock handlers to `beforeCommand` and `afterCommand` events on an umzug instance */
    attachTo(umzug) {
        umzug.on('beforeCommand', async () => this.getLock());
        umzug.on('afterCommand', async () => this.releaseLock());
    }
    async readFile(filepath) {
        return this.fs.promises.readFile(filepath).then(buf => buf.toString(), () => undefined);
    }
    async writeFile(filepath, content) {
        await this.fs.promises.mkdir(path.dirname(filepath), { recursive: true });
        await this.fs.promises.writeFile(filepath, content);
    }
    async removeFile(filepath) {
        await this.fs.promises.unlink(filepath);
    }
    async getLock() {
        const existing = await this.readFile(this.lockFile);
        if (existing) {
            throw new Error(`Can't acquire lock. ${this.lockFile} exists`);
        }
        await this.writeFile(this.lockFile, 'lock');
    }
    async releaseLock() {
        const existing = await this.readFile(this.lockFile);
        if (!existing) {
            throw new Error(`Nothing to unlock`);
        }
        await this.removeFile(this.lockFile);
    }
}
exports.FileLocker = FileLocker;
//# sourceMappingURL=file-locker.js.map