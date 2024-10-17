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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var loaders_1 = __importDefault(require("../loaders"));
var utils_1 = require("@medusajs/utils");
var logger_1 = __importDefault(require("../loaders/logger"));
dotenv_1.default.config();
var BATCH_SIZE = 100;
var migrateProductVariant = function (variant, locationId, _a) {
    var container = _a.container, transactionManager = _a.transactionManager;
    return __awaiter(void 0, void 0, void 0, function () {
        var productVariantInventoryService, productVariantInventoryServiceTx, existingVariantInventoryItems, inventoryService, context, inventoryItem;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    productVariantInventoryService = container.resolve("productVariantInventoryService");
                    productVariantInventoryServiceTx = productVariantInventoryService.withTransaction(transactionManager);
                    return [4 /*yield*/, productVariantInventoryServiceTx.listByVariant(variant.id)];
                case 1:
                    existingVariantInventoryItems = _b.sent();
                    if (existingVariantInventoryItems.length) {
                        return [2 /*return*/];
                    }
                    inventoryService = container.resolve("inventoryService");
                    if (!variant.manage_inventory) {
                        return [2 /*return*/];
                    }
                    context = { transactionManager: transactionManager };
                    return [4 /*yield*/, inventoryService.createInventoryItem({
                            sku: variant.sku,
                            material: variant.material,
                            width: variant.width,
                            length: variant.length,
                            height: variant.height,
                            weight: variant.weight,
                            origin_country: variant.origin_country,
                            hs_code: variant.hs_code,
                            mid_code: variant.mid_code,
                            requires_shipping: true,
                        }, context)];
                case 2:
                    inventoryItem = _b.sent();
                    return [4 /*yield*/, productVariantInventoryServiceTx.attachInventoryItem(variant.id, inventoryItem.id, 1)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, inventoryService.createInventoryLevel({
                            location_id: locationId,
                            inventory_item_id: inventoryItem.id,
                            stocked_quantity: variant.inventory_quantity,
                            incoming_quantity: 0,
                        }, context)];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var migrateStockLocation = function (container) { return __awaiter(void 0, void 0, void 0, function () {
    var stockLocationService, existing, stockLocation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                stockLocationService = container.resolve("stockLocationService");
                return [4 /*yield*/, stockLocationService.list({}, { take: 1 })];
            case 1:
                existing = _a.sent();
                if (existing.length) {
                    return [2 /*return*/, existing[0].id];
                }
                return [4 /*yield*/, stockLocationService.create({ name: "Default" })];
            case 2:
                stockLocation = _a.sent();
                return [2 /*return*/, stockLocation.id];
        }
    });
}); };
var processBatch = function (variants, locationId, container) { return __awaiter(void 0, void 0, void 0, function () {
    var manager;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manager = container.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(variants.map(function (variant) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, migrateProductVariant(variant, locationId, {
                                                        container: container,
                                                        transactionManager: transactionManager,
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }))];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var migrate = function (_a) {
    var directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var app, container, variantService, defaultLocationId, _b, variants, totalCount, processedCount, nextBatch;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    app = (0, express_1.default)();
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                            isTest: false,
                        })];
                case 1:
                    container = (_c.sent()).container;
                    return [4 /*yield*/, container.resolve("productVariantService")];
                case 2:
                    variantService = _c.sent();
                    return [4 /*yield*/, migrateStockLocation(container)];
                case 3:
                    defaultLocationId = _c.sent();
                    return [4 /*yield*/, variantService.listAndCount({}, { take: BATCH_SIZE, order: { id: "ASC" } })];
                case 4:
                    _b = __read.apply(void 0, [_c.sent(), 2]), variants = _b[0], totalCount = _b[1];
                    return [4 /*yield*/, processBatch(variants, defaultLocationId, container)];
                case 5:
                    _c.sent();
                    processedCount = variants.length;
                    logger_1.default.info("Processed ".concat(processedCount, " of ").concat(totalCount));
                    _c.label = 6;
                case 6:
                    if (!(processedCount < totalCount)) return [3 /*break*/, 9];
                    return [4 /*yield*/, variantService.list({}, {
                            skip: processedCount,
                            take: BATCH_SIZE,
                            order: { id: "ASC" },
                        })];
                case 7:
                    nextBatch = _c.sent();
                    return [4 /*yield*/, processBatch(nextBatch, defaultLocationId, container)];
                case 8:
                    _c.sent();
                    processedCount += nextBatch.length;
                    logger_1.default.info("Processed ".concat(processedCount, " of ").concat(totalCount));
                    return [3 /*break*/, 6];
                case 9:
                    logger_1.default.info("Done");
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
};
migrate({ directory: process.cwd() });
//# sourceMappingURL=migrate-inventory-items.js.map