"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
exports.applyOrdering = exports.mergeEntitiesWithRelations = exports.getGroupedRelations = exports.queryEntityWithoutRelations = exports.queryEntityWithIds = exports.dotReplacer = exports.positiveLookaheadDotReplacer = void 0;
var utils_1 = require("@medusajs/utils");
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
// Regex matches all '.' except the rightmost
exports.positiveLookaheadDotReplacer = new RegExp(/\.(?=[^.]*\.)/, "g");
// Replace all '.' with '__' to avoid typeorm's automatic aliasing
exports.dotReplacer = new RegExp(/\./, "g");
/**
 * Custom query entity, it is part of the creation of a custom findWithRelationsAndCount needs.
 * Allow to query the relations for the specified entity ids
 *
 * @param repository
 * @param entityIds
 * @param groupedRelations
 * @param withDeleted
 * @param select
 * @param customJoinBuilders
 */
function queryEntityWithIds(_a) {
    var repository = _a.repository, entityIds = _a.entityIds, groupedRelations = _a.groupedRelations, _b = _a.withDeleted, withDeleted = _b === void 0 ? false : _b, _c = _a.select, select = _c === void 0 ? [] : _c, _d = _a.customJoinBuilders, customJoinBuilders = _d === void 0 ? [] : _d;
    return __awaiter(this, void 0, void 0, function () {
        var alias;
        var _this = this;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    alias = repository.metadata.name.toLowerCase();
                    return [4 /*yield*/, (0, utils_1.promiseAll)(Object.entries(groupedRelations).map(function (_a) {
                            var _b = __read(_a, 2), toplevel = _b[0], topLevelRelations = _b[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                var querybuilder, shouldAttachDefault, customJoinBuilders_1, customJoinBuilders_1_1, customJoinBuilder, result, regexp_1, joinMethod, _loop_1, topLevelRelations_1, topLevelRelations_1_1, rel;
                                var e_1, _c, e_2, _d;
                                return __generator(this, function (_e) {
                                    querybuilder = repository.createQueryBuilder(alias);
                                    if (select === null || select === void 0 ? void 0 : select.length) {
                                        querybuilder.select(select
                                            .filter(function (s) {
                                            return s.startsWith(toplevel) || !s.includes(".");
                                        })
                                            .map(function (column) {
                                            // In case the column is the toplevel relation, we need to replace the dot with a double underscore if it also contains top level relations
                                            if (column.includes(toplevel)) {
                                                return topLevelRelations.some(function (rel) { return column.includes(rel); })
                                                    ? column.replace(exports.positiveLookaheadDotReplacer, "__")
                                                    : column;
                                            }
                                            return "".concat(alias, ".").concat(column);
                                        }));
                                    }
                                    shouldAttachDefault = true;
                                    try {
                                        for (customJoinBuilders_1 = __values(customJoinBuilders), customJoinBuilders_1_1 = customJoinBuilders_1.next(); !customJoinBuilders_1_1.done; customJoinBuilders_1_1 = customJoinBuilders_1.next()) {
                                            customJoinBuilder = customJoinBuilders_1_1.value;
                                            result = customJoinBuilder(querybuilder, alias, toplevel);
                                            if (result === undefined) {
                                                continue;
                                            }
                                            shouldAttachDefault = shouldAttachDefault && result;
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (customJoinBuilders_1_1 && !customJoinBuilders_1_1.done && (_c = customJoinBuilders_1.return)) _c.call(customJoinBuilders_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    if (shouldAttachDefault) {
                                        regexp_1 = new RegExp("^".concat(toplevel, "\\.\\w+$"));
                                        joinMethod = select.filter(function (key) { return !!key.match(regexp_1); }).length
                                            ? "leftJoin"
                                            : "leftJoinAndSelect";
                                        querybuilder = querybuilder[joinMethod]("".concat(alias, ".").concat(toplevel), toplevel);
                                    }
                                    _loop_1 = function (rel) {
                                        var _f = __read(rel.split("."), 2), _1 = _f[0], rest = _f[1];
                                        if (!rest) {
                                            return "continue";
                                        }
                                        var regexp = new RegExp("^".concat(rel, "\\.\\w+$"));
                                        var joinMethod = select.filter(function (key) { return !!key.match(regexp); }).length
                                            ? "leftJoin"
                                            : "leftJoinAndSelect";
                                        querybuilder = querybuilder[joinMethod](rel.replace(exports.positiveLookaheadDotReplacer, "__"), rel.replace(exports.dotReplacer, "__"));
                                    };
                                    try {
                                        for (topLevelRelations_1 = __values(topLevelRelations), topLevelRelations_1_1 = topLevelRelations_1.next(); !topLevelRelations_1_1.done; topLevelRelations_1_1 = topLevelRelations_1.next()) {
                                            rel = topLevelRelations_1_1.value;
                                            _loop_1(rel);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (topLevelRelations_1_1 && !topLevelRelations_1_1.done && (_d = topLevelRelations_1.return)) _d.call(topLevelRelations_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    querybuilder = querybuilder.where("".concat(alias, ".id IN (:...entitiesIds)"), {
                                        entitiesIds: entityIds,
                                    });
                                    if (withDeleted) {
                                        querybuilder.withDeleted();
                                    }
                                    return [2 /*return*/, querybuilder.getMany()];
                                });
                            });
                        })).then(lodash_1.flatten)];
                case 1: return [2 /*return*/, _e.sent()];
            }
        });
    });
}
exports.queryEntityWithIds = queryEntityWithIds;
/**
 * Custom query entity without relations, it is part of the creation of a custom findWithRelationsAndCount needs.
 * Allow to query the entities without taking into account the relations. The relations will be queried separately
 * using the queryEntityWithIds util
 *
 * @param repository
 * @param optionsWithoutRelations
 * @param shouldCount
 * @param customJoinBuilders
 */
function queryEntityWithoutRelations(_a) {
    var _b;
    var repository = _a.repository, optionsWithoutRelations = _a.optionsWithoutRelations, _c = _a.shouldCount, shouldCount = _c === void 0 ? false : _c, _d = _a.customJoinBuilders, customJoinBuilders = _d === void 0 ? [] : _d;
    return __awaiter(this, void 0, void 0, function () {
        var alias, qb, shouldJoins, customJoinBuilders_2, customJoinBuilders_2_1, customJoinBuilder, result, e_3_1, expressionMapAllOrderBys, orderBysString, outerQb, mapToEntities, entities, count, outerQbCount, result, result;
        var e_3, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    alias = repository.metadata.name.toLowerCase();
                    qb = repository.createQueryBuilder(alias).select(["".concat(alias, ".id")]);
                    if (optionsWithoutRelations.where) {
                        qb.where(optionsWithoutRelations.where);
                    }
                    shouldJoins = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, 7, 8]);
                    customJoinBuilders_2 = __values(customJoinBuilders), customJoinBuilders_2_1 = customJoinBuilders_2.next();
                    _f.label = 2;
                case 2:
                    if (!!customJoinBuilders_2_1.done) return [3 /*break*/, 5];
                    customJoinBuilder = customJoinBuilders_2_1.value;
                    return [4 /*yield*/, customJoinBuilder(qb, alias)];
                case 3:
                    result = _f.sent();
                    if (result) {
                        shouldJoins.push({
                            relation: result.relation,
                            shouldJoin: !result.preventOrderJoin,
                        });
                    }
                    _f.label = 4;
                case 4:
                    customJoinBuilders_2_1 = customJoinBuilders_2.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_3_1 = _f.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (customJoinBuilders_2_1 && !customJoinBuilders_2_1.done && (_e = customJoinBuilders_2.return)) _e.call(customJoinBuilders_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 8:
                    applyOrdering({
                        repository: repository,
                        order: (_b = optionsWithoutRelations.order) !== null && _b !== void 0 ? _b : {},
                        qb: qb,
                        alias: alias,
                        shouldJoin: function (relationToJoin) {
                            return shouldJoins.every(function (_a) {
                                var relation = _a.relation, shouldJoin = _a.shouldJoin;
                                return relation !== relationToJoin ||
                                    (relation === relationToJoin && shouldJoin);
                            });
                        },
                    });
                    if (optionsWithoutRelations.withDeleted) {
                        qb.withDeleted();
                    }
                    expressionMapAllOrderBys = qb.expressionMap.allOrderBys;
                    if (expressionMapAllOrderBys &&
                        Object.keys(expressionMapAllOrderBys).length) {
                        orderBysString = Object.keys(expressionMapAllOrderBys)
                            .map(function (column) {
                            return "".concat(column, " ").concat(expressionMapAllOrderBys[column]);
                        })
                            .join(", ");
                        qb.addSelect("row_number() OVER (PARTITION BY ".concat(alias, ".id ORDER BY ").concat(orderBysString, ") AS rownum"));
                    }
                    else {
                        qb.addSelect("1 AS rownum");
                    }
                    outerQb = new typeorm_1.SelectQueryBuilder(qb.connection, qb.queryRunner)
                        .select("".concat(qb.escape("".concat(alias, "_id"))))
                        .from("(".concat(qb.getQuery(), ")"), alias)
                        .where("".concat(alias, ".rownum = 1"))
                        .setParameters(qb.getParameters())
                        .setNativeParameters(qb.expressionMap.nativeParameters)
                        .offset(optionsWithoutRelations.skip)
                        .limit(optionsWithoutRelations.take);
                    mapToEntities = function (array) {
                        return array.map(function (rawProduct) { return ({
                            id: rawProduct["".concat(alias, "_id")],
                        }); });
                    };
                    count = 0;
                    if (!shouldCount) return [3 /*break*/, 10];
                    outerQbCount = new typeorm_1.SelectQueryBuilder(qb.connection, qb.queryRunner)
                        .select("COUNT(1)", "count")
                        .from("(".concat(qb.getQuery(), ")"), alias)
                        .where("".concat(alias, ".rownum = 1"))
                        .setParameters(qb.getParameters())
                        .setNativeParameters(qb.expressionMap.nativeParameters)
                        .orderBy()
                        .groupBy()
                        .offset(undefined)
                        .limit(undefined)
                        .skip(undefined)
                        .take(undefined);
                    return [4 /*yield*/, (0, utils_1.promiseAll)([
                            outerQb.getRawMany(),
                            outerQbCount.getRawOne(),
                        ])];
                case 9:
                    result = _f.sent();
                    entities = mapToEntities(result[0]);
                    count = Number(result[1].count);
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, outerQb.getRawMany()];
                case 11:
                    result = _f.sent();
                    entities = mapToEntities(result);
                    _f.label = 12;
                case 12: return [2 /*return*/, [entities, count]];
            }
        });
    });
}
exports.queryEntityWithoutRelations = queryEntityWithoutRelations;
/**
 * Grouped the relation to the top level entity
 * @param relations
 */
