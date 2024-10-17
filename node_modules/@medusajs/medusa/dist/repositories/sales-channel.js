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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannelRepository = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var database_1 = require("../loaders/database");
var utils_1 = require("../utils");
var product_sales_channel_1 = require("../models/product-sales-channel");
var productSalesChannelTable = "product_sales_channel";
exports.SalesChannelRepository = database_1.dataSource
    .getRepository(models_1.SalesChannel)
    .extend({
    getFreeTextSearchResults_: function (q, options) {
        var _a, _b;
        if (options === void 0) { options = {
            where: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var options_, qb;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options_ = __assign({}, options);
                        options_.where = options_.where;
                        (_a = options_ === null || options_ === void 0 ? void 0 : options_.where) === null || _a === void 0 ? true : delete _a.name;
                        (_b = options_ === null || options_ === void 0 ? void 0 : options_.where) === null || _b === void 0 ? true : delete _b.description;
                        options_.where = [
                            __assign(__assign({}, options_.where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            __assign(__assign({}, options_.where), { description: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                        ];
                        qb = this.createQueryBuilder()
                            .select()
                            .where(options_.where)
                            .skip(options_.skip)
                            .take(options_.take);
                        if (options_.withDeleted) {
                            qb = qb.withDeleted();
                        }
                        return [4 /*yield*/, (options_.withCount ? qb.getManyAndCount() : qb.getMany())];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    },
    getFreeTextSearchResultsAndCount: function (q, options) {
        if (options === void 0) { options = {
            where: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFreeTextSearchResults_(q, __assign(__assign({}, options), { withCount: true }))];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    },
    getFreeTextSearchResults: function (q, options) {
        if (options === void 0) { options = {
            where: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFreeTextSearchResults_(q, options)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    },
    removeProducts: function (salesChannelId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var whereOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        whereOptions = {
                            sales_channel_id: salesChannelId,
                            product_id: (0, typeorm_1.In)(productIds),
                        };
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(productSalesChannelTable)
                                .where(whereOptions)
                                .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    addProducts: function (salesChannelId, productIds, isMedusaV2Enabled) {
        return __awaiter(this, void 0, void 0, function () {
            var valuesToInsert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valuesToInsert = productIds.map(function (id) { return ({
                            sales_channel_id: salesChannelId,
                            product_id: id,
                        }); });
                        if (isMedusaV2Enabled) {
                            valuesToInsert = valuesToInsert.map(function (v) { return (__assign(__assign({}, v), { id: (0, utils_1.generateEntityId)(undefined, "prodsc") })); });
                        }
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .into(isMedusaV2Enabled ? product_sales_channel_1.ProductSalesChannel : productSalesChannelTable)
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
    listProductIdsBySalesChannelIds: function (salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelIds = Array.isArray(salesChannelIds)
                            ? salesChannelIds
                            : [salesChannelIds];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .select(["sales_channel_id", "product_id"])
                                .from(productSalesChannelTable, "psc")
                                .where({ sales_channel_id: (0, typeorm_1.In)(salesChannelIds) })
                                .execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.reduce(function (acc, curr) {
                                var _a;
                                var _b;
                                (_a = acc[_b = curr.sales_channel_id]) !== null && _a !== void 0 ? _a : (acc[_b] = []);
                                acc[curr.sales_channel_id].push(curr.product_id);
                                return acc;
                            }, {})];
                }
            });
        });
    },
});
exports.default = exports.SalesChannelRepository;
//# sourceMappingURL=sales-channel.js.map