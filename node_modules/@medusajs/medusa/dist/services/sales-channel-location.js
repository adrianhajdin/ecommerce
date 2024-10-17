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
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var sales_channel_location_1 = require("../models/sales-channel-location");
/**
 * Service for managing the stock locations of sales channels
 */
var SalesChannelLocationService = /** @class */ (function (_super) {
    __extends(SalesChannelLocationService, _super);
    function SalesChannelLocationService(_a) {
        var salesChannelService = _a.salesChannelService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.salesChannelService_ = salesChannelService;
        _this.eventBusService_ = eventBusService;
        return _this;
    }
    Object.defineProperty(SalesChannelLocationService.prototype, "stockLocationService_", {
        get: function () {
            return this.__container__.stockLocationService;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Removes an association between a sales channel and a stock location.
     * @param salesChannelId - The ID of the sales channel or undefined if all the sales channel will be affected.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been removed.
     */
    SalesChannelLocationService.prototype.removeLocation = function (locationId, salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelLocationRepo, where, scLoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelLocationRepo = this.activeManager_.getRepository(sales_channel_location_1.SalesChannelLocation);
                        where = {
                            location_id: locationId,
                        };
                        if (salesChannelId) {
                            where.sales_channel_id = salesChannelId;
                        }
                        return [4 /*yield*/, salesChannelLocationRepo.find({
                                where: where,
                            })];
                    case 1:
                        scLoc = _a.sent();
                        if (!scLoc.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, salesChannelLocationRepo.remove(scLoc)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Associates a sales channel with a stock location.
     * @param salesChannelId - The ID of the sales channel.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been created.
     */
    SalesChannelLocationService.prototype.associateLocation = function (salesChannelId, locationId) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannel, salesChannelLocationRepo, salesChannelLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salesChannelService_
                            .withTransaction(this.activeManager_)
                            .retrieve(salesChannelId)];
                    case 1:
                        salesChannel = _a.sent();
                        if (!this.stockLocationService_) return [3 /*break*/, 3];
                        // throws error if not found
                        return [4 /*yield*/, this.stockLocationService_.retrieve(locationId, undefined, {
                                transactionManager: this.activeManager_,
                            })];
                    case 2:
                        // throws error if not found
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        salesChannelLocationRepo = this.activeManager_.getRepository(sales_channel_location_1.SalesChannelLocation);
                        salesChannelLocation = salesChannelLocationRepo.create({
                            sales_channel_id: salesChannel.id,
                            location_id: locationId,
                        });
                        return [4 /*yield*/, salesChannelLocationRepo.save(salesChannelLocation)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lists the stock locations associated with a sales channel.
     * @param salesChannelId - The ID of the sales channel.
     * @returns A promise that resolves with an array of location IDs.
     */
    SalesChannelLocationService.prototype.listLocationIds = function (salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, _a, salesChannels, count, locations;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ids = Array.isArray(salesChannelId)
                            ? salesChannelId
                            : [salesChannelId];
                        return [4 /*yield*/, this.salesChannelService_
                                .withTransaction(this.activeManager_)
                                .listAndCount({ id: ids }, { select: ["id"], skip: 0 })];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), salesChannels = _a[0], count = _a[1];
                        if (!count) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Sales channel with id: ".concat(ids.join(", "), " was not found"));
                        }
                        return [4 /*yield*/, this.activeManager_.find(sales_channel_location_1.SalesChannelLocation, {
                                where: { sales_channel_id: (0, typeorm_1.In)(salesChannels.map(function (sc) { return sc.id; })) },
                                select: ["location_id"],
                            })];
                    case 2:
                        locations = _b.sent();
                        return [2 /*return*/, locations.map(function (l) { return l.location_id; })];
                }
            });
        });
    };
    /**
     * Lists the sales channels associated with a stock location.
     * @param {string} locationId - The ID of the stock location.
     * @returns {Promise<string[]>} A promise that resolves with an array of sales channel IDs.
     */
    SalesChannelLocationService.prototype.listSalesChannelIds = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            var location, salesChannelRepo, salesChannelLocations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stockLocationService_.retrieve(locationId, undefined, {
                            transactionManager: this.activeManager_,
                        })];
                    case 1:
                        location = _a.sent();
                        salesChannelRepo = this.activeManager_.getRepository(sales_channel_location_1.SalesChannelLocation);
                        return [4 /*yield*/, salesChannelRepo.find({
                                where: { location_id: location.id },
                                select: ["sales_channel_id"],
                            })];
                    case 2:
                        salesChannelLocations = _a.sent();
                        return [2 /*return*/, salesChannelLocations.map(function (l) { return l.sales_channel_id; })];
                }
            });
        });
    };
    return SalesChannelLocationService;
}(interfaces_1.TransactionBaseService));
exports.default = SalesChannelLocationService;
//# sourceMappingURL=sales-channel-location.js.map