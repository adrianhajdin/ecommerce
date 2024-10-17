"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContainer = void 0;
const util = require("util");
const list_modules_1 = require("./list-modules");
const load_modules_1 = require("./load-modules");
const resolvers_1 = require("./resolvers");
const utils_1 = require("./utils");
const injection_mode_1 = require("./injection-mode");
const lifetime_1 = require("./lifetime");
const errors_1 = require("./errors");
const load_module_native_js_1 = require("./load-module-native.js");
/**
 * Family tree symbol.
 */
const FAMILY_TREE = Symbol('familyTree');
/**
 * Roll Up Registrations symbol.
 */
const ROLL_UP_REGISTRATIONS = Symbol('rollUpRegistrations');
/**
 * The string representation when calling toString.
 */
const CRADLE_STRING_TAG = 'AwilixContainerCradle';
/**
 * Creates an Awilix container instance.
 *
 * @param {Function} options.require
 * The require function to use. Defaults to require.
 *
 * @param {string} options.injectionMode
 * The mode used by the container to resolve dependencies. Defaults to 'Proxy'.
 *
 * @return {AwilixContainer<T>}
 * The container.
 */
function createContainer(options, parentContainer) {
    options = Object.assign({ injectionMode: injection_mode_1.InjectionMode.PROXY }, options);
    // The resolution stack is used to keep track
    // of what modules are being resolved, so when
    // an error occurs, we have something to present
    // to the poor developer who fucked up.
    let resolutionStack = [];
    // Internal registration store for this container.
    const registrations = {};
    /**
     * The `Proxy` that is passed to functions so they can resolve their dependencies without
     * knowing where they come from. I call it the "cradle" because
     * it is where registered things come to life at resolution-time.
     */
    const cradle = new Proxy({
        [util.inspect.custom]: toStringRepresentationFn,
    }, {
        /**
         * The `get` handler is invoked whenever a get-call for `container.cradle.*` is made.
         *
         * @param  {object} _target
         * The proxy target. Irrelevant.
         *
         * @param  {string} name
         * The property name.
         *
         * @return {*}
         * Whatever the resolve call returns.
         */
        get: (_target, name) => resolve(name),
        /**
         * Setting things on the cradle throws an error.
         *
         * @param  {object} target
         * @param  {string} name
         */
        set: (_target, name) => {
            throw new Error(`Attempted setting property "${name}" on container cradle - this is not allowed.`);
        },
        /**
         * Used for `Object.keys`.
         */
        ownKeys() {
            return Array.from(cradle);
        },
        /**
         * Used for `Object.keys`.
         */
        getOwnPropertyDescriptor(target, key) {
            const regs = rollUpRegistrations();
            if (Object.getOwnPropertyDescriptor(regs, key)) {
                return {
                    enumerable: true,
                    configurable: true,
                };
            }
            return undefined;
        },
    });
    // The container being exposed.
    const container = {
        options,
        cradle,
        inspect,
        cache: new Map(),
        loadModules,
        createScope,
        register: register,
        build,
        resolve,
        hasRegistration,
        dispose,
        getRegistration,
        [util.inspect.custom]: inspect,
        // tslint:disable-next-line
        [ROLL_UP_REGISTRATIONS]: rollUpRegistrations,
        get registrations() {
            return rollUpRegistrations();
        },
    };
    // Track the family tree.
    const familyTree = parentContainer
        ? [container].concat(parentContainer[FAMILY_TREE])
        : [container];
    container[FAMILY_TREE] = familyTree;
    // We need a reference to the root container,
    // so we can retrieve and store singletons.
    const rootContainer = (0, utils_1.last)(familyTree);
    return container;
    /**
     * Used by util.inspect (which is used by console.log).
     */
    function inspect() {
        return `[AwilixContainer (${parentContainer ? 'scoped, ' : ''}registrations: ${Object.keys(container.registrations).length})]`;
    }
    /**
     * Rolls up registrations from the family tree.
     *
     * This can get pretty expensive. Only used when
     * iterating the cradle proxy, which is not something
     * that should be done in day-to-day use, mostly for debugging.
     *
     * @param {boolean} bustCache
     * Forces a recomputation.
     *
     * @return {object}
     * The merged registrations object.
     */
    function rollUpRegistrations() {
        return Object.assign(Object.assign({}, (parentContainer && parentContainer[ROLL_UP_REGISTRATIONS]())), registrations);
    }
    /**
     * Used for providing an iterator to the cradle.
     */
    function* cradleIterator() {
        const registrations = rollUpRegistrations();
        for (const registrationName in registrations) {
            yield registrationName;
        }
    }
    /**
     * Creates a scoped container.
     *
     * @return {object}
     * The scoped container.
     */
    function createScope() {
        return createContainer(options, container);
    }
    /**
     * Adds a registration for a resolver.
     */
    function register(arg1, arg2) {
        const obj = (0, utils_1.nameValueToObject)(arg1, arg2);
        const keys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
        for (const key of keys) {
            const value = obj[key];
            registrations[key] = value;
        }
        return container;
    }
    /**
     * Returned to `util.inspect` and Symbol.toStringTag when attempting to resolve
     * a custom inspector function on the cradle.
     */
    function toStringRepresentationFn() {
        return Object.prototype.toString.call(cradle);
    }
    /**
     * Recursively gets a registration by name if it exists in the
     * current container or any of its' parents.
     *
     * @param name {string | symbol} The registration name.
     */
    function getRegistration(name) {
        const resolver = registrations[name];
        if (resolver) {
            return resolver;
        }
        if (parentContainer) {
            return parentContainer.getRegistration(name);
        }
        return null;
    }
    /**
     * Resolves the registration with the given name.
     *
     * @param {string | symbol} name
     * The name of the registration to resolve.
     *
     * @param {ResolveOptions} resolveOpts
     * The resolve options.
     *
     * @return {any}
     * Whatever was resolved.
     */
    function resolve(name, resolveOpts) {
        resolveOpts = resolveOpts || {};
        try {
            // Grab the registration by name.
            const resolver = getRegistration(name);
            if (resolutionStack.indexOf(name) > -1) {
                throw new errors_1.AwilixResolutionError(name, resolutionStack, 'Cyclic dependencies detected.');
            }
            // Used in JSON.stringify.
            if (name === 'toJSON') {
                return toStringRepresentationFn;
            }
            // Used in console.log.
            if (name === 'constructor') {
                return createContainer;
            }
            if (!resolver) {
                // Checks for some edge cases.
                switch (name) {
                    // The following checks ensure that console.log on the cradle does not
                    // throw an error (issue #7).
                    case util.inspect.custom:
                    case 'inspect':
                    case 'toString':
                        return toStringRepresentationFn;
                    case Symbol.toStringTag:
                        return CRADLE_STRING_TAG;
                    // Edge case: Promise unwrapping will look for a "then" property and attempt to call it.
                    // Return undefined so that we won't cause a resolution error. (issue #109)
                    case 'then':
                        return undefined;
                    // When using `Array.from` or spreading the cradle, this will
                    // return the registration names.
                    case Symbol.iterator:
                        return cradleIterator;
                }
                if (resolveOpts.allowUnregistered) {
                    return undefined;
                }
                throw new errors_1.AwilixResolutionError(name, resolutionStack);
            }
            // Pushes the currently-resolving module name onto the stack
            resolutionStack.push(name);
            // Do the thing
            let cached;
            let resolved;
            switch (resolver.lifetime || lifetime_1.Lifetime.TRANSIENT) {
                case lifetime_1.Lifetime.TRANSIENT:
                    // Transient lifetime means resolve every time.
                    resolved = resolver.resolve(container);
                    break;
                case lifetime_1.Lifetime.SINGLETON:
                    // Singleton lifetime means cache at all times, regardless of scope.
                    cached = rootContainer.cache.get(name);
                    if (!cached) {
                        resolved = resolver.resolve(container);
                        rootContainer.cache.set(name, { resolver, value: resolved });
                    }
                    else {
                        resolved = cached.value;
                    }
                    break;
                case lifetime_1.Lifetime.SCOPED:
                    // Scoped lifetime means that the container
                    // that resolves the registration also caches it.
                    // When a registration is not found, we travel up
                    // the family tree until we find one that is cached.
                    cached = container.cache.get(name);
                    if (cached !== undefined) {
                        // We found one!
                        resolved = cached.value;
                        break;
                    }
                    // If we still have not found one, we need to resolve and cache it.
                    resolved = resolver.resolve(container);
                    container.cache.set(name, { resolver, value: resolved });
                    break;
                default:
                    throw new errors_1.AwilixResolutionError(name, resolutionStack, `Unknown lifetime "${resolver.lifetime}"`);
            }
            // Pop it from the stack again, ready for the next resolution
            resolutionStack.pop();
            return resolved;
        }
        catch (err) {
            // When we get an error we need to reset the stack.
            resolutionStack = [];
            throw err;
        }
    }
    /**
     * Checks if the registration with the given name exists.
     *
     * @param {string | symbol} name
     * The name of the registration to resolve.
     *
     * @return {boolean}
     * Whether or not the registration exists.
     */
    function hasRegistration(name) {
        return !!getRegistration(name);
    }
    /**
     * Given a registration, class or function, builds it up and returns it.
     * Does not cache it, this means that any lifetime configured in case of passing
     * a registration will not be used.
     *
     * @param {Resolver|Class|Function} targetOrResolver
     * @param {ResolverOptions} opts
     */
    function build(targetOrResolver, opts) {
        if (targetOrResolver && targetOrResolver.resolve) {
            return targetOrResolver.resolve(container);
        }
        const funcName = 'build';
        const paramName = 'targetOrResolver';
        errors_1.AwilixTypeError.assert(targetOrResolver, funcName, paramName, 'a registration, function or class', targetOrResolver);
        errors_1.AwilixTypeError.assert(typeof targetOrResolver === 'function', funcName, paramName, 'a function or class', targetOrResolver);
        const resolver = (0, utils_1.isClass)(targetOrResolver)
            ? (0, resolvers_1.asClass)(targetOrResolver, opts)
            : (0, resolvers_1.asFunction)(targetOrResolver, opts);
        return resolver.resolve(container);
    }
    /**
     * Binds `lib/loadModules` to this container, and provides
     * real implementations of it's dependencies.
     *
     * Additionally, any modules using the `dependsOn` API
     * will be resolved.
     *
     * @see lib/loadModules.js documentation.
     */
    function loadModules(globPatterns, opts) {
        const _loadModulesDeps = {
            require: options.require ||
                function (uri) {
                    return require(uri);
                },
            listModules: list_modules_1.listModules,
            container,
        };
        if (opts === null || opts === void 0 ? void 0 : opts.esModules) {
            _loadModulesDeps.require = load_module_native_js_1.importModule;
            return (0, load_modules_1.loadModules)(_loadModulesDeps, globPatterns, opts).then(() => container);
        }
        else {
            (0, load_modules_1.loadModules)(_loadModulesDeps, globPatterns, opts);
            return container;
        }
    }
    /**
     * Disposes this container and it's children, calling the disposer
     * on all disposable registrations and clearing the cache.
     */
    function dispose() {
        const entries = Array.from(container.cache.entries());
        container.cache.clear();
        return Promise.all(entries.map(([name, entry]) => {
            const { resolver, value } = entry;
            const disposable = resolver;
            if (disposable.dispose) {
                return Promise.resolve().then(() => disposable.dispose(value));
            }
            return Promise.resolve();
        })).then(() => undefined);
    }
}
exports.createContainer = createContainer;
//# sourceMappingURL=container.js.map