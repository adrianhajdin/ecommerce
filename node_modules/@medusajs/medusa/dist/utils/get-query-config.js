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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRetrieveQuery = exports.prepareListQuery = exports.pickByConfig = void 0;
var utils_1 = require("@medusajs/utils");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var feature_flags_1 = require("../loaders/feature-flags");
var medusa_v2_1 = __importDefault(require("../loaders/feature-flags/medusa-v2"));
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
function prepareListQuery(validated, queryConfig) {
    var _a, _b;
    var _c;
    if (queryConfig === void 0) { queryConfig = {}; }
    var isMedusaV2 = feature_flags_1.featureFlagRouter.isFeatureEnabled(medusa_v2_1.default.key);
    // TODO: this function will be simplified a lot once we drop support for the old api
    var order = validated.order, fields = validated.fields, _d = validated.limit, limit = _d === void 0 ? 50 : _d, expand = validated.expand, _e = validated.offset, offset = _e === void 0 ? 0 : _e;
    var _f = queryConfig.allowed, allowed = _f === void 0 ? [] : _f, _g = queryConfig.defaults, defaults = _g === void 0 ? [] : _g, _h = queryConfig.defaultFields, defaultFields = _h === void 0 ? [] : _h, defaultLimit = queryConfig.defaultLimit, _j = queryConfig.allowedFields, allowedFields = _j === void 0 ? [] : _j, _k = queryConfig.allowedRelations, allowedRelations = _k === void 0 ? [] : _k, _l = queryConfig.defaultRelations, defaultRelations = _l === void 0 ? [] : _l, isList = queryConfig.isList;
    allowedFields = allowed.length ? allowed : allowedFields;
    defaultFields = defaults.length ? defaults : defaultFields;
    // e.g *product.variants meaning that we want all fields from the product.variants
    // in that case it wont be part of the select but it will be part of the relations.
    // For the remote query we will have to add the fields to the fields array as product.variants.*
    var starFields = new Set();
    var allFields = new Set(defaultFields);
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        var customFields = fields.split(",").filter(Boolean);
        var shouldReplaceDefaultFields = !customFields.length ||
            customFields.some(function (field) {
                return !(field.startsWith("-") ||
                    field.startsWith("+") ||
                    field.startsWith("*"));
            });
        if (shouldReplaceDefaultFields) {
            allFields = new Set(customFields.map(function (f) { return f.replace(/^[+-]/, ""); }));
        }
        else {
            customFields.forEach(function (field) {
                if (field.startsWith("+")) {
                    allFields.add(field.replace(/^\+/, ""));
                }
                else if (field.startsWith("-")) {
                    allFields.delete(field.replace(/^-/, ""));
                }
                else {
                    allFields.add(field);
                }
            });
        }
        // TODO: Maintain backward compatibility, remove in future. the created at was only added in the list query for default order
        if (queryConfig.isList) {
            allFields.add("created_at");
        }
        allFields.add("id");
    }
    allFields.forEach(function (field) {
        if (field.startsWith("*")) {
            starFields.add(field.replace(/^\*/, ""));
            allFields.delete(field);
        }
    });
    var allAllowedFields = new Set(allowedFields); // In case there is no allowedFields, allow all fields
    var notAllowedFields = [];
    if (allowedFields.length) {
        ;
        __spreadArray(__spreadArray([], __read(allFields), false), __read(Array.from(starFields)), false).forEach(function (field) {
            var hasAllowedField = allowedFields.includes(field);
            if (hasAllowedField) {
                return;
            }
            // Select full relation in that case it must match an allowed field fully
            // e.g product.variants in that case we must have a product.variants in the allowedFields
            if (starFields.has(field)) {
                if (hasAllowedField) {
                    return;
                }
                notAllowedFields.push(field);
                return;
            }
            var fieldStartsWithAllowedField = allowedFields.some(function (allowedField) {
                return field.startsWith(allowedField);
            });
            if (!fieldStartsWithAllowedField) {
                notAllowedFields.push(field);
                return;
            }
        });
    }
    if (allFields.size && notAllowedFields.length) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Requested fields [".concat(Array.from(notAllowedFields).join(", "), "] are not valid"));
    }
    // TODO: maintain backward compatibility, remove in the future
    var _m = (0, utils_1.stringToSelectRelationObject)(Array.from(allFields)), select = _m.select, relations = _m.relations;
    var allRelations = new Set(__spreadArray(__spreadArray(__spreadArray([], __read(relations), false), __read(defaultRelations), false), __read(Array.from(starFields)), false));
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        allRelations = new Set(expand.split(",").filter(Boolean));
    }
    if (allowedRelations.length && expand) {
        var allAllowedRelations = new Set(__spreadArray([], __read(allowedRelations), false));
        var notAllowedRelations = (0, utils_1.getSetDifference)(allRelations, allAllowedRelations);
        if (allRelations.size && notAllowedRelations.size) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Requested fields [".concat(Array.from(notAllowedRelations).join(", "), "] are not valid"));
        }
    }
    // End of expand compatibility
    var orderBy = {};
    if ((0, medusa_core_utils_1.isDefined)(order)) {
        var orderField = order;
        if (order.startsWith("-")) {
            var _o = __read(order.split("-"), 2), field = _o[1];
            orderField = field;
            orderBy = (_a = {}, _a[field] = "DESC", _a);
        }
        else {
            orderBy = (_b = {}, _b[order] = "ASC", _b);
        }
        if (((_c = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields) === null || _c === void 0 ? void 0 : _c.length) &&
            !(queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields.includes(orderField))) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Order field ".concat(orderField, " is not valid"));
        }
    }
    else {
        if (!isMedusaV2) {
            orderBy["created_at"] = "DESC";
        }
    }
    var finalOrder = (0, utils_1.isPresent)(orderBy) ? orderBy : undefined;
    return {
        listConfig: {
            select: select.length ? select : undefined,
            relations: Array.from(allRelations),
            skip: offset,
            take: limit !== null && limit !== void 0 ? limit : defaultLimit,
            order: finalOrder,
        },
        remoteQueryConfig: {
            // Add starFields that are relations only on which we want all properties with a dedicated format to the remote query
            fields: __spreadArray(__spreadArray([], __read(Array.from(allFields)), false), __read(Array.from(starFields).map(function (f) { return "".concat(f, ".*"); })), false),
            pagination: isList
                ? {
                    skip: offset,
                    take: limit !== null && limit !== void 0 ? limit : defaultLimit,
                    order: finalOrder,
                }
                : {},
        },
    };
}
exports.prepareListQuery = prepareListQuery;
function prepareRetrieveQuery(validated, queryConfig) {
    var _a = prepareListQuery(validated, queryConfig), listConfig = _a.listConfig, remoteQueryConfig = _a.remoteQueryConfig;
    return {
        retrieveConfig: {
            select: listConfig.select,
            relations: listConfig.relations,
        },
        remoteQueryConfig: {
            fields: remoteQueryConfig.fields,
            pagination: {},
        },
    };
}
exports.prepareRetrieveQuery = prepareRetrieveQuery;
//# sourceMappingURL=get-query-config.js.map