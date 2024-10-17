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
var utils_1 = require("@medusajs/utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var product_variant_inventory_item_1 = require("../models/product-variant-inventory-item");
var diff_set_1 = require("../utils/diff-set");
var ProductVariantInventoryService = /** @class */ (function (_super) {
    __extends(ProductVariantInventoryService, _super);
    function ProductVariantInventoryService(_a) {
        var salesChannelLocationService = _a.salesChannelLocationService, salesChannelInventoryService = _a.salesChannelInventoryService, productVariantService = _a.productVariantService, eventBusService = _a.eventBusService, featureFlagRouter = _a.featureFlagRouter, remoteQuery = _a.remoteQuery;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.salesChannelLocationService_ = salesChannelLocationService;
        _this.salesChannelInventoryService_ = salesChannelInventoryService;
        _this.productVariantService_ = productVariantService;
        _this.eventBusService_ = eventBusService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.remoteQuery_ = remoteQuery;
        return _this;
    }
    Object.defineProperty(ProductVariantInventoryService.prototype, "inventoryService_", {
        get: function () {
            return this.__container__.inventoryService;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductVariantInventoryService.prototype, "stockLocationService_", {
        get: function () {
            return this.__container__.stockLocationService;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * confirms if requested inventory is available
     * @param variantId id of the variant to confirm inventory for
     * @param quantity quantity of inventory to confirm is available
     * @param context optionally include a sales channel if applicable
     * @returns boolean indicating if inventory is available
     */
    ProductVariantInventoryService.prototype.confirmInventory = function (variantId, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var productVariant, variantInventory, locationIds, stockLocations, hasInventory;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variantId) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.productVariantService_
                                .withTransaction(this.activeManager_)
                                .retrieve(variantId, {
                                select: [
                                    "id",
                                    "allow_backorder",
                                    "manage_inventory",
                                    "inventory_quantity",
                                ],
                            })
                            // If the variant allows backorders or if inventory isn't managed we
                            // don't need to check inventory
                        ];
                    case 1:
                        productVariant = _a.sent();
                        // If the variant allows backorders or if inventory isn't managed we
                        // don't need to check inventory
                        if (productVariant.allow_backorder || !productVariant.manage_inventory) {
                            return [2 /*return*/, true];
                        }
                        if (!this.inventoryService_) {
                            return [2 /*return*/, productVariant.inventory_quantity >= quantity];
                        }
                        return [4 /*yield*/, this.listByVariant(variantId)
                            // If there are no inventory items attached to the variant we default
                            // to true
                        ];
                    case 2:
                        variantInventory = _a.sent();
                        // If there are no inventory items attached to the variant we default
                        // to true
                        if (variantInventory.length === 0) {
                            return [2 /*return*/, true];
                        }
                        locationIds = [];
                        if (!context.salesChannelId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.salesChannelLocationService_.listLocationIds(context.salesChannelId)];
                    case 3:
                        locationIds = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.stockLocationService_.list({}, { select: ["id"] })];
                    case 5:
                        stockLocations = _a.sent();
                        locationIds = stockLocations.map(function (l) { return l.id; });
                        _a.label = 6;
                    case 6:
                        if (locationIds.length === 0) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(variantInventory.map(function (inventoryPart) { return __awaiter(_this, void 0, void 0, function () {
                                var itemQuantity;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            itemQuantity = inventoryPart.required_quantity * quantity;
                                            return [4 /*yield*/, this.inventoryService_.confirmInventory(inventoryPart.inventory_item_id, locationIds, itemQuantity)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 7:
                        hasInventory = _a.sent();
                        return [2 /*return*/, hasInventory.every(Boolean)];
                }
            });
        });
    };
    /**
     * Retrieves a product variant inventory item by its inventory item ID and variant ID.
     *
     * @param inventoryItemId - The ID of the inventory item to retrieve.
     * @param variantId - The ID of the variant to retrieve.
     * @returns A promise that resolves with the product variant inventory item.
     */
    ProductVariantInventoryService.prototype.retrieve = function (inventoryItemId, variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventoryRepo, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantInventoryRepo = this.activeManager_.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.findOne({
                                where: { inventory_item_id: inventoryItemId, variant_id: variantId },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        if (!variantInventory) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Inventory item with id ".concat(inventoryItemId, " not found"));
                        }
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * list registered inventory items
     * @param itemIds list inventory item ids
     * @returns list of inventory items
     */
    ProductVariantInventoryService.prototype.listByItem = function (itemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventoryRepo, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantInventoryRepo = this.activeManager_.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: { inventory_item_id: (0, typeorm_1.In)(itemIds) },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * List inventory items for a specific variant
     * @param variantId variant id
     * @returns variant inventory items for the variant id
     */
    ProductVariantInventoryService.prototype.listByVariant = function (variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventoryRepo, ids, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantInventoryRepo = this.activeManager_.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        ids = Array.isArray(variantId) ? variantId : [variantId];
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: { variant_id: (0, typeorm_1.In)(ids) },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * lists variant by inventory item id
     * @param itemId item id
     * @returns a list of product variants that are associated with the item id
     */
    ProductVariantInventoryService.prototype.listVariantsByItem = function (itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventory, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.listByItem([itemId])];
                    case 1:
                        variantInventory = _a.sent();
                        return [4 /*yield*/, this.productVariantService_.list({
                                id: variantInventory.map(function (i) { return i.variant_id; }),
                            })];
                    case 2:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    /**
     * lists inventory items for a given variant
     * @param variantId variant id
     * @returns lidt of inventory items for the variant
     */
    ProductVariantInventoryService.prototype.listInventoryItemsByVariant = function (variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventory, _a, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 1:
                        variantInventory = _b.sent();
                        return [4 /*yield*/, this.inventoryService_.listInventoryItems({
                                id: variantInventory.map(function (i) { return i.inventory_item_id; }),
                            })];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 1]), items = _a[0];
                        return [2 /*return*/, items];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.attachInventoryItem = function (variantIdOrAttachments, inventoryItemId, requiredQuantity) {
        return __awaiter(this, void 0, void 0, function () {
            var data, invalidDataEntries, variants, foundVariantIds, requestedVariantIds, difference, _a, inventoryItems, foundInventoryItemIds, requestedInventoryItemIds, difference, variantInventoryRepo, existingAttachments, existingMap, toCreate, createdVariantInventoryItems;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = Array.isArray(variantIdOrAttachments)
                            ? variantIdOrAttachments
                            : [
                                {
                                    variantId: variantIdOrAttachments,
                                    inventoryItemId: inventoryItemId,
                                    requiredQuantity: requiredQuantity,
                                },
                            ];
                        invalidDataEntries = data.filter(function (d) { return typeof d.requiredQuantity === "number" && d.requiredQuantity < 1; });
                        if (invalidDataEntries.length) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "\"requiredQuantity\" must be greater than 0, the following entries are invalid: ".concat(invalidDataEntries
                                .map(function (d) { return JSON.stringify(d); })
                                .join(", ")));
                        }
                        if (!this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.remoteQuery_((0, utils_1.remoteQueryObjectFromString)({
                                entryPoint: "variants",
                                variables: {
                                    id: data.map(function (d) { return d.variantId; }),
                                },
                                fields: ["id"],
                            }))];
                    case 1:
                        variants = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.productVariantService_
                            .withTransaction(this.activeManager_)
                            .list({
                            id: data.map(function (d) { return d.variantId; }),
                        }, {
                            select: ["id"],
                        })];
                    case 3:
                        variants = _b.sent();
                        _b.label = 4;
                    case 4:
                        foundVariantIds = new Set(variants.map(function (v) { return v.id; }));
                        requestedVariantIds = new Set(data.map(function (v) { return v.variantId; }));
                        if (foundVariantIds.size !== requestedVariantIds.size) {
                            difference = (0, diff_set_1.getSetDifference)(requestedVariantIds, foundVariantIds);
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Variants not found for the following ids: ".concat(__spreadArray([], __read(difference), false).join(", ")));
                        }
                        return [4 /*yield*/, this.inventoryService_.listInventoryItems({
                                id: data.map(function (d) { return d.inventoryItemId; }),
                            }, {
                                select: ["id"],
                            }, {
                                transactionManager: this.activeManager_,
                            })];
                    case 5:
                        _a = __read.apply(void 0, [_b.sent(), 1]), inventoryItems = _a[0];
                        foundInventoryItemIds = new Set(inventoryItems.map(function (v) { return v.id; }));
                        requestedInventoryItemIds = new Set(data.map(function (v) { return v.inventoryItemId; }));
                        if (foundInventoryItemIds.size !== requestedInventoryItemIds.size) {
                            difference = (0, diff_set_1.getSetDifference)(requestedInventoryItemIds, foundInventoryItemIds);
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Inventory items not found for the following ids: ".concat(__spreadArray([], __read(difference), false).join(", ")));
                        }
                        variantInventoryRepo = this.activeManager_.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: data.map(function (d) { return ({
                                    variant_id: d.variantId,
                                    inventory_item_id: d.inventoryItemId,
                                }); }),
                            })];
                    case 6:
                        existingAttachments = _b.sent();
                        existingMap = existingAttachments.reduce(function (acc, curr) {
                            var existingSet = acc.get(curr.variant_id) || new Set();
                            existingSet.add(curr.inventory_item_id);
                            acc.set(curr.variant_id, existingSet);
                            return acc;
                        }, new Map());
                        return [4 /*yield*/, (0, utils_1.promiseAll)(data.map(function (d) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    if ((_a = existingMap.get(d.variantId)) === null || _a === void 0 ? void 0 : _a.has(d.inventoryItemId)) {
                                        return [2 /*return*/, null];
                                    }
                                    return [2 /*return*/, variantInventoryRepo.create({
                                            variant_id: d.variantId,
                                            inventory_item_id: d.inventoryItemId,
                                            required_quantity: (_b = d.requiredQuantity) !== null && _b !== void 0 ? _b : 1,
                                        })];
                                });
                            }); }))];
                    case 7:
                        toCreate = (_b.sent()).filter(function (tc) { return !!tc; });
                        return [4 /*yield*/, variantInventoryRepo.save(toCreate)];
                    case 8:
                        createdVariantInventoryItems = _b.sent();
                        return [2 /*return*/, createdVariantInventoryItems];
                }
            });
        });
    };
    /**
     * Remove a variant from an inventory item
     * @param variantId variant id or undefined if all the variants will be affected
     * @param inventoryItemId inventory item id
     */
    ProductVariantInventoryService.prototype.detachInventoryItem = function (inventoryItemId, variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventoryRepo, where, varInvItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantInventoryRepo = this.activeManager_.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        where = {
                            inventory_item_id: inventoryItemId,
                        };
                        if (variantId) {
                            where.variant_id = variantId;
                        }
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: where,
                            })];
                    case 1:
                        varInvItems = _a.sent();
                        if (!varInvItems.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, variantInventoryRepo.remove(varInvItems)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reserves a quantity of a variant
     * @param variantId variant id
     * @param quantity quantity to reserve
     * @param context optional parameters
     */
    ProductVariantInventoryService.prototype.reserveQuantity = function (variantId, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var toReserve, variantInventory, locationId, moduleContext, locationIds, _a, locations, count, reservationItems;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var variantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                variantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, variantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                return [4 /*yield*/, variantServiceTx.update(variant.id, {
                                                        inventory_quantity: variant.inventory_quantity - quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        toReserve = {
                            line_item_id: context.lineItemId,
                        };
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 1:
                        variantInventory = _b.sent();
                        if (variantInventory.length === 0) {
                            return [2 /*return*/];
                        }
                        locationId = context.locationId;
                        moduleContext = {
                            transactionManager: this.activeManager_,
                        };
                        if (!(!(0, utils_1.isDefined)(locationId) && context.salesChannelId)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.salesChannelLocationService_
                                .withTransaction(this.activeManager_)
                                .listLocationIds(context.salesChannelId)];
                    case 2:
                        locationIds = _b.sent();
                        if (!locationIds.length) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Must provide location_id or sales_channel_id to a Sales Channel that has associated Stock Locations");
                        }
                        return [4 /*yield*/, this.inventoryService_.listInventoryLevels({
                                location_id: locationIds,
                                inventory_item_id: variantInventory[0].inventory_item_id,
                            }, undefined, moduleContext)];
                    case 3:
                        _a = __read.apply(void 0, [_b.sent(), 2]), locations = _a[0], count = _a[1];
                        if (count === 0) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Must provide location_id or sales_channel_id to a Sales Channel that has associated locations with inventory levels");
                        }
                        locationId = locations[0].location_id;
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.inventoryService_.createReservationItems(variantInventory.map(function (inventoryPart) {
                            var itemQuantity = inventoryPart.required_quantity * quantity;
                            return __assign(__assign({}, toReserve), { location_id: locationId, inventory_item_id: inventoryPart.inventory_item_id, quantity: itemQuantity });
                        }), moduleContext)];
                    case 5:
                        reservationItems = _b.sent();
                        return [2 /*return*/, reservationItems.flat()];
                }
            });
        });
    };
    /**
     * Adjusts the quantity of reservations for a line item by a given amount.
     * @param {string} lineItemId - The ID of the line item
     * @param {string} variantId - The ID of the variant
     * @param {string} locationId - The ID of the location to prefer adjusting quantities at
     * @param {number} quantity - The amount to adjust the quantity by
     */
    ProductVariantInventoryService.prototype.adjustReservationsQuantityByLineItem = function (lineItemId, variantId, locationId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var context, _a, reservations, reservationCount, inventoryItems, productVariantInventory, deltaUpdate_1, exactReservation, remainingQuantity, reservationsToDelete, reservationToUpdate, reservations_1, reservations_1_1, reservation;
            var e_1, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var variantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                variantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, variantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity", "manage_inventory"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                if (!variant.manage_inventory) {
                                                    return [2 /*return*/];
                                                }
                                                return [4 /*yield*/, variantServiceTx.update(variantId, {
                                                        inventory_quantity: variant.inventory_quantity - quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        if (quantity > 0) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "You can only reduce reservation quantities using adjustReservationsQuantityByLineItem. If you wish to reserve more use update or create.");
                        }
                        context = {
                            transactionManager: this.activeManager_,
                        };
                        return [4 /*yield*/, this.inventoryService_.listReservationItems({
                                line_item_id: lineItemId,
                            }, {
                                order: { created_at: "DESC" },
                            }, context)];
                    case 1:
                        _a = __read.apply(void 0, [_c.sent(), 2]), reservations = _a[0], reservationCount = _a[1];
                        reservations.sort(function (a, _) {
                            if (a.location_id === locationId) {
                                return -1;
                            }
                            return 0;
                        });
                        if (!reservationCount) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 2:
                        inventoryItems = _c.sent();
                        productVariantInventory = inventoryItems[0];
                        deltaUpdate_1 = Math.abs(quantity * productVariantInventory.required_quantity);
                        exactReservation = reservations.find(function (r) { return r.quantity === deltaUpdate_1 && r.location_id === locationId; });
                        if (!exactReservation) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.inventoryService_.deleteReservationItem(exactReservation.id, context)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                    case 4:
                        remainingQuantity = deltaUpdate_1;
                        reservationsToDelete = [];
                        reservationToUpdate = null;
                        try {
                            for (reservations_1 = __values(reservations), reservations_1_1 = reservations_1.next(); !reservations_1_1.done; reservations_1_1 = reservations_1.next()) {
                                reservation = reservations_1_1.value;
                                if (reservation.quantity <= remainingQuantity) {
                                    remainingQuantity -= reservation.quantity;
                                    reservationsToDelete.push(reservation);
                                }
                                else {
                                    reservationToUpdate = reservation;
                                    break;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (reservations_1_1 && !reservations_1_1.done && (_b = reservations_1.return)) _b.call(reservations_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!reservationsToDelete.length) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.inventoryService_.deleteReservationItem(reservationsToDelete.map(function (r) { return r.id; }), context)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!reservationToUpdate) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.inventoryService_.updateReservationItem(reservationToUpdate.id, {
                                quantity: reservationToUpdate.quantity - remainingQuantity,
                            }, context)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validate stock at a location for fulfillment items
     * @param items Fulfillment Line items to validate quantities for
     * @param locationId Location to validate stock at
     * @returns nothing if successful, throws error if not
     */
    ProductVariantInventoryService.prototype.validateInventoryAtLocation = function (items, locationId) {
        return __awaiter(this, void 0, void 0, function () {
            var itemsToValidate, itemsToValidate_1, itemsToValidate_1_1, item, pvInventoryItems, context, _a, inventoryLevels, inventoryLevelCount, pviMap, inventoryLevels_1, inventoryLevels_1_1, inventoryLevel, pvInventoryItem, e_2_1;
            var e_2, _b, e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/];
                        }
                        itemsToValidate = items.filter(function (item) { return !!item.variant_id; });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        itemsToValidate_1 = __values(itemsToValidate), itemsToValidate_1_1 = itemsToValidate_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!itemsToValidate_1_1.done) return [3 /*break*/, 6];
                        item = itemsToValidate_1_1.value;
                        return [4 /*yield*/, this.listByVariant(item.variant_id)];
                    case 3:
                        pvInventoryItems = _d.sent();
                        if (!pvInventoryItems.length) {
                            return [3 /*break*/, 5];
                        }
                        context = {
                            transactionManager: this.activeManager_,
                        };
                        return [4 /*yield*/, this.inventoryService_.listInventoryLevels({
                                inventory_item_id: pvInventoryItems.map(function (i) { return i.inventory_item_id; }),
                                location_id: locationId,
                            }, undefined, context)];
                    case 4:
                        _a = __read.apply(void 0, [_d.sent(), 2]), inventoryLevels = _a[0], inventoryLevelCount = _a[1];
                        if (!inventoryLevelCount) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Inventory item for ".concat(item.title, " not found at location"));
                        }
                        pviMap = new Map(pvInventoryItems.map(function (pvi) { return [pvi.inventory_item_id, pvi]; }));
                        try {
                            for (inventoryLevels_1 = (e_3 = void 0, __values(inventoryLevels)), inventoryLevels_1_1 = inventoryLevels_1.next(); !inventoryLevels_1_1.done; inventoryLevels_1_1 = inventoryLevels_1.next()) {
                                inventoryLevel = inventoryLevels_1_1.value;
                                pvInventoryItem = pviMap.get(inventoryLevel.inventory_item_id);
                                if (!pvInventoryItem ||
                                    pvInventoryItem.required_quantity * item.quantity >
                                        inventoryLevel.stocked_quantity) {
                                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Insufficient stock for item: ".concat(item.title));
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (inventoryLevels_1_1 && !inventoryLevels_1_1.done && (_c = inventoryLevels_1.return)) _c.call(inventoryLevels_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        _d.label = 5;
                    case 5:
                        itemsToValidate_1_1 = itemsToValidate_1.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (itemsToValidate_1_1 && !itemsToValidate_1_1.done && (_b = itemsToValidate_1.return)) _b.call(itemsToValidate_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * delete a reservation of variant quantity
     * @param lineItemId line item id
     * @param variantId variant id
     * @param quantity quantity to release
     */
    ProductVariantInventoryService.prototype.deleteReservationsByLineItem = function (lineItemId, variantId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var productVariantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                productVariantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, productVariantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity", "manage_inventory"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                if (!variant.manage_inventory) {
                                                    return [2 /*return*/];
                                                }
                                                return [4 /*yield*/, productVariantServiceTx.update(variantId, {
                                                        inventory_quantity: variant.inventory_quantity + quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        itemIds = Array.isArray(lineItemId) ? lineItemId : [lineItemId];
                        return [4 /*yield*/, this.inventoryService_.deleteReservationItemsByLineItem(itemIds, {
                                transactionManager: this.activeManager_,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adjusts inventory of a variant on a location
     * @param variantId variant id
     * @param locationId location id
     * @param quantity quantity to adjust
     */
    ProductVariantInventoryService.prototype.adjustInventory = function (variantId, locationId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventory;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var productVariantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                productVariantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, productVariantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity", "manage_inventory"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                if (!variant.manage_inventory) {
                                                    return [2 /*return*/];
                                                }
                                                return [4 /*yield*/, productVariantServiceTx.update(variantId, {
                                                        inventory_quantity: variant.inventory_quantity + quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 1:
                        variantInventory = _a.sent();
                        if (variantInventory.length === 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(variantInventory.map(function (inventoryPart) { return __awaiter(_this, void 0, void 0, function () {
                                var itemQuantity;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            itemQuantity = inventoryPart.required_quantity * quantity;
                                            return [4 /*yield*/, this.inventoryService_.adjustInventory(inventoryPart.inventory_item_id, locationId, itemQuantity, {
                                                    transactionManager: this.activeManager_,
                                                })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.setVariantAvailability = function (variants, salesChannelId, availabilityContext) {
        if (availabilityContext === void 0) { availabilityContext = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, variantInventoryMap, inventoryLocationMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, variants];
                        }
                        return [4 /*yield*/, this.getAvailabilityContext(variants.map(function (v) { return v.id; }), salesChannelId, availabilityContext)];
                    case 1:
                        _a = _b.sent(), variantInventoryMap = _a.variantInventoryMap, inventoryLocationMap = _a.inventoryLocationMap;
                        return [2 /*return*/, variants.map(function (variant) {
                                var _a;
                                if (!variant.id) {
                                    return variant;
                                }
                                variant.purchasable = variant.allow_backorder;
                                if (!variant.manage_inventory) {
                                    variant.purchasable = true;
                                    return variant;
                                }
                                var variantInventory = variantInventoryMap.get(variant.id) || [];
                                if (!variantInventory.length) {
                                    delete variant.inventory_quantity;
                                    variant.purchasable = true;
                                    return variant;
                                }
                                if (!salesChannelId) {
                                    delete variant.inventory_quantity;
                                    variant.purchasable = false;
                                    return variant;
                                }
                                var locations = (_a = inventoryLocationMap.get(variantInventory[0].inventory_item_id)) !== null && _a !== void 0 ? _a : [];
                                variant.inventory_quantity = locations.reduce(function (acc, next) { return acc + (next.stocked_quantity - next.reserved_quantity); }, 0);
                                variant.purchasable =
                                    variant.inventory_quantity > 0 || variant.allow_backorder;
                                return variant;
                            })];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.getAvailabilityContext = function (variants, salesChannelId, existingContext) {
        if (existingContext === void 0) { existingContext = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var variantInventoryMap, inventoryLocationMap, variantInventories, locationIds, locations, _a, locationLevels;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        variantInventoryMap = existingContext.variantInventoryMap;
                        inventoryLocationMap = existingContext.inventoryLocationMap;
                        if (!!variantInventoryMap) return [3 /*break*/, 2];
                        variantInventoryMap = new Map();
                        return [4 /*yield*/, this.listByVariant(variants)];
                    case 1:
                        variantInventories = _b.sent();
                        variantInventories.forEach(function (inventory) {
                            var variantId = inventory.variant_id;
                            var currentInventories = variantInventoryMap.get(variantId) || [];
                            currentInventories.push(inventory);
                            variantInventoryMap.set(variantId, currentInventories);
                        });
                        _b.label = 2;
                    case 2:
                        locationIds = [];
                        if (!(salesChannelId && !inventoryLocationMap)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.salesChannelLocationService_
                                .withTransaction(this.activeManager_)
                                .listLocationIds(salesChannelId)];
                    case 3:
                        locations = _b.sent();
                        locationIds.push.apply(locationIds, __spreadArray([], __read(locations), false));
                        _b.label = 4;
                    case 4:
                        if (!inventoryLocationMap) {
                            inventoryLocationMap = new Map();
                        }
                        if (!locationIds.length) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.inventoryService_.listInventoryLevels({
                                location_id: locationIds,
                                inventory_item_id: __spreadArray([], __read(new Set(Array.from(variantInventoryMap.values())
                                    .flat()
                                    .map(function (i) { return i.inventory_item_id; }))), false),
                            }, {}, {
                                transactionManager: this.activeManager_,
                            })];
                    case 5:
                        _a = __read.apply(void 0, [_b.sent(), 1]), locationLevels = _a[0];
                        locationLevels.reduce(function (acc, curr) {
                            if (!acc.has(curr.inventory_item_id)) {
                                acc.set(curr.inventory_item_id, []);
                            }
                            acc.get(curr.inventory_item_id).push(curr);
                            return acc;
                        }, inventoryLocationMap);
                        _b.label = 6;
                    case 6: return [2 /*return*/, {
                            variantInventoryMap: variantInventoryMap,
                            inventoryLocationMap: inventoryLocationMap,
                        }];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.setProductAvailability = function (products, salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantIds, availabilityContext;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, products];
                        }
                        variantIds = products
                            .flatMap(function (p) { var _a; return (_a = p.variants.map(function (v) { return v.id; })) !== null && _a !== void 0 ? _a : []; })
                            .filter(function (v) { return !!v; });
                        return [4 /*yield*/, this.getAvailabilityContext(variantIds, salesChannelId)];
                    case 1:
                        availabilityContext = _a.sent();
                        return [4 /*yield*/, (0, utils_1.promiseAll)(products.map(function (product) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!product.variants || product.variants.length === 0) {
                                                return [2 /*return*/, product];
                                            }
                                            _a = product;
                                            return [4 /*yield*/, this.setVariantAvailability(product.variants, salesChannelId, availabilityContext)];
                                        case 1:
                                            _a.variants = _b.sent();
                                            return [2 /*return*/, product];
                                    }
                                });
                            }); }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get the quantity of a variant from a list of variantInventoryItems
     * The inventory quantity of the variant should be equal to the inventory
     * item with the smallest stock, adjusted for quantity required to fulfill
     * the given variant.
     *
     * @param variantInventoryItems List of inventoryItems for a given variant, These must all be for the same variant
     * @param channelId Sales channel id to fetch availability for
     * @returns The available quantity of the variant from the inventoryItems
     */
    ProductVariantInventoryService.prototype.getVariantQuantityFromVariantInventoryItems = function (variantInventoryItems, channelId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantItemsAreMixed, salesChannelInventoryServiceTx, _a, _b, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        variantItemsAreMixed = variantInventoryItems.some(function (inventoryItem) {
                            return inventoryItem.variant_id !== variantInventoryItems[0].variant_id;
                        });
                        if (variantInventoryItems.length && variantItemsAreMixed) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "All variant inventory items must belong to the same variant");
                        }
                        salesChannelInventoryServiceTx = this.salesChannelInventoryService_.withTransaction(this.activeManager_);
                        _b = (_a = Math.min).apply;
                        _c = [Math];
                        _d = [[]];
                        return [4 /*yield*/, (0, utils_1.promiseAll)(variantInventoryItems.map(function (variantInventory) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, salesChannelInventoryServiceTx.retrieveAvailableItemQuantity(channelId, variantInventory.inventory_item_id)];
                                        case 1: 
                                        // get the total available quantity for the given sales channel
                                        // divided by the required quantity to account for how many of the
                                        // variant we can fulfill at the current time. Take the minimum we
                                        // can fulfill and set that as quantity
                                        return [2 /*return*/, (
                                            // eslint-disable-next-line max-len
                                            (_a.sent()) / variantInventory.required_quantity)];
                                    }
                                });
                            }); }))];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([__spreadArray.apply(void 0, _d.concat([__read.apply(void 0, [(_e.sent())]), false]))]))];
                }
            });
        });
    };
    return ProductVariantInventoryService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductVariantInventoryService;
//# sourceMappingURL=product-variant-inventory.js.map