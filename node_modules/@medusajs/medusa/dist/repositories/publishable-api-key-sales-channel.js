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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishableApiKeySalesChannelRepository = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var database_1 = require("../loaders/database");
var sales_channel_1 = __importDefault(require("./sales-channel"));
var utils_1 = require("../utils");
var publishableApiKeySalesChannelAlias = "PublishableKeySalesChannel";
exports.PublishableApiKeySalesChannelRepository = database_1.dataSource
    .getRepository(models_1.PublishableApiKeySalesChannel)
    .extend({
    /**
     * Query a list of sales channels that are assigned to the publishable key scope
     *
     * @param publishableApiKeyId - id of the key to retrieve channels for
     * @param config - querying params
     */
    findSalesChannels: function (publishableApiKeyId, config) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelAlias, queryBuilder, records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesChannelAlias = "sales_channel";
                        queryBuilder = this.createQueryBuilder(publishableApiKeySalesChannelAlias)
                            .select("".concat(salesChannelAlias, ".*"))
                            .from(models_1.SalesChannel, salesChannelAlias)
                            .where("".concat(publishableApiKeySalesChannelAlias, ".publishable_key_id = :publishableApiKeyId"), {
                            publishableApiKeyId: publishableApiKeyId,
                        })
                            .andWhere("".concat(publishableApiKeySalesChannelAlias, ".sales_channel_id = ").concat(salesChannelAlias, ".id"));
                        if (config === null || config === void 0 ? void 0 : config.q) {
                            queryBuilder.andWhere(new typeorm_1.Brackets(function (qb) {
                                qb.where("".concat(salesChannelAlias, ".description ILIKE :q"), {
                                    q: "%".concat(config.q, "%"),
                                }).orWhere("".concat(salesChannelAlias, ".name ILIKE :q"), {
                                    q: "%".concat(config.q, "%"),
                                });
                            }));
                        }
                        return [4 /*yield*/, queryBuilder.getRawMany()];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, records.map(function (salesChannel) {
                                return sales_channel_1.default.create(salesChannel);
                            })];
                }
            });
        });
    },
    /**
     * Assign (multiple) sales channels to the Publishable Key scope
     *
     * @param publishableApiKeyId - publishable key id
     * @param salesChannelIds - an array of SC ids
     */
    addSalesChannels: function (publishableApiKeyId, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var valuesToInsert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valuesToInsert = salesChannelIds.map(function (id) { return ({
                            id: (0, utils_1.generateEntityId)(undefined, "pksc"),
                            sales_channel_id: id,
                            publishable_key_id: publishableApiKeyId,
                        }); });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .into(models_1.PublishableApiKeySalesChannel)
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
    /**
     * Remove multiple sales channels from the PK scope
     *
     * @param publishableApiKeyId -publishable key id
     * @param salesChannelIds - an array of SC ids
     */
    removeSalesChannels: function (publishableApiKeyId, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(models_1.PublishableApiKeySalesChannel)
                            .where({
                            sales_channel_id: (0, typeorm_1.In)(salesChannelIds),
                            publishable_key_id: publishableApiKeyId,
                        })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
});
exports.default = exports.PublishableApiKeySalesChannelRepository;
//# sourceMappingURL=publishable-api-key-sales-channel.js.map