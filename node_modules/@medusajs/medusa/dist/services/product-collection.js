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
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
/**
 * Provides layer to manipulate product collections.
 */
var ProductCollectionService = /** @class */ (function (_super) {
    __extends(ProductCollectionService, _super);
    function ProductCollectionService(_a) {
        var productCollectionRepository = _a.productCollectionRepository, productRepository = _a.productRepository, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.productCollectionRepository_ = productCollectionRepository;
        _this.productRepository_ = productRepository;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * Retrieves a product collection by id.
     * @param collectionId - the id of the collection to retrieve.
     * @param config - the config of the collection to retrieve.
     * @return the collection.
     */
    ProductCollectionService.prototype.retrieve = function (collectionId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var collectionRepo, query, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(collectionId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"collectionId\" must be defined");
                        }
                        collectionRepo = this.activeManager_.withRepository(this.productCollectionRepository_);
                        query = (0, utils_1.buildQuery)({ id: collectionId }, config);
                        return [4 /*yield*/, collectionRepo.findOne(query)];
                    case 1:
                        collection = _a.sent();
                        if (!collection) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product collection with id: ".concat(collectionId, " was not found"));
                        }
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * Retrieves a product collection by id.
     * @param collectionHandle - the handle of the collection to retrieve.
     * @param config - query config for request
     * @return the collection.
     */
    ProductCollectionService.prototype.retrieveByHandle = function (collectionHandle, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var collectionRepo, query, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        collectionRepo = this.activeManager_.withRepository(this.productCollectionRepository_);
                        query = (0, utils_1.buildQuery)({ handle: collectionHandle }, config);
                        return [4 /*yield*/, collectionRepo.findOne(query)];
                    case 1:
                        collection = _a.sent();
                        if (!collection) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product collection with handle: ".concat(collectionHandle, " was not found"));
                        }
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * Creates a product collection
     * @param collection - the collection to create
     * @return created collection
     */
    ProductCollectionService.prototype.create = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var collectionRepo, productCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        collectionRepo = manager.withRepository(this.productCollectionRepository_);
                                        productCollection = collectionRepo.create(collection);
                                        return [4 /*yield*/, collectionRepo.save(productCollection)];
                                    case 1:
                                        productCollection = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductCollectionService.Events.CREATED, {
                                                id: productCollection.id,
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, productCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a product collection
     * @param collectionId - id of collection to update
     * @param update - update object
     * @return update collection
     */
    ProductCollectionService.prototype.update = function (collectionId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var collectionRepo, productCollection, metadata, rest, _a, _b, _c, key, value;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        collectionRepo = manager.withRepository(this.productCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(collectionId)];
                                    case 1:
                                        productCollection = _e.sent();
                                        metadata = update.metadata, rest = __rest(update, ["metadata"]);
                                        if (metadata) {
                                            productCollection.metadata = (0, utils_1.setMetadata)(productCollection, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                productCollection[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, collectionRepo.save(productCollection)];
                                    case 2:
                                        productCollection = _e.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductCollectionService.Events.UPDATED, {
                                                id: productCollection.id,
                                            })];
                                    case 3:
                                        _e.sent();
                                        return [2 /*return*/, productCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a product collection idempotently
     * @param collectionId - id of collection to delete
     * @return empty promise
     */
    ProductCollectionService.prototype.delete = function (collectionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productCollectionRepo, productCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productCollectionRepo = manager.withRepository(this.productCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(collectionId)];
                                    case 1:
                                        productCollection = _a.sent();
                                        if (!productCollection) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, productCollectionRepo.softRemove(productCollection)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductCollectionService.Events.DELETED, {
                                                id: productCollection.id,
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductCollectionService.prototype.addProducts = function (collectionId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, id, productCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productRepo = manager.withRepository(this.productRepository_);
                                        return [4 /*yield*/, this.retrieve(collectionId, { select: ["id"] })];
                                    case 1:
                                        id = (_a.sent()).id;
                                        return [4 /*yield*/, productRepo.bulkAddToCollection(productIds, id)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["products"],
                                            })];
                                    case 3:
                                        productCollection = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductCollectionService.Events.PRODUCTS_ADDED, {
                                                productCollection: productCollection,
                                                productIds: productIds,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, productCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductCollectionService.prototype.removeProducts = function (collectionId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, id, productCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productRepo = manager.withRepository(this.productRepository_);
                                        return [4 /*yield*/, this.retrieve(collectionId, { select: ["id"] })];
                                    case 1:
                                        id = (_a.sent()).id;
                                        return [4 /*yield*/, productRepo.bulkRemoveFromCollection(productIds, id)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["products"],
                                            })];
                                    case 3:
                                        productCollection = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductCollectionService.Events.PRODUCTS_REMOVED, {
                                                productCollection: productCollection,
                                                productIds: productIds,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Lists product collections
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    ProductCollectionService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, collections;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), collections = _a[0];
                        return [2 /*return*/, collections];
                }
            });
        });
    };
    /**
     * Lists product collections and add count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    ProductCollectionService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var productCollectionRepo, q, query, where, discountConditionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productCollectionRepo = this.activeManager_.withRepository(this.productCollectionRepository_);
                        if ((0, utils_1.isString)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.title;
                            delete where.handle;
                            delete where.created_at;
                            delete where.updated_at;
                            query.where = [
                                __assign(__assign({}, where), { title: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { handle: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        if (!query.where.discount_condition_id) return [3 /*break*/, 2];
                        discountConditionId = query.where.discount_condition_id;
                        delete query.where.discount_condition_id;
                        return [4 /*yield*/, productCollectionRepo.findAndCountByDiscountConditionId(discountConditionId, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, productCollectionRepo.findAndCount(query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductCollectionService.Events = {
        CREATED: "product-collection.created",
        UPDATED: "product-collection.updated",
        DELETED: "product-collection.deleted",
        PRODUCTS_ADDED: "product-collection.products_added",
        PRODUCTS_REMOVED: "product-collection.products_removed",
    };
    return ProductCollectionService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductCollectionService;
//# sourceMappingURL=product-collection.js.map