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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
var utils_1 = require("@medusajs/utils");
exports.ProductTypeRepository = database_1.dataSource
    .getRepository(models_1.ProductType)
    .extend({
    upsertType: function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, created, queryBuilder, rawTypes_1, rawTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.findOne({
                                where: { value: type.value },
                            })];
                    case 1:
                        existing = _a.sent();
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        created = this.create({
                            value: type.value,
                        });
                        queryBuilder = this.createQueryBuilder()
                            .insert()
                            .into(models_1.ProductType)
                            .values(created);
                        if (!!queryBuilder.connection.driver.isReturningSqlSupported("insert")) return [3 /*break*/, 3];
                        return [4 /*yield*/, queryBuilder.execute()];
                    case 2:
                        rawTypes_1 = _a.sent();
                        return [2 /*return*/, this.create(rawTypes_1.generatedMaps[0])];
                    case 3: return [4 /*yield*/, queryBuilder.returning("*").execute()];
                    case 4:
                        rawTypes = _a.sent();
                        return [2 /*return*/, this.create(rawTypes.generatedMaps[0])];
                }
            });
        });
    },
    findAndCountByDiscountConditionId: function (conditionId, query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("pt")
                            .where(query.where)
                            .setFindOptions(query)
                            .innerJoin("discount_condition_product_type", "dc_pt", "dc_pt.product_type_id = pt.id AND dc_pt.condition_id = :dcId", { dcId: conditionId });
                        return [4 /*yield*/, (0, utils_1.promiseAll)([qb.getMany(), qb.getCount()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
});
exports.default = exports.ProductTypeRepository;
//# sourceMappingURL=product-type.js.map