/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Newline.
 */
var EOL = '\n';
/**
 * An extendable error class.
 * @author https://github.com/bjyoungblood/es6-error/
 */
var ExtendableError = /** @class */ (function (_super) {
    __extends(ExtendableError, _super);
    /**
     * Constructor for the error.
     *
     * @param  {String} message
     * The error message.
     */
    function ExtendableError(message) {
        var _this = _super.call(this, message) || this;
        // extending Error is weird and does not propagate `message`
        Object.defineProperty(_this, 'message', {
            enumerable: false,
            value: message,
        });
        Object.defineProperty(_this, 'name', {
            enumerable: false,
            value: _this.constructor.name,
        });
        // Not all browsers have this function.
        /* istanbul ignore else */
        if ('captureStackTrace' in Error) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        else {
            Object.defineProperty(_this, 'stack', {
                enumerable: false,
                value: Error(message).stack,
                writable: true,
                configurable: true,
            });
        }
        return _this;
    }
    return ExtendableError;
}(Error));
/**
 * Base error for all Awilix-specific errors.
 */
var AwilixError = /** @class */ (function (_super) {
    __extends(AwilixError, _super);
    function AwilixError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AwilixError;
}(ExtendableError));
/**
 * Error thrown to indicate a type mismatch.
 */
var AwilixTypeError = /** @class */ (function (_super) {
    __extends(AwilixTypeError, _super);
    /**
     * Constructor, takes the function name, expected and given
     * type to produce an error.
     *
     * @param {string} funcDescription
     * Name of the function being guarded.
     *
     * @param {string} paramName
     * The parameter there was an issue with.
     *
     * @param {string} expectedType
     * Name of the expected type.
     *
     * @param {string} givenType
     * Name of the given type.
     */
    function AwilixTypeError(funcDescription, paramName, expectedType, givenType) {
        return _super.call(this, "".concat(funcDescription, ": expected ").concat(paramName, " to be ").concat(expectedType, ", but got ").concat(givenType, ".")) || this;
    }
    /**
     * Asserts the given condition, throws an error otherwise.
     *
     * @param {*} condition
     * The condition to check
     *
     * @param {string} funcDescription
     * Name of the function being guarded.
     *
     * @param {string} paramName
     * The parameter there was an issue with.
     *
     * @param {string} expectedType
     * Name of the expected type.
     *
     * @param {string} givenType
     * Name of the given type.
     */
    AwilixTypeError.assert = function (condition, funcDescription, paramName, expectedType, givenType) {
        if (!condition) {
            throw new AwilixTypeError(funcDescription, paramName, expectedType, givenType);
        }
        return condition;
    };
    return AwilixTypeError;
}(AwilixError));
/**
 * A nice error class so we can do an instanceOf check.
 */
var AwilixResolutionError = /** @class */ (function (_super) {
    __extends(AwilixResolutionError, _super);
    /**
     * Constructor, takes the registered modules and unresolved tokens
     * to create a message.
     *
     * @param {string|symbol} name
     * The name of the module that could not be resolved.
     *
     * @param  {string[]} resolutionStack
     * The current resolution stack
     */
    function AwilixResolutionError(name, resolutionStack, message) {
        if (typeof name === 'symbol') {
            name = name.toString();
        }
        resolutionStack = resolutionStack.map(function (val) {
            return typeof val === 'symbol' ? val.toString() : val;
        });
        resolutionStack.push(name);
        var resolutionPathString = resolutionStack.join(' -> ');
        var msg = "Could not resolve '".concat(name, "'.");
        if (message) {
            msg += " ".concat(message);
        }
        msg += EOL + EOL;
        msg += "Resolution path: ".concat(resolutionPathString);
        return _super.call(this, msg) || this;
    }
    return AwilixResolutionError;
}(AwilixError));

/**
 * Creates a tokenizer for the specified source.
 *
 * @param source
 */
