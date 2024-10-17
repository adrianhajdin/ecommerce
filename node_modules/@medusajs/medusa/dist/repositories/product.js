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
exports.ProductRepository = void 0;
var utils_1 = require("@medusajs/utils");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var database_1 = require("../loaders/database");
var models_1 = require("../models");
var repository_1 = require("../utils/repository");
exports.ProductRepository = database_1.dataSource.getRepository(models_1.Product).extend({
    queryProducts: function (optionsWithoutRelations, shouldCount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (shouldCount === void 0) { shouldCount = false; }
        return __awaiter(this, void 0, void 0, function () {
            var tags, price_lists, sales_channels, categoryId, categoriesQuery, includeCategoryChildren, discount_condition_id;
            var _this = this;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        tags = (_a = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _a === void 0 ? void 0 : _a.tags;
                        (_b = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _b === void 0 ? true : delete _b.tags;
                        price_lists = (_c = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _c === void 0 ? void 0 : _c.price_list_id;
                        (_d = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _d === void 0 ? true : delete _d.price_list_id;
                        sales_channels = (_e = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _e === void 0 ? void 0 : _e.sales_channel_id;
                        (_f = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _f === void 0 ? true : delete _f.sales_channel_id;
                        categoryId = (_g = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _g === void 0 ? void 0 : _g.category_id;
                        (_h = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _h === void 0 ? true : delete _h.category_id;
                        categoriesQuery = optionsWithoutRelations.where.categories || {};
                        (_j = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _j === void 0 ? true : delete _j.categories;
                        includeCategoryChildren = (_k = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _k === void 0 ? void 0 : _k.include_category_children;
                        (_l = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _l === void 0 ? true : delete _l.include_category_children;
                        discount_condition_id = (_m = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _m === void 0 ? void 0 : _m.discount_condition_id;
                        (_o = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _o === void 0 ? true : delete _o.discount_condition_id;
                        return [4 /*yield*/, (0, repository_1.queryEntityWithoutRelations)({
                                repository: this,
                                optionsWithoutRelations: optionsWithoutRelations,
                                shouldCount: shouldCount,
                                customJoinBuilders: [
                                    function (qb, alias) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (tags) {
                                                qb.leftJoin("".concat(alias, ".tags"), "tags").andWhere("tags.id IN (:...tag_ids)", {
                                                    tag_ids: tags.value,
                                                });
                                                return [2 /*return*/, { relation: "tags", preventOrderJoin: true }];
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); },
                                    function (qb, alias) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (price_lists) {
                                                qb.leftJoin("".concat(alias, ".variants"), "variants")
                                                    .leftJoin("variants.prices", "prices")
                                                    .andWhere("prices.price_list_id IN (:...price_list_ids)", {
                                                    price_list_ids: price_lists.value,
                                                });
                                                return [2 /*return*/, { relation: "prices", preventOrderJoin: true }];
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); },
                                    function (qb, alias) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (sales_channels) {
                                                qb.innerJoin("".concat(alias, ".sales_channels"), "sales_channels", "sales_channels.id IN (:...sales_channels_ids)", { sales_channels_ids: sales_channels.value });
                                                return [2 /*return*/, { relation: "sales_channels", preventOrderJoin: true }];
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); },
                                    function (qb, alias) { return __awaiter(_this, void 0, void 0, function () {
                                        var categoryIds, joinScope;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.getCategoryIdsFromInput(categoryId, includeCategoryChildren)];
                                                case 1:
                                                    categoryIds = _a.sent();
                                                    if (categoryIds.length || categoriesQuery) {
                                                        joinScope = {};
                                                        if (categoryIds.length) {
                                                            Object.assign(joinScope, { id: categoryIds });
                                                        }
                                                        if (categoriesQuery) {
                                                            Object.assign(joinScope, categoriesQuery);
                                                        }
                                                        this._applyCategoriesQuery(qb, {
                                                            alias: alias,
                                                            categoryAlias: "categories",
                                                            where: joinScope,
                                                            joinName: categoryIds.length ? "innerJoin" : "leftJoin",
                                                        });
                                                        return [2 /*return*/, { relation: "categories", preventOrderJoin: true }];
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    function (qb, alias) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (discount_condition_id) {
                                                qb.innerJoin("discount_condition_product", "dc_product", "dc_product.product_id = ".concat(alias, ".id AND dc_product.condition_id = :dcId"), { dcId: discount_condition_id });
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); },
                                ],
                            })];
                    case 1: return [2 /*return*/, _p.sent()];
                }
            });
        });
    },
    queryProductsWithIds: function (_a) {
        var entityIds = _a.entityIds, groupedRelations = _a.groupedRelations, _b = _a.withDeleted, withDeleted = _b === void 0 ? false : _b, _c = _a.select, select = _c === void 0 ? [] : _c, _d = _a.order, order = _d === void 0 ? {} : _d, _e = _a.where, where = _e === void 0 ? {} : _e;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, (0, repository_1.queryEntityWithIds)({
                            repository: this,
                            entityIds: entityIds,
                            groupedRelations: groupedRelations,
                            withDeleted: withDeleted,
                            select: select,
                            customJoinBuilders: [
                                function (queryBuilder, alias, topLevel) {
                                    if (topLevel === "variants") {
                                        var joinMethod = select.filter(function (key) { return !!key.match(/^variants\.\w+$/i); }).length
                                            ? "leftJoin"
                                            : "leftJoinAndSelect";
                                        queryBuilder[joinMethod]("".concat(alias, ".").concat(topLevel), topLevel);
                                        if (!Object.keys(order).some(function (key) { return key.startsWith("variants"); })) {
                                            // variant_rank being select false, apply the filter here directly
                                            queryBuilder.addOrderBy("".concat(topLevel, ".variant_rank"), "ASC");
                                        }
                                        return false;
                                    }
                                    return;
                                },
                                function (queryBuilder, alias, topLevel) {
                                    if (topLevel === "categories") {
                                        var joinScope = where
                                            .categories;
                                        _this._applyCategoriesQuery(queryBuilder, {
                                            alias: alias,
                                            categoryAlias: "categories",
                                            where: joinScope,
                                            joinName: "leftJoinAndSelect",
                                        });
                                        return false;
                                    }
                                    return;
                                },
                            ],
                        })];
                    case 1: return [2 /*return*/, _f.sent()];
                }
            });
        });
    },
    findWithRelationsAndCount: function (relations, idsOrOptionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._findWithRelations({
                            relations: relations,
                            idsOrOptionsWithoutRelations: idsOrOptionsWithoutRelations,
                            withDeleted: false,
                            shouldCount: true,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    findWithRelations: function (relations, idsOrOptionsWithoutRelations, withDeleted) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {
            where: {},
        }; }
        if (withDeleted === void 0) { withDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._findWithRelations({
                            relations: relations,
                            idsOrOptionsWithoutRelations: idsOrOptionsWithoutRelations,
                            withDeleted: withDeleted,
                            shouldCount: false,
                        })];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), products = _a[0];
                        return [2 /*return*/, products];
                }
            });
        });
    },
    findOneWithRelations: function (relations, optionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (optionsWithoutRelations === void 0) { optionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Limit 1
                        optionsWithoutRelations.take = 1;
                        return [4 /*yield*/, this.findWithRelations(relations, optionsWithoutRelations)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[0]];
                }
            });
        });
    },
    bulkAddToCollection: function (productIds, collectionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(models_1.Product)
                            .set({ collection_id: collectionId })
                            .where({ id: (0, typeorm_1.In)(productIds) })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.findByIds(productIds)];
                }
            });
        });
    },
    bulkRemoveFromCollection: function (productIds, collectionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(models_1.Product)
                            .set({ collection_id: null })
                            .where({ id: (0, typeorm_1.In)(productIds), collection_id: collectionId })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.findByIds(productIds)];
                }
            });
        });
    },
    getFreeTextSearchResultsAndCount: function (q, options, relations) {
        var _a, _b, _c;
        if (options === void 0) { options = { where: {} }; }
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var option_, productAlias, pricesAlias, variantsAlias, collectionAlias, tagsAlias, tags, price_lists, sales_channels, discount_condition_id, categoryId, includeCategoryChildren, categoriesQuery, qb, variantPricesAlias, joinScope, categoryIds, joinedWithTags, joinedWithPriceLists, _d, results, count, orderedResultsSet, products, productsMap, orderedProducts;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        option_ = (0, lodash_1.cloneDeep)(options);
                        productAlias = "product";
                        pricesAlias = "prices";
                        variantsAlias = "variants";
                        collectionAlias = "collection";
                        tagsAlias = "tags";
                        if ("description" in option_.where) {
                            delete option_.where.description;
                        }
                        if ("title" in option_.where) {
                            delete option_.where.title;
                        }
                        tags = option_.where.tags;
                        delete option_.where.tags;
                        price_lists = option_.where.price_list_id;
                        delete option_.where.price_list_id;
                        sales_channels = option_.where.sales_channel_id;
                        delete option_.where.sales_channel_id;
                        discount_condition_id = option_.where.discount_condition_id;
                        delete option_.where.discount_condition_id;
                        categoryId = option_.where.category_id;
                        delete option_.where.category_id;
                        includeCategoryChildren = (_a = option_ === null || option_ === void 0 ? void 0 : option_.where) === null || _a === void 0 ? void 0 : _a.include_category_children;
                        (_b = option_ === null || option_ === void 0 ? void 0 : option_.where) === null || _b === void 0 ? true : delete _b.include_category_children;
                        categoriesQuery = option_.where.categories || {};
                        delete option_.where.categories;
                        qb = this.createQueryBuilder("".concat(productAlias))
                            .leftJoinAndSelect("".concat(productAlias, ".variants"), variantsAlias)
                            .leftJoinAndSelect("".concat(productAlias, ".collection"), "".concat(collectionAlias))
                            .select(["".concat(productAlias, ".id")])
                            .where(option_.where)
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where("".concat(productAlias, ".description ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(productAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(variantsAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(variantsAlias, ".sku ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(collectionAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") });
                        }))
                            .skip(option_.skip)
                            .take(option_.take);
                        if (discount_condition_id) {
                            qb.innerJoin("discount_condition_product", "dc_product", "dc_product.product_id = ".concat(productAlias, ".id AND dc_product.condition_id = :dcId"), { dcId: discount_condition_id });
                        }
                        if (tags) {
                            qb.leftJoin("".concat(productAlias, ".tags"), tagsAlias).andWhere("".concat(tagsAlias, ".id IN (:...tag_ids)"), {
                                tag_ids: tags.value,
                            });
                        }
                        if (price_lists) {
                            variantPricesAlias = "".concat(variantsAlias, "_prices");
                            qb.leftJoin("".concat(productAlias, ".variants"), variantPricesAlias)
                                .leftJoin("".concat(variantPricesAlias, ".prices"), pricesAlias)
                                .andWhere("".concat(pricesAlias, ".price_list_id IN (:...price_list_ids)"), {
                                price_list_ids: price_lists.value,
                            });
                        }
                        if (sales_channels) {
                            qb.innerJoin("".concat(productAlias, ".sales_channels"), "sales_channels", "sales_channels.id IN (:...sales_channels_ids)", { sales_channels_ids: sales_channels.value });
                        }
                        if (!categoriesQuery) return [3 /*break*/, 2];
                        joinScope = {};
                        return [4 /*yield*/, this.getCategoryIdsFromInput(categoryId, includeCategoryChildren)];
                    case 1:
                        categoryIds = _e.sent();
                        if (categoryIds.length) {
                            Object.assign(joinScope, { id: categoryIds });
                        }
                        if (categoriesQuery) {
                            Object.assign(joinScope, categoriesQuery);
                        }
                        this._applyCategoriesQuery(qb, {
                            alias: productAlias,
                            categoryAlias: "categories",
                            where: joinScope,
                            joinName: categoryIds.length ? "innerJoin" : "leftJoin",
                        });
                        _e.label = 2;
                    case 2:
                        joinedWithTags = !!tags;
                        joinedWithPriceLists = !!price_lists;
                        (0, repository_1.applyOrdering)({
                            repository: this,
                            order: (_c = options.order) !== null && _c !== void 0 ? _c : {},
                            qb: qb,
                            alias: productAlias,
                            shouldJoin: function (relation) {
                                return relation !== variantsAlias &&
                                    (relation !== pricesAlias || !joinedWithPriceLists) &&
                                    (relation !== tagsAlias || !joinedWithTags);
                            },
                        });
                        if (option_.withDeleted) {
                            qb = qb.withDeleted();
                        }
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 3:
                        _d = __read.apply(void 0, [_e.sent(), 2]), results = _d[0], count = _d[1];
                        orderedResultsSet = new Set(results.map(function (p) { return p.id; }));
                        return [4 /*yield*/, this.findWithRelations(relations, __spreadArray([], __read(orderedResultsSet), false), option_.withDeleted)];
                    case 4:
                        products = _e.sent();
                        productsMap = new Map(products.map(function (p) { return [p.id, p]; }));
                        orderedProducts = [];
                        orderedResultsSet.forEach(function (id) {
                            orderedProducts.push(productsMap.get(id));
                        });
                        return [2 /*return*/, [orderedProducts, count]];
                }
            });
        });
    },
    getCategoryIdsFromInput: function (categoryId, includeCategoryChildren) {
        if (includeCategoryChildren === void 0) { includeCategoryChildren = false; }
        return __awaiter(this, void 0, void 0, function () {
            var categoryIds, categoryRepository, categories, categories_1, categories_1_1, category, categoryChildren, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        categoryIds = categoryId === null || categoryId === void 0 ? void 0 : categoryId.value;
                        if (!(0, medusa_core_utils_1.isDefined)(categoryIds)) {
                            return [2 /*return*/, []];
                        }
                        if (!includeCategoryChildren) return [3 /*break*/, 9];
                        categoryRepository = this.manager.getTreeRepository(models_1.ProductCategory);
                        return [4 /*yield*/, categoryRepository.find({
                                where: { id: (0, typeorm_1.In)(categoryIds) },
                            })];
                    case 1:
                        categories = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        categories_1 = __values(categories), categories_1_1 = categories_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!categories_1_1.done) return [3 /*break*/, 6];
                        category = categories_1_1.value;
                        return [4 /*yield*/, categoryRepository.findDescendantsTree(category)];
                    case 4:
                        categoryChildren = _b.sent();
                        categoryIds = categoryIds.concat(this.getCategoryIdsRecursively(categoryChildren));
                        _b.label = 5;
                    case 5:
                        categories_1_1 = categories_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (categories_1_1 && !categories_1_1.done && (_a = categories_1.return)) _a.call(categories_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, categoryIds];
                }
            });
        });
    },
    getCategoryIdsRecursively: function (productCategory) {
        var _this = this;
        var result = [productCategory.id];
        (productCategory.category_children || []).forEach(function (child) {
            result = result.concat(_this.getCategoryIdsRecursively(child));
        });
        return result;
    },
    _findWithRelations: function (_a) {
        var _b;
        var _c = _a.relations, relations = _c === void 0 ? [] : _c, _d = _a.idsOrOptionsWithoutRelations, idsOrOptionsWithoutRelations = _d === void 0 ? {
            where: {},
        } : _d, _e = _a.withDeleted, withDeleted = _e === void 0 ? false : _e, _f = _a.shouldCount, shouldCount = _f === void 0 ? false : _f;
        return __awaiter(this, void 0, void 0, function () {
            var isOptionsArray, originalWhere, originalOrder, originalSelect, clonedOptions, count, entities, result, entitiesIds, toReturn, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        withDeleted = Array.isArray(idsOrOptionsWithoutRelations)
                            ? withDeleted
                            : (_b = idsOrOptionsWithoutRelations.withDeleted) !== null && _b !== void 0 ? _b : false;
                        isOptionsArray = Array.isArray(idsOrOptionsWithoutRelations);
                        originalWhere = isOptionsArray
                            ? undefined
                            : (0, lodash_1.cloneDeep)(idsOrOptionsWithoutRelations.where);
                        originalOrder = isOptionsArray
                            ? undefined
                            : __assign({}, idsOrOptionsWithoutRelations.order);
                        originalSelect = isOptionsArray
                            ? undefined
                            : (0, utils_1.objectToStringPath)(idsOrOptionsWithoutRelations.select, {
                                includeParentPropertyFields: false,
                            });
                        clonedOptions = isOptionsArray
                            ? idsOrOptionsWithoutRelations
                            : (0, lodash_1.cloneDeep)(idsOrOptionsWithoutRelations);
                        if (!isOptionsArray) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.find({
                                where: {
                                    id: (0, typeorm_1.In)(clonedOptions),
                                },
                                withDeleted: withDeleted,
                            })];
                    case 1:
                        entities = _g.sent();
                        count = entities.length;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.queryProducts(clonedOptions, shouldCount)];
                    case 3:
                        result = _g.sent();
                        entities = result[0];
                        count = result[1];
                        _g.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, [[], count]];
                        }
                        if (!(relations.length === 0)) return [3 /*break*/, 6];
                        // Since we are finding by the ids that have been retrieved above and those ids are already
                        // applying skip/take. Remove those options to avoid getting no results
                        if (!Array.isArray(clonedOptions)) {
                            delete clonedOptions.skip;
                            delete clonedOptions.take;
                        }
                        return [4 /*yield*/, this.find(__assign(__assign({}, (isOptionsArray
                                ? {}
                                : clonedOptions)), { where: __assign({ id: (0, typeorm_1.In)(entitiesIds) }, (Array.isArray(clonedOptions) ? {} : clonedOptions.where)) }))];
                    case 5:
                        toReturn = _g.sent();
                        return [2 /*return*/, [toReturn, toReturn.length]];
                    case 6:
                        groupedRelations = (0, repository_1.getGroupedRelations)(relations);
                        return [4 /*yield*/, this.queryProductsWithIds({
                                entityIds: entitiesIds,
                                groupedRelations: groupedRelations,
                                select: originalSelect,
                                order: originalOrder,
                                where: originalWhere,
                                withDeleted: withDeleted,
                            })];
                    case 7:
                        entitiesIdsWithRelations = _g.sent();
                        entitiesAndRelations = entities.concat(entitiesIdsWithRelations);
                        entitiesToReturn = (0, repository_1.mergeEntitiesWithRelations)(entitiesAndRelations);
                        return [2 /*return*/, [entitiesToReturn, count]];
                }
            });
        });
    },
    isProductInSalesChannels: function (id, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder("product")
                            .leftJoin("product.sales_channels", "sales_channels", "sales_channels.id IN (:...salesChannelIds)", { salesChannelIds: salesChannelIds })
                            .getCount()];
                    case 1: return [2 /*return*/, ((_a.sent()) > 0)];
                }
            });
        });
    },
    _applyCategoriesQuery: function (qb, _a) {
        var alias = _a.alias, categoryAlias = _a.categoryAlias, where = _a.where, joinName = _a.joinName;
        var joinWhere = Object.entries(where !== null && where !== void 0 ? where : {})
            .map(function (_a) {
            var _b = __read(_a, 2), column = _b[0], condition = _b[1];
            if (Array.isArray(condition)) {
                return "".concat(categoryAlias, ".").concat(column, " IN (:...").concat(column, ")");
            }
            else {
                return "".concat(categoryAlias, ".").concat(column, " = :").concat(column);
            }
        })
            .join(" AND ");
        qb[joinName]("".concat(alias, ".").concat(categoryAlias), categoryAlias, joinWhere, where);
        return qb;
    },
    /* async findAndCount(
      options: ExtendedFindConfig<Product & ProductFilterOptions>,
      q?: string
    ): Promise<[Product[], number]> {
      const options_ = { ...options }
      options_.relationLoadStrategy = "query"
  
      const queryBuilder = await this.prepareQueryBuilder_(options_, q)
      return await queryBuilder.getManyAndCount()
    },
  
    async findOne(
      options: ExtendedFindConfig<Product & ProductFilterOptions>
    ): Promise<Product | null> {
      const options_ = { ...options }
      options_.relationLoadStrategy = "query"
  
      const queryBuilder = await this.prepareQueryBuilder_(options_)
      return await queryBuilder.getOne()
    },
  
    async prepareQueryBuilder_(
      options: ExtendedFindConfig<Product & ProductFilterOptions>,
      q?: string
    ): Promise<SelectQueryBuilder<Product>> {
      const options_ = { ...options }
  
      const productAlias = "product"
      const queryBuilder = this.createQueryBuilder(productAlias)
  
      // TODO: https://github.com/typeorm/typeorm/issues/9719
      // https://github.com/typeorm/typeorm/issues/6294
      // Cleanup the repo and fix order/skip/take and relation load strategy when those issues are resolved
  
      const orderFieldsCollectionPointSeparated = objectToStringPath(
        options.order ?? {}
      )
  
      const isDepth1 = !orderFieldsCollectionPointSeparated.some(
        (field) => field.indexOf(".") !== -1
      )
      options_.relationLoadStrategy = isDepth1
        ? options_.relationLoadStrategy
        : "join"
  
      options_.relations = options_.relations ?? {}
      options_.where = options_.where as FindOptionsWhere<Product>
  
      const priceListId = options_.where.price_list_id as FindOperator<string[]>
      const tags = options_.where.tags as FindOperator<string[]>
      const salesChannelId = options_.where.sales_channel_id as FindOperator<
        string[]
      >
      const categoryId = options_.where.category_id as FindOperator<string[]>
      const discountConditionId = options_.where.discount_condition_id
      const categoriesQuery = (options_.where.categories ||
        {}) as FindOptionsWhere<ProductCategory>
      const includeCategoryChildren =
        options_.where.include_category_children ?? false
  
      delete options_.where.price_list_id
      delete options_.where.tags
      delete options_.where.sales_channel_id
      delete options_.where.category_id
      delete options_.where.discount_condition_id
      delete options_.where.include_category_children
      delete options_.where.categories
  
      if (q) {
        options_.relations = options_.relations ?? {}
        options_.relations.variants = options_.relations.variants ?? true
        options_.relations.collection = options_.relations.collection ?? true
  
        options_.where = [
          {
            ...options_.where,
            description: ILike(`%${q}%`),
          },
          {
            ...options_.where,
            title: ILike(`%${q}%`),
          },
          {
            ...options_.where,
            variants: {
              title: ILike(`%${q}%`),
            },
          },
          {
            ...options_.where,
            variants: {
              sku: ILike(`%${q}%`),
            },
          },
          {
            ...options_.where,
            collection: {
              title: ILike(`%${q}%`),
            },
          },
        ]
      }
  
      // Add explicit ordering for variant ranking on the variants join directly
      // This constraint is applied if no other order is applied
      if (options_.relations.variants && !isObject(options_.order?.variants)) {
        queryBuilder.leftJoin(
          (subQueryBuilder) => {
            return subQueryBuilder
              .from(ProductVariant, "v")
              .orderBy("v.variant_rank", "ASC")
          },
          "variants",
          "product.id = variants.product_id"
        )
      }
  
      if (priceListId) {
        const priceListIds = priceListId.value
  
        queryBuilder
          .leftJoin(`${productAlias}.variants`, "variants_")
          .leftJoin("variants_.prices", "ma")
          .andWhere("ma.price_list_id IN (:...price_list_ids)", {
            price_list_ids: priceListIds,
          })
      }
  
      if (tags) {
        const joinMethod = options_.relations.tags
          ? queryBuilder.leftJoinAndSelect.bind(queryBuilder)
          : queryBuilder.leftJoin.bind(queryBuilder)
  
        const tagIds = tags.value
  
        // For an unknown reason, the implementation of the SelectQueryBuilder.setFindOptions -> buildWhere
        // Only check if it is a find operator MoreThan or LessThan. Otherwise, it has to be a relation of
        // isManyToOne or isOneToOne in order to be valid. Otherwise, it throws `This relation isn't supported by given find operator`
        // We might need to wait for an update or open a PR around that subject
  
        joinMethod(`${productAlias}.tags`, "tags").andWhere(
          `tags.id IN (:...tag_ids)`,
          {
            tag_ids: tagIds,
          }
        )
      }
  
      if (salesChannelId) {
        const joinMethod = options_.relations.sales_channels
          ? queryBuilder.innerJoinAndSelect.bind(queryBuilder)
          : queryBuilder.innerJoin.bind(queryBuilder)
  
        const scIds = salesChannelId.value
  
        joinMethod(
          `${productAlias}.sales_channels`,
          "sales_channels",
          "sales_channels.id IN (:...sales_channels_ids)",
          {
            sales_channels_ids: scIds,
          }
        )
      }
  
      if (categoryId) {
        const joinMethod = options_.relations.categories
          ? queryBuilder.innerJoinAndSelect.bind(queryBuilder)
          : queryBuilder.innerJoin.bind(queryBuilder)
  
        let categoryIds = categoryId.value
  
        if (includeCategoryChildren) {
          const categoryRepository =
            this.manager.getTreeRepository(ProductCategory)
  
          const categories = await categoryRepository.find({
            where: {
              id: In(categoryIds),
              ...categoriesQuery,
            },
          })
  
          for (const category of categories) {
            const categoryChildren = await categoryRepository.findDescendantsTree(
              category
            )
  
            categoryIds = categoryIds.concat(
              fetchCategoryDescendantsIds(categoryChildren, categoriesQuery)
            )
          }
        }
  
        if (categoryIds.length) {
          const categoryAlias = "categories"
          const joinScope = {
            ...categoriesQuery,
            id: categoryIds,
          }
          const joinWhere = Object.entries(joinScope)
            .map((entry) => {
              if (Array.isArray(entry[1])) {
                return `${categoryAlias}.${entry[0]} IN (:...${entry[0]})`
              } else {
                return `${categoryAlias}.${entry[0]} = :${entry[0]}`
              }
            })
            .join(" AND ")
  
          joinMethod(
            `${productAlias}.${categoryAlias}`,
            categoryAlias,
            joinWhere,
            joinScope
          )
        }
      }
  
      if (discountConditionId) {
        queryBuilder.innerJoin(
          "discount_condition_product",
          "dc_product",
          `dc_product.product_id = product.id AND dc_product.condition_id = :dcId`,
          { dcId: discountConditionId }
        )
      }
  
      if (options_.withDeleted) {
        queryBuilder.withDeleted()
      }
  
      queryBuilder.setFindOptions(options_)
  
      return queryBuilder
    },*/
});
exports.default = exports.ProductRepository;
//# sourceMappingURL=product.js.map