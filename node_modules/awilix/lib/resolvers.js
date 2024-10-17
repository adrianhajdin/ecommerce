"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDisposableResolver = exports.createBuildResolver = exports.aliasTo = exports.asClass = exports.asFunction = exports.asValue = exports.RESOLVER = void 0;
const lifetime_1 = require("./lifetime");
const injection_mode_1 = require("./injection-mode");
const utils_1 = require("./utils");
const param_parser_1 = require("./param-parser");
const errors_1 = require("./errors");
/**
 * RESOLVER symbol can be used by modules loaded by
 * `loadModules` to configure their lifetime, injection mode, etc.
 */
exports.RESOLVER = Symbol('Awilix Resolver Config');
/**
 * Creates a simple value resolver where the given value will always be resolved.
 *
 * @param  {string} name
 * The name to register the value as.
 *
 * @param  {*} value
 * The value to resolve.
 *
 * @return {object}
 * The resolver.
 */
function asValue(value) {
    return {
        resolve: () => value,
    };
}
exports.asValue = asValue;
/**
 * Creates a factory resolver, where the given factory function
 * will be invoked with `new` when requested.
 *
 * @param  {string} name
 * The name to register the value as.
 *
 * @param  {Function} fn
 * The function to register.
 *
 * @param {object} opts
 * Additional options for the resolver.
 *
 * @return {object}
 * The resolver.
 */
function asFunction(fn, opts) {
    if (!(0, utils_1.isFunction)(fn)) {
        throw new errors_1.AwilixTypeError('asFunction', 'fn', 'function', fn);
    }
    const defaults = {
        lifetime: lifetime_1.Lifetime.TRANSIENT,
    };
    opts = makeOptions(defaults, opts, fn[exports.RESOLVER]);
    const resolve = generateResolve(fn);
    let result = Object.assign({ resolve }, opts);
    return createDisposableResolver(createBuildResolver(result));
}
exports.asFunction = asFunction;
/**
 * Like a factory resolver, but for classes that require `new`.
 *
 * @param  {string} name
 * The name to register the value as.
 *
 * @param  {Class} Type
 * The function to register.
 *
 * @param {object} opts
 * Additional options for the resolver.
 *
 * @return {object}
 * The resolver.
 */
function asClass(Type, opts) {
    if (!(0, utils_1.isFunction)(Type)) {
        throw new errors_1.AwilixTypeError('asClass', 'Type', 'class', Type);
    }
    const defaults = {
        lifetime: lifetime_1.Lifetime.TRANSIENT,
    };
    opts = makeOptions(defaults, opts, Type[exports.RESOLVER]);
    // A function to handle object construction for us, as to make the generateResolve more reusable
    const newClass = function newClass() {
        return Reflect.construct(Type, arguments);
    };
    const resolve = generateResolve(newClass, Type);
    return createDisposableResolver(createBuildResolver(Object.assign(Object.assign({}, opts), { resolve })));
}
exports.asClass = asClass;
/**
 * Resolves to the specified registration.
 */
function aliasTo(name) {
    return {
        resolve(container) {
            return container.resolve(name);
        },
    };
}
exports.aliasTo = aliasTo;
/**
 * Given an options object, creates a fluid interface
 * to manage it.
 *
 * @param {*} obj
 * The object to return.
 *
 * @return {object}
 * The interface.
 */
function createBuildResolver(obj) {
    function setLifetime(value) {
        return createBuildResolver(Object.assign(Object.assign({}, this), { lifetime: value }));
    }
    function setInjectionMode(value) {
        return createBuildResolver(Object.assign(Object.assign({}, this), { injectionMode: value }));
    }
    function inject(injector) {
        return createBuildResolver(Object.assign(Object.assign({}, this), { injector }));
    }
    return updateResolver(obj, {
        setLifetime,
        inject,
        transient: partial(setLifetime, lifetime_1.Lifetime.TRANSIENT),
        scoped: partial(setLifetime, lifetime_1.Lifetime.SCOPED),
        singleton: partial(setLifetime, lifetime_1.Lifetime.SINGLETON),
        setInjectionMode,
        proxy: partial(setInjectionMode, injection_mode_1.InjectionMode.PROXY),
        classic: partial(setInjectionMode, injection_mode_1.InjectionMode.CLASSIC),
    });
}
exports.createBuildResolver = createBuildResolver;
/**
 * Given a resolver, returns an object with methods to manage the disposer
 * function.
 * @param obj
 */
function createDisposableResolver(obj) {
    function disposer(dispose) {
        return createDisposableResolver(Object.assign(Object.assign({}, this), { dispose }));
    }
    return updateResolver(obj, {
        disposer,
    });
}
exports.createDisposableResolver = createDisposableResolver;
/**
 * Partially apply arguments to the given function.
 */
