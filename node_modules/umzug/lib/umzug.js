"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Umzug = exports.MigrationError = void 0;
const path = require("path");
const fs = require("fs");
const util_1 = require("util");
const storage_1 = require("./storage");
const templates = require("./templates");
const glob = require("glob");
const cli_1 = require("./cli");
const emittery = require("emittery");
const errorCause = require("pony-cause");
const types_1 = require("./types");
const globAsync = (0, util_1.promisify)(glob);
class MigrationError extends errorCause.ErrorWithCause {
    // TODO [>=4.0.0] Take a `{ cause: ... }` options bag like the default `Error`, it looks like this because of verror backwards-compatibility.
    constructor(migration, original) {
        super(`Migration ${migration.name} (${migration.direction}) failed: ${MigrationError.errorString(original)}`, {
            cause: original,
        });
        this.name = 'MigrationError';
        this.jse_cause = original;
        this.migration = migration;
    }
    // TODO [>=4.0.0] Remove this backwards-compatibility alias
    get info() {
        return this.migration;
    }
    static errorString(cause) {
        return cause instanceof Error
            ? `Original error: ${cause.message}`
            : `Non-error value thrown. See info for full props: ${cause}`;
    }
}
exports.MigrationError = MigrationError;
class Umzug extends emittery {
    /** creates a new Umzug instance */
    constructor(options) {
        var _b;
        super();
        this.options = options;
        this.storage = (0, storage_1.verifyUmzugStorage)((_b = options.storage) !== null && _b !== void 0 ? _b : new storage_1.JSONStorage());
        this.migrations = this.getMigrationsResolver(this.options.migrations);
    }
    logging(message) {
        var _b;
        (_b = this.options.logger) === null || _b === void 0 ? void 0 : _b.info(message);
    }
    /**
     * Get an UmzugCLI instance. This can be overriden in a subclass to add/remove commands - only use if you really know you need this,
     * and are OK to learn about/interact with the API of @rushstack/ts-command-line.
     */
    getCli(options) {
        return new cli_1.UmzugCLI(this, options);
    }
    /**
     * 'Run' an umzug instance as a CLI. This will read `process.argv`, execute commands based on that, and call
     * `process.exit` after running. If that isn't what you want, stick to the programmatic API.
     * You probably want to run only if a file is executed as the process's 'main' module with something like:
     * @example
     * if (require.main === module) {
     *   myUmzugInstance.runAsCLI()
     * }
     */
    async runAsCLI(argv) {
        const cli = this.getCli();
        return cli.execute(argv);
    }
    /** Get the list of migrations which have already been applied */
    async executed() {
        return this.runCommand('executed', async ({ context }) => {
            const list = await this._executed(context);
            // We do the following to not expose the `up` and `down` functions to the user
            return list.map(m => ({ name: m.name, path: m.path }));
        });
    }
    /** Get the list of migrations which have already been applied */
    async _executed(context) {
        const [migrations, executedNames] = await Promise.all([
            this.migrations(context),
            this.storage.executed({ context }),
        ]);
        const executedSet = new Set(executedNames);
        return migrations.filter(m => executedSet.has(m.name));
    }
    /** Get the list of migrations which are yet to be applied */
    async pending() {
        return this.runCommand('pending', async ({ context }) => {
            const list = await this._pending(context);
            // We do the following to not expose the `up` and `down` functions to the user
            return list.map(m => ({ name: m.name, path: m.path }));
        });
    }
    async _pending(context) {
        const [migrations, executedNames] = await Promise.all([
            this.migrations(context),
            this.storage.executed({ context }),
        ]);
        const executedSet = new Set(executedNames);
        return migrations.filter(m => !executedSet.has(m.name));
    }
    async runCommand(command, cb) {
        const context = await this.getContext();
        await this.emit('beforeCommand', { command, context });
        try {
            return await cb({ context });
        }
        finally {
            await this.emit('afterCommand', { command, context });
        }
    }
    /**
     * Apply migrations. By default, runs all pending migrations.
     * @see MigrateUpOptions for other use cases using `to`, `migrations` and `rerun`.
     */
    async up(options = {}) {
        const eligibleMigrations = async (context) => {
            var _b;
            if (options.migrations && options.rerun === types_1.RerunBehavior.ALLOW) {
                // Allow rerun means the specified migrations should be run even if they've run before - so get all migrations, not just pending
                const list = await this.migrations(context);
                return this.findMigrations(list, options.migrations);
            }
            if (options.migrations && options.rerun === types_1.RerunBehavior.SKIP) {
                const executedNames = new Set((await this._executed(context)).map(m => m.name));
                const filteredMigrations = options.migrations.filter(m => !executedNames.has(m));
                return this.findMigrations(await this.migrations(context), filteredMigrations);
            }
            if (options.migrations) {
                return this.findMigrations(await this._pending(context), options.migrations);
            }
            const allPending = await this._pending(context);
            let sliceIndex = (_b = options.step) !== null && _b !== void 0 ? _b : allPending.length;
            if (options.to) {
                sliceIndex = this.findNameIndex(allPending, options.to) + 1;
            }
            return allPending.slice(0, sliceIndex);
        };
        return this.runCommand('up', async ({ context }) => {
            const toBeApplied = await eligibleMigrations(context);
            for (const m of toBeApplied) {
                const start = Date.now();
                const params = { name: m.name, path: m.path, context };
                this.logging({ event: 'migrating', name: m.name });
                await this.emit('migrating', params);
                try {
                    await m.up(params);
                }
                catch (e) {
                    throw new MigrationError({ direction: 'up', ...params }, e);
                }
                await this.storage.logMigration(params);
                const duration = (Date.now() - start) / 1000;
                this.logging({ event: 'migrated', name: m.name, durationSeconds: duration });
                await this.emit('migrated', params);
            }
            return toBeApplied.map(m => ({ name: m.name, path: m.path }));
        });
    }
    /**
     * Revert migrations. By default, the last executed migration is reverted.
     * @see MigrateDownOptions for other use cases using `to`, `migrations` and `rerun`.
     */
    async down(options = {}) {
        const eligibleMigrations = async (context) => {
            var _b;
            if (options.migrations && options.rerun === types_1.RerunBehavior.ALLOW) {
                const list = await this.migrations(context);
                return this.findMigrations(list, options.migrations);
            }
            if (options.migrations && options.rerun === types_1.RerunBehavior.SKIP) {
                const pendingNames = new Set((await this._pending(context)).map(m => m.name));
                const filteredMigrations = options.migrations.filter(m => !pendingNames.has(m));
                return this.findMigrations(await this.migrations(context), filteredMigrations);
            }
            if (options.migrations) {
                return this.findMigrations(await this._executed(context), options.migrations);
            }
            const executedReversed = (await this._executed(context)).slice().reverse();
            let sliceIndex = (_b = options.step) !== null && _b !== void 0 ? _b : 1;
            if (options.to === 0 || options.migrations) {
                sliceIndex = executedReversed.length;
            }
            else if (options.to) {
                sliceIndex = this.findNameIndex(executedReversed, options.to) + 1;
            }
            return executedReversed.slice(0, sliceIndex);
        };
        return this.runCommand('down', async ({ context }) => {
            var _b;
            const toBeReverted = await eligibleMigrations(context);
            for (const m of toBeReverted) {
                const start = Date.now();
                const params = { name: m.name, path: m.path, context };
                this.logging({ event: 'reverting', name: m.name });
                await this.emit('reverting', params);
                try {
                    await ((_b = m.down) === null || _b === void 0 ? void 0 : _b.call(m, params));
                }
                catch (e) {
                    throw new MigrationError({ direction: 'down', ...params }, e);
                }
                await this.storage.unlogMigration(params);
                const duration = Number.parseFloat(((Date.now() - start) / 1000).toFixed(3));
                this.logging({ event: 'reverted', name: m.name, durationSeconds: duration });
                await this.emit('reverted', params);
            }
            return toBeReverted.map(m => ({ name: m.name, path: m.path }));
        });
    }
    async create(options) {
        await this.runCommand('create', async ({ context }) => {
            var _b, _c, _d, _e;
            const isoDate = new Date().toISOString();
            const prefixes = {
                TIMESTAMP: isoDate.replace(/\.\d{3}Z$/, '').replace(/\W/g, '.'),
                DATE: isoDate.split('T')[0].replace(/\W/g, '.'),
                NONE: '',
            };
            const prefixType = (_b = options.prefix) !== null && _b !== void 0 ? _b : 'TIMESTAMP';
            const fileBasename = [prefixes[prefixType], options.name].filter(Boolean).join('.');
            const allowedExtensions = options.allowExtension
                ? [options.allowExtension]
                : ['.js', '.cjs', '.mjs', '.ts', '.sql'];
            const existing = await this.migrations(context);
            const last = existing[existing.length - 1];
            const folder = options.folder || ((_c = this.options.create) === null || _c === void 0 ? void 0 : _c.folder) || ((last === null || last === void 0 ? void 0 : last.path) && path.dirname(last.path));
            if (!folder) {
                throw new Error(`Couldn't infer a directory to generate migration file in. Pass folder explicitly`);
            }
            const filepath = path.join(folder, fileBasename);
            if (!options.allowConfusingOrdering) {
                const confusinglyOrdered = existing.find(e => e.path && e.path >= filepath);
                if (confusinglyOrdered) {
                    throw new Error(`Can't create ${fileBasename}, since it's unclear if it should run before or after existing migration ${confusinglyOrdered.name}. Use allowConfusingOrdering to bypass this error.`);
                }
            }
            const template = (_e = (_d = this.options.create) === null || _d === void 0 ? void 0 : _d.template) !== null && _e !== void 0 ? _e : Umzug.defaultCreationTemplate;
            const toWrite = await template(filepath);
            if (toWrite.length === 0) {
                toWrite.push([filepath, '']);
            }
            toWrite.forEach(pair => {
                if (!Array.isArray(pair) || pair.length !== 2) {
                    throw new Error(`Expected [filepath, content] pair. Check that the file template function returns an array of pairs.`);
                }
                const ext = path.extname(pair[0]);
                if (!allowedExtensions.includes(ext)) {
                    const allowStr = allowedExtensions.join(', ');
                    const message = `Extension ${ext} not allowed. Allowed extensions are ${allowStr}. See help for allowExtension to avoid this error.`;
                    throw new Error(message);
                }
                fs.mkdirSync(path.dirname(pair[0]), { recursive: true });
                fs.writeFileSync(pair[0], pair[1]);
                this.logging({ event: 'created', path: pair[0] });
            });
            if (!options.skipVerify) {
                const [firstFilePath] = toWrite[0];
                const pending = await this._pending(context);
                if (!pending.some(p => p.path && path.resolve(p.path) === path.resolve(firstFilePath))) {
                    const paths = pending.map(p => p.path).join(', ');
                    throw new Error(`Expected ${firstFilePath} to be a pending migration but it wasn't! Pending migration paths: ${paths}. You should investigate this. Use skipVerify to bypass this error.`);
                }
            }
        });
    }
    static defaultCreationTemplate(filepath) {
        const ext = path.extname(filepath);
        if (ext === '.js' || ext === '.cjs') {
            return [[filepath, templates.js]];
        }
        if (ext === '.ts') {
            return [[filepath, templates.ts]];
        }
        if (ext === '.mjs') {
            return [[filepath, templates.mjs]];
        }
        if (ext === '.sql') {
            const downFilepath = path.join(path.dirname(filepath), 'down', path.basename(filepath));
            return [
                [filepath, templates.sqlUp],
                [downFilepath, templates.sqlDown],
            ];
        }
        return [];
    }
    findNameIndex(migrations, name) {
        const index = migrations.findIndex(m => m.name === name);
        if (index === -1) {
            throw new Error(`Couldn't find migration to apply with name ${JSON.stringify(name)}`);
        }
        return index;
    }
    findMigrations(migrations, names) {
        const map = new Map(migrations.map(m => [m.name, m]));
        return names.map(name => {
            const migration = map.get(name);
            if (!migration) {
                throw new Error(`Couldn't find migration to apply with name ${JSON.stringify(name)}`);
            }
            return migration;
        });
    }
    async getContext() {
        const { context = {} } = this.options;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return typeof context === 'function' ? context() : context;
    }
    /** helper for parsing input migrations into a callback returning a list of ready-to-run migrations */
    getMigrationsResolver(inputMigrations) {
        var _b;
        if (Array.isArray(inputMigrations)) {
            return async () => inputMigrations;
        }
        if (typeof inputMigrations === 'function') {
            // Lazy migrations definition, recurse.
            return async (ctx) => {
                const resolved = await inputMigrations(ctx);
                return this.getMigrationsResolver(resolved)(ctx);
            };
        }
        const fileGlob = inputMigrations.glob;
        const [globString, globOptions] = Array.isArray(fileGlob) ? fileGlob : [fileGlob];
        const resolver = (_b = inputMigrations.resolve) !== null && _b !== void 0 ? _b : Umzug.defaultResolver;
        return async (context) => {
            const paths = await globAsync(globString, { ...globOptions, absolute: true });
            return paths.map(unresolvedPath => {
                const filepath = path.resolve(unresolvedPath);
                const name = path.basename(filepath);
                return {
                    path: filepath,
                    ...resolver({ name, path: filepath, context }),
                };
            });
        };
    }
}
exports.Umzug = Umzug;
_a = Umzug;
Umzug.defaultResolver = ({ name, path: filepath }) => {
    if (!filepath) {
        throw new Error(`Can't use default resolver for non-filesystem migrations`);
    }
    const ext = path.extname(filepath);
    const canRequire = ext === '.js' || ext === '.cjs' || ext === '.ts';
    const languageSpecificHelp = {
        '.ts': "TypeScript files can be required by adding `ts-node` as a dependency and calling `require('ts-node/register')` at the program entrypoint before running migrations.",
        '.sql': 'Try writing a resolver which reads file content and executes it as a sql query.',
    };
    if (!canRequire) {
        const errorParts = [
            `No resolver specified for file ${filepath}.`,
            languageSpecificHelp[ext],
            `See docs for guidance on how to write a custom resolver.`,
        ];
        throw new Error(errorParts.filter(Boolean).join(' '));
    }
    const getModule = () => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return require(filepath);
        }
        catch (e) {
            if (e instanceof SyntaxError && filepath.endsWith('.ts')) {
                e.message += '\n\n' + languageSpecificHelp['.ts'];
            }
            throw e;
        }
    };
    return {
        name,
        path: filepath,
        up: async ({ context }) => getModule().up({ path: filepath, name, context }),
        down: async ({ context }) => getModule().down({ path: filepath, name, context }),
    };
};
//# sourceMappingURL=umzug.js.map