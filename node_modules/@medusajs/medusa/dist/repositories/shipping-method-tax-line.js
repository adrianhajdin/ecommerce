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
exports.ShippingMethodTaxLineRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ShippingMethodTaxLineRepository = database_1.dataSource
    .getRepository(models_1.ShippingMethodTaxLine)
    .extend({
    upsertLines: function (lines) {
        return __awaiter(this, void 0, void 0, function () {
            var insertResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .insert()
                            .values(lines)
                            .orUpdate({
                            conflict_target: ["shipping_method_id", "code"],
                            overwrite: ["rate", "name", "updated_at"],
                        })
                            .execute()];
                    case 1:
                        insertResult = _a.sent();
                        return [2 /*return*/, insertResult.identifiers];
                }
            });
        });
    },
    deleteForCart: function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, toDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("line")
                            .select(["line.id"])
                            .innerJoin("shipping_method", "sm", "sm.id = line.shipping_method_id")
                            .innerJoin("cart", "c", "sm.cart_id = :cartId AND c.completed_at is NULL", { cartId: cartId });
                        return [4 /*yield*/, qb.getMany()];
                    case 1:
                        toDelete = _a.sent();
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .whereInIds(toDelete.map(function (d) { return d.id; }))
                                .execute()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
});
exports.default = exports.ShippingMethodTaxLineRepository;
//# sourceMappingURL=shipping-method-tax-line.js.map