function createTokenizer(source) {
    var end = source.length;
    var pos = 0;
    var type = 'EOF';
    var value = '';
    var flags = 0 /* TokenizerFlags.None */;
    // These are used to greedily skip as much as possible.
    // Whenever we reach a paren, we increment these.
    var parenLeft = 0;
    var parenRight = 0;
    return {
        next: next,
        done: done,
    };
    /**
     * Advances the tokenizer and returns the next token.
     */
    function next(nextFlags) {
        if (nextFlags === void 0) { nextFlags = 0 /* TokenizerFlags.None */; }
        flags = nextFlags;
        advance();
        return createToken();
    }
    /**
     * Advances the tokenizer state.
     */
    function advance() {
        value = '';
        type = 'EOF';
        while (true) {
            if (pos >= end) {
                return (type = 'EOF');
            }
            var ch = source.charAt(pos);
            // Whitespace is irrelevant
            if (isWhiteSpace(ch)) {
                pos++;
                continue;
            }
            switch (ch) {
                case '(':
                    pos++;
                    parenLeft++;
                    return (type = ch);
                case ')':
                    pos++;
                    parenRight++;
                    return (type = ch);
                case '*':
                    pos++;
                    return (type = ch);
                case ',':
                    pos++;
                    return (type = ch);
                case '=':
                    pos++;
                    if ((flags & 1 /* TokenizerFlags.Dumb */) === 0) {
                        // Not in dumb-mode, so attempt to skip.
                        skipExpression();
                    }
                    // We need to know that there's a default value so we can
                    // skip it if it does not exist when resolving.
                    return (type = ch);
                case '/':
                    pos++;
                    var nextCh = source.charAt(pos);
                    if (nextCh === '/') {
                        skipUntil(function (c) { return c === '\n'; }, true);
                        pos++;
                    }
                    if (nextCh === '*') {
                        skipUntil(function (c) {
                            var closing = source.charAt(pos + 1);
                            return c === '*' && closing === '/';
                        }, true);
                        pos++;
                    }
                    continue;
                default:
                    // Scans an identifier.
                    if (isIdentifierStart(ch)) {
                        scanIdentifier();
                        return type;
                    }
                    // Elegantly skip over tokens we don't care about.
                    pos++;
            }
        }
    }
    /**
     * Scans an identifier, given it's already been proven
     * we are ready to do so.
     */
    function scanIdentifier() {
        var identStart = source.charAt(pos);
        var start = ++pos;
        while (isIdentifierPart(source.charAt(pos))) {
            pos++;
        }
        value = '' + identStart + source.substring(start, pos);
        type = value === 'function' || value === 'class' ? value : 'ident';
        if (type !== 'ident') {
            value = '';
        }
        return value;
    }
    /**
     * Skips everything until the next comma or the end of the parameter list.
     * Checks the parenthesis balance so we correctly skip function calls.
     */
    function skipExpression() {
        skipUntil(function (ch) {
            var isAtRoot = parenLeft === parenRight + 1;
            if (ch === ',' && isAtRoot) {
                return true;
            }
            if (ch === '(') {
                parenLeft++;
                return false;
            }
            if (ch === ')') {
                parenRight++;
                if (isAtRoot) {
                    return true;
                }
            }
            return false;
        });
    }
    /**
     * Skips strings and whilespace until the predicate is true.
     *
     * @param callback stops skipping when this returns `true`.
     * @param dumb if `true`, does not skip whitespace and strings;
     * it only stops once the callback returns `true`.
     */
    function skipUntil(callback, dumb) {
        if (dumb === void 0) { dumb = false; }
        while (pos < source.length) {
            var ch = source.charAt(pos);
            if (callback(ch)) {
                return;
            }
            if (!dumb) {
                if (isWhiteSpace(ch)) {
                    pos++;
                    continue;
                }
                if (isStringQuote(ch)) {
                    skipString();
                    continue;
                }
            }
            pos++;
        }
    }
    /**
     * Given the current position is at a string quote, skips the entire string.
     */
    function skipString() {
        var quote = source.charAt(pos);
        pos++;
        while (pos < source.length) {
            var ch = source.charAt(pos);
            var prev = source.charAt(pos - 1);
            // Checks if the quote was escaped.
            if (ch === quote && prev !== '\\') {
                pos++;
                return;
            }
            // Template strings are a bit tougher, we want to skip the interpolated values.
            if (quote === '`') {
                var next_1 = source.charAt(pos + 1);
                if (next_1 === '$') {
                    var afterDollar = source.charAt(pos + 2);
                    if (afterDollar === '{') {
                        // This is the start of an interpolation; skip the ${
                        pos = pos + 2;
                        // Skip strings and whitespace until we reach the ending }.
                        // This includes skipping nested interpolated strings. :D
                        skipUntil(function (ch) { return ch === '}'; });
                    }
                }
            }
            pos++;
        }
    }
    /**
     * Creates a token from the current state.
     */
    function createToken() {
        if (value) {
            return { value: value, type: type };
        }
        return { type: type };
    }
    /**
     * Determines if we are done parsing.
     */
    function done() {
        return type === 'EOF';
    }
}
/**
 * Determines if the given character is a whitespace character.
 *
 * @param  {string}  ch
 * @return {boolean}
 */
