"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * Orchestrates dynamic middleware registered through the Medusa Middleware API
 */
var MiddlewareService = /** @class */ (function () {
    function MiddlewareService() {
        this.postAuthentication_ = [];
        this.preAuthentication_ = [];
        this.preCartCreation_ = [];
        this.routers = {};
    }
    MiddlewareService.prototype.addRouter = function (path, router) {
        var existing = this.routers[path] || [];
        this.routers[path] = __spreadArray(__spreadArray([], __read(existing), false), [router], false);
    };
    MiddlewareService.prototype.getRouters = function (path) {
        return this.routers[path] || [];
    };
    /**
     * Validates a middleware function, throws if fn is not of type function.
     * @param {function} fn - the middleware function to validate.
     * @returns nothing if the middleware is a function
     */
    MiddlewareService.prototype.validateMiddleware_ = function (fn) {
        if (typeof fn !== "function") {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Middleware must be a function");
        }
    };
    /**
     * Adds a middleware function to be called after authentication is completed.
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @param {object} options - the arguments that will be passed to the
     *   middleware
     * @return void
     */
    MiddlewareService.prototype.addPostAuthentication = function (middleware, options) {
        this.validateMiddleware_(middleware);
        this.postAuthentication_.push({
            middleware: middleware,
            options: options || {},
        });
    };
    /**
     * Adds a middleware function to be called before authentication is completed.
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @param {object} options - the arguments that will be passed to the
     *   middleware
     * @return void
     */
    MiddlewareService.prototype.addPreAuthentication = function (middleware, options) {
        this.validateMiddleware_(middleware);
        this.preAuthentication_.push({
            middleware: middleware,
            options: options || {},
        });
    };
    /**
     * Adds a middleware function to be called before cart creation
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @return {void}
     */
    MiddlewareService.prototype.addPreCartCreation = function (middleware) {
        this.validateMiddleware_(middleware);
        this.preCartCreation_.push(middleware);
    };
    /**
     * Adds post authentication middleware to an express app.
     * @param {ExpressApp} app - the express app to add the middleware to
     * @return {void}
     */
    MiddlewareService.prototype.usePostAuthentication = function (app) {
        var e_1, _a;
        try {
            for (var _b = __values(this.postAuthentication_), _c = _b.next(); !_c.done; _c = _b.next()) {
                var object = _c.value;
                app.use(object.middleware(object.options));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Adds pre authentication middleware to an express app.
     * @param {ExpressApp} app - the express app to add the middleware to
     * @return {void}
     */
    MiddlewareService.prototype.usePreAuthentication = function (app) {
        var e_2, _a;
        try {
            for (var _b = __values(this.preAuthentication_), _c = _b.next(); !_c.done; _c = _b.next()) {
                var object = _c.value;
                app.use(object.middleware(object.options));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MiddlewareService.prototype.usePreCartCreation = function () {
        return this.preCartCreation_;
    };
    return MiddlewareService;
}());
exports.default = MiddlewareService;
//# sourceMappingURL=middleware.js.map