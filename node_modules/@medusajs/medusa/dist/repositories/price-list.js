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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListRepository = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var database_1 = require("../loaders/database");
var utils_1 = require("@medusajs/utils");
exports.PriceListRepository = database_1.dataSource.getRepository(models_1.PriceList).extend({
    listAndCount: function (query, q) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var query_, groups, groupsWhere;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        query_ = __assign({}, query);
                        query_.relationLoadStrategy = "query";
                        query_.where = query.where;
                        groups = query_.where.customer_groups;
                        delete query_.where.customer_groups;
                        if (groups || q) {
                            query_.relations = (_a = query_.relations) !== null && _a !== void 0 ? _a : {};
                            query_.relations.customer_groups =
                                (_b = query_.relations.customer_groups) !== null && _b !== void 0 ? _b : true;
                            if (groups) {
                                query_.where.customer_groups = {
                                    id: (0, typeorm_1.In)(groups.value),
                                };
                            }
                        }
                        if (q) {
                            groupsWhere = (_c = query_.where.customer_groups) !== null && _c !== void 0 ? _c : {};
                            query_.where = (_d = query_.where) !== null && _d !== void 0 ? _d : {};
                            query_.where = [
                                __assign(__assign({}, query_.where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, query_.where), { description: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, query_.where), { customer_groups: __assign(__assign({}, groupsWhere), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                            ];
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)([this.find(query_), this.count(query_)])];
                    case 1: return [2 /*return*/, _e.sent()];
                }
            });
        });
    },
    listPriceListsVariantIdsMap: function (priceListIds) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceListIds = Array.isArray(priceListIds) ? priceListIds : [priceListIds];
                        return [4 /*yield*/, this.createQueryBuilder("pl")
                                .innerJoin("pl.prices", "prices")
                                .innerJoinAndSelect(models_1.ProductVariantMoneyAmount, "pvma", "pvma.money_amount_id = prices.id")
                                .where("pl.id IN (:...ids)", { ids: priceListIds })
                                .execute()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.reduce(function (acc, curr) {
                                var _a;
                                var _b;
                                (_a = acc[_b = curr["pl_id"]]) !== null && _a !== void 0 ? _a : (acc[_b] = []);
                                acc[curr["pl_id"]].push(curr["pvma_variant_id"]);
                                acc[curr["pl_id"]] = __spreadArray([], __read(new Set(acc[curr["pl_id"]])), false);
                                return acc;
                            }, {})];
                }
            });
        });
    },
});
exports.default = exports.PriceListRepository;
//# sourceMappingURL=price-list.js.map