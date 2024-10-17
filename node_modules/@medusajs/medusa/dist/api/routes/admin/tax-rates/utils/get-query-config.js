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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListConfig = exports.getRetrieveConfig = exports.pickByConfig = void 0;
var lodash_1 = require("lodash");
var __1 = require("../");
var medusa_core_utils_1 = require("medusa-core-utils");
function pickByConfig(obj, config) {
    var _a, _b;
    var fields = __spreadArray(__spreadArray([], __read(((_a = config.select) !== null && _a !== void 0 ? _a : [])), false), __read(((_b = config.relations) !== null && _b !== void 0 ? _b : [])), false);
    if (fields.length) {
        if (Array.isArray(obj)) {
            return obj.map(function (o) { return (0, lodash_1.pick)(o, fields); });
        }
        else {
            return (0, lodash_1.pick)(obj, fields);
        }
    }
    return obj;
}
exports.pickByConfig = pickByConfig;
function getRetrieveConfig(fields, expand) {
    var includeFields = [];
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        var fieldSet = new Set(fields);
        fieldSet.add("id");
        includeFields = Array.from(fieldSet);
    }
    var expandFields = [];
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandFields = expand;
    }
    return {
        select: includeFields.length ? includeFields : __1.defaultAdminTaxRatesFields,
        relations: expandFields.length
            ? expandFields
            : __1.defaultAdminTaxRatesRelations,
    };
}
exports.getRetrieveConfig = getRetrieveConfig;
function getListConfig(fields, expand, limit, offset, order) {
    if (limit === void 0) { limit = 50; }
    if (offset === void 0) { offset = 0; }
    var includeFields = [];
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        var fieldSet = new Set(fields);
        // Ensure created_at is included, since we are sorting on this
        fieldSet.add("created_at");
        fieldSet.add("id");
        includeFields = Array.from(fieldSet);
    }
    var expandFields = [];
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandFields = expand;
    }
    var orderBy = order !== null && order !== void 0 ? order : {
        created_at: "DESC",
    };
    return {
        select: includeFields.length ? includeFields : __1.defaultAdminTaxRatesFields,
        relations: expandFields.length
            ? expandFields
            : __1.defaultAdminTaxRatesRelations,
        skip: offset,
        take: limit,
        order: orderBy,
    };
}
exports.getListConfig = getListConfig;
//# sourceMappingURL=get-query-config.js.map