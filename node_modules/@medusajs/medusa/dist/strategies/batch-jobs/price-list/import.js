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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("../../../interfaces");
var types_1 = require("./types");
var medusa_core_utils_1 = require("medusa-core-utils");
var csv_parser_1 = __importDefault(require("../../../services/csv-parser"));
var utils_1 = require("@medusajs/utils");
/*
 * Default strategy class used for a batch import of products/variants.
 */
var PriceListImportStrategy = /** @class */ (function (_super) {
    __extends(PriceListImportStrategy, _super);
    function PriceListImportStrategy(_a) {
        var batchJobService = _a.batchJobService, productVariantService = _a.productVariantService, priceListService = _a.priceListService, regionService = _a.regionService, fileService = _a.fileService, manager = _a.manager;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.processedCounter = {};
        _this.csvParser_ = new csv_parser_1.default(CSVSchema);
        _this.manager_ = manager;
        _this.fileService_ = fileService;
        _this.batchJobService_ = batchJobService;
        _this.priceListService_ = priceListService;
        _this.productVariantService_ = productVariantService;
        _this.regionService_ = regionService;
        return _this;
    }
    PriceListImportStrategy.prototype.buildTemplate = function () {
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
    PriceListImportStrategy.throwDescriptiveError = function (row, errorDescription) {
        var message = "Error while processing row with:\n      variant ID: ".concat(row[PriceListRowKeys.VARIANT_ID], ",\n      variant SKU: ").concat(row[PriceListRowKeys.VARIANT_SKU], ",\n      ").concat(errorDescription);
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, message);
    };
    PriceListImportStrategy.prototype.prepareBatchJobForProcessing = function (batchJob, reqContext) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var manager, priceListId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        if (!((_b = batchJob.context) === null || _b === void 0 ? void 0 : _b.price_list_id)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Price list id is required");
                        }
                        priceListId = batchJob.context.price_list_id;
                        return [4 /*yield*/, this.priceListService_.withTransaction(manager).retrieve(priceListId)];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, batchJob];
                }
            });
        });
    };
    /**
     * Generate instructions for creation of prices from parsed CSV rows.
     *
     * @param priceListId - the ID of the price list where the prices will be created
     * @param csvData - An array of parsed CSV rows.
     */
    PriceListImportStrategy.prototype.getImportInstructions = function (priceListId, csvData) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var manager, pricesToCreate, csvData_1, csvData_1_1, row, variantId, variant, pricesOperationData, e_1_1;
            var e_1, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.priceListService_.withTransaction(manager).retrieve(priceListId)];
                    case 1:
                        _d.sent();
                        pricesToCreate = [];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 11, 12, 13]);
                        csvData_1 = __values(csvData), csvData_1_1 = csvData_1.next();
                        _d.label = 3;
                    case 3:
                        if (!!csvData_1_1.done) return [3 /*break*/, 10];
                        row = csvData_1_1.value;
                        variantId = row[PriceListRowKeys.VARIANT_ID];
                        if (!!variantId) return [3 /*break*/, 5];
                        if (!row[PriceListRowKeys.VARIANT_SKU]) {
                            PriceListImportStrategy.throwDescriptiveError(row, "SKU or ID is required");
                        }
                        return [4 /*yield*/, this.productVariantService_.retrieveBySKU("".concat(row[PriceListRowKeys.VARIANT_SKU]), {
                                select: ["id"],
                            })];
                    case 4:
                        variant = _d.sent();
                        variantId = variant.id;
                        return [3 /*break*/, 7];
                    case 5: 
                    // Validate that product exists
                    return [4 /*yield*/, this.productVariantService_.retrieve("".concat(variantId), {
                            select: ["id"],
                        })];
                    case 6:
                        // Validate that product exists
                        _d.sent();
                        _d.label = 7;
                    case 7: return [4 /*yield*/, this.prepareVariantPrices(row[PriceListRowKeys.PRICES])];
                    case 8:
                        pricesOperationData = _d.sent();
                        pricesToCreate.push({
                            variant_id: "".concat(variantId),
                            prices: pricesOperationData,
                        });
                        _d.label = 9;
                    case 9:
                        csvData_1_1 = csvData_1.next();
                        return [3 /*break*/, 3];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (csvData_1_1 && !csvData_1_1.done && (_b = csvData_1.return)) _b.call(csvData_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/, (_c = {},
                            _c[types_1.OperationType.PricesCreate] = pricesToCreate,
                            _c)];
                }
            });
        });
    };
    /**
     * Prepare prices records for insert - find and append region ids to records that contain a region name.
     *
     * @param prices - the parsed prices to prepare
     * @returns the prepared prices. All prices have amount in DB format, currency_code and if applicable region_id.
     */
    PriceListImportStrategy.prototype.prepareVariantPrices = function (prices) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, operationalPrices, prices_1, prices_1_1, price, record, region, e_2, e_3_1;
            var e_3, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        operationalPrices = [];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 11, 12, 13]);
                        prices_1 = __values(prices), prices_1_1 = prices_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!prices_1_1.done) return [3 /*break*/, 10];
                        price = prices_1_1.value;
                        record = {
                            amount: price.amount,
                        };
                        if (!("region_name" in price)) return [3 /*break*/, 7];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(transactionManager)
                                .retrieveByName(price.region_name)];
                    case 4:
                        region = _c.sent();
                        record.region_id = region.id;
                        record.currency_code = region.currency_code;
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _c.sent();
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Trying to set a price for a region ".concat(price.region_name, " that doesn't exist"));
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        // TODO: Verify that currency is activated for store
                        record.currency_code = price.currency_code;
                        _c.label = 8;
                    case 8:
                        record.amount = (0, medusa_core_utils_1.computerizeAmount)(record.amount, record.currency_code);
                        operationalPrices.push(record);
                        _c.label = 9;
                    case 9:
                        prices_1_1 = prices_1.next();
                        return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_3_1 = _c.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (prices_1_1 && !prices_1_1.done && (_b = prices_1.return)) _b.call(prices_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/, operationalPrices];
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
    PriceListImportStrategy.prototype.preProcessBatchJob = function (batchJobId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, batchJob, csvFileKey, priceListId, csvStream, builtData, parsedData, e_4, ops, totalOperationCount, operationsCounts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction(transactionManager)
                                .retrieve(batchJobId)];
                    case 1:
                        batchJob = (_b.sent());
                        csvFileKey = batchJob.context.fileKey;
                        priceListId = batchJob.context.price_list_id;
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
                    case 7: return [4 /*yield*/, this.getImportInstructions(priceListId, builtData)];
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
                                            key: "price-list-import-count",
                                            name: "PriceList to import",
                                            message: "".concat(ops[types_1.OperationType.PricesCreate].length, " prices will be added"),
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
    PriceListImportStrategy.prototype.processJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob, priceListId, txPriceListService, priceImportOperations, _loop_1, priceImportOperations_1, priceImportOperations_1_1, op, e_5_1;
                            var e_5, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(manager)
                                            .retrieve(batchJobId)];
                                    case 1:
                                        batchJob = (_b.sent());
                                        priceListId = batchJob.context.price_list_id;
                                        txPriceListService = this.priceListService_.withTransaction(manager);
                                        // Delete Existing prices for price list
                                        return [4 /*yield*/, txPriceListService.clearPrices(priceListId)
                                            // Upload new prices for price list
                                        ];
                                    case 2:
                                        // Delete Existing prices for price list
                                        _b.sent();
                                        return [4 /*yield*/, this.downloadImportOpsFile(batchJob, types_1.OperationType.PricesCreate)];
                                    case 3:
                                        priceImportOperations = _b.sent();
                                        _loop_1 = function (op) {
                                            var e_6;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _c.trys.push([0, 2, , 3]);
                                                        return [4 /*yield*/, txPriceListService.addPrices(priceListId, op.prices.map(function (p) {
                                                                return __assign(__assign({}, p), { variant_id: op.variant_id });
                                                            }))];
                                                    case 1:
                                                        _c.sent();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        e_6 = _c.sent();
                                                        PriceListImportStrategy.throwDescriptiveError(op, e_6.message);
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _b.label = 4;
                                    case 4:
                                        _b.trys.push([4, 9, 10, 11]);
                                        priceImportOperations_1 = __values(priceImportOperations), priceImportOperations_1_1 = priceImportOperations_1.next();
                                        _b.label = 5;
                                    case 5:
                                        if (!!priceImportOperations_1_1.done) return [3 /*break*/, 8];
                                        op = priceImportOperations_1_1.value;
                                        return [5 /*yield**/, _loop_1(op)];
                                    case 6:
                                        _b.sent();
                                        _b.label = 7;
                                    case 7:
                                        priceImportOperations_1_1 = priceImportOperations_1.next();
                                        return [3 /*break*/, 5];
                                    case 8: return [3 /*break*/, 11];
                                    case 9:
                                        e_5_1 = _b.sent();
                                        e_5 = { error: e_5_1 };
                                        return [3 /*break*/, 11];
                                    case 10:
                                        try {
                                            if (priceImportOperations_1_1 && !priceImportOperations_1_1.done && (_a = priceImportOperations_1.return)) _a.call(priceImportOperations_1);
                                        }
                                        finally { if (e_5) throw e_5.error; }
                                        return [7 /*endfinally*/];
                                    case 11: return [4 /*yield*/, this.finalize(batchJob)];
                                    case 12:
                                        _b.sent();
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
     * Store import ops JSON file to a bucket.
     *
     * @param batchJobId - An id of the current batch job being processed.
     * @param results - An object containing parsed CSV data.
     */
    PriceListImportStrategy.prototype.uploadImportOpsFile = function (batchJobId, results) {
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
                                name: PriceListImportStrategy.buildFilename(batchJobId, op),
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
    PriceListImportStrategy.prototype.downloadImportOpsFile = function (batchJob, op) {
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
    PriceListImportStrategy.prototype.deleteOpsFiles = function (batchJob) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, fileServiceTx, _b, _c, fileName, e_7, e_8_1;
            var e_8, _d;
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
                        e_7 = _e.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        _c = _b.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_8_1 = _e.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_8) throw e_8.error; }
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
    PriceListImportStrategy.prototype.finalize = function (batchJob) {
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
    PriceListImportStrategy.buildFilename = function (batchJobId, operation, _a) {
        var _b = _a === void 0 ? { appendExt: undefined } : _a, appendExt = _b.appendExt;
        var filename = "imports/price-lists/ops/".concat(batchJobId, "-").concat(operation);
        return appendExt ? filename + appendExt : filename;
    };
    PriceListImportStrategy.identifier = "price-list-import-strategy";
    PriceListImportStrategy.batchType = "price-list-import";
    return PriceListImportStrategy;
}(interfaces_1.AbstractBatchJobStrategy));
exports.default = PriceListImportStrategy;
var PriceListRowKeys;
(function (PriceListRowKeys) {
    PriceListRowKeys["VARIANT_ID"] = "id";
    PriceListRowKeys["VARIANT_SKU"] = "sku";
    PriceListRowKeys["PRICES"] = "prices";
})(PriceListRowKeys || (PriceListRowKeys = {}));
/**
 * Schema definition for the CSV parser.
 */
