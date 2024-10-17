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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateProductVariantPricing = void 0;
var utils_1 = require("@medusajs/utils");
var dotenv_1 = __importDefault(require("dotenv"));
var logger_1 = __importDefault(require("../../loaders/logger"));
dotenv_1.default.config();
var BATCH_SIZE = 100;
var migrateProductVariantPricing = function (container) {
    return __awaiter(this, void 0, void 0, function () {
        var variantService, pricingService, link, _a, _, totalCount, processedCount, _loop_1;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, container.resolve("productVariantService")];
                case 1:
                    variantService = _b.sent();
                    pricingService = container.resolve("pricingModuleService");
                    return [4 /*yield*/, container.resolve("remoteLink")];
                case 2:
                    link = _b.sent();
                    if (!link) {
                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't migrate money_amounts: Pricing module is not configured correctly");
                    }
                    return [4 /*yield*/, variantService.listAndCount({}, { take: BATCH_SIZE, order: { id: "ASC" }, relations: ["prices"] })];
                case 3:
                    _a = __read.apply(void 0, [_b.sent(), 2]), _ = _a[0], totalCount = _a[1];
                    processedCount = 0;
                    _loop_1 = function () {
                        var _c, variants, links;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, variantService.listAndCount({}, {
                                        skip: processedCount,
                                        take: BATCH_SIZE,
                                        order: { id: "ASC" },
                                        relations: ["prices"],
                                    })];
                                case 1:
                                    _c = __read.apply(void 0, [_d.sent(), 1]), variants = _c[0];
                                    links = [];
                                    return [4 /*yield*/, (0, utils_1.promiseAll)(variants.map(function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                            var priceSet;
                                            var _a, _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0: return [4 /*yield*/, pricingService.create({
                                                            rules: [{ rule_attribute: "region_id" }],
                                                            prices: (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.prices) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
                                                                var price_list_id = _a.price_list_id;
                                                                return !price_list_id;
                                                            }).map(function (price) { return ({
                                                                rules: __assign({}, (price.region_id ? { region_id: price.region_id } : {})),
                                                                currency_code: price.currency_code,
                                                                min_quantity: price.min_quantity,
                                                                max_quantity: price.max_quantity,
                                                                amount: price.amount,
                                                            }); })) !== null && _b !== void 0 ? _b : [],
                                                        })];
                                                    case 1:
                                                        priceSet = _c.sent();
                                                        links.push({
                                                            productService: {
                                                                variant_id: variant.id,
                                                            },
                                                            pricingService: {
                                                                price_set_id: priceSet.id,
                                                            },
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }))];
                                case 2:
                                    _d.sent();
                                    return [4 /*yield*/, link.create(links)];
                                case 3:
                                    _d.sent();
                                    processedCount += variants.length;
                                    logger_1.default.log("Processed ".concat(processedCount, " of ").concat(totalCount));
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 4;
                case 4:
                    if (!(processedCount < totalCount)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.migrateProductVariantPricing = migrateProductVariantPricing;
//# sourceMappingURL=migrate-money-amounts-to-pricing-module.js.map