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
var gift_card_1 = require("../models/gift-card");
var db_config_1 = require("./db-config");
dotenv_1.default.config();
var BATCH_SIZE = 1000;
var migrationName = 'gift-card-tax-rate-migration';
logger_1.default.info("typeormConfig: ".concat(JSON.stringify(db_config_1.typeormConfig)));
var migrate = function (_a) {
    var typeormConfig = _a.typeormConfig;
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.createConnection)(typeormConfig)];
                case 1:
                    connection = _b.sent();
                    return [4 /*yield*/, connection.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var offset, giftCardsCount, totalBatches, batch, giftCardRegionRecords, recordsFailedToBackfill;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        offset = 0;
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .withDeleted()
                                                .from(gift_card_1.GiftCard, "gc")
                                                .select("gc.id")
                                                .where("gc.tax_rate IS NULL")
                                                .getCount()];
                                    case 1:
                                        giftCardsCount = _a.sent();
                                        totalBatches = Math.ceil(giftCardsCount / BATCH_SIZE);
                                        if (totalBatches == 0) {
                                            logger_1.default.info("".concat(migrationName, ": No records to update, skipping migration!"));
                                            return [2 /*return*/];
                                        }
                                        logger_1.default.info("".concat(migrationName, ": Running migration for ").concat(giftCardsCount, " GiftCards"));
                                        logger_1.default.info("".concat(migrationName, ": Running migration in ").concat(totalBatches, " batch(es) of ").concat(BATCH_SIZE));
                                        batch = 1;
                                        _a.label = 2;
                                    case 2:
                                        if (!(batch <= totalBatches)) return [3 /*break*/, 5];
                                        logger_1.default.info("".concat(migrationName, ": Starting batch ").concat(batch, " of ").concat(totalBatches));
                                        return [4 /*yield*/, manager
                                                .createQueryBuilder()
                                                .withDeleted()
                                                .from(gift_card_1.GiftCard, "gc")
                                                .select("gc.id, gc.region_id, gc.tax_rate, r.tax_rate as region_tax_rate")
                                                .innerJoin("region", "r", "gc.region_id = r.id")
                                                .where("gc.tax_rate IS NULL")
                                                .limit(BATCH_SIZE)
                                                .offset(offset)
                                                .getRawMany()
                                            // Loop through each gift card record and update the value of gift_card.tax_rate
                                            // with region.tax_rate value
                                        ];
                                    case 3:
                                        giftCardRegionRecords = _a.sent();
                                        // Loop through each gift card record and update the value of gift_card.tax_rate
                                        // with region.tax_rate value
                                        giftCardRegionRecords.forEach(function (gcr) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, manager
                                                            .createQueryBuilder()
                                                            .update(gift_card_1.GiftCard)
                                                            .set({ tax_rate: gcr.region_tax_rate })
                                                            .where("id = :id", { id: gcr.id })
                                                            .execute()];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        offset += BATCH_SIZE;
                                        logger_1.default.info("".concat(migrationName, ": Finished batch ").concat(batch, " of ").concat(totalBatches));
                                        _a.label = 4;
                                    case 4:
                                        batch++;
                                        return [3 /*break*/, 2];
                                    case 5: return [4 /*yield*/, manager
                                            .createQueryBuilder()
                                            .withDeleted()
                                            .from(gift_card_1.GiftCard, "gc")
                                            .select("gc.id")
                                            .where("gc.tax_rate IS NULL")
                                            .getCount()];
                                    case 6:
                                        recordsFailedToBackfill = _a.sent();
                                        if (recordsFailedToBackfill == 0) {
                                            logger_1.default.info("".concat(migrationName, ": successfully ran for ").concat(giftCardsCount, " GiftCards"));
                                        }
                                        else {
                                            logger_1.default.info("".concat(migrationName, ": ").concat(recordsFailedToBackfill, " GiftCards have no tax_rate set"));
                                            logger_1.default.info("".concat(migrationName, ": 1. Check if all GiftCards have a region associated with it"));
                                            logger_1.default.info("".concat(migrationName, ": If not, they need to be associated with a region & re-run migration"));
                                            logger_1.default.info("".concat(migrationName, ": 2. Check if regions have a tax_rate added to it"));
                                            logger_1.default.info("".concat(migrationName, ": If regions intentionally have no tax_rate, this can be ignored"));
                                            logger_1.default.info("".concat(migrationName, ": If not, add a tax_rate to region & re-run migration"));
                                        }
                                        return [2 /*return*/];
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
    logger_1.default.info("Database migration completed");
    process.exit();
}).catch(function (err) {
    logger_1.default.error("Database migration failed - ".concat(JSON.stringify(err)));
    process.exit(1);
});
exports.default = migrate;
//# sourceMappingURL=gift-card-tax-rate-migration.js.map