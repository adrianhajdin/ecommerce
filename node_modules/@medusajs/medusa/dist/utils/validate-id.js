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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = void 0;
/**
 * Confirms whether a given raw id is valid. Fails if the provided
 * id is null or undefined. The validate function takes an optional config
 * param, to support checking id prefix and length.
 * @param rawId - the id to validate.
 * @param config - optional config
 * @returns the rawId given that nothing failed
 */
var dist_1 = require("medusa-core-utils/dist");
function validateId(rawId, config) {
    if (config === void 0) { config = {}; }
    var prefix = config.prefix, length = config.length;
    if (!rawId) {
        throw new dist_1.MedusaError(dist_1.MedusaError.Types.INVALID_DATA, "Failed to validate id: ".concat(rawId));
    }
    if (prefix || length) {
        var _a = __read(rawId.split("_"), 2), pre = _a[0], rand = _a[1];
        if (prefix && pre !== prefix) {
            throw new dist_1.MedusaError(dist_1.MedusaError.Types.INVALID_DATA, "The provided id: ".concat(rawId, " does not adhere to prefix constraint: ").concat(prefix));
        }
        if (length && length !== rand.length) {
            throw new dist_1.MedusaError(dist_1.MedusaError.Types.INVALID_DATA, "The provided id: ".concat(rawId, " does not adhere to length constraint: ").concat(length));
        }
    }
    return rawId;
}
exports.validateId = validateId;
//# sourceMappingURL=validate-id.js.map