var CSVSchema = {
    columns: [
        {
            name: "Product Variant ID",
            mapTo: PriceListRowKeys.VARIANT_ID,
        },
        { name: "SKU", mapTo: PriceListRowKeys.VARIANT_SKU },
        {
            name: "Price Region",
            match: /Price (.*) \[([A-Z]{3})\]/,
            reducer: function (builtLine, key, value) {
                builtLine[PriceListRowKeys.PRICES] =
                    builtLine[PriceListRowKeys.PRICES] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var _a = __read(key.trim().match(/Price (.*) \[([A-Z]{3})\]/) || [], 2), regionName = _a[1];
                builtLine[PriceListRowKeys.PRICES].push({
                    amount: parseFloat(value),
                    region_name: regionName,
                });
                return builtLine;
            },
        },
        {
            name: "Price Currency",
            match: /Price [A-Z]{3}/,
            reducer: function (builtLine, key, value) {
                builtLine[PriceListRowKeys.PRICES] =
                    builtLine[PriceListRowKeys.PRICES] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var currency = key.trim().split(" ")[1];
                builtLine[PriceListRowKeys.PRICES].push({
                    amount: parseFloat(value),
                    currency_code: currency.toLowerCase(),
                });
                return builtLine;
            },
        },
    ],
};
//# sourceMappingURL=import.js.map