function isWhiteSpace(ch) {
    switch (ch) {
        case '\r':
        case '\n':
        case ' ':
            return true;
    }
    return false;
}
/**
 * Determines if the specified character is a string quote.
 * @param  {string}  ch
 * @return {boolean}
 */
function isStringQuote(ch) {
    switch (ch) {
        case "'":
        case '"':
        case '`':
            return true;
    }
    return false;
}
// NOTE: I've added the `.` character so that member expression paths
// are seen as identifiers. This is so we don't get a constructor token for
// stuff like `MyClass.prototype.constructor()`
var IDENT_START_EXPR = /^[_$a-zA-Z\xA0-\uFFFF]$/;
var IDENT_PART_EXPR = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
/**
 * Determines if the character is a valid JS identifier start character.
 */
function isIdentifierStart(ch) {
    return IDENT_START_EXPR.test(ch);
}
/**
 * Determines if the character is a valid JS identifier start character.
 */
function isIdentifierPart(ch) {
    return IDENT_PART_EXPR.test(ch);
}

/**
 * Creates a { name: value } object if the input isn't already in that format.
 *
 * @param  {string|object} name
 * Either a string or an object.
 *
 * @param  {*} value
 * The value, only used if name is not an object.
 *
 * @return {object}
 */
function nameValueToObject(name, value) {
    var _a;
    var obj = name;
    if (typeof obj === 'string' || typeof obj === 'symbol') {
        return _a = {}, _a[name] = value, _a;
    }
    return obj;
}
/**
 * Returns the last item in the array.
 *
 * @param  {*[]} arr
 * The array.
 *
 * @return {*}
 * The last element.
 */
function last(arr) {
    return arr[arr.length - 1];
}
/**
 * Determines if the given function is a class.
 *
 * @param  {Function} fn
 * @return {boolean}
 */
function isClass(fn) {
    /*tslint:disable-next-line*/
    if (typeof fn !== 'function') {
        return false;
    }
    // Should only need 2 tokens.
    var tokenizer = createTokenizer(fn.toString());
    var first = tokenizer.next();
    if (first.type === 'class') {
        return true;
    }
    var second = tokenizer.next();
    if (first.type === 'function' && second.value) {
        if (second.value[0] === second.value[0].toUpperCase()) {
            return true;
        }
    }
    return false;
}
/**
 * Determines if the given value is a function.
 *
 * @param  {Any} val
 * Any value to check if it's a function.
 *
 * @return {boolean}
 * true if the value is a function, false otherwise.
 */
function isFunction(val) {
    return typeof val === 'function';
}
/**
 * Returns the unique items in the array.
 *
 * @param {Array<T>}
 * The array to remove dupes from.
 *
 * @return {Array<T>}
 * The deduped array.
 */
function uniq(arr) {
    return Array.from(new Set(arr));
}

/**
 * Lifetime types.
 */
