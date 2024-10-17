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
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
var utils_3 = require("@medusajs/utils");
var SalesChannelService = /** @class */ (function (_super) {
    __extends(SalesChannelService, _super);
    function SalesChannelService(_a) {
        var salesChannelRepository = _a.salesChannelRepository, eventBusService = _a.eventBusService, storeService = _a.storeService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.salesChannelRepository_ = salesChannelRepository;
        _this.eventBusService_ = eventBusService;
        _this.storeService_ = storeService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * A generic retrieve used to find a sales channel by different attributes.
     *
     * @param selector - SC selector
     * @param config - find config
     * @returns a single SC matching the query or throws
     */
    SalesChannelService.prototype.retrieve_ = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelRepo, query, salesChannel, selectorConstraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelRepo = this.activeManager_.withRepository(this.salesChannelRepository_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, salesChannelRepo.findOne(__assign(__assign({}, query), { relationLoadStrategy: "query" }))];
                    case 1:
                        salesChannel = _a.sent();
                        if (!salesChannel) {
                            selectorConstraints = (0, utils_3.selectorConstraintsToString)(selector);
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Sales channel with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, salesChannel];
                }
            });
        });
    };
    /**
     * Retrieve a SalesChannel by id
     *
     * @param salesChannelId - id of the channel to retrieve
     * @param config - SC config
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @returns a sales channel
     */
    SalesChannelService.prototype.retrieve = function (salesChannelId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(salesChannelId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"salesChannelId\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ id: salesChannelId }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Find a sales channel by name.
     *
     * @param name of the sales channel
     * @param config - find config
     * @return a sales channel with matching name
     */
    SalesChannelService.prototype.retrieveByName = function (name, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(name)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"name\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ name: name }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Lists sales channels based on the provided parameters and include the count of
     * sales channels that match the query.
     *
     * @return an array containing the sales channels as
     *   the first element and the total count of sales channels that matches the query
     *   as the second element.
     */
    SalesChannelService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelRepo, selector_, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelRepo = this.activeManager_.withRepository(this.salesChannelRepository_);
                        selector_ = __assign({}, selector);
                        if ("q" in selector_) {
                            q = selector_.q;
                            delete selector_.q;
                        }
                        query = (0, utils_2.buildQuery)(selector_, config);
                        if (!q) return [3 /*break*/, 2];
                        return [4 /*yield*/, salesChannelRepo.getFreeTextSearchResultsAndCount(q, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, salesChannelRepo.findAndCount(query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Lists sales channels based on the provided parameters.
     *
     * @return an array containing the sales channels
     */
    SalesChannelService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelRepo, selector_, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelRepo = this.activeManager_.withRepository(this.salesChannelRepository_);
                        selector_ = __assign({}, selector);
                        if ("q" in selector_) {
                            q = selector_.q;
                            delete selector_.q;
                        }
                        query = (0, utils_2.buildQuery)(selector_, config);
                        if (!q) return [3 /*break*/, 2];
                        return [4 /*yield*/, salesChannelRepo.getFreeTextSearchResults(q, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, salesChannelRepo.find(query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a SalesChannel
     *
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @returns the created channel
     */
    SalesChannelService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var salesChannelRepo, salesChannel;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        salesChannelRepo = manager.withRepository(this.salesChannelRepository_);
                                        salesChannel = salesChannelRepo.create(data);
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(SalesChannelService.Events.CREATED, {
                                                id: salesChannel.id,
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, salesChannelRepo.save(salesChannel)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesChannelService.prototype.update = function (salesChannelId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var salesChannelRepo, salesChannel, _a, _b, key, result;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        salesChannelRepo = transactionManager.withRepository(this.salesChannelRepository_);
                                        return [4 /*yield*/, this.retrieve(salesChannelId)];
                                    case 1:
                                        salesChannel = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                if (typeof data[key] !== "undefined") {
                                                    salesChannel[key] = data[key];
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, salesChannelRepo.save(salesChannel)];
                                    case 2:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(transactionManager)
                                                .emit(SalesChannelService.Events.UPDATED, {
                                                id: result.id,
                                            })];
                                    case 3:
                                        _d.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a sales channel from
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @param salesChannelId - the id of the sales channel to delete
     */
    SalesChannelService.prototype.delete = function (salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var salesChannelRepo, salesChannel, store;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        salesChannelRepo = transactionManager.withRepository(this.salesChannelRepository_);
                                        return [4 /*yield*/, this.retrieve(salesChannelId, {
                                                relations: ["locations"],
                                            }).catch(function () { return void 0; })];
                                    case 1:
                                        salesChannel = _a.sent();
                                        if (!salesChannel) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, this.storeService_.retrieve({
                                                select: ["default_sales_channel_id"],
                                            })];
                                    case 2:
                                        store = _a.sent();
                                        if (salesChannel.id === (store === null || store === void 0 ? void 0 : store.default_sales_channel_id)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You cannot delete the default sales channel");
                                        }
                                        return [4 /*yield*/, salesChannelRepo.softRemove(salesChannel)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(transactionManager)
                                                .emit(SalesChannelService.Events.DELETED, {
                                                id: salesChannelId,
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
     * Creates a default sales channel, if this does not already exist.
     * @return the sales channel
     */
    SalesChannelService.prototype.createDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                        var store, defaultSalesChannel;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.storeService_
                                        .withTransaction(transactionManager)
                                        .retrieve({
                                        relations: ["default_sales_channel"],
                                    })];
                                case 1:
                                    store = _a.sent();
                                    if (store.default_sales_channel_id) {
                                        return [2 /*return*/, store.default_sales_channel];
                                    }
                                    return [4 /*yield*/, this.create({
                                            description: "Created by Medusa",
                                            name: "Default Sales Channel",
                                            is_disabled: false,
                                        })];
                                case 2:
                                    defaultSalesChannel = _a.sent();
                                    return [4 /*yield*/, this.storeService_.withTransaction(transactionManager).update({
                                            default_sales_channel_id: defaultSalesChannel.id,
                                        })];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/, defaultSalesChannel];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Retrieves the default sales channel.
     * @return the sales channel
     */
    SalesChannelService.prototype.retrieveDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var store;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storeService_
                            .withTransaction(this.activeManager_)
                            .retrieve({
                            relations: ["default_sales_channel"],
                        })];
                    case 1:
                        store = _a.sent();
                        if (!store.default_sales_channel) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Default Sales channel was not found");
                        }
                        return [2 /*return*/, store.default_sales_channel];
                }
            });
        });
    };
    /**
     * List all product ids that belongs to the sales channels ids
     *
     * @param salesChannelIds
     */
    SalesChannelService.prototype.listProductIdsBySalesChannelIds = function (salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelRepo = this.activeManager_.withRepository(this.salesChannelRepository_);
                        return [4 /*yield*/, salesChannelRepo.listProductIdsBySalesChannelIds(salesChannelIds)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove a batch of product from a sales channel
     * @param salesChannelId - The id of the sales channel on which to remove the products
     * @param productIds - The products ids to remove from the sales channel
     * @return the sales channel on which the products have been removed
     */
    SalesChannelService.prototype.removeProducts = function (salesChannelId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var salesChannelRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        salesChannelRepo = transactionManager.withRepository(this.salesChannelRepository_);
                                        return [4 /*yield*/, salesChannelRepo.removeProducts(salesChannelId, productIds)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(salesChannelId)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Add a batch of product to a sales channel
     * @param salesChannelId - The id of the sales channel on which to add the products
     * @param productIds - The products ids to attach to the sales channel
     * @return the sales channel on which the products have been added
     */
    SalesChannelService.prototype.addProducts = function (salesChannelId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var salesChannelRepo, isMedusaV2Enabled;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        salesChannelRepo = transactionManager.withRepository(this.salesChannelRepository_);
                                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                                        return [4 /*yield*/, salesChannelRepo.addProducts(salesChannelId, productIds, isMedusaV2Enabled)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(salesChannelId)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesChannelService.Events = {
        UPDATED: "sales_channel.updated",
        CREATED: "sales_channel.created",
        DELETED: "sales_channel.deleted",
    };
    return SalesChannelService;
}(interfaces_1.TransactionBaseService));
exports.default = SalesChannelService;
//# sourceMappingURL=sales-channel.js.map