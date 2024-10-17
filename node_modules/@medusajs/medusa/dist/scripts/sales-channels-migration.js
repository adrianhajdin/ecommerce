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
var product_1 = require("../models/product");
var store_1 = require("../models/store");
var db_config_1 = require("./db-config");
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
                            var store, shouldContinue, products, danglingProductCount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, manager
                                            .createQueryBuilder()
                                            .from(store_1.Store, "store")
                                            .select("store.default_sales_channel_id")
                                            .getRawOne()];
                                    case 1:
                                        store = _a.sent();
                                        if (!(store === null || store === void 0 ? void 0 : store.default_sales_channel_id)) {
                                            logger_1.default.error("The default sales channel does not exists yet. Run your project and then re run the migration.");
                                            process.exit(1);
                                        }
                                        shouldContinue = true;
                                        _a.label = 2;
                                    case 2:
                                        if (!shouldContinue) return [3 /*break*/, 7];
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .from(product_1.Product, "product")
                                                .leftJoin("product_sales_channel", "product_sc", "product_sc.product_id = product.id")
                                                .andWhere("product_sc.product_id IS NULL")
                                                .select("product.id as id")
                                                .distinct(true)
                                                .limit(BATCH_SIZE)
                                                .getRawMany()];
                                    case 3:
                                        products = _a.sent();
                                        if (!(products.length > 0)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .insert()
                                                .into("product_sales_channel")
                                                .values(products.map(function (product) { return ({
                                                product_id: product.id,
                                                sales_channel_id: store.default_sales_channel_id,
                                            }); }))
                                                .orIgnore()
                                                .execute()];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [4 /*yield*/, manager
                                            .createQueryBuilder()
                                            .from(product_1.Product, "product")
                                            .leftJoin("product_sales_channel", "product_sc", "product_sc.product_id = product.id")
                                            .andWhere("product_sc.product_id IS NULL")
                                            .getCount()];
                                    case 6:
                                        danglingProductCount = _a.sent();
                                        shouldContinue = !!danglingProductCount;
                                        return [3 /*break*/, 2];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _b.sent();
                    logger_1.default.info("Product entities have been successfully migrated");
                    process.exit();
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
//# sourceMappingURL=sales-channels-migration.js.map