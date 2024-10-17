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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepository = void 0;
var typeorm_1 = require("typeorm");
var product_category_1 = require("../models/product-category");
var database_1 = require("../loaders/database");
var utils_1 = require("@medusajs/utils");
var lodash_1 = require("lodash");
exports.ProductCategoryRepository = database_1.dataSource
    .getTreeRepository(product_category_1.ProductCategory)
    .extend({
    findOneWithDescendants: function (query, treeScope) {
        if (treeScope === void 0) { treeScope = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var productCategory, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findOne(query)];
                    case 1:
                        productCategory = _b.sent();
                        if (!productCategory) {
                            return [2 /*return*/, productCategory];
                        }
                        _a = sortChildren;
                        // Returns the productCategory with all of its descendants until the last child node
                        return [4 /*yield*/, this.findDescendantsTree(productCategory)];
                    case 2: return [2 /*return*/, _a.apply(void 0, [
                            // Returns the productCategory with all of its descendants until the last child node
                            _b.sent(), treeScope])];
                }
            });
        });
    },
    getFreeTextSearchResultsAndCount: function (options, q, treeScope, includeTree) {
        var _a, _b;
        if (options === void 0) { options = {
            where: {},
        }; }
        if (treeScope === void 0) { treeScope = {}; }
        if (includeTree === void 0) { includeTree = false; }
        return __awaiter(this, void 0, void 0, function () {
            var entityName, options_, columnsSelected, relationsSelected, fetchSelectColumns, queryBuilder, includedTreeRelations, nonTreeRelations, _c, categories, count;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        entityName = "product_category";
                        options_ = __assign({}, options);
                        options_.where = options_.where;
                        columnsSelected = (0, utils_1.objectToStringPath)(options_.select, {
                            includeParentPropertyFields: false,
                        });
                        relationsSelected = (0, utils_1.objectToStringPath)(options_.relations);
                        fetchSelectColumns = function (relationName) {
                            var modelColumns = _this.metadata.ownColumns.map(function (column) { return column.propertyName; });
                            var selectColumns = columnsSelected.length
                                ? columnsSelected
                                : modelColumns;
                            return selectColumns.map(function (column) {
                                return "".concat(relationName, ".").concat(column);
                            });
                        };
                        queryBuilder = this.createQueryBuilder(entityName)
                            .select(fetchSelectColumns(entityName))
                            .skip(options_.skip)
                            .take(options_.take)
                            .addOrderBy("".concat(entityName, ".rank"), "ASC")
                            .addOrderBy("".concat(entityName, ".handle"), "ASC");
                        if (q) {
                            (_a = options_.where) === null || _a === void 0 ? true : delete _a.name;
                            (_b = options_.where) === null || _b === void 0 ? true : delete _b.handle;
                            options_.where = [
                                __assign(__assign({}, options_.where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, options_.where), { handle: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        queryBuilder.where(options_.where);
                        includedTreeRelations = relationsSelected.filter(function (rel) {
                            return product_category_1.ProductCategory.treeRelations.includes(rel);
                        });
                        includedTreeRelations.forEach(function (treeRelation) {
                            var treeWhere = Object.entries(treeScope)
                                .map(function (entry) { return "".concat(treeRelation, ".").concat(entry[0], " = :").concat(entry[0]); })
                                .join(" AND ");
                            queryBuilder
                                .leftJoin("".concat(entityName, ".").concat(treeRelation), treeRelation, treeWhere, treeScope)
                                .addSelect(fetchSelectColumns(treeRelation));
                        });
                        nonTreeRelations = relationsSelected.filter(function (rel) { return !product_category_1.ProductCategory.treeRelations.includes(rel); });
                        nonTreeRelations.forEach(function (relation) {
                            queryBuilder.leftJoinAndSelect("".concat(entityName, ".").concat(relation), relation);
                        });
                        return [4 /*yield*/, queryBuilder.getManyAndCount()];
                    case 1:
                        _c = __read.apply(void 0, [_d.sent(), 2]), categories = _c[0], count = _c[1];
                        return [4 /*yield*/, (0, utils_1.promiseAll)(categories.map(function (productCategory) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!includeTree) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.findDescendantsTree(productCategory)];
                                        case 1:
                                            productCategory = _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/, sortChildren(productCategory, treeScope)];
                                    }
                                });
                            }); }))];
                    case 2:
                        categories = _d.sent();
                        return [2 /*return*/, [categories, count]];
                }
            });
        });
    },
    addProducts: function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var valuesToInsert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valuesToInsert = productIds.map(function (id) { return ({
                            product_category_id: productCategoryId,
                            product_id: id,
                        }); });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .into(product_category_1.ProductCategory.productCategoryProductJoinTable)
                                .values(valuesToInsert)
                                .orIgnore()
                                .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    removeProducts: function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(product_category_1.ProductCategory.productCategoryProductJoinTable)
                            .where({
                            product_category_id: productCategoryId,
                            product_id: (0, typeorm_1.In)(productIds),
                        })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
});
exports.default = exports.ProductCategoryRepository;
var scopeChildren = function (category, treeScope) {
    if (treeScope === void 0) { treeScope = {}; }
    if ((0, lodash_1.isEmpty)(treeScope)) {
        return category;
    }
    if (category.category_children) {
        category.category_children = category.category_children.filter(function (categoryChild) {
            return !Object.entries(treeScope).some(function (_a) {
                var _b = __read(_a, 2), attribute = _b[0], value = _b[1];
                return categoryChild[attribute] !== value;
            });
        });
    }
    return category;
};
var sortChildren = function (category, treeScope) {
    if (treeScope === void 0) { treeScope = {}; }
    if (category.category_children) {
        category.category_children = category.category_children
            .map(
        // Before we sort the children, we need scope the children
        // to conform to treeScope conditions
        function (child) { return sortChildren(scopeChildren(child, treeScope), treeScope); })
            .sort(function (a, b) {
            // Sort by rank first
            var rankDiff = a.rank - b.rank;
            // If the ranks are the same, sort by handle in ascending order
            if (rankDiff === 0) {
                return a.handle.localeCompare(b.handle);
            }
            return rankDiff;
        });
    }
    return category;
};
//# sourceMappingURL=product-category.js.map