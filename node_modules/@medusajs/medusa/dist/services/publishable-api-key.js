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
var typeorm_1 = require("typeorm");
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
/**
 * A service for PublishableApiKey business logic.
 */
var PublishableApiKeyService = /** @class */ (function (_super) {
    __extends(PublishableApiKeyService, _super);
    function PublishableApiKeyService(_a) {
        var eventBusService = _a.eventBusService, publishableApiKeyRepository = _a.publishableApiKeyRepository, publishableApiKeySalesChannelRepository = _a.publishableApiKeySalesChannelRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.eventBusService_ = eventBusService;
        _this.publishableApiKeyRepository_ = publishableApiKeyRepository;
        _this.publishableApiKeySalesChannelRepository_ =
            publishableApiKeySalesChannelRepository;
        return _this;
    }
    /**
     * Create a PublishableApiKey record.
     *
     * @param data - partial data for creating the entity
     * @param context - key creation context object
     */
    PublishableApiKeyService.prototype.create = function (data, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var publishableApiKeyRepo, publishableApiKey;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        publishableApiKeyRepo = manager.withRepository(this.publishableApiKeyRepository_);
                                        publishableApiKey = publishableApiKeyRepo.create(__assign(__assign({}, data), { created_by: context.loggedInUserId }));
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PublishableApiKeyService.Events.CREATED, {
                                                id: publishableApiKey.id,
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, publishableApiKeyRepo.save(publishableApiKey)];
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
     * Retrieves a PublishableApiKey by id
     *
     * @param publishableApiKeyId - id of the key
     * @param config - a find config object
     */
    PublishableApiKeyService.prototype.retrieve = function (publishableApiKeyId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(publishableApiKeyId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"publishableApiKeyId\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ id: publishableApiKeyId }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Generic retrieve for selecting PublishableApiKEys by different attributes.
     *
     * @param selector - a PublishableApiKey selector object
     * @param config - a find config object
     */
    PublishableApiKeyService.prototype.retrieve_ = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var repo, query, publishableApiKey, selectorConstraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = this.activeManager_.withRepository(this.publishableApiKeyRepository_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        query.relationLoadStrategy = "query";
                        return [4 /*yield*/, repo.findOne(query)];
                    case 1:
                        publishableApiKey = _a.sent();
                        if (!publishableApiKey) {
                            selectorConstraints = (0, utils_1.selectorConstraintsToString)(selector);
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Publishable key with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, publishableApiKey];
                }
            });
        });
    };
    /**
     * Lists publishable API keys based on the provided parameters.
     *
     * @return an array containing publishable API keys and a total count of records that matches the query
     */
    PublishableApiKeyService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var pubKeyRepo, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pubKeyRepo = this.activeManager_.withRepository(this.publishableApiKeyRepository_);
                        if ((0, utils_2.isString)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        query.where = query.where;
                        if (q) {
                            query.where.title = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        return [4 /*yield*/, pubKeyRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PublishableApiKeyService.prototype.update = function (publishableApiKeyId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var publishableApiKeyRepository, pubKey, _a, _b, key;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        publishableApiKeyRepository = manager.withRepository(this.publishableApiKeyRepository_);
                                        return [4 /*yield*/, this.retrieve(publishableApiKeyId)];
                                    case 1:
                                        pubKey = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                if ((0, medusa_core_utils_1.isDefined)(data[key])) {
                                                    pubKey[key] = data[key];
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
                                        return [4 /*yield*/, publishableApiKeyRepository.save(pubKey)];
                                    case 2: return [2 /*return*/, _d.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Publishable API key.
     *
     * @param publishableApiKeyId - id of the key being deleted
     */
    PublishableApiKeyService.prototype.delete = function (publishableApiKeyId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var repo, publishableApiKey;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        repo = manager.withRepository(this.publishableApiKeyRepository_);
                                        return [4 /*yield*/, this.retrieve(publishableApiKeyId).catch()];
                                    case 1:
                                        publishableApiKey = _a.sent();
                                        if (!publishableApiKey) return [3 /*break*/, 3];
                                        return [4 /*yield*/, repo.remove(publishableApiKey)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Revoke a PublishableApiKey
     *
     * @param publishableApiKeyId - id of the key
     * @param context - key revocation context object
     */
    PublishableApiKeyService.prototype.revoke = function (publishableApiKeyId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var repo, pubKey;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        repo = manager.withRepository(this.publishableApiKeyRepository_);
                                        return [4 /*yield*/, this.retrieve(publishableApiKeyId)];
                                    case 1:
                                        pubKey = _a.sent();
                                        if (pubKey.revoked_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "PublishableApiKey has already been revoked.");
                                        }
                                        pubKey.revoked_at = new Date();
                                        pubKey.revoked_by = context.loggedInUserId;
                                        return [4 /*yield*/, repo.save(pubKey)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PublishableApiKeyService.Events.REVOKED, {
                                                id: pubKey.id,
                                            })];
                                    case 3:
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
     * Check whether the key is active (i.e. haven't been revoked or deleted yet)
     *
     * @param publishableApiKeyId - id of the key
     */
    PublishableApiKeyService.prototype.isValid = function (publishableApiKeyId) {
        return __awaiter(this, void 0, void 0, function () {
            var pubKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve(publishableApiKeyId)];
                    case 1:
                        pubKey = _a.sent();
                        return [2 /*return*/, pubKey.revoked_by === null];
                }
            });
        });
    };
    /**
     * Associate provided sales channels with the publishable api key.
     *
     * @param publishableApiKeyId
     * @param salesChannelIds
     */
    PublishableApiKeyService.prototype.addSalesChannels = function (publishableApiKeyId, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var pubKeySalesChannelRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pubKeySalesChannelRepo = transactionManager.withRepository(this.publishableApiKeySalesChannelRepository_);
                                        return [4 /*yield*/, pubKeySalesChannelRepo.addSalesChannels(publishableApiKeyId, salesChannelIds)];
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
     * Remove provided sales channels from the publishable api key scope.
     *
     * @param publishableApiKeyId
     * @param salesChannelIds
     */
    PublishableApiKeyService.prototype.removeSalesChannels = function (publishableApiKeyId, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var pubKeySalesChannelRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pubKeySalesChannelRepo = transactionManager.withRepository(this.publishableApiKeySalesChannelRepository_);
                                        return [4 /*yield*/, pubKeySalesChannelRepo.removeSalesChannels(publishableApiKeyId, salesChannelIds)];
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
     * List SalesChannels associated with the PublishableKey
     *
     * @param publishableApiKeyId - id of the key SalesChannels are listed for
     * @param config - querying params
     */
    PublishableApiKeyService.prototype.listSalesChannels = function (publishableApiKeyId, config) {
        return __awaiter(this, void 0, void 0, function () {
            var pubKeySalesChannelRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pubKeySalesChannelRepo = this.activeManager_.withRepository(this.publishableApiKeySalesChannelRepository_);
                        return [4 /*yield*/, pubKeySalesChannelRepo.findSalesChannels(publishableApiKeyId, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get a map of resources ids that are withing the key's scope.
     *
     * @param publishableApiKeyId
     */
    PublishableApiKeyService.prototype.getResourceScopes = function (publishableApiKeyId) {
        return __awaiter(this, void 0, void 0, function () {
            var pubKeySalesChannelRepo, salesChannels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pubKeySalesChannelRepo = this.activeManager_.withRepository(this.publishableApiKeySalesChannelRepository_);
                        return [4 /*yield*/, pubKeySalesChannelRepo.find({
                                select: ["sales_channel_id"],
                                where: { publishable_key_id: publishableApiKeyId },
                            })];
                    case 1:
                        salesChannels = _a.sent();
                        return [2 /*return*/, {
                                sales_channel_ids: salesChannels.map(function (_a) {
                                    var sales_channel_id = _a.sales_channel_id;
                                    return sales_channel_id;
                                }),
                            }];
                }
            });
        });
    };
    PublishableApiKeyService.Events = {
        CREATED: "publishable_api_key.created",
        REVOKED: "publishable_api_key.revoked",
    };
    return PublishableApiKeyService;
}(interfaces_1.TransactionBaseService));
exports.default = PublishableApiKeyService;
//# sourceMappingURL=publishable-api-key.js.map