"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
var TaxRateService = /** @class */ (function (_super) {
    __extends(TaxRateService, _super);
    function TaxRateService(_a) {
        var productService = _a.productService, productTypeService = _a.productTypeService, shippingOptionService = _a.shippingOptionService, taxRateRepository = _a.taxRateRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.taxRateRepository_ = taxRateRepository;
        _this.productService_ = productService;
        _this.productTypeService_ = productTypeService;
        _this.shippingOptionService_ = shippingOptionService;
        return _this;
    }
    TaxRateService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var taxRateRepo, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taxRateRepo = this.activeManager_.withRepository(this.taxRateRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (q) {
                            query.where["name"] = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        return [4 /*yield*/, taxRateRepo.findWithResolution(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var taxRateRepo, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taxRateRepo = this.activeManager_.withRepository(this.taxRateRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (q) {
                            query.where["name"] = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        return [4 /*yield*/, taxRateRepo.findAndCountWithResolution(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.retrieve = function (taxRateId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var taxRateRepo, query, taxRate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(taxRateId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"taxRateId\" must be defined");
                        }
                        taxRateRepo = this.activeManager_.withRepository(this.taxRateRepository_);
                        query = (0, utils_2.buildQuery)({ id: taxRateId }, config);
                        return [4 /*yield*/, taxRateRepo.findOneWithResolution(query)];
                    case 1:
                        taxRate = _a.sent();
                        if (!taxRate) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "TaxRate with ".concat(taxRateId, " was not found"));
                        }
                        return [2 /*return*/, taxRate];
                }
            });
        });
    };
    TaxRateService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, taxRate;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        if (typeof data.region_id === "undefined") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "TaxRates must belong to a Region");
                                        }
                                        taxRate = taxRateRepo.create(data);
                                        return [4 /*yield*/, taxRateRepo.save(taxRate)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, taxRate, _a, _b, _c, k, v;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        return [4 /*yield*/, this.retrieve(id)];
                                    case 1:
                                        taxRate = _e.sent();
                                        try {
                                            for (_a = __values(Object.entries(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), k = _c[0], v = _c[1];
                                                if ((0, medusa_core_utils_1.isDefined)(v)) {
                                                    taxRate[k] = v;
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, taxRateRepo.save(taxRate)];
                                    case 2: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, query;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        query = (0, utils_2.buildQuery)({ id: id });
                                        if (!Array.isArray(id)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, taxRateRepo.delete({ id: (0, typeorm_1.In)(id) })];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, taxRateRepo.delete({ id: id })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.removeFromProduct = function (id, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, ids;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        if (typeof productIds === "string") {
                                            ids = [productIds];
                                        }
                                        else {
                                            ids = productIds;
                                        }
                                        return [4 /*yield*/, taxRateRepo.removeFromProduct(id, ids)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.removeFromProductType = function (id, typeIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, ids;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        if (typeof typeIds === "string") {
                                            ids = [typeIds];
                                        }
                                        else {
                                            ids = typeIds;
                                        }
                                        return [4 /*yield*/, taxRateRepo.removeFromProductType(id, ids)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.removeFromShippingOption = function (id, optionIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxRateRepo, ids;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                        if (typeof optionIds === "string") {
                                            ids = [optionIds];
                                        }
                                        else {
                                            ids = optionIds;
                                        }
                                        return [4 /*yield*/, taxRateRepo.removeFromShippingOption(id, ids)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.addToProduct = function (id, productIds, replace) {
        if (replace === void 0) { replace = false; }
        return __awaiter(this, void 0, void 0, function () {
            var ids, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof productIds === "string") {
                            ids = [productIds];
                        }
                        else {
                            ids = productIds;
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var taxRateRepo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                            return [4 /*yield*/, taxRateRepo.addToProduct(id, ids, replace)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, 
                            // eslint-disable-next-line
                            function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(err.code === utils_2.PostgresError.FOREIGN_KEY_ERROR)) return [3 /*break*/, 2];
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([
                                                    this.retrieve(id, { select: ["id"] })
                                                ], __read(ids.map(function (pId) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                    return [2 /*return*/, this.productService_.retrieve(pId, { select: ["id"] })];
                                                }); }); })), false))];
                                        case 1:
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TaxRateService.prototype.addToProductType = function (id, productTypeIds, replace) {
        if (replace === void 0) { replace = false; }
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof productTypeIds === "string") {
                            ids = [productTypeIds];
                        }
                        else {
                            ids = productTypeIds;
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var taxRateRepo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                            return [4 /*yield*/, taxRateRepo.addToProductType(id, ids, replace)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, 
                            // eslint-disable-next-line
                            function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(err.code === utils_2.PostgresError.FOREIGN_KEY_ERROR)) return [3 /*break*/, 2];
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([
                                                    this.retrieve(id, {
                                                        select: ["id"],
                                                    })
                                                ], __read(ids.map(function (pId) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        return [2 /*return*/, this.productTypeService_.retrieve(pId, {
                                                                select: ["id"],
                                                            })];
                                                    });
                                                }); })), false))];
                                        case 1:
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.addToShippingOption = function (id, optionIds, replace) {
        if (replace === void 0) { replace = false; }
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof optionIds === "string") {
                            ids = [optionIds];
                        }
                        else {
                            ids = optionIds;
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var taxRateRepo, taxRate, options, options_1, options_1_1, o;
                                var e_2, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            taxRateRepo = manager.withRepository(this.taxRateRepository_);
                                            return [4 /*yield*/, this.retrieve(id, { select: ["id", "region_id"] })];
                                        case 1:
                                            taxRate = _b.sent();
                                            return [4 /*yield*/, this.shippingOptionService_.list({ id: ids }, { select: ["id", "region_id"] })];
                                        case 2:
                                            options = _b.sent();
                                            try {
                                                for (options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                                                    o = options_1_1.value;
                                                    if (o.region_id !== taxRate.region_id) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Shipping Option and Tax Rate must belong to the same Region to be associated. Shipping Option with id: ".concat(o.id, " belongs to Region with id: ").concat(o.region_id, " and Tax Rate with id: ").concat(taxRate.id, " belongs to Region with id: ").concat(taxRate.region_id));
                                                    }
                                                }
                                            }
                                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                            finally {
                                                try {
                                                    if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
                                                }
                                                finally { if (e_2) throw e_2.error; }
                                            }
                                            return [4 /*yield*/, taxRateRepo.addToShippingOption(id, ids, replace)];
                                        case 3: return [2 /*return*/, _b.sent()];
                                    }
                                });
                            }); }, 
                            // eslint-disable-next-line
                            function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(err.code === utils_2.PostgresError.FOREIGN_KEY_ERROR)) return [3 /*break*/, 2];
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([
                                                    this.retrieve(id, { select: ["id"] })
                                                ], __read(ids.map(function (sId) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                    return [2 /*return*/, this.shippingOptionService_.retrieve(sId, { select: ["id"] })];
                                                }); }); })), false))];
                                        case 1:
                                            // A foreign key constraint failed meaning some thing doesn't exist
                                            // either it is a product or the tax rate itself. Using promiseAll
                                            // will try to retrieve all of the resources and will fail when
                                            // something is not found.
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.listByProduct = function (productId, config) {
        return __awaiter(this, void 0, void 0, function () {
            var taxRateRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taxRateRepo = this.activeManager_.withRepository(this.taxRateRepository_);
                        return [4 /*yield*/, taxRateRepo.listByProduct(productId, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxRateService.prototype.listByShippingOption = function (shippingOptionId) {
        return __awaiter(this, void 0, void 0, function () {
            var taxRateRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taxRateRepo = this.activeManager_.withRepository(this.taxRateRepository_);
                        return [4 /*yield*/, taxRateRepo.listByShippingOption(shippingOptionId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TaxRateService;
}(interfaces_1.TransactionBaseService));
exports.default = TaxRateService;
//# sourceMappingURL=tax-rate.js.map