var Lifetime = {
    /**
     * The registration will be resolved once and only once.
     * @type {String}
     */
    SINGLETON: 'SINGLETON',
    /**
     * The registration will be resolved every time (never cached).
     * @type {String}
     */
    TRANSIENT: 'TRANSIENT',
    /**
     * The registration will be resolved once per scope.
     * @type {String}
     */
    SCOPED: 'SCOPED',
};

/**
 * Resolution modes.
 */
var InjectionMode = {
    /**
     * The dependencies will be resolved by injecting the cradle proxy.
     *
     * @type {String}
     */
    PROXY: 'PROXY',
    /**
     * The dependencies will be resolved by inspecting parameter names of the function/constructor.
     *
     * @type {String}
     */
    CLASSIC: 'CLASSIC',
};

/*
 * Parses the parameter list of a function string, including ES6 class constructors.
 *
 * @param {string} source
 * The source of a function to extract the parameter list from
 *
 * @return {Array<Parameter> | null}
 * Returns an array of parameters, or `null` if no
 * constructor was found for a class.
 */
function parseParameterList(source) {
    var _a = createTokenizer(source), _next = _a.next, done = _a.done;
    var params = [];
    var t = null;
    nextToken();
    while (!done()) {
        switch (t.type) {
            case 'class':
                skipUntilConstructor();
                // If we didn't find a constructor token, then we know that there
                // are no dependencies in the defined class.
                if (!isConstructorToken()) {
                    return null;
                }
                // Next token is the constructor identifier.
                nextToken();
                break;
            case 'function':
                var next = nextToken();
                if (next.type === 'ident' || next.type === '*') {
                    // This is the function name or a generator star. Skip it.
                    nextToken();
                }
                break;
            case '(':
                // Start parsing parameter names.
                parseParams();
                break;
            case ')':
                // We're now out of the parameter list.
                return params;
            case 'ident':
                // Likely a paren-less arrow function
                // which can have no default args.
                var param = { name: t.value, optional: false };
                if (t.value === 'async') {
                    // Given it's the very first token, we can assume it's an async function,
                    // so skip the async keyword if the next token is not an equals sign, in which
                    // case it is a single-arg arrow func.
                    var next_1 = nextToken();
                    if (next_1 && next_1.type !== '=') {
                        break;
                    }
                }
                params.push(param);
                return params;
            /* istanbul ignore next */
            default:
                throw unexpected();
        }
    }
    return params;
    /**
     * After having been placed within the parameter list of
     * a function, parses the parameters.
     */
    function parseParams() {
        // Current token is a left-paren
        var param = { name: '', optional: false };
        while (!done()) {
            nextToken();
            switch (t.type) {
                case 'ident':
                    param.name = t.value;
                    break;
                case '=':
                    param.optional = true;
                    break;
                case ',':
                    params.push(param);
                    param = { name: '', optional: false };
                    break;
                case ')':
                    if (param.name) {
                        params.push(param);
                    }
                    return;
                /* istanbul ignore next */
                default:
                    throw unexpected();
            }
        }
    }
    /**
     * Skips until we reach the constructor identifier.
     */
    function skipUntilConstructor() {
        while (!isConstructorToken() && !done()) {
            nextToken(1 /* TokenizerFlags.Dumb */);
        }
    }
    /**
     * Determines if the current token represents a constructor, and the next token after it is a paren
     * @return {boolean}
     */
    function isConstructorToken() {
        return t.type === 'ident' && t.value === 'constructor';
    }
    /**
     * Advances the tokenizer and stores the previous token in history
     */
    function nextToken(flags) {
        if (flags === void 0) { flags = 0 /* TokenizerFlags.None */; }
        t = _next(flags);
        return t;
    }
    /**
     * Returns an error describing an unexpected token.
     */
    /* istanbul ignore next */
    function unexpected() {
        return new SyntaxError("Parsing parameter list, did not expect ".concat(t.type, " token").concat(t.value ? " (".concat(t.value, ")") : ''));
    }
}

/**
 * RESOLVER symbol can be used by modules loaded by
 * `loadModules` to configure their lifetime, injection mode, etc.
 */