function getGroupedRelations(relations) {
    var e_4, _a;
    var groupedRelations = {};
    try {
        for (var relations_1 = __values(relations), relations_1_1 = relations_1.next(); !relations_1_1.done; relations_1_1 = relations_1.next()) {
            var rel = relations_1_1.value;
            var _b = __read(rel.split("."), 1), topLevel = _b[0];
            if (groupedRelations[topLevel]) {
                groupedRelations[topLevel].push(rel);
            }
            else {
                groupedRelations[topLevel] = [rel];
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (relations_1_1 && !relations_1_1.done && (_a = relations_1.return)) _a.call(relations_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return groupedRelations;
}
exports.getGroupedRelations = getGroupedRelations;
/**
 * Merged the entities and relations that composed by the result of queryEntityWithIds and queryEntityWithoutRelations
 * call
 * @param entitiesAndRelations
 */
function mergeEntitiesWithRelations(entitiesAndRelations) {
    var entitiesAndRelationsById = (0, lodash_1.groupBy)(entitiesAndRelations, "id");
    return (0, lodash_1.map)(entitiesAndRelationsById, function (entityAndRelations) {
        return lodash_1.merge.apply(void 0, __spreadArray([{}], __read(entityAndRelations), false));
    });
}
exports.mergeEntitiesWithRelations = mergeEntitiesWithRelations;
/**
 * Apply the appropriate order depending on the requirements
 * @param repository
 * @param order The field on which to apply the order (e.g { "variants.prices.amount": "DESC" })
 * @param qb
 * @param alias
 * @param shouldJoin In case a join is already applied elsewhere and therefore you want to avoid to re joining the data in that case you can return false for specific relations
 */
function applyOrdering(_a) {
    var repository = _a.repository, order = _a.order, qb = _a.qb, alias = _a.alias, shouldJoin = _a.shouldJoin;
    var toSelect = [];
    var parsed = Object.entries(order).reduce(function (acc, _a) {
        var _b = __read(_a, 2), orderPath = _b[0], orderDirection = _b[1];
        // If the orderPath (e.g variants.prices.amount) includes a point it means that it is to access
        // a child relation of an unknown depth
        if (orderPath.includes(".")) {
            // We are spliting the path and separating the relations from the property to order. (e.g relations ["variants", "prices"] and property "amount"
            var relationsToJoin = orderPath.split(".");
            var propToOrder = relationsToJoin.pop();
            // For each relation we will retrieve the metadata in order to use the right property name from the relation registered in the entity.
            // Each time we will return the child (i.e the relation) and the inverse metadata (corresponding to the child metadata from the parent point of view)
            // In order for the next child to know its parent
            relationsToJoin.reduce(function (_a, child) {
                var _b = __read(_a, 2), parent = _b[0], parentMetadata = _b[1];
                // Find the relation metadata from the parent entity
                var relationMetadata = parentMetadata.relations.find(function (relationMetadata) { return relationMetadata.propertyName === child; });
                // The consumer can refuse to apply a join on a relation if the join has already been applied before calling this util
                var shouldApplyJoin = shouldJoin(child);
                if (shouldApplyJoin) {
                    qb.leftJoin("".concat(parent, ".").concat(relationMetadata.propertyPath), child);
                }
                // Return the child relation to be the parent for the next one, as well as the metadata corresponding the child in order
                // to find the next relation metadata for the next child
                return [child, relationMetadata.inverseEntityMetadata];
            }, [alias, repository.metadata]);
            // The key for variants.prices.amount will be "prices.amount" since we are ordering on the join added to its parent "variants" in this example
            var key_1 = "".concat(relationsToJoin[relationsToJoin.length - 1], ".").concat(propToOrder);
            acc[key_1] = orderDirection;
            toSelect.push(key_1);
            return acc;
        }
        var key = "".concat(alias, ".").concat(orderPath);
        // Prevent ambiguous column error when top level entity id is ordered
        if (orderPath !== "id") {
            toSelect.push(key);
        }
        acc[key] = orderDirection;
        return acc;
    }, {});
    qb.addSelect(toSelect);
    qb.orderBy(parsed);
}
exports.applyOrdering = applyOrdering;
//# sourceMappingURL=repository.js.map