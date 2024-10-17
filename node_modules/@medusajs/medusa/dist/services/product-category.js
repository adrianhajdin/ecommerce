"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var product_category_1 = require("../types/product-category");
var utils_2 = require("../utils");
/**
 * Provides layer to manipulate product categories.
 */
var ProductCategoryService = /** @class */ (function (_super) {
    __extends(ProductCategoryService, _super);
    function ProductCategoryService(_a) {
        var productCategoryRepository = _a.productCategoryRepository, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.eventBusService_ = eventBusService;
        _this.productCategoryRepo_ = productCategoryRepository;
        return _this;
    }
    /**
     * Lists product category based on the provided parameters and includes the count of
     * product category that match the query.
     * @param selector - Filter options for product category.
     * @param config - Configuration for query.
     * @param treeSelector - Filter options for product category tree relations
     * @return an array containing the product category as
     *   the first element and the total count of product category that matches the query
     *   as the second element.
     */
    ProductCategoryService.prototype.listAndCount = function (selector, config, treeSelector) {
        if (config === void 0) { config = {
            skip: 0,
            take: 100,
        }; }
        if (treeSelector === void 0) { treeSelector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var includeDescendantsTree, productCategoryRepo, selector_, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        includeDescendantsTree = !!selector.include_descendants_tree;
                        delete selector.include_descendants_tree;
                        productCategoryRepo = this.activeManager_.withRepository(this.productCategoryRepo_);
                        selector_ = __assign({}, selector);
                        if ("q" in selector_) {
                            q = selector_.q;
                            delete selector_.q;
                        }
                        query = (0, utils_2.buildQuery)(selector_, config);
                        return [4 /*yield*/, productCategoryRepo.getFreeTextSearchResultsAndCount(query, q, treeSelector, includeDescendantsTree)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * A generic retrieve for fining product categories by different attributes.
     *
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    ProductCategoryService.prototype.retrieve_ = function (config, selector, treeSelector) {
        if (config === void 0) { config = {}; }
        if (selector === void 0) { selector = {}; }
        if (treeSelector === void 0) { treeSelector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var productCategoryRepo, query, productCategory, selectorConstraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productCategoryRepo = this.activeManager_.withRepository(this.productCategoryRepo_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, productCategoryRepo.findOneWithDescendants(query, treeSelector)];
                    case 1:
                        productCategory = _a.sent();
                        if (!productCategory) {
                            selectorConstraints = (0, utils_1.selectorConstraintsToString)(selector);
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "ProductCategory with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, productCategory];
                }
            });
        });
    };
    /**
     * Retrieves a product category by id.
     * @param productCategoryId - the id of the product category to retrieve.
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    ProductCategoryService.prototype.retrieve = function (productCategoryId, config, selector, treeSelector) {
        if (config === void 0) { config = {}; }
        if (selector === void 0) { selector = {}; }
        if (treeSelector === void 0) { treeSelector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var selectors;
            return __generator(this, function (_a) {
                if (!(0, medusa_core_utils_1.isDefined)(productCategoryId)) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"productCategoryId\" must be defined");
                }
                selectors = Object.assign({ id: productCategoryId }, selector);
                return [2 /*return*/, this.retrieve_(config, selectors, treeSelector)];
            });
        });
    };
    /**
     * Retrieves a product category by handle.
     *
     * @param handle - the handle of the category
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    ProductCategoryService.prototype.retrieveByHandle = function (handle, config, selector, treeSelector) {
        if (config === void 0) { config = {}; }
        if (selector === void 0) { selector = {}; }
        if (treeSelector === void 0) { treeSelector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var selectors;
            return __generator(this, function (_a) {
                if (!(0, medusa_core_utils_1.isDefined)(handle)) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"handle\" must be defined");
                }
                selectors = Object.assign({ handle: handle }, selector);
                return [2 /*return*/, this.retrieve_(config, selectors, treeSelector)];
            });
        });
    };
    /**
     * Creates a product category
     * @param productCategoryInput - parameters to create a product category
     * @return created product category
     */
    ProductCategoryService.prototype.create = function (productCategoryInput) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var pcRepo, siblingCount, productCategory;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pcRepo = manager.withRepository(this.productCategoryRepo_);
                                        return [4 /*yield*/, pcRepo.countBy({
                                                parent_category_id: (0, utils_2.nullableValue)(productCategoryInput.parent_category_id),
                                            })];
                                    case 1:
                                        siblingCount = _a.sent();
                                        productCategoryInput.rank = siblingCount;
                                        return [4 /*yield*/, this.transformParentIdToEntity(productCategoryInput)];
                                    case 2:
                                        _a.sent();
                                        productCategory = pcRepo.create(productCategoryInput);
                                        return [4 /*yield*/, pcRepo.save(productCategory)];
                                    case 3:
                                        productCategory = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(ProductCategoryService.Events.CREATED, {
                                                id: productCategory.id,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, productCategory];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a product category
     * @param productCategoryId - id of product category to update
     * @param productCategoryInput - parameters to update in product category
     * @return updated product category
     */
    ProductCategoryService.prototype.update = function (productCategoryId, productCategoryInput) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productCategory, productCategoryRepo, metadata, rest, conditions, key;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(productCategoryId)];
                                    case 1:
                                        productCategory = _a.sent();
                                        productCategoryRepo = manager.withRepository(this.productCategoryRepo_);
                                        metadata = productCategoryInput.metadata, rest = __rest(productCategoryInput, ["metadata"]);
                                        if (metadata) {
                                            productCategory.metadata = (0, utils_2.setMetadata)(productCategory, metadata);
                                        }
                                        conditions = this.fetchReorderConditions(productCategory, productCategoryInput);
                                        if (conditions.shouldChangeRank || conditions.shouldChangeParent) {
                                            productCategoryInput.rank = product_category_1.tempReorderRank;
                                        }
                                        return [4 /*yield*/, this.transformParentIdToEntity(productCategoryInput)];
                                    case 2:
                                        _a.sent();
                                        for (key in productCategoryInput) {
                                            if ((0, medusa_core_utils_1.isDefined)(productCategoryInput[key])) {
                                                productCategory[key] = productCategoryInput[key];
                                            }
                                        }
                                        return [4 /*yield*/, productCategoryRepo.save(productCategory)];
                                    case 3:
                                        productCategory = _a.sent();
                                        return [4 /*yield*/, this.performReordering(productCategoryRepo, conditions)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(ProductCategoryService.Events.UPDATED, {
                                                id: productCategory.id,
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, productCategory];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a product category
     *
     * @param productCategoryId is the id of the product category to delete
     * @return a promise
     */
    ProductCategoryService.prototype.delete = function (productCategoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productCategoryRepository, productCategory, conditions;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productCategoryRepository = manager.withRepository(this.productCategoryRepo_);
                                        return [4 /*yield*/, this.retrieve(productCategoryId, {
                                                relations: ["category_children"],
                                            }).catch(function (err) { return void 0; })];
                                    case 1:
                                        productCategory = _a.sent();
                                        if (!productCategory) {
                                            return [2 /*return*/];
                                        }
                                        conditions = this.fetchReorderConditions(productCategory, {
                                            parent_category_id: productCategory.parent_category_id,
                                            rank: productCategory.rank,
                                        }, true);
                                        if (productCategory.category_children.length > 0) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Deleting ProductCategory (".concat(productCategoryId, ") with category children is not allowed"));
                                        }
                                        return [4 /*yield*/, productCategoryRepository.delete(productCategory.id)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.performReordering(productCategoryRepository, conditions)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(ProductCategoryService.Events.DELETED, {
                                                id: productCategory.id,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Add a batch of product to a product category
     * @param productCategoryId - The id of the product category on which to add the products
     * @param productIds - The products ids to attach to the product category
     * @return the product category on which the products have been added
     */
    ProductCategoryService.prototype.addProducts = function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productCategoryRepository;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productCategoryRepository = manager.withRepository(this.productCategoryRepo_);
                                        return [4 /*yield*/, productCategoryRepository.addProducts(productCategoryId, productIds)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove a batch of product from a product category
     * @param productCategoryId - The id of the product category on which to remove the products
     * @param productIds - The products ids to remove from the product category
     * @return the product category on which the products have been removed
     */
    ProductCategoryService.prototype.removeProducts = function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productCategoryRepository;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productCategoryRepository = manager.withRepository(this.productCategoryRepo_);
                                        return [4 /*yield*/, productCategoryRepository.removeProducts(productCategoryId, productIds)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductCategoryService.prototype.fetchReorderConditions = function (productCategory, input, shouldDeleteElement) {
        if (shouldDeleteElement === void 0) { shouldDeleteElement = false; }
        var originalParentId = productCategory.parent_category_id;
        var targetParentId = input.parent_category_id;
        var originalRank = productCategory.rank;
        var targetRank = input.rank;
        var shouldChangeParent = targetParentId !== undefined && targetParentId !== originalParentId;
        var shouldChangeRank = shouldChangeParent ||
            ((0, medusa_core_utils_1.isDefined)(targetRank) && originalRank !== targetRank);
        return {
            targetCategoryId: productCategory.id,
            originalParentId: originalParentId,
            targetParentId: targetParentId,
            originalRank: originalRank,
            targetRank: targetRank,
            shouldChangeParent: shouldChangeParent,
            shouldChangeRank: shouldChangeRank,
            shouldIncrementRank: false,
            shouldDeleteElement: shouldDeleteElement,
        };
    };
    ProductCategoryService.prototype.performReordering = function (repository, conditions) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldChangeParent, shouldChangeRank, shouldDeleteElement, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        shouldChangeParent = conditions.shouldChangeParent, shouldChangeRank = conditions.shouldChangeRank, shouldDeleteElement = conditions.shouldDeleteElement;
                        if (!(shouldChangeParent || shouldChangeRank || shouldDeleteElement)) {
                            return [2 /*return*/];
                        }
                        // If we change parent, we need to shift the siblings to eliminate the
                        // rank occupied by the targetCategory in the original parent.
                        _a = shouldChangeParent;
                        if (!_a) 
                        // If we change parent, we need to shift the siblings to eliminate the
                        // rank occupied by the targetCategory in the original parent.
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.shiftSiblings(repository, __assign(__assign({}, conditions), { targetRank: conditions.originalRank, targetParentId: conditions.originalParentId }))];
                    case 1:
                        _a = (_d.sent());
                        _d.label = 2;
                    case 2:
                        // If we change parent, we need to shift the siblings to eliminate the
                        // rank occupied by the targetCategory in the original parent.
                        _a;
                        // If we change parent, we need to shift the siblings of the new parent
                        // to create a rank that the targetCategory will occupy.
                        _b = shouldChangeParent &&
                            shouldChangeRank;
                        if (!_b) 
                        // If we change parent, we need to shift the siblings of the new parent
                        // to create a rank that the targetCategory will occupy.
                        return [3 /*break*/, 4];
                        return [4 /*yield*/, this.shiftSiblings(repository, __assign(__assign({}, conditions), { shouldIncrementRank: true }))];
                    case 3:
                        _b = (_d.sent());
                        _d.label = 4;
                    case 4:
                        // If we change parent, we need to shift the siblings of the new parent
                        // to create a rank that the targetCategory will occupy.
                        _b;
                        _c = ((!shouldChangeParent && shouldChangeRank) || shouldDeleteElement);
                        if (!_c) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.shiftSiblings(repository, __assign(__assign({}, conditions), { targetParentId: conditions.originalParentId }))];
                    case 5:
                        _c = (_d.sent());
                        _d.label = 6;
                    case 6:
                        _c;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductCategoryService.prototype.shiftSiblings = function (repository, conditions) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldIncrementRank, targetRank, shouldChangeParent, originalRank, targetParentId, targetCategoryId, shouldDeleteElement, siblingCount, targetCategory, rankCondition, siblingsToShift, index, sibling;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shouldIncrementRank = conditions.shouldIncrementRank, targetRank = conditions.targetRank;
                        shouldChangeParent = conditions.shouldChangeParent, originalRank = conditions.originalRank, targetParentId = conditions.targetParentId, targetCategoryId = conditions.targetCategoryId, shouldDeleteElement = conditions.shouldDeleteElement;
                        return [4 /*yield*/, repository.countBy({
                                parent_category_id: (0, utils_2.nullableValue)(targetParentId),
                                id: (0, typeorm_1.Not)(targetCategoryId),
                            })
                            // The category record that will be placed at the requested rank
                            // We've temporarily placed it at a temporary rank that is
                            // beyond a reasonable value (tempReorderRank)
                        ];
                    case 1:
                        siblingCount = _a.sent();
                        return [4 /*yield*/, repository.findOne({
                                where: {
                                    id: targetCategoryId,
                                    parent_category_id: (0, utils_2.nullableValue)(targetParentId),
                                    rank: product_category_1.tempReorderRank,
                                },
                            })
                            // If the targetRank is not present, or if targetRank is beyond the
                            // rank of the last category, we set the rank as the last rank
                        ];
                    case 2:
                        targetCategory = _a.sent();
                        // If the targetRank is not present, or if targetRank is beyond the
                        // rank of the last category, we set the rank as the last rank
                        if (targetRank === undefined || targetRank > siblingCount) {
                            targetRank = siblingCount;
                        }
                        // If parent doesn't change, we only need to get the ranks
                        // in between the original rank and the target rank.
                        if (shouldChangeParent || shouldDeleteElement) {
                            rankCondition = (0, typeorm_1.MoreThanOrEqual)(targetRank);
                        }
                        else if (originalRank > targetRank) {
                            shouldIncrementRank = true;
                            rankCondition = (0, typeorm_1.Between)(targetRank, originalRank);
                        }
                        else {
                            shouldIncrementRank = false;
                            rankCondition = (0, typeorm_1.Between)(originalRank, targetRank);
                        }
                        return [4 /*yield*/, repository.find({
                                where: {
                                    parent_category_id: (0, utils_2.nullableValue)(targetParentId),
                                    rank: rankCondition,
                                    id: (0, typeorm_1.Not)(targetCategoryId),
                                },
                                order: {
                                    // depending on whether we shift up or down, we order accordingly
                                    rank: shouldIncrementRank ? "DESC" : "ASC",
                                },
                            })
                            // Depending on the conditions, we get a subset of the siblings
                            // and independently shift them up or down a rank
                        ];
                    case 3:
                        siblingsToShift = _a.sent();
                        index = 0;
                        _a.label = 4;
                    case 4:
                        if (!(index < siblingsToShift.length)) return [3 /*break*/, 7];
                        sibling = siblingsToShift[index];
                        // Depending on the condition, we could also have the targetCategory
                        // in the siblings list, we skip shifting the target until all other siblings
                        // have been shifted.
                        if (sibling.id === targetCategoryId) {
                            return [3 /*break*/, 6];
                        }
                        sibling.rank = shouldIncrementRank ? ++sibling.rank : --sibling.rank;
                        return [4 /*yield*/, repository.save(sibling)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        index++;
                        return [3 /*break*/, 4];
                    case 7:
                        // The targetCategory will not be present in the query when we are shifting
                        // siblings of the old parent of the targetCategory.
                        if (!targetCategory) {
                            return [2 /*return*/];
                        }
                        // Place the targetCategory in the requested rank
                        targetCategory.rank = targetRank;
                        return [4 /*yield*/, repository.save(targetCategory)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Accepts an input object and transforms product_category_id
     * into product_category entity.
     * @param productCategoryInput - params used to create/update
     * @return transformed productCategoryInput
     */
    ProductCategoryService.prototype.transformParentIdToEntity = function (productCategoryInput) {
        return __awaiter(this, void 0, void 0, function () {
            var parentCategoryId, parentCategory, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        parentCategoryId = productCategoryInput.parent_category_id;
                        if (parentCategoryId === undefined) {
                            return [2 /*return*/, productCategoryInput];
                        }
                        if (!parentCategoryId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieve(parentCategoryId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        parentCategory = _a;
                        productCategoryInput.parent_category = parentCategory;
                        delete productCategoryInput.parent_category_id;
                        return [2 /*return*/, productCategoryInput];
                }
            });
        });
    };
    ProductCategoryService.Events = {
        CREATED: "product-category.created",
        UPDATED: "product-category.updated",
        DELETED: "product-category.deleted",
    };
    return ProductCategoryService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductCategoryService;
//# sourceMappingURL=product-category.js.map