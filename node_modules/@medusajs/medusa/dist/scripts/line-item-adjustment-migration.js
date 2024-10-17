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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var typeorm_1 = require("typeorm");
var line_item_1 = require("../models/line-item");
var line_item_adjustment_1 = require("../models/line-item-adjustment");
var db_config_1 = require("./db-config");
var logger_1 = __importDefault(require("../loaders/logger"));
dotenv_1.default.config();
var migrate = function (_a) {
    var typeormConfig = _a.typeormConfig;
    return __awaiter(this, void 0, void 0, function () {
        var connection, BATCH_SIZE;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.createConnection)(typeormConfig)];
                case 1:
                    connection = _b.sent();
                    BATCH_SIZE = 1000;
                    return [4 /*yield*/, connection.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var getDiscountableLineItems, getLineItemAllocations, totalAdjustments, offset, lineItemAdjustments;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        getDiscountableLineItems = function (qb) {
                                            return qb
                                                .from(line_item_1.LineItem, "li")
                                                .select([
                                                "li.order_id as order_id",
                                                "SUM(li.quantity * li.unit_price)::bigint AS discountable_subtotal",
                                            ])
                                                .where("li.allow_discounts = true")
                                                .groupBy("li.order_id");
                                        };
                                        getLineItemAllocations = function (qb) {
                                            return qb
                                                .from(line_item_1.LineItem, "li")
                                                .select([
                                                "disc.id AS discount_id",
                                                "dr.allocation",
                                                "dr.type",
                                                "dr.value",
                                                "li.*",
                                                "li.order_id",
                                                "ods.discountable_subtotal",
                                                "li.quantity * li.unit_price AS li_subtotal",
                                                "COALESCE(ROUND(CASE\n            WHEN dr.type = 'percentage' THEN li.quantity*li.unit_price * (dr.value::float / 100)\n             WHEN dr.type = 'fixed' THEN li.quantity*li.unit_price * (LEAST(COALESCE(dr.value, 0), ods.discountable_subtotal)::float / ods.discountable_subtotal)\n            ELSE 0\n          END), 0) AS discount_total",
                                            ])
                                                .leftJoin("order", "o", "o.id = li.order_id")
                                                .leftJoin("order_discounts", "od", "o.id = od.order_id")
                                                .leftJoin("discount", "disc", "od.discount_id = disc.id")
                                                .leftJoin("discount_rule", "dr", "dr.id = disc.rule_id")
                                                .leftJoinAndSelect(getDiscountableLineItems, "ods", "ods.order_id = li.order_id")
                                                .where("dr.type != :type", { type: "free_shipping" });
                                        };
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .from(getLineItemAllocations, "lia")
                                                .select("COUNT(*)")
                                                .getRawOne()
                                                .then(function (result) { return parseInt(result.count, 10); })];
                                    case 1:
                                        totalAdjustments = _a.sent();
                                        offset = 0;
                                        _a.label = 2;
                                    case 2:
                                        if (!(offset < totalAdjustments)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .from(getLineItemAllocations, "lia")
                                                .select([
                                                "lia.id AS item_id",
                                                "lia.discount_id",
                                                "lia.discount_total AS amount",
                                                "'discount' AS description",
                                            ])
                                                .limit(BATCH_SIZE)
                                                .offset(offset)
                                                .getRawMany()];
                                    case 3:
                                        lineItemAdjustments = _a.sent();
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .insert()
                                                .into(line_item_adjustment_1.LineItemAdjustment)
                                                .values(lineItemAdjustments.map(function (lia) {
                                                return Object.assign(new line_item_adjustment_1.LineItemAdjustment(), __assign({}, lia));
                                            }))
                                                .orIgnore()
                                                .execute()];
                                    case 4:
                                        _a.sent();
                                        offset += BATCH_SIZE;
                                        return [3 /*break*/, 2];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
migrate({ typeormConfig: db_config_1.typeormConfig })
    .then(function () {
    logger_1.default.info("Database migration completed successfully");
    process.exit();
})
    .catch(function (err) { return logger_1.default.log(err); });
exports.default = migrate;
//# sourceMappingURL=line-item-adjustment-migration.js.map