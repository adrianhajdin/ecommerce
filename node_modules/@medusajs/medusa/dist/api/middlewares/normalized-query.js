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
/**
 * Normalize an input query, especially from array like query params to an array type
 * e.g: /admin/orders/?fields[]=id,status,cart_id becomes { fields: ["id", "status", "cart_id"] }
 */
exports.default = (function () {
    return function (req, res, next) {
        req.query = Object.entries(req.query).reduce(function (acc, _a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            if (Array.isArray(val) && val.length === 1) {
                acc[key] = val[0].split(",");
            }
            else {
                acc[key] = val;
            }
            return acc;
        }, {});
        next();
    };
});
//# sourceMappingURL=normalized-query.js.map