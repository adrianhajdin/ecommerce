"use strict";
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
exports.transformIncludesOptions = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * Retrieve the includes options from the fields query param.
 * If the include option is present then assigned it to includes on req
 * @param allowedIncludes The list of fields that can be passed and assign to req.includes
 * @param expectedIncludes The list of fields that the consumer can pass to the end point using this middleware. It is a subset of `allowedIncludes`
 */
function transformIncludesOptions(allowedIncludes, expectedIncludes) {
    if (allowedIncludes === void 0) { allowedIncludes = []; }
    if (expectedIncludes === void 0) { expectedIncludes = []; }
    return function (req, res, next) {
        var e_1, _a;
        var _b, _c, _d;
        if (!allowedIncludes.length || !req.query.expand) {
            return next();
        }
        var expand = (_b = req.query.expand.split(",")) !== null && _b !== void 0 ? _b : [];
        try {
            for (var allowedIncludes_1 = __values(allowedIncludes), allowedIncludes_1_1 = allowedIncludes_1.next(); !allowedIncludes_1_1.done; allowedIncludes_1_1 = allowedIncludes_1.next()) {
                var includes = allowedIncludes_1_1.value;
                var fieldIndex = (_c = expand.indexOf(includes)) !== null && _c !== void 0 ? _c : -1;
                var isPresent = fieldIndex !== -1;
                if (isPresent) {
                    expand.splice(fieldIndex, 1);
                    if (!expectedIncludes.includes(includes)) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The field \"".concat(includes, "\" is not supported by this end point. ").concat(expectedIncludes.length
                            ? "The includes fields can be one of entity properties or in [".concat(expectedIncludes.join(", "), "]")
                            : ""));
                    }
                    req.includes = (_d = req.includes) !== null && _d !== void 0 ? _d : {};
                    req.includes[includes] = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (allowedIncludes_1_1 && !allowedIncludes_1_1.done && (_a = allowedIncludes_1.return)) _a.call(allowedIncludes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (req.query.expand) {
            if (expand.length) {
                req.query.expand = expand.join(",");
            }
            else {
                delete req.query.expand;
            }
        }
        next();
    };
}
exports.transformIncludesOptions = transformIncludesOptions;
//# sourceMappingURL=transform-includes-options.js.map