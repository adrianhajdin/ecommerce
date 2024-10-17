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
exports.transformTreeNodesWithConfig = void 0;
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var lodash_2 = require("lodash");
// TODO: When we implement custom queries for tree paths in medusa, remove the transformer
// Adding this here since typeorm tree repo doesn't allow configs to be passed
// onto its children nodes. As an alternative, we are transforming the data post query.
function transformTreeNodesWithConfig(object, config, scope, isParentNode) {
    var e_1, _a;
    if (scope === void 0) { scope = {}; }
    if (isParentNode === void 0) { isParentNode = false; }
    var selects = (config.select || []);
    var relations = (config.relations || []);
    var selectsAndRelations = selects.concat(relations);
    try {
        for (var _b = __values(Object.entries(scope)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            var modelValue = object[key];
            if ((0, medusa_core_utils_1.isDefined)(modelValue) && modelValue !== value) {
                return null;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (object.parent_category) {
        object.parent_category = transformTreeNodesWithConfig(object.parent_category, config, scope, true);
    }
    if (!isParentNode && (object.category_children || []).length > 0) {
        object.category_children = object.category_children.map(function (child) {
            return transformTreeNodesWithConfig(child, config, scope);
        });
        object.category_children = (0, lodash_2.filter)(object.category_children, function (el) { return !(0, lodash_2.isNull)(el); });
    }
    return (0, lodash_1.pick)(object, selectsAndRelations);
}
exports.transformTreeNodesWithConfig = transformTreeNodesWithConfig;
//# sourceMappingURL=tree.js.map