var RESOLVER = Symbol('Awilix Resolver Config');
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
        resolve: function () { return value; },
    };
}
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
    if (!isFunction(fn)) {
        throw new AwilixTypeError('asFunction', 'fn', 'function', fn);
    }
    var defaults = {
        lifetime: Lifetime.TRANSIENT,
    };
    opts = makeOptions(defaults, opts, fn[RESOLVER]);
    var resolve = generateResolve(fn);
    var result = __assign({ resolve: resolve }, opts);
    return createDisposableResolver(createBuildResolver(result));
}
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
    if (!isFunction(Type)) {
        throw new AwilixTypeError('asClass', 'Type', 'class', Type);
    }
    var defaults = {
        lifetime: Lifetime.TRANSIENT,
    };
    opts = makeOptions(defaults, opts, Type[RESOLVER]);
    // A function to handle object construction for us, as to make the generateResolve more reusable
    var newClass = function newClass() {
        return Reflect.construct(Type, arguments);
    };
    var resolve = generateResolve(newClass, Type);
    return createDisposableResolver(createBuildResolver(__assign(__assign({}, opts), { resolve: resolve })));
}
/**
 * Resolves to the specified registration.
 */
function aliasTo(name) {
    return {
        resolve: function (container) {
            return container.resolve(name);
        },
    };
}
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
        return createBuildResolver(__assign(__assign({}, this), { lifetime: value }));
    }
    function setInjectionMode(value) {
        return createBuildResolver(__assign(__assign({}, this), { injectionMode: value }));
    }
    function inject(injector) {
        return createBuildResolver(__assign(__assign({}, this), { injector: injector }));
    }
    return updateResolver(obj, {
        setLifetime: setLifetime,
        inject: inject,
        transient: partial(setLifetime, Lifetime.TRANSIENT),
        scoped: partial(setLifetime, Lifetime.SCOPED),
        singleton: partial(setLifetime, Lifetime.SINGLETON),
        setInjectionMode: setInjectionMode,
        proxy: partial(setInjectionMode, InjectionMode.PROXY),
        classic: partial(setInjectionMode, InjectionMode.CLASSIC),
    });
}
/**
 * Given a resolver, returns an object with methods to manage the disposer
 * function.
 * @param obj
 */
function createDisposableResolver(obj) {
    function disposer(dispose) {
        return createDisposableResolver(__assign(__assign({}, this), { dispose: dispose }));
    }
    return updateResolver(obj, {
        disposer: disposer,
    });
}
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
function makeOptions(defaults) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArray([{}, defaults], rest, false));
}
/**
 * Creates a new resolver with props merged from both.
 *
 * @param source
 * @param target
 */
