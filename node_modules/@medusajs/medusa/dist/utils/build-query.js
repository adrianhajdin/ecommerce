"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.nullableValue = exports.addOrderToSelect = exports.buildLegacyFieldsListFrom = exports.buildQuery = void 0;
var typeorm_1 = require("typeorm");
var is_object_1 = require("./is-object");
var utils_1 = require("@medusajs/utils");
var operatorsMap = {
    lt: function (value) { return (0, typeorm_1.LessThan)(value); },
    gt: function (value) { return (0, typeorm_1.MoreThan)(value); },
    lte: function (value) { return (0, typeorm_1.LessThanOrEqual)(value); },
    gte: function (value) { return (0, typeorm_1.MoreThanOrEqual)(value); },
    contains: function (value) { return (0, typeorm_1.ILike)("%".concat(value, "%")); },
    starts_with: function (value) { return (0, typeorm_1.ILike)("".concat(value, "%")); },
    ends_with: function (value) { return (0, typeorm_1.ILike)("%".concat(value)); },
};
/**
 * Used to build TypeORM queries.
 * @param selector The selector
 * @param config The config
 * @return The QueryBuilderConfig
 */
function buildQuery(selector, config) {
    var _a, _b;
    if (config === void 0) { config = {}; }
    var query = {
        where: buildWhere(selector),
    };
    if ("deleted_at" in selector) {
        query.withDeleted = true;
    }
    if ("skip" in config) {
        ;
        query.skip = (_a = config.skip) !== null && _a !== void 0 ? _a : undefined;
    }
    if ("take" in config) {
        ;
        query.take = (_b = config.take) !== null && _b !== void 0 ? _b : undefined;
    }
    if (config.relations) {
        query.relations = (0, utils_1.buildRelations)(config.relations);
    }
    if (config.select) {
        query.select = (0, utils_1.buildSelects)(config.select);
    }
    if (config.order) {
        query.order = (0, utils_1.buildOrder)(config.order);
    }
    return query;
}
exports.buildQuery = buildQuery;
/**
 * @param constraints
 *
 * @example
 * const q = buildWhere(
 *   {
 *     id: "1234",
 *     test1: ["123", "12", "1"],
 *     test2: Not("this"),
 *     date: { gt: date },
 *     amount: { gt: 10 },
 *   },
 *)
 *
 * // Output
 * {
 *    id: "1234",
 *    test1: In(["123", "12", "1"]),
 *    test2: Not("this"),
 *    date: MoreThan(date),
 *    amount: MoreThan(10)
 * }
 */
function buildWhere(constraints) {
    var e_1, _a;
    var where = {};
    if (Array.isArray(constraints)) {
        where = [];
        constraints.forEach(function (constraint) {
            ;
            where.push(buildWhere(constraint));
        });
        return where;
    }
    var _loop_1 = function (key, value) {
        if (value === undefined) {
            return "continue";
        }
        if (value === null) {
            where[key] = (0, typeorm_1.IsNull)();
            return "continue";
        }
        if (value instanceof typeorm_1.FindOperator) {
            where[key] = value;
            return "continue";
        }
        if (Array.isArray(value)) {
            where[key] = (0, typeorm_1.In)(value);
            return "continue";
        }
        if (typeof value === "object") {
            Object.entries(value).forEach(function (_a) {
                var _b = __read(_a, 2), objectKey = _b[0], objectValue = _b[1];
                where[key] = where[key] || [];
                if (operatorsMap[objectKey]) {
                    where[key].push(operatorsMap[objectKey](objectValue));
                }
                else {
                    if (objectValue != undefined && typeof objectValue === "object") {
                        where[key] = buildWhere(objectValue);
                        return;
                    }
                    where[key] = value;
                }
                return;
            });
            if (!Array.isArray(where[key])) {
                return "continue";
            }
            if (where[key].length === 1) {
                where[key] = where[key][0];
            }
            else {
                where[key] = typeorm_1.And.apply(void 0, __spreadArray([], __read(where[key]), false));
            }
            return "continue";
        }
        where[key] = value;
    };
    try {
        for (var _b = __values(Object.entries(constraints)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            _loop_1(key, value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return where;
}
/**
 * Revert new object structure of find options to the legacy structure of previous version
 * @deprecated in favor of import { objectToStringPath } from "@medusajs/utils"
 * @example
 * input: {
 *   test: {
 *     test1: true,
 *     test2: true,
 *     test3: {
 *       test4: true
 *     },
 *   },
 *   test2: true
 * }
 * output: ['test.test1', 'test.test2', 'test.test3.test4', 'test2']
 * @param input
 */
function buildLegacyFieldsListFrom(input) {
    var e_2, _a;
    if (input === void 0) { input = {}; }
    if (!Object.keys(input).length) {
        return [];
    }
    var output = new Set(Object.keys(input));
    var _loop_2 = function (key) {
        if (input[key] != undefined && typeof input[key] === "object") {
            var deepRes = buildLegacyFieldsListFrom(input[key]);
            var items = deepRes.reduce(function (acc, val) {
                acc.push("".concat(key, ".").concat(val));
                return acc;
            }, []);
            items.forEach(function (item) { return output.add(item); });
            return "continue";
        }
        output.add(key);
    };
    try {
        for (var _b = __values(Object.keys(input)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_2(key);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return Array.from(output);
}
exports.buildLegacyFieldsListFrom = buildLegacyFieldsListFrom;
function addOrderToSelect(order, select) {
    var e_3, _a, _b;
    try {
        for (var _c = __values(Object.keys(order)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var orderBy = _d.value;
            if ((0, is_object_1.isObject)(order[orderBy])) {
                select[orderBy] =
                    select[orderBy] && (0, is_object_1.isObject)(select[orderBy]) ? select[orderBy] : {};
                addOrderToSelect(order[orderBy], select[orderBy]);
                continue;
            }
            select[orderBy] = (0, is_object_1.isObject)(select[orderBy])
                ? __assign(__assign({}, select[orderBy]), (_b = { id: true }, _b[orderBy] = true, _b)) : true;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_3) throw e_3.error; }
    }
}
exports.addOrderToSelect = addOrderToSelect;
function nullableValue(value) {
    if (value === null) {
        return (0, typeorm_1.IsNull)();
    }
    else {
        return value;
    }
}
exports.nullableValue = nullableValue;
//# sourceMappingURL=build-query.js.map