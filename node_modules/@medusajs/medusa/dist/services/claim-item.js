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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
var ClaimItemService = /** @class */ (function (_super) {
    __extends(ClaimItemService, _super);
    function ClaimItemService(_a) {
        var claimItemRepository = _a.claimItemRepository, claimTagRepository = _a.claimTagRepository, claimImageRepository = _a.claimImageRepository, lineItemService = _a.lineItemService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.claimItemRepository_ = claimItemRepository;
        _this.claimTagRepository_ = claimTagRepository;
        _this.claimImageRepository_ = claimImageRepository;
        _this.lineItemService_ = lineItemService;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    ClaimItemService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var ciRepo, item_id, reason, quantity, tags, images, rest, lineItem, tagsToAdd, claimTagRepo_1, imagesToAdd, claimImgRepo_1, toCreate, created, result;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        ciRepo = manager.withRepository(this.claimItemRepository_);
                                        item_id = data.item_id, reason = data.reason, quantity = data.quantity, tags = data.tags, images = data.images, rest = __rest(data, ["item_id", "reason", "quantity", "tags", "images"]);
                                        if (reason !== "missing_item" &&
                                            reason !== "wrong_item" &&
                                            reason !== "production_failure" &&
                                            reason !== "other") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim Item reason must be one of \"missing_item\", \"wrong_item\", \"production_failure\" or \"other\".");
                                        }
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(manager)
                                                .retrieve(item_id)];
                                    case 1:
                                        lineItem = _a.sent();
                                        if (!lineItem.variant_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot claim a custom line item");
                                        }
                                        if (lineItem.fulfilled_quantity < quantity) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot claim more of an item than has been fulfilled.");
                                        }
                                        tagsToAdd = [];
                                        if (!(tags && tags.length)) return [3 /*break*/, 3];
                                        claimTagRepo_1 = manager.withRepository(this.claimTagRepository_);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(tags.map(function (t) { return __awaiter(_this, void 0, void 0, function () {
                                                var normalized, existing;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            normalized = t.trim().toLowerCase();
                                                            return [4 /*yield*/, claimTagRepo_1.findOne({
                                                                    where: { value: normalized },
                                                                })];
                                                        case 1:
                                                            existing = _a.sent();
                                                            if (existing) {
                                                                return [2 /*return*/, existing];
                                                            }
                                                            return [2 /*return*/, claimTagRepo_1.create({ value: normalized })];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        tagsToAdd = _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        imagesToAdd = [];
                                        if (images && images.length) {
                                            claimImgRepo_1 = manager.withRepository(this.claimImageRepository_);
                                            imagesToAdd = images.map(function (url) {
                                                return claimImgRepo_1.create({ url: url });
                                            });
                                        }
                                        toCreate = __assign(__assign({}, rest), { variant_id: lineItem.variant_id, tags: tagsToAdd, images: imagesToAdd, item_id: item_id, reason: reason, quantity: quantity });
                                        created = ciRepo.create(toCreate);
                                        return [4 /*yield*/, ciRepo.save(created)];
                                    case 4:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ClaimItemService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimItemService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var ciRepo, item, tags, images, reason, note, metadata, claimTagRepo, tags_1, tags_1_1, t, normalized, existing, e_1_1, claimImgRepo, ids, _a, _b, i, e_2_1, images_1, images_1_1, i;
                        var e_1, _c, e_2, _d, e_3, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    ciRepo = manager.withRepository(this.claimItemRepository_);
                                    return [4 /*yield*/, this.retrieve(id, { relations: ["images", "tags"] })];
                                case 1:
                                    item = _f.sent();
                                    tags = data.tags, images = data.images, reason = data.reason, note = data.note, metadata = data.metadata;
                                    if (note) {
                                        item.note = note;
                                    }
                                    if (reason) {
                                        item.reason = reason;
                                    }
                                    if (metadata) {
                                        item.metadata = (0, utils_2.setMetadata)(item, metadata);
                                    }
                                    if (!tags) return [3 /*break*/, 10];
                                    item.tags = [];
                                    claimTagRepo = manager.withRepository(this.claimTagRepository_);
                                    _f.label = 2;
                                case 2:
                                    _f.trys.push([2, 8, 9, 10]);
                                    tags_1 = __values(tags), tags_1_1 = tags_1.next();
                                    _f.label = 3;
                                case 3:
                                    if (!!tags_1_1.done) return [3 /*break*/, 7];
                                    t = tags_1_1.value;
                                    if (!t.id) return [3 /*break*/, 4];
                                    item.tags.push(t);
                                    return [3 /*break*/, 6];
                                case 4:
                                    normalized = t.value.trim().toLowerCase();
                                    return [4 /*yield*/, claimTagRepo.findOne({
                                            where: { value: normalized },
                                        })];
                                case 5:
                                    existing = _f.sent();
                                    if (existing) {
                                        item.tags.push(existing);
                                    }
                                    else {
                                        item.tags.push(claimTagRepo.create({ value: normalized }));
                                    }
                                    _f.label = 6;
                                case 6:
                                    tags_1_1 = tags_1.next();
                                    return [3 /*break*/, 3];
                                case 7: return [3 /*break*/, 10];
                                case 8:
                                    e_1_1 = _f.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 10];
                                case 9:
                                    try {
                                        if (tags_1_1 && !tags_1_1.done && (_c = tags_1.return)) _c.call(tags_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                    return [7 /*endfinally*/];
                                case 10:
                                    if (!images) return [3 /*break*/, 19];
                                    claimImgRepo = manager.withRepository(this.claimImageRepository_);
                                    ids = images.map(function (i) { return i.id; });
                                    _f.label = 11;
                                case 11:
                                    _f.trys.push([11, 16, 17, 18]);
                                    _a = __values(item.images), _b = _a.next();
                                    _f.label = 12;
                                case 12:
                                    if (!!_b.done) return [3 /*break*/, 15];
                                    i = _b.value;
                                    if (!!ids.includes(i.id)) return [3 /*break*/, 14];
                                    return [4 /*yield*/, claimImgRepo.remove(i)];
                                case 13:
                                    _f.sent();
                                    _f.label = 14;
                                case 14:
                                    _b = _a.next();
                                    return [3 /*break*/, 12];
                                case 15: return [3 /*break*/, 18];
                                case 16:
                                    e_2_1 = _f.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 18];
                                case 17:
                                    try {
                                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                    return [7 /*endfinally*/];
                                case 18:
                                    item.images = [];
                                    try {
                                        for (images_1 = __values(images), images_1_1 = images_1.next(); !images_1_1.done; images_1_1 = images_1.next()) {
                                            i = images_1_1.value;
                                            if (i.id) {
                                                item.images.push(i);
                                            }
                                            else {
                                                item.images.push(claimImgRepo.create({ url: i.url }));
                                            }
                                        }
                                    }
                                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                    finally {
                                        try {
                                            if (images_1_1 && !images_1_1.done && (_e = images_1.return)) _e.call(images_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                    }
                                    _f.label = 19;
                                case 19: return [4 /*yield*/, ciRepo.save(item)];
                                case 20:
                                    _f.sent();
                                    return [4 /*yield*/, this.eventBus_
                                            .withTransaction(manager)
                                            .emit(ClaimItemService.Events.UPDATED, {
                                            id: item.id,
                                        })];
                                case 21:
                                    _f.sent();
                                    return [2 /*return*/, item];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object for find
     * @return {Promise} the result of the find operation
     */
    ClaimItemService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var ciRepo, query;
            return __generator(this, function (_a) {
                ciRepo = this.activeManager_.withRepository(this.claimItemRepository_);
                query = (0, utils_2.buildQuery)(selector, config);
                return [2 /*return*/, ciRepo.find(query)];
            });
        });
    };
    /**
     * Gets a claim item by id.
     * @param {string} claimItemId - id of ClaimItem to retrieve
     * @param {Object} config - configuration for the find operation
     * @return {Promise<Order>} the ClaimItem
     */
    ClaimItemService.prototype.retrieve = function (claimItemId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var claimItemRepo, query, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(claimItemId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"claimItemId\" must be defined");
                        }
                        claimItemRepo = this.activeManager_.withRepository(this.claimItemRepository_);
                        query = (0, utils_2.buildQuery)({ id: claimItemId }, config);
                        return [4 /*yield*/, claimItemRepo.findOne(query)];
                    case 1:
                        item = _a.sent();
                        if (!item) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Claim item with id: ".concat(claimItemId, " was not found."));
                        }
                        return [2 /*return*/, item];
                }
            });
        });
    };
    ClaimItemService.Events = {
        CREATED: "claim_item.created",
        UPDATED: "claim_item.updated",
        CANCELED: "claim_item.canceled",
    };
    return ClaimItemService;
}(interfaces_1.TransactionBaseService));
exports.default = ClaimItemService;
//# sourceMappingURL=claim-item.js.map