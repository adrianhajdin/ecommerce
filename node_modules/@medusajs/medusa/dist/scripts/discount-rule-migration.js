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
var dotenv_1 = __importDefault(require("dotenv"));
var typeorm_1 = require("typeorm");
var logger_1 = __importDefault(require("../loaders/logger"));
var discount_condition_1 = require("../models/discount-condition");
var discount_condition_product_1 = require("../models/discount-condition-product");
var discount_rule_1 = require("../models/discount-rule");
var discount_condition_2 = require("../repositories/discount-condition");
var db_config_1 = require("./db-config");
dotenv_1.default.config();
var migrate = function (_a) {
    var typeormConfig = _a.typeormConfig;
    return __awaiter(this, void 0, void 0, function () {
        var dataSource, BATCH_SIZE, noDanglingProductsValidation;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dataSource = new typeorm_1.DataSource(typeormConfig);
                    return [4 /*yield*/, dataSource.initialize()];
                case 1:
                    _b.sent();
                    BATCH_SIZE = 1000;
                    return [4 /*yield*/, dataSource.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRuleCount, offset, _loop_1, discountRuleProductCount, getConditionProductsResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, manager
                                            .createQueryBuilder()
                                            .from(discount_rule_1.DiscountRule, "dr")
                                            .getCount()];
                                    case 1:
                                        discountRuleCount = _a.sent();
                                        offset = 0;
                                        _loop_1 = function () {
                                            var discountRules, discountConditionRepo;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, manager
                                                            .createQueryBuilder()
                                                            .from(discount_rule_1.DiscountRule, "dr")
                                                            .select("dr.id")
                                                            .innerJoin("discount_rule_products", "drp", "dr.id = drp.discount_rule_id")
                                                            .distinct(true)
                                                            .limit(BATCH_SIZE)
                                                            .offset(offset)
                                                            .getRawMany()];
                                                    case 1:
                                                        discountRules = _b.sent();
                                                        discountConditionRepo = manager.withRepository(discount_condition_2.DiscountConditionRepository);
                                                        return [4 /*yield*/, manager
                                                                .createQueryBuilder()
                                                                .insert()
                                                                .into(discount_condition_1.DiscountCondition)
                                                                .values(discountRules.map(function (dr) {
                                                                return discountConditionRepo.create({
                                                                    type: discount_condition_1.DiscountConditionType.PRODUCTS,
                                                                    operator: discount_condition_1.DiscountConditionOperator.IN,
                                                                    discount_rule_id: dr.dr_id,
                                                                });
                                                            }))
                                                                .orIgnore()
                                                                .execute()];
                                                    case 2:
                                                        _b.sent();
                                                        offset += BATCH_SIZE;
                                                        return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _a.label = 2;
                                    case 2:
                                        if (!(offset < discountRuleCount)) return [3 /*break*/, 4];
                                        return [5 /*yield**/, _loop_1()];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 2];
                                    case 4: return [4 /*yield*/, manager.query("SELECT COUNT(*) FROM discount_rule_products")];
                                    case 5:
                                        discountRuleProductCount = _a.sent();
                                        offset = 0;
                                        _a.label = 6;
                                    case 6:
                                        if (!(offset < parseInt(discountRuleProductCount[0].count))) return [3 /*break*/, 9];
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .from(discount_rule_1.DiscountRule, "dr")
                                                .innerJoin("discount_rule_products", "drp", "dr.id = drp.discount_rule_id")
                                                .innerJoin("discount_condition", "dc", "dr.id = dc.discount_rule_id")
                                                .select("dc.id as cond_id, drp.product_id")
                                                .limit(BATCH_SIZE)
                                                .offset(offset)
                                                .getRawMany()];
                                    case 7:
                                        getConditionProductsResult = _a.sent();
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .insert()
                                                .into(discount_condition_product_1.DiscountConditionProduct)
                                                .values(getConditionProductsResult.map(function (dr) { return ({
                                                condition_id: dr.cond_id,
                                                product_id: dr.product_id,
                                            }); }))
                                                .orIgnore()
                                                .execute()];
                                    case 8:
                                        _a.sent();
                                        offset += BATCH_SIZE;
                                        return [3 /*break*/, 6];
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); })
                        // Validate results
                    ];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, dataSource.manager
                            .query("SELECT drp.discount_rule_id, drp.product_id, dcp.product_id\n            FROM \"discount_rule_products\" drp\n                     LEFT JOIN discount_condition dc ON dc.discount_rule_id = drp.discount_rule_id\n                     LEFT JOIN discount_condition_product dcp\n                               ON dcp.condition_id = dc.id AND dcp.product_id = drp.product_id\n            WHERE dcp.product_id IS NULL")];
                case 3:
                    noDanglingProductsValidation = _b.sent();
                    if (noDanglingProductsValidation &&
                        (noDanglingProductsValidation === null || noDanglingProductsValidation === void 0 ? void 0 : noDanglingProductsValidation.length) === 0) {
                        logger_1.default.info("Discount entities have been successfully migrated");
                        process.exit();
                    }
                    else {
                        logger_1.default.error("Discount entities could not be migrated");
                        process.exit(1);
                    }
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
//# sourceMappingURL=discount-rule-migration.js.map