function updateResolver(source, target) {
    var result = __assign(__assign({}, source), target);
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
    var locals = injector(container);
    var allKeys = uniq(__spreadArray(__spreadArray([], Reflect.ownKeys(container.cradle), true), Reflect.ownKeys(locals), true));
    // TODO: Lots of duplication here from the container proxy.
    // Need to refactor.
    var proxy = new Proxy({}, {
        /**
         * Resolves the value by first checking the locals, then the container.
         */
        get: function (target, name) {
            if (name === Symbol.iterator) {
                return function iterateRegistrationsAndLocals() {
                    var _a, _b, _c, _i, prop, _d, _e, _f, _g, prop;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0:
                                _a = container.cradle;
                                _b = [];
                                for (_c in _a)
                                    _b.push(_c);
                                _i = 0;
                                _h.label = 1;
                            case 1:
                                if (!(_i < _b.length)) return [3 /*break*/, 4];
                                _c = _b[_i];
                                if (!(_c in _a)) return [3 /*break*/, 3];
                                prop = _c;
                                return [4 /*yield*/, prop];
                            case 2:
                                _h.sent();
                                _h.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4:
                                _d = locals;
                                _e = [];
                                for (_f in _d)
                                    _e.push(_f);
                                _g = 0;
                                _h.label = 5;
                            case 5:
                                if (!(_g < _e.length)) return [3 /*break*/, 8];
                                _f = _e[_g];
                                if (!(_f in _d)) return [3 /*break*/, 7];
                                prop = _f;
                                return [4 /*yield*/, prop];
                            case 6:
                                _h.sent();
                                _h.label = 7;
                            case 7:
                                _g++;
                                return [3 /*break*/, 5];
                            case 8: return [2 /*return*/];
                        }
                    });
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
        ownKeys: function () {
            return allKeys;
        },
        /**
         * Used for `Object.keys`.
         */
        getOwnPropertyDescriptor: function (target, key) {
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
    var dependencies = parseDependencies(dependencyParseTarget);
    // Use a regular function instead of an arrow function to facilitate binding to the resolver.
    return function resolve(container) {
        // Because the container holds a global reolutionMode we need to determine it in the proper order of precedence:
        // resolver -> container -> default value
        var injectionMode = this.injectionMode ||
            container.options.injectionMode ||
            InjectionMode.PROXY;
        if (injectionMode !== InjectionMode.CLASSIC) {
            // If we have a custom injector, we need to wrap the cradle.
            var cradle = this.injector
                ? createInjectorProxy(container, this.injector)
                : container.cradle;
            // Return the target injected with the cradle
            return fn(cradle);
        }
        // We have dependencies so we need to resolve them manually
        if (dependencies.length > 0) {
            var resolve_1 = this.injector
                ? wrapWithLocals(container, this.injector(container))
                : container.resolve;
            var children = dependencies.map(function (p) {
                return resolve_1(p.name, { allowUnregistered: p.optional });
            });
            return fn.apply(void 0, children);
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
    var result = parseParameterList(fn.toString());
    if (!result) {
        // No defined constructor for a class, check if there is a parent
        // we can parse.
        var parent = Object.getPrototypeOf(fn);
        if (typeof parent === 'function' && parent !== Function.prototype) {
            // Try to parse the parent
            return parseDependencies(parent);
        }
        return [];
    }
    return result;
}

/**
 * Family tree symbol.
 */
var FAMILY_TREE = Symbol('familyTree');
/**
 * Roll Up Registrations symbol.
 */
var ROLL_UP_REGISTRATIONS = Symbol('rollUpRegistrations');
/**
 * The string representation when calling toString.
 */
var CRADLE_STRING_TAG = 'AwilixContainerCradle';
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
    var _a;
    options = __assign({ injectionMode: InjectionMode.PROXY }, options);
    // The resolution stack is used to keep track
    // of what modules are being resolved, so when
    // an error occurs, we have something to present
    // to the poor developer who fucked up.
    var resolutionStack = [];
    // Internal registration store for this container.
    var registrations = {};
    /**
     * The `Proxy` that is passed to functions so they can resolve their dependencies without
     * knowing where they come from. I call it the "cradle" because
     * it is where registered things come to life at resolution-time.
     */
    var cradle = new Proxy({
    /* removed in browser build */
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
        get: function (_target, name) { return resolve(name); },
        /**
         * Setting things on the cradle throws an error.
         *
         * @param  {object} target
         * @param  {string} name
         */
        set: function (_target, name) {
            throw new Error("Attempted setting property \"".concat(name, "\" on container cradle - this is not allowed."));
        },
        /**
         * Used for `Object.keys`.
         */
        ownKeys: function () {
            return Array.from(cradle);
        },
        /**
         * Used for `Object.keys`.
         */
        getOwnPropertyDescriptor: function (target, key) {
            var regs = rollUpRegistrations();
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
    var container = (_a = {
            options: options,
            cradle: cradle,
            inspect: inspect,
            cache: new Map(),
            loadModules: function () { throw new Error("loadModules is not supported in the browser."); },
            createScope: createScope,
            register: register,
            build: build,
            resolve: resolve,
            hasRegistration: hasRegistration,
            dispose: dispose,
            getRegistration: getRegistration
        },
        /* removed in browser build */
        // tslint:disable-next-line
        _a[ROLL_UP_REGISTRATIONS] = rollUpRegistrations,
        Object.defineProperty(_a, "registrations", {
            get: function () {
                return rollUpRegistrations();
            },
            enumerable: false,
            configurable: true
        }),
        _a);
    // Track the family tree.
    var familyTree = parentContainer
        ? [container].concat(parentContainer[FAMILY_TREE])
        : [container];
    container[FAMILY_TREE] = familyTree;
    // We need a reference to the root container,
    // so we can retrieve and store singletons.
    var rootContainer = last(familyTree);
    return container;
    /**
     * Used by util.inspect (which is used by console.log).
     */
    function inspect() {
        return "[AwilixContainer (".concat(parentContainer ? 'scoped, ' : '', "registrations: ").concat(Object.keys(container.registrations).length, ")]");
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
        return __assign(__assign({}, (parentContainer && parentContainer[ROLL_UP_REGISTRATIONS]())), registrations);
    }
    /**
     * Used for providing an iterator to the cradle.
     */
    function cradleIterator() {
        var registrations, _a, _b, _c, _i, registrationName;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    registrations = rollUpRegistrations();
                    _a = registrations;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 3];
                    registrationName = _c;
                    return [4 /*yield*/, registrationName];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
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
        var obj = nameValueToObject(arg1, arg2);
        var keys = __spreadArray(__spreadArray([], Object.keys(obj), true), Object.getOwnPropertySymbols(obj), true);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var value = obj[key];
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
        var resolver = registrations[name];
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
            var resolver = getRegistration(name);
            if (resolutionStack.indexOf(name) > -1) {
                throw new AwilixResolutionError(name, resolutionStack, 'Cyclic dependencies detected.');
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
                throw new AwilixResolutionError(name, resolutionStack);
            }
            // Pushes the currently-resolving module name onto the stack
            resolutionStack.push(name);
            // Do the thing
            var cached = void 0;
            var resolved = void 0;
            switch (resolver.lifetime || Lifetime.TRANSIENT) {
                case Lifetime.TRANSIENT:
                    // Transient lifetime means resolve every time.
                    resolved = resolver.resolve(container);
                    break;
                case Lifetime.SINGLETON:
                    // Singleton lifetime means cache at all times, regardless of scope.
                    cached = rootContainer.cache.get(name);
                    if (!cached) {
                        resolved = resolver.resolve(container);
                        rootContainer.cache.set(name, { resolver: resolver, value: resolved });
                    }
                    else {
                        resolved = cached.value;
                    }
                    break;
                case Lifetime.SCOPED:
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
                    container.cache.set(name, { resolver: resolver, value: resolved });
                    break;
                default:
                    throw new AwilixResolutionError(name, resolutionStack, "Unknown lifetime \"".concat(resolver.lifetime, "\""));
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
        var funcName = 'build';
        var paramName = 'targetOrResolver';
        AwilixTypeError.assert(targetOrResolver, funcName, paramName, 'a registration, function or class', targetOrResolver);
        AwilixTypeError.assert(typeof targetOrResolver === 'function', funcName, paramName, 'a function or class', targetOrResolver);
        var resolver = isClass(targetOrResolver)
            ? asClass(targetOrResolver, opts)
            : asFunction(targetOrResolver, opts);
        return resolver.resolve(container);
    }
    /**
     * Disposes this container and it's children, calling the disposer
     * on all disposable registrations and clearing the cache.
     */
    function dispose() {
        var entries = Array.from(container.cache.entries());
        container.cache.clear();
        return Promise.all(entries.map(function (_a) {
            _a[0]; var entry = _a[1];
            var resolver = entry.resolver, value = entry.value;
            var disposable = resolver;
            if (disposable.dispose) {
                return Promise.resolve().then(function () { return disposable.dispose(value); });
            }
            return Promise.resolve();
        })).then(function () { return undefined; });
    }
}

export { AwilixError, AwilixResolutionError, AwilixTypeError, ExtendableError, InjectionMode, Lifetime, RESOLVER, aliasTo, asClass, asFunction, asValue, createBuildResolver, createContainer, createDisposableResolver };
