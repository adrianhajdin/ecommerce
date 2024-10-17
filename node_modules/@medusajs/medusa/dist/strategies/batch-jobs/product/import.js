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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable valid-jsdoc */
var core_flows_1 = require("@medusajs/core-flows");
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../../../interfaces");
var product_categories_1 = __importDefault(require("../../../loaders/feature-flags/product-categories"));
var sales_channels_1 = __importDefault(require("../../../loaders/feature-flags/sales-channels"));
var csv_parser_1 = __importDefault(require("../../../services/csv-parser"));
var types_1 = require("./types");
var columns_definition_1 = require("./types/columns-definition");
var utils_2 = require("./utils");
/**
 * Process this many variant rows before reporting progress.
 */
var BATCH_SIZE = 100;
/**
 * Default strategy class used for a batch import of products/variants.
 */
var ProductImportStrategy = /** @class */ (function (_super) {
    __extends(ProductImportStrategy, _super);
    function ProductImportStrategy(_a) {
        var batchJobService = _a.batchJobService, productService = _a.productService, salesChannelService = _a.salesChannelService, productVariantService = _a.productVariantService, shippingProfileService = _a.shippingProfileService, regionService = _a.regionService, fileService = _a.fileService, productCollectionService = _a.productCollectionService, productCategoryService = _a.productCategoryService, manager = _a.manager, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.processedCounter = {};
        var isSalesChannelsFeatureOn = featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key);
        var isProductCategoriesFeatureOn = featureFlagRouter.isFeatureEnabled(product_categories_1.default.key);
        _this.csvParser_ = new csv_parser_1.default({
            columns: __spreadArray(__spreadArray(__spreadArray([], __read(columns_definition_1.productImportColumnsDefinition.columns), false), __read((isSalesChannelsFeatureOn
                ? columns_definition_1.productImportSalesChannelsColumnsDefinition.columns
                : [])), false), __read((isProductCategoriesFeatureOn
                ? columns_definition_1.productImportProductCategoriesColumnsDefinition.columns
                : [])), false),
        });
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.manager_ = manager;
        _this.fileService_ = fileService;
        _this.batchJobService_ = batchJobService;
        _this.productService_ = productService;
        _this.salesChannelService_ = salesChannelService;
        _this.productVariantService_ = productVariantService;
        _this.shippingProfileService_ = shippingProfileService;
        _this.regionService_ = regionService;
        _this.productCollectionService_ = productCollectionService;
        _this.productCategoryService_ = productCategoryService;
        return _this;
    }
    ProductImportStrategy.prototype.buildTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Not implemented!");
            });
        });
    };
    /**
     * Create a description of a row on which the error occurred and throw a Medusa error.
     *
     * @param row - Parsed CSV row data
     * @param errorDescription - Concrete error
     */
    ProductImportStrategy.throwDescriptiveError = function (row, errorDescription) {
        var message = "Error while processing row with\n      [(product id: ".concat(row["product.id"], "),\n      (product handle: ").concat(row["product.handle"], "),\n      (variant id: ").concat(row["variant.id"], "),\n      (variant sku: ").concat(row["variant.sku"], ")]: \n      ").concat(errorDescription);
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, message);
    };
    /**
     * Generate instructions for update/create of products/variants from parsed CSV rows.
     *
     * @param csvData - An array of parsed CSV rows.
     */
    ProductImportStrategy.prototype.getImportInstructions = function (csvData) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, shippingProfile, seenProducts, productsCreate, productsUpdate, variantsCreate, variantsUpdate, csvData_1, csvData_1_1, row, e_1_1;
            var e_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.shippingProfileService_
                                .withTransaction(transactionManager)
                                .retrieveDefault()];
                    case 1:
                        shippingProfile = _e.sent();
                        seenProducts = {};
                        productsCreate = [];
                        productsUpdate = [];
                        variantsCreate = [];
                        variantsUpdate = [];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 8, 9, 10]);
                        csvData_1 = __values(csvData), csvData_1_1 = csvData_1.next();
                        _e.label = 3;
                    case 3:
                        if (!!csvData_1_1.done) return [3 /*break*/, 7];
                        row = csvData_1_1.value;
                        if (!((_b = row["variant.prices"]) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.prepareVariantPrices(row)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        if (row["variant.id"]) {
                            variantsUpdate.push(row);
                        }
                        else {
                            variantsCreate.push(row);
                        }
                        // save only first occurrence
                        if (!seenProducts[row["product.handle"]]) {
                            row["product.profile_id"] = shippingProfile.id;
                            if (row["product.id"]) {
                                productsUpdate.push(row);
                            }
                            else {
                                productsCreate.push(row);
                            }
                            seenProducts[row["product.handle"]] = true;
                        }
                        _e.label = 6;
                    case 6:
                        csvData_1_1 = csvData_1.next();
                        return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (csvData_1_1 && !csvData_1_1.done && (_c = csvData_1.return)) _c.call(csvData_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, (_d = {},
                            _d[types_1.OperationType.ProductCreate] = productsCreate,
                            _d[types_1.OperationType.VariantCreate] = variantsCreate,
                            _d[types_1.OperationType.ProductUpdate] = productsUpdate,
                            _d[types_1.OperationType.VariantUpdate] = variantsUpdate,
                            _d)];
                }
            });
        });
    };
    /**
     * Prepare prices records for insert - find and append region ids to records that contain a region name.
     *
     * @param row - An object containing parsed row data.
     */
    ProductImportStrategy.prototype.prepareVariantPrices = function (row) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, prices, _b, _c, price, record, region, e_2, e_3_1;
            var e_3, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        prices = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 11, 12, 13]);
                        _b = __values(row["variant.prices"]), _c = _b.next();
                        _e.label = 2;
                    case 2:
                        if (!!_c.done) return [3 /*break*/, 10];
                        price = _c.value;
                        record = {
                            amount: price.amount,
                        };
                        if (!price.regionName) return [3 /*break*/, 7];
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(transactionManager)
                                .retrieveByName(price.regionName)];
                    case 4:
                        region = _e.sent();
                        record.region_id = region.id;
                        record.currency_code = region.currency_code;
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _e.sent();
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Trying to set a price for a region ".concat(price.regionName, " that doesn't exist"));
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        record.currency_code = price.currency_code;
                        _e.label = 8;
                    case 8:
                        record.amount = (0, medusa_core_utils_1.computerizeAmount)(Number(record.amount), record.currency_code);
                        prices.push(record);
                        _e.label = 9;
                    case 9:
                        _c = _b.next();
                        return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        row["variant.prices"] = prices;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * A worker method called after a batch job has been created.
     * The method parses a CSV file, generates sets of instructions
     * for processing and stores these instructions to a JSON file
     * which is uploaded to a bucket.
     *
     * @param batchJobId - An id of a job that is being preprocessed.
     */
    ProductImportStrategy.prototype.preProcessBatchJob = function (batchJobId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, batchJob, csvFileKey, csvStream, builtData, parsedData, e_4, ops, totalOperationCount, operationsCounts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction(transactionManager)
                                .retrieve(batchJobId)];
                    case 1:
                        batchJob = _b.sent();
                        csvFileKey = batchJob.context.fileKey;
                        return [4 /*yield*/, this.fileService_.getDownloadStream({
                                fileKey: csvFileKey,
                            })];
                    case 2:
                        csvStream = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.csvParser_.parse(csvStream)];
                    case 4:
                        parsedData = _b.sent();
                        return [4 /*yield*/, this.csvParser_.buildData(parsedData)];
                    case 5:
                        builtData = _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_4 = _b.sent();
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The csv file parsing failed due to: " + e_4.message);
                    case 7: return [4 /*yield*/, this.getImportInstructions(builtData)];
                    case 8:
                        ops = _b.sent();
                        return [4 /*yield*/, this.uploadImportOpsFile(batchJobId, ops)];
                    case 9:
                        _b.sent();
                        totalOperationCount = 0;
                        operationsCounts = {};
                        Object.keys(ops).forEach(function (key) {
                            operationsCounts[key] = ops[key].length;
                            totalOperationCount += ops[key].length;
                        });
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction(transactionManager)
                                .update(batchJobId, {
                                result: {
                                    advancement_count: 0,
                                    // number of update/create operations to execute
                                    count: totalOperationCount,
                                    operations: operationsCounts,
                                    stat_descriptors: [
                                        {
                                            key: "product-import-count",
                                            name: "Products/variants to import",
                                            message: "There will be ".concat(ops[types_1.OperationType.ProductCreate].length, " products created (").concat(ops[types_1.OperationType.ProductUpdate].length, "  updated).\n             ").concat(ops[types_1.OperationType.VariantCreate].length, " variants will be created and ").concat(ops[types_1.OperationType.VariantUpdate].length, " updated"),
                                        },
                                    ],
                                },
                            })];
                    case 10:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The main processing method called after a batch job
     * is ready/confirmed for processing.
     *
     * @param batchJobId - An id of a batch job that is being processed.
     */
    ProductImportStrategy.prototype.processJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(manager)
                                            .retrieve(batchJobId)];
                                    case 1:
                                        batchJob = (_a.sent());
                                        return [4 /*yield*/, this.createProducts(batchJob)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.updateProducts(batchJob)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.createVariants(batchJob)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.updateVariants(batchJob)];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, this.finalize(batchJob)];
                                    case 6:
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
    /**
     * Create, or retrieve by name, sales channels from the input data.
     *
     * NOTE: Sales channel names provided in the CSV must exist in the DB.
     *       New sales channels will not be created.
     *
     * @param data an array of sales channels partials
     * @return an array of sales channels created or retrieved by name
     */
    ProductImportStrategy.prototype.processSalesChannels = function (data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, salesChannelServiceTx, salesChannels, data_1, data_1_1, input, channel, e_5, e_6, e_7_1;
            var e_7, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        salesChannelServiceTx = this.salesChannelService_.withTransaction(transactionManager);
                        salesChannels = [];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 13, 14, 15]);
                        data_1 = __values(data), data_1_1 = data_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!data_1_1.done) return [3 /*break*/, 12];
                        input = data_1_1.value;
                        channel = null;
                        if (!input.id) return [3 /*break*/, 6];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, salesChannelServiceTx.retrieve(input.id, {
                                select: ["id"],
                            })];
                    case 4:
                        channel = _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_5 = _c.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        if (!!channel) return [3 /*break*/, 10];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, salesChannelServiceTx.retrieveByName(input.name, {
                                select: ["id"],
                            })];
                    case 8:
                        channel = (_c.sent());
                        return [3 /*break*/, 10];
                    case 9:
                        e_6 = _c.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        if (channel) {
                            salesChannels.push(channel);
                        }
                        _c.label = 11;
                    case 11:
                        data_1_1 = data_1.next();
                        return [3 /*break*/, 2];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_7_1 = _c.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, salesChannels];
                }
            });
        });
    };
    /**
     * Method retrieves product categories from handles provided in the CSV.
     *
     * @param data array of product category handles
     */
    ProductImportStrategy.prototype.processCategories = function (data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var retIds, transactionManager, productCategoryService, data_2, data_2_1, category, categoryPartial, e_8_1;
            var e_8, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        retIds = [];
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        productCategoryService = this.productCategoryService_.withTransaction(transactionManager);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 8]);
                        data_2 = __values(data), data_2_1 = data_2.next();
                        _c.label = 2;
                    case 2:
                        if (!!data_2_1.done) return [3 /*break*/, 5];
                        category = data_2_1.value;
                        return [4 /*yield*/, productCategoryService.retrieveByHandle(category.handle, {
                                select: ["id"],
                            })];
                    case 3:
                        categoryPartial = (_c.sent());
                        retIds.push(categoryPartial);
                        _c.label = 4;
                    case 4:
                        data_2_1 = data_2.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_8_1 = _c.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (data_2_1 && !data_2_1.done && (_b = data_2.return)) _b.call(data_2);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, retIds];
                }
            });
        });
    };
    /**
     * Method creates products using `ProductService` and parsed data from a CSV row.
     *
     * @param batchJob - The current batch job being processed.
     */
    ProductImportStrategy.prototype.createProducts = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var isMedusaV2Enabled, transactionManager, productOps, productServiceTx, productCollectionServiceTx, isSalesChannelsFeatureOn, isProductCategoriesFeatureOn, productOps_1, productOps_1_1, productOp, productData, _b, _c, _d, _e, _f, createProductWorkflow, input, e_9, e_10_1;
            var e_10, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!batchJob.result.operations[types_1.OperationType.ProductCreate]) {
                            return [2 /*return*/];
                        }
                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.downloadImportOpsFile(batchJob, types_1.OperationType.ProductCreate)];
                    case 1:
                        productOps = _h.sent();
                        productServiceTx = this.productService_.withTransaction(transactionManager);
                        productCollectionServiceTx = this.productCollectionService_.withTransaction(transactionManager);
                        isSalesChannelsFeatureOn = this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key);
                        isProductCategoriesFeatureOn = this.featureFlagRouter_.isFeatureEnabled(product_categories_1.default.key);
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 20, 21, 22]);
                        productOps_1 = __values(productOps), productOps_1_1 = productOps_1.next();
                        _h.label = 3;
                    case 3:
                        if (!!productOps_1_1.done) return [3 /*break*/, 19];
                        productOp = productOps_1_1.value;
                        productData = (0, utils_2.transformProductData)(productOp);
                        _h.label = 4;
                    case 4:
                        _h.trys.push([4, 15, , 16]);
                        if (!(isSalesChannelsFeatureOn && productOp["product.sales_channels"])) return [3 /*break*/, 6];
                        _b = productData;
                        _c = "sales_channels";
                        return [4 /*yield*/, this.processSalesChannels(productOp["product.sales_channels"])];
                    case 5:
                        _b[_c] = _h.sent();
                        _h.label = 6;
                    case 6:
                        if (!(productOp["product.collection.handle"] != null &&
                            productOp["product.collection.handle"] !== "")) return [3 /*break*/, 8];
                        _d = productData;
                        return [4 /*yield*/, productCollectionServiceTx.retrieveByHandle(productOp["product.collection.handle"], { select: ["id"] })];
                    case 7:
                        _d.collection_id = (_h.sent()).id;
                        delete productData.collection;
                        _h.label = 8;
                    case 8:
                        if (!(isProductCategoriesFeatureOn && productOp["product.categories"])) return [3 /*break*/, 10];
                        _e = productData;
                        _f = "categories";
                        return [4 /*yield*/, this.processCategories(productOp["product.categories"])];
                    case 9:
                        _e[_f] = _h.sent();
                        _h.label = 10;
                    case 10:
                        if (!isMedusaV2Enabled) return [3 /*break*/, 12];
                        createProductWorkflow = (0, core_flows_1.createProducts)(this.__container__);
                        input = {
                            products: [
                                productData,
                            ],
                        };
                        return [4 /*yield*/, createProductWorkflow.run({
                                input: input,
                                context: {
                                    manager: transactionManager,
                                },
                            })];
                    case 11:
                        _h.sent();
                        return [3 /*break*/, 14];
                    case 12: 
                    // TODO: we should only pass the expected data and should not have to cast the entire object. Here we are passing everything contained in productData
                    return [4 /*yield*/, productServiceTx.create(productData)];
                    case 13:
                        // TODO: we should only pass the expected data and should not have to cast the entire object. Here we are passing everything contained in productData
                        _h.sent();
                        _h.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        e_9 = _h.sent();
                        ProductImportStrategy.throwDescriptiveError(productOp, e_9.message);
                        return [3 /*break*/, 16];
                    case 16: return [4 /*yield*/, this.updateProgress(batchJob.id)];
                    case 17:
                        _h.sent();
                        _h.label = 18;
                    case 18:
                        productOps_1_1 = productOps_1.next();
                        return [3 /*break*/, 3];
                    case 19: return [3 /*break*/, 22];
                    case 20:
                        e_10_1 = _h.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 22];
                    case 21:
                        try {
                            if (productOps_1_1 && !productOps_1_1.done && (_g = productOps_1.return)) _g.call(productOps_1);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Method updates existing products in the DB using a CSV row data.
     *
     * @param batchJob - The current batch job being processed.
     */
    ProductImportStrategy.prototype.updateProducts = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var isMedusaV2Enabled, transactionManager, productOps, productServiceTx, productCollectionServiceTx, isSalesChannelsFeatureOn, isProductCategoriesFeatureOn, productOps_2, productOps_2_1, productOp, productData, _b, _c, _d, _e, _f, updateProductWorkflow, input, e_11, e_12_1;
            var e_12, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!batchJob.result.operations[types_1.OperationType.ProductUpdate]) {
                            return [2 /*return*/];
                        }
                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.downloadImportOpsFile(batchJob, types_1.OperationType.ProductUpdate)];
                    case 1:
                        productOps = _h.sent();
                        productServiceTx = this.productService_.withTransaction(transactionManager);
                        productCollectionServiceTx = this.productCollectionService_.withTransaction(transactionManager);
                        isSalesChannelsFeatureOn = this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key);
                        isProductCategoriesFeatureOn = this.featureFlagRouter_.isFeatureEnabled(product_categories_1.default.key);
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 20, 21, 22]);
                        productOps_2 = __values(productOps), productOps_2_1 = productOps_2.next();
                        _h.label = 3;
                    case 3:
                        if (!!productOps_2_1.done) return [3 /*break*/, 19];
                        productOp = productOps_2_1.value;
                        productData = (0, utils_2.transformProductData)(productOp);
                        _h.label = 4;
                    case 4:
                        _h.trys.push([4, 15, , 16]);
                        if (!(isSalesChannelsFeatureOn && productOp["product.sales_channels"])) return [3 /*break*/, 6];
                        _b = productData;
                        _c = "sales_channels";
                        return [4 /*yield*/, this.processSalesChannels(productOp["product.sales_channels"])];
                    case 5:
                        _b[_c] = _h.sent();
                        _h.label = 6;
                    case 6:
                        delete productData.options; // for now not supported in the update method
                        if (!(productOp["product.collection.handle"] != null &&
                            productOp["product.collection.handle"] !== "")) return [3 /*break*/, 8];
                        _d = productData;
                        return [4 /*yield*/, productCollectionServiceTx.retrieveByHandle(productOp["product.collection.handle"], { select: ["id"] })];
                    case 7:
                        _d.collection_id = (_h.sent()).id;
                        delete productData.collection;
                        _h.label = 8;
                    case 8:
                        if (!(isProductCategoriesFeatureOn && productOp["product.categories"])) return [3 /*break*/, 10];
                        _e = productData;
                        _f = "categories";
                        return [4 /*yield*/, this.processCategories(productOp["product.categories"])];
                    case 9:
                        _e[_f] = _h.sent();
                        _h.label = 10;
                    case 10:
                        if (!isMedusaV2Enabled) return [3 /*break*/, 12];
                        updateProductWorkflow = (0, core_flows_1.updateProducts)(this.__container__);
                        input = {
                            products: [
                                __assign({ id: productOp["product.id"] }, productData),
                            ],
                        };
                        return [4 /*yield*/, updateProductWorkflow.run({
                                input: input,
                                context: {
                                    manager: transactionManager,
                                },
                            })];
                    case 11:
                        _h.sent();
                        return [3 /*break*/, 14];
                    case 12: 
                    // TODO: we should only pass the expected data. Here we are passing everything contained in productData
                    return [4 /*yield*/, productServiceTx.update(productOp["product.id"], productData)];
                    case 13:
                        // TODO: we should only pass the expected data. Here we are passing everything contained in productData
                        _h.sent();
                        _h.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        e_11 = _h.sent();
                        ProductImportStrategy.throwDescriptiveError(productOp, e_11.message);
                        return [3 /*break*/, 16];
                    case 16: return [4 /*yield*/, this.updateProgress(batchJob.id)];
                    case 17:
                        _h.sent();
                        _h.label = 18;
                    case 18:
                        productOps_2_1 = productOps_2.next();
                        return [3 /*break*/, 3];
                    case 19: return [3 /*break*/, 22];
                    case 20:
                        e_12_1 = _h.sent();
                        e_12 = { error: e_12_1 };
                        return [3 /*break*/, 22];
                    case 21:
                        try {
                            if (productOps_2_1 && !productOps_2_1.done && (_g = productOps_2.return)) _g.call(productOps_2);
                        }
                        finally { if (e_12) throw e_12.error; }
                        return [7 /*endfinally*/];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Method creates product variants from a CSV data.
     * Method also handles processing of variant options.
     *
     * @param batchJob - The current batch job being processed.
     */
    ProductImportStrategy.prototype.createVariants = function (batchJob) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var isMedusaV2Enabled, transactionManager, variantOps, _loop_1, this_1, variantOps_1, variantOps_1_1, variantOp, e_13_1;
            var e_13, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!batchJob.result.operations[types_1.OperationType.VariantCreate]) {
                            return [2 /*return*/];
                        }
                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.downloadImportOpsFile(batchJob, types_1.OperationType.VariantCreate)];
                    case 1:
                        variantOps = _e.sent();
                        _loop_1 = function (variantOp) {
                            var variant, product_1, optionIds_1, createProductVariantsWorkflow, input, e_14;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _f.trys.push([0, 7, , 8]);
                                        variant = (0, utils_2.transformVariantData)(variantOp);
                                        return [4 /*yield*/, this_1.productService_
                                                .withTransaction(transactionManager)
                                                .retrieveByHandle(variantOp["product.handle"], {
                                                relations: ["variants", "variants.options", "options"],
                                            })];
                                    case 1:
                                        product_1 = _f.sent();
                                        optionIds_1 = ((_b = variantOp["product.options"]) === null || _b === void 0 ? void 0 : _b.map(function (variantOption) {
                                            var _a;
                                            return (_a = product_1.options.find(function (createdProductOption) {
                                                return createdProductOption.title === variantOption.title;
                                            })) === null || _a === void 0 ? void 0 : _a.id;
                                        })) || [];
                                        variant.options =
                                            ((_c = variant.options) === null || _c === void 0 ? void 0 : _c.map(function (o, index) { return (__assign(__assign({}, o), { option_id: optionIds_1[index] })); })) || [];
                                        delete variant.id;
                                        delete variant.product;
                                        if (!isMedusaV2Enabled) return [3 /*break*/, 3];
                                        createProductVariantsWorkflow = core_flows_1.CreateProductVariants.createProductVariants(this_1.__container__);
                                        input = {
                                            productVariants: [
                                                __assign(__assign({}, variant), { product_id: product_1.id }),
                                            ],
                                        };
                                        return [4 /*yield*/, createProductVariantsWorkflow.run({
                                                input: input,
                                                context: {
                                                    manager: transactionManager,
                                                },
                                            })];
                                    case 2:
                                        _f.sent();
                                        return [3 /*break*/, 5];
                                    case 3: return [4 /*yield*/, this_1.productVariantService_
                                            .withTransaction(transactionManager)
                                            .create(product_1, variant)];
                                    case 4:
                                        _f.sent();
                                        _f.label = 5;
                                    case 5: return [4 /*yield*/, this_1.updateProgress(batchJob.id)];
                                    case 6:
                                        _f.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        e_14 = _f.sent();
                                        ProductImportStrategy.throwDescriptiveError(variantOp, e_14.message);
                                        return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        variantOps_1 = __values(variantOps), variantOps_1_1 = variantOps_1.next();
                        _e.label = 3;
                    case 3:
                        if (!!variantOps_1_1.done) return [3 /*break*/, 6];
                        variantOp = variantOps_1_1.value;
                        return [5 /*yield**/, _loop_1(variantOp)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        variantOps_1_1 = variantOps_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_13_1 = _e.sent();
                        e_13 = { error: e_13_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (variantOps_1_1 && !variantOps_1_1.done && (_d = variantOps_1.return)) _d.call(variantOps_1);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Method updates product variants from a CSV data.
     *
     * @param batchJob - The current batch job being processed.
     */
    ProductImportStrategy.prototype.updateVariants = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var isMedusaV2Enabled, transactionManager, variantOps, productServiceTx, variantOps_2, variantOps_2_1, variantOp, product, updateData, updateProductVariantsWorkflow, input, e_15, e_16_1;
            var e_16, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!batchJob.result.operations[types_1.OperationType.VariantUpdate]) {
                            return [2 /*return*/];
                        }
                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.downloadImportOpsFile(batchJob, types_1.OperationType.VariantUpdate)];
                    case 1:
                        variantOps = _c.sent();
                        productServiceTx = this.productService_.withTransaction(transactionManager);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 16, 17, 18]);
                        variantOps_2 = __values(variantOps), variantOps_2_1 = variantOps_2.next();
                        _c.label = 3;
                    case 3:
                        if (!!variantOps_2_1.done) return [3 /*break*/, 15];
                        variantOp = variantOps_2_1.value;
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 11, , 12]);
                        return [4 /*yield*/, productServiceTx.retrieveByHandle(variantOp["product.handle"])];
                    case 5:
                        product = _c.sent();
                        return [4 /*yield*/, this.prepareVariantOptions(variantOp, product.id)];
                    case 6:
                        _c.sent();
                        updateData = (0, utils_2.transformVariantData)(variantOp);
                        delete updateData.product;
                        delete updateData["product.handle"];
                        if (!isMedusaV2Enabled) return [3 /*break*/, 8];
                        updateProductVariantsWorkflow = core_flows_1.UpdateProductVariants.updateProductVariants(this.__container__);
                        input = {
                            productVariants: [
                                __assign({ id: variantOp["variant.id"] }, updateData),
                            ],
                        };
                        return [4 /*yield*/, updateProductVariantsWorkflow.run({
                                input: input,
                                context: {
                                    manager: transactionManager,
                                },
                            })];
                    case 7:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.productVariantService_
                            .withTransaction(transactionManager)
                            .update(variantOp["variant.id"], updateData)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_15 = _c.sent();
                        ProductImportStrategy.throwDescriptiveError(variantOp, e_15.message);
                        return [3 /*break*/, 12];
                    case 12: return [4 /*yield*/, this.updateProgress(batchJob.id)];
                    case 13:
                        _c.sent();
                        _c.label = 14;
                    case 14:
                        variantOps_2_1 = variantOps_2.next();
                        return [3 /*break*/, 3];
                    case 15: return [3 /*break*/, 18];
                    case 16:
                        e_16_1 = _c.sent();
                        e_16 = { error: e_16_1 };
                        return [3 /*break*/, 18];
                    case 17:
                        try {
                            if (variantOps_2_1 && !variantOps_2_1.done && (_b = variantOps_2.return)) _b.call(variantOps_2);
                        }
                        finally { if (e_16) throw e_16.error; }
                        return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Extend records used for creating variant options with corresponding product option ids.
     *
     * @param variantOp - Parsed row data form CSV
     * @param productId - id of variant's product
     */
    ProductImportStrategy.prototype.prepareVariantOptions = function (variantOp, productId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, productOptions, productServiceTx, productOptions_1, productOptions_1_1, o, option, e_17_1;
            var e_17, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        productOptions = variantOp["variant.options"] || [];
                        productServiceTx = this.productService_.withTransaction(transactionManager);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 8]);
                        productOptions_1 = __values(productOptions), productOptions_1_1 = productOptions_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!productOptions_1_1.done) return [3 /*break*/, 5];
                        o = productOptions_1_1.value;
                        return [4 /*yield*/, productServiceTx.retrieveOptionByTitle(o._title, productId)];
                    case 3:
                        option = _c.sent();
                        o.option_id = option === null || option === void 0 ? void 0 : option.id;
                        _c.label = 4;
                    case 4:
                        productOptions_1_1 = productOptions_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_17_1 = _c.sent();
                        e_17 = { error: e_17_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (productOptions_1_1 && !productOptions_1_1.done && (_b = productOptions_1.return)) _b.call(productOptions_1);
                        }
                        finally { if (e_17) throw e_17.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Store import ops JSON file to a bucket.
     *
     * @param batchJobId - An id of the current batch job being processed.
     * @param results - An object containing parsed CSV data.
     */
    ProductImportStrategy.prototype.uploadImportOpsFile = function (batchJobId, results) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var uploadPromises, transactionManager, files, _c, _d, _e, _i, op, _f, writeStream, fileKey, promise;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        uploadPromises = [];
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        files = {};
                        _c = results;
                        _d = [];
                        for (_e in _c)
                            _d.push(_e);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _d.length)) return [3 /*break*/, 4];
                        _e = _d[_i];
                        if (!(_e in _c)) return [3 /*break*/, 3];
                        op = _e;
                        if (!((_b = results[op]) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileService_
                                .withTransaction(transactionManager)
                                .getUploadStreamDescriptor({
                                name: ProductImportStrategy.buildFilename(batchJobId, op),
                                ext: "json",
                            })];
                    case 2:
                        _f = _g.sent(), writeStream = _f.writeStream, fileKey = _f.fileKey, promise = _f.promise;
                        uploadPromises.push(promise);
                        files[op] = fileKey;
                        writeStream.write(JSON.stringify(results[op]));
                        writeStream.end();
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.batchJobService_
                            .withTransaction(transactionManager)
                            .update(batchJobId, {
                            result: { files: files },
                        })];
                    case 5:
                        _g.sent();
                        return [4 /*yield*/, (0, utils_1.promiseAll)(uploadPromises)];
                    case 6:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Download parsed ops JSON file.
     *
     * @param batchJob - the current batch job being processed
     * @param op - Type of import operation.
     */
    ProductImportStrategy.prototype.downloadImportOpsFile = function (batchJob, op) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var data, transactionManager, readableStream;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = "";
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.fileService_
                                .withTransaction(transactionManager)
                                .getDownloadStream({
                                fileKey: batchJob.result.files[op],
                            })];
                    case 1:
                        readableStream = _b.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                readableStream.on("data", function (chunk) {
                                    data += chunk;
                                });
                                readableStream.on("end", function () {
                                    resolve(JSON.parse(data));
                                });
                                readableStream.on("error", function () {
                                    // TODO: maybe should throw
                                    resolve([]);
                                });
                            })];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Delete parsed CSV ops files.
     *
     * @param batchJob - the current batch job being processed
     */
    ProductImportStrategy.prototype.deleteOpsFiles = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, fileServiceTx, _b, _c, fileName, e_18, e_19_1;
            var e_19, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        fileServiceTx = this.fileService_.withTransaction(transactionManager);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 8, 9, 10]);
                        _b = __values(Object.values(batchJob.result.files)), _c = _b.next();
                        _e.label = 2;
                    case 2:
                        if (!!_c.done) return [3 /*break*/, 7];
                        fileName = _c.value;
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, fileServiceTx.delete({
                                fileKey: fileName,
                            })];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_18 = _e.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        _c = _b.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_19_1 = _e.sent();
                        e_19 = { error: e_19_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_19) throw e_19.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update count of processed data in the batch job `result` column
     * and cleanup temp JSON files.
     *
     * @param batchJob - The current batch job being processed.
     */
    ProductImportStrategy.prototype.finalize = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, fileKey;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        delete this.processedCounter[batchJob.id];
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction(transactionManager)
                                .update(batchJob.id, {
                                result: { advancement_count: batchJob.result.count },
                            })];
                    case 1:
                        _b.sent();
                        fileKey = batchJob.context.fileKey;
                        return [4 /*yield*/, this.fileService_
                                .withTransaction(transactionManager)
                                .delete({ fileKey: fileKey })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.deleteOpsFiles(batchJob)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Store the progress in the batch job `result` column.
     * Method is called after every update/create operation,
     * but after every `BATCH_SIZE` processed rows info is written to the DB.
     *
     * @param batchJobId - An id of the current batch job being processed.
     */
    ProductImportStrategy.prototype.updateProgress = function (batchJobId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var newCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newCount = (this.processedCounter[batchJobId] || 0) + 1;
                        this.processedCounter[batchJobId] = newCount;
                        if (newCount % BATCH_SIZE !== 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction((_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_)
                                .update(batchJobId, {
                                result: {
                                    advancement_count: newCount,
                                },
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductImportStrategy.buildFilename = function (batchJobId, operation, _a) {
        var _b = _a === void 0 ? { appendExt: undefined } : _a, appendExt = _b.appendExt;
        var filename = "imports/products/ops/".concat(batchJobId, "-").concat(operation);
        return appendExt ? filename + appendExt : filename;
    };
    ProductImportStrategy.identifier = "product-import-strategy";
    ProductImportStrategy.batchType = "product-import";
    return ProductImportStrategy;
}(interfaces_1.AbstractBatchJobStrategy));
exports.default = ProductImportStrategy;
//# sourceMappingURL=import.js.map