function partial(fn, arg1) {
    return function partiallyApplied() {
        return fn.call(this, arg1);
    };
}
/**
 * Makes an options object based on defaults.
 *
 * @param  {object} defaults
 * Default options.
 *
 * @param  {...} rest
 * The input to check and possibly assign to the resulting object
 *
 * @return {object}
 */
function makeOptions(defaults, ...rest) {
    return Object.assign({}, defaults, ...rest);
}
/**
 * Creates a new resolver with props merged from both.
 *
 * @param source
 * @param target
 */
function updateResolver(source, target) {
    const result = Object.assign(Object.assign({}, source), target);
    return result;
}
/**
 * Returns a wrapped `resolve` function that provides values
 * from the injector and defers to `container.resolve`.
 *
 * @param  {AwilixContainer} container
 * @param  {Object} locals
 * @return {Function}
 */
function wrapWithLocals(container, locals) {
    return function wrappedResolve(name, resolveOpts) {
        if (name in locals) {
            return locals[name];
        }
        return container.resolve(name, resolveOpts);
    };
}
/**
 * Returns a new Proxy that checks the result from `injector`
 * for values before delegating to the actual container.
 *
 * @param  {Object} cradle
 * @param  {Function} injector
 * @return {Proxy}
 */
function createInjectorProxy(container, injector) {
    const locals = injector(container);
    const allKeys = (0, utils_1.uniq)([
        ...Reflect.ownKeys(container.cradle),
        ...Reflect.ownKeys(locals),
    ]);
    // TODO: Lots of duplication here from the container proxy.
    // Need to refactor.
    const proxy = new Proxy({}, {
        /**
         * Resolves the value by first checking the locals, then the container.
         */
        get(target, name) {
            if (name === Symbol.iterator) {
                return function* iterateRegistrationsAndLocals() {
                    for (const prop in container.cradle) {
                        yield prop;
                    }
                    for (const prop in locals) {
                        yield prop;
                    }
                };
            }
            if (name in locals) {
                return locals[name];
            }
            return container.resolve(name);
        },
        /**
         * Used for `Object.keys`.
         */
        ownKeys() {
            return allKeys;
        },
        /**
         * Used for `Object.keys`.
         */
        getOwnPropertyDescriptor(target, key) {
            if (allKeys.indexOf(key) > -1) {
                return {
                    enumerable: true,
                    configurable: true,
                };
            }
            return undefined;
        },
    });
    return proxy;
}
/**
 * Returns a resolve function used to construct the dependency graph
 *
 * @this {Registration}
 * The `this` context is a resolver.
 *
 * @param {Function} fn
 * The function to construct
 *
 * @param {Function} dependencyParseTarget
 * The function to parse for the dependencies of the construction target
 *
 * @param {boolean} isFunction
 * Is the resolution target an actual function or a mask for a constructor?
 *
 * @return {Function}
 * The function used for dependency resolution
 */
function generateResolve(fn, dependencyParseTarget) {
    // If the function used for dependency parsing is falsy, use the supplied function
    if (!dependencyParseTarget) {
        dependencyParseTarget = fn;
    }
    // Parse out the dependencies
    // NOTE: we do this regardless of whether PROXY is used or not,
    // because if this fails, we want it to fail early (at startup) rather
    // than at resolution time.
    const dependencies = parseDependencies(dependencyParseTarget);
    // Use a regular function instead of an arrow function to facilitate binding to the resolver.
    return function resolve(container) {
        // Because the container holds a global reolutionMode we need to determine it in the proper order of precedence:
        // resolver -> container -> default value
        const injectionMode = this.injectionMode ||
            container.options.injectionMode ||
            injection_mode_1.InjectionMode.PROXY;
        if (injectionMode !== injection_mode_1.InjectionMode.CLASSIC) {
            // If we have a custom injector, we need to wrap the cradle.
            const cradle = this.injector
                ? createInjectorProxy(container, this.injector)
                : container.cradle;
            // Return the target injected with the cradle
            return fn(cradle);
        }
        // We have dependencies so we need to resolve them manually
        if (dependencies.length > 0) {
            const resolve = this.injector
                ? wrapWithLocals(container, this.injector(container))
                : container.resolve;
            const children = dependencies.map((p) => resolve(p.name, { allowUnregistered: p.optional }));
            return fn(...children);
        }
        return fn();
    };
}
/**
 * Parses the dependencies from the given function.
 * If it's a class that extends another class, and it does
 * not have a defined constructor, attempt to parse it's super constructor.
 */
function parseDependencies(fn) {
    const result = (0, param_parser_1.parseParameterList)(fn.toString());
    if (!result) {
        // No defined constructor for a class, check if there is a parent
        // we can parse.
        const parent = Object.getPrototypeOf(fn);
        if (typeof parent === 'function' && parent !== Function.prototype) {
            // Try to parse the parent
            return parseDependencies(parent);
        }
        return [];
    }
    return result;
}
//# sourceMappingURL=resolvers.js.map