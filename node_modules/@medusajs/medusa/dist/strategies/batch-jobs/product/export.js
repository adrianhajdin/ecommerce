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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var api_1 = require("../../../api");
var interfaces_1 = require("../../../interfaces");
var product_categories_1 = __importDefault(require("../../../loaders/feature-flags/product-categories"));
var sales_channels_1 = __importDefault(require("../../../loaders/feature-flags/sales-channels"));
var batch_job_1 = require("../../../types/batch-job");
var utils_2 = require("../../../utils");
var get_query_config_1 = require("../../../utils/get-query-config");
var columns_definition_1 = require("./types/columns-definition");
var ProductExportStrategy = /** @class */ (function (_super) {
    __extends(ProductExportStrategy, _super);
    function ProductExportStrategy(_a) {
        var manager = _a.manager, batchJobService = _a.batchJobService, productService = _a.productService, fileService = _a.fileService, featureFlagRouter = _a.featureFlagRouter, remoteQuery = _a.remoteQuery;
        var _this = _super.call(this, {
            manager: manager,
            batchJobService: batchJobService,
            productService: productService,
            fileService: fileService,
            featureFlagRouter: featureFlagRouter,
            remoteQuery: remoteQuery,
        }) || this;
        _this.defaultRelations_ = __spreadArray(__spreadArray([], __read(api_1.defaultAdminProductRelations), false), [
            "variants.prices.region",
        ], false);
        /*
         *
         * The dynamic columns corresponding to the lowest level of relations are built later on.
         * You can have a look at the buildHeader method that take care of appending the other
         * column descriptors to this map.
         *
         */
        _this.columnsDefinition = __assign({}, columns_definition_1.productColumnsDefinition);
        _this.salesChannelsColumnsDefinition = __assign({}, columns_definition_1.productSalesChannelColumnsDefinition);
        _this.productCategoriesColumnDefinitions = __assign({}, columns_definition_1.productCategoriesColumnsDefinition);
        _this.NEWLINE_ = "\r\n";
        _this.DELIMITER_ = ";";
        _this.DEFAULT_LIMIT = 50;
        _this.remoteQuery_ = remoteQuery;
        _this.manager_ = manager;
        _this.batchJobService_ = batchJobService;
        _this.productService_ = productService;
        _this.fileService_ = fileService;
        _this.featureFlagRouter_ = featureFlagRouter;
        if (featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key)) {
            _this.defaultRelations_.push("sales_channels");
        }
        if (featureFlagRouter.isFeatureEnabled(product_categories_1.default.key)) {
            _this.defaultRelations_.push("categories");
        }
        return _this;
    }
    ProductExportStrategy.prototype.buildTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ""];
            });
        });
    };
    ProductExportStrategy.prototype.prepareBatchJobForProcessing = function (batchJob, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, limit, offset, order, fields, expand, filterable_fields, context, listConfig;
            return __generator(this, function (_c) {
                _b = ((_a = batchJob === null || batchJob === void 0 ? void 0 : batchJob.context) !== null && _a !== void 0 ? _a : {}), limit = _b.limit, offset = _b.offset, order = _b.order, fields = _b.fields, expand = _b.expand, filterable_fields = _b.filterable_fields, context = __rest(_b, ["limit", "offset", "order", "fields", "expand", "filterable_fields"]);
                listConfig = (0, get_query_config_1.prepareListQuery)({
                    limit: limit,
                    offset: offset,
                    order: order,
                    fields: fields,
                    expand: expand,
                }, {
                    isList: true,
                    defaultRelations: this.defaultRelations_,
                }).listConfig;
                batchJob.context = __assign(__assign({}, (context !== null && context !== void 0 ? context : {})), { list_config: listConfig, filterable_fields: filterable_fields });
                return [2 /*return*/, batchJob];
            });
        });
    };
    ProductExportStrategy.prototype.preProcessBatchJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var isMedusaV2Enabled;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isMedusaV2Enabled = this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var batchJob, offset, limit, _a, _b, list_config, _c, filterable_fields, productList, count, container, productCount, products, dynamicOptionColumnCount, dynamicImageColumnCount, dynamicSalesChannelsColumnCount, dynamicProductCategoriesColumnCount, pricesData, shapeData;
                                var _d, _e, _f;
                                var _g, _h, _j, _k, _l, _m, _o, _p, _q;
                                return __generator(this, function (_r) {
                                    switch (_r.label) {
                                        case 0: return [4 /*yield*/, this.batchJobService_
                                                .withTransaction(transactionManager)
                                                .retrieve(batchJobId)];
                                        case 1:
                                            batchJob = (_r.sent());
                                            offset = (_j = (_h = (_g = batchJob.context) === null || _g === void 0 ? void 0 : _g.list_config) === null || _h === void 0 ? void 0 : _h.skip) !== null && _j !== void 0 ? _j : 0;
                                            limit = (_m = (_l = (_k = batchJob.context) === null || _k === void 0 ? void 0 : _k.list_config) === null || _l === void 0 ? void 0 : _l.take) !== null && _m !== void 0 ? _m : this.DEFAULT_LIMIT;
                                            _a = batchJob.context, _b = _a.list_config, list_config = _b === void 0 ? {} : _b, _c = _a.filterable_fields, filterable_fields = _c === void 0 ? {} : _c;
                                            productList = [];
                                            count = 0;
                                            container = (0, utils_1.createContainerLike)(this.__container__);
                                            if (!isMedusaV2Enabled) return [3 /*break*/, 3];
                                            ;
                                            return [4 /*yield*/, (0, utils_2.listProducts)(container, filterable_fields, __assign(__assign({}, list_config), { take: null }))];
                                        case 2:
                                            _d = __read.apply(void 0, [_r.sent(), 2]), productList = _d[0], count = _d[1];
                                            return [3 /*break*/, 5];
                                        case 3:
                                            ;
                                            return [4 /*yield*/, this.productService_
                                                    .withTransaction(transactionManager)
                                                    .listAndCount(filterable_fields, __assign(__assign({}, (list_config !== null && list_config !== void 0 ? list_config : {})), { take: Math.min((_o = batchJob.context.batch_size) !== null && _o !== void 0 ? _o : Infinity, limit) }))];
                                        case 4:
                                            _e = __read.apply(void 0, [_r.sent(), 2]), productList = _e[0], count = _e[1];
                                            _r.label = 5;
                                        case 5:
                                            productCount = (_q = (_p = batchJob.context) === null || _p === void 0 ? void 0 : _p.batch_size) !== null && _q !== void 0 ? _q : count;
                                            products = productList;
                                            dynamicOptionColumnCount = 0;
                                            dynamicImageColumnCount = 0;
                                            dynamicSalesChannelsColumnCount = 0;
                                            dynamicProductCategoriesColumnCount = 0;
                                            pricesData = new Set();
                                            _r.label = 6;
                                        case 6:
                                            if (!(offset < productCount)) return [3 /*break*/, 11];
                                            if (!!(products === null || products === void 0 ? void 0 : products.length)) return [3 /*break*/, 10];
                                            if (!isMedusaV2Enabled) return [3 /*break*/, 8];
                                            ;
                                            return [4 /*yield*/, (0, utils_2.listProducts)(container, filterable_fields, __assign(__assign({}, list_config), { skip: offset, take: Math.min(productCount - offset, limit) }))];
                                        case 7:
                                            _f = __read.apply(void 0, [_r.sent(), 2]), productList = _f[0], count = _f[1];
                                            return [3 /*break*/, 10];
                                        case 8: return [4 /*yield*/, this.productService_
                                                .withTransaction(transactionManager)
                                                .list(filterable_fields, __assign(__assign({}, list_config), { skip: offset, take: Math.min(productCount - offset, limit) }))];
                                        case 9:
                                            products = _r.sent();
                                            _r.label = 10;
                                        case 10:
                                            shapeData = this.getProductRelationsDynamicColumnsShape(products);
                                            dynamicImageColumnCount = Math.max(shapeData.imageColumnCount, dynamicImageColumnCount);
                                            dynamicOptionColumnCount = Math.max(shapeData.optionColumnCount, dynamicOptionColumnCount);
                                            dynamicSalesChannelsColumnCount = Math.max(shapeData.salesChannelsColumnCount, dynamicSalesChannelsColumnCount);
                                            dynamicProductCategoriesColumnCount = Math.max(shapeData.productCategoriesColumnCount, dynamicProductCategoriesColumnCount);
                                            pricesData = new Set(__spreadArray(__spreadArray([], __read(pricesData), false), __read(shapeData.pricesData), false));
                                            offset += products.length;
                                            products = [];
                                            return [3 /*break*/, 6];
                                        case 11: return [4 /*yield*/, this.batchJobService_
                                                .withTransaction(transactionManager)
                                                .update(batchJob, {
                                                context: {
                                                    shape: {
                                                        dynamicImageColumnCount: dynamicImageColumnCount,
                                                        dynamicOptionColumnCount: dynamicOptionColumnCount,
                                                        dynamicSalesChannelsColumnCount: dynamicSalesChannelsColumnCount,
                                                        dynamicProductCategoriesColumnCount: dynamicProductCategoriesColumnCount,
                                                        prices: __spreadArray([], __read(pricesData), false).map(function (stringifyData) {
                                                            return JSON.parse(stringifyData);
                                                        }),
                                                    },
                                                },
                                                result: {
                                                    stat_descriptors: [
                                                        {
                                                            key: "product-export-count",
                                                            name: "Product count to export",
                                                            message: "There will be ".concat(productCount, " products exported by this action"),
                                                        },
                                                    ],
                                                },
                                            })];
                                        case 12:
                                            _r.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductExportStrategy.prototype.processJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, limit, advancementCount, productCount, approximateFileSize;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offset = 0;
                        limit = this.DEFAULT_LIMIT;
                        advancementCount = 0;
                        productCount = 0;
                        approximateFileSize = 0;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var productServiceTx, batchJobServiceTx, fileServiceTx, batchJob, _a, writeStream, fileKey, promise, header, _b, _c, list_config, _d, filterable_fields, _e, productList, count, products;
                                var _this = this;
                                var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                                return __generator(this, function (_s) {
                                    switch (_s.label) {
                                        case 0:
                                            productServiceTx = this.productService_.withTransaction(transactionManager);
                                            batchJobServiceTx = this.batchJobService_.withTransaction(transactionManager);
                                            fileServiceTx = this.fileService_.withTransaction(transactionManager);
                                            return [4 /*yield*/, batchJobServiceTx.retrieve(batchJobId)];
                                        case 1:
                                            batchJob = (_s.sent());
                                            return [4 /*yield*/, fileServiceTx.getUploadStreamDescriptor({
                                                    name: "exports/products/product-export-".concat(Date.now()),
                                                    ext: "csv",
                                                })];
                                        case 2:
                                            _a = _s.sent(), writeStream = _a.writeStream, fileKey = _a.fileKey, promise = _a.promise;
                                            return [4 /*yield*/, this.buildHeader(batchJob)];
                                        case 3:
                                            header = _s.sent();
                                            writeStream.write(header);
                                            approximateFileSize += Buffer.from(header).byteLength;
                                            return [4 /*yield*/, batchJobServiceTx.update(batchJobId, {
                                                    result: {
                                                        file_key: fileKey,
                                                        file_size: approximateFileSize,
                                                    },
                                                })];
                                        case 4:
                                            _s.sent();
                                            advancementCount =
                                                (_g = (_f = batchJob.result) === null || _f === void 0 ? void 0 : _f.advancement_count) !== null && _g !== void 0 ? _g : advancementCount;
                                            offset = ((_k = (_j = (_h = batchJob.context) === null || _h === void 0 ? void 0 : _h.list_config) === null || _j === void 0 ? void 0 : _j.skip) !== null && _k !== void 0 ? _k : 0) + advancementCount;
                                            limit = (_o = (_m = (_l = batchJob.context) === null || _l === void 0 ? void 0 : _l.list_config) === null || _m === void 0 ? void 0 : _m.take) !== null && _o !== void 0 ? _o : limit;
                                            _b = batchJob.context, _c = _b.list_config, list_config = _c === void 0 ? {} : _c, _d = _b.filterable_fields, filterable_fields = _d === void 0 ? {} : _d;
                                            return [4 /*yield*/, productServiceTx.listAndCount(filterable_fields, __assign(__assign({}, list_config), { skip: offset, take: Math.min((_p = batchJob.context.batch_size) !== null && _p !== void 0 ? _p : Infinity, limit) }))];
                                        case 5:
                                            _e = __read.apply(void 0, [_s.sent(), 2]), productList = _e[0], count = _e[1];
                                            productCount = (_r = (_q = batchJob.context) === null || _q === void 0 ? void 0 : _q.batch_size) !== null && _r !== void 0 ? _r : count;
                                            products = productList;
                                            _s.label = 6;
                                        case 6:
                                            if (!(offset < productCount)) return [3 /*break*/, 12];
                                            if (!!(products === null || products === void 0 ? void 0 : products.length)) return [3 /*break*/, 8];
                                            return [4 /*yield*/, productServiceTx.list(filterable_fields, __assign(__assign({}, list_config), { skip: offset, take: Math.min(productCount - offset, limit) }))];
                                        case 7:
                                            products = _s.sent();
                                            _s.label = 8;
                                        case 8:
                                            products.forEach(function (product) {
                                                var lines = _this.buildProductVariantLines(product);
                                                lines.forEach(function (line) {
                                                    approximateFileSize += Buffer.from(line).byteLength;
                                                    writeStream.write(line);
                                                });
                                            });
                                            advancementCount += products.length;
                                            offset += products.length;
                                            products = [];
                                            return [4 /*yield*/, batchJobServiceTx.update(batchJobId, {
                                                    result: {
                                                        file_size: approximateFileSize,
                                                        count: productCount,
                                                        advancement_count: advancementCount,
                                                        progress: advancementCount / productCount,
                                                    },
                                                })];
                                        case 9:
                                            batchJob = (_s.sent());
                                            if (!(batchJob.status === batch_job_1.BatchJobStatus.CANCELED)) return [3 /*break*/, 11];
                                            writeStream.end();
                                            return [4 /*yield*/, this.onProcessCanceled(batchJobId, fileKey)];
                                        case 10:
                                            _s.sent();
                                            return [2 /*return*/];
                                        case 11: return [3 /*break*/, 6];
                                        case 12:
                                            writeStream.end();
                                            return [4 /*yield*/, promise];
                                        case 13: return [2 /*return*/, _s.sent()];
                                    }
                                });
                            }); }, "REPEATABLE READ", function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.handleProcessingError(batchJobId, err, {
                                            count: productCount,
                                            advancement_count: advancementCount,
                                            progress: advancementCount / productCount,
                                        })];
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductExportStrategy.prototype.buildHeader = function (batchJob) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, _d, prices, dynamicImageColumnCount, dynamicOptionColumnCount, dynamicSalesChannelsColumnCount, dynamicProductCategoriesColumnCount, exportedColumns;
            return __generator(this, function (_e) {
                _c = (_b = (_a = batchJob === null || batchJob === void 0 ? void 0 : batchJob.context) === null || _a === void 0 ? void 0 : _a.shape) !== null && _b !== void 0 ? _b : {}, _d = _c.prices, prices = _d === void 0 ? [] : _d, dynamicImageColumnCount = _c.dynamicImageColumnCount, dynamicOptionColumnCount = _c.dynamicOptionColumnCount, dynamicSalesChannelsColumnCount = _c.dynamicSalesChannelsColumnCount, dynamicProductCategoriesColumnCount = _c.dynamicProductCategoriesColumnCount;
                this.appendMoneyAmountDescriptors(prices);
                this.appendOptionsDescriptors(dynamicOptionColumnCount);
                this.appendImagesDescriptors(dynamicImageColumnCount);
                this.appendSalesChannelsDescriptors(dynamicSalesChannelsColumnCount);
                this.appendProductCategoriesDescriptors(dynamicProductCategoriesColumnCount);
                exportedColumns = Object.values(this.columnsDefinition)
                    .map(function (descriptor) {
                    return descriptor.exportDescriptor &&
                        !("isDynamic" in descriptor.exportDescriptor) &&
                        descriptor.name;
                })
                    .filter(function (name) { return !!name; });
                return [2 /*return*/, exportedColumns.join(this.DELIMITER_) + this.NEWLINE_];
            });
        });
    };
    ProductExportStrategy.prototype.appendImagesDescriptors = function (maxImagesCount) {
        var columnNameBuilder = this.columnsDefinition["Image Url"]
            .exportDescriptor
            .buildDynamicColumnName;
        var _loop_1 = function (i) {
            var columnName = columnNameBuilder(i);
            this_1.columnsDefinition[columnName] = {
                name: columnName,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.images[i]) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
        };
        var this_1 = this;
        for (var i = 0; i < maxImagesCount; ++i) {
            _loop_1(i);
        }
    };
    ProductExportStrategy.prototype.appendSalesChannelsDescriptors = function (maxScCount) {
        var columnNameIdBuilder = this.salesChannelsColumnsDefinition["Sales Channel Id"].exportDescriptor
            .buildDynamicColumnName;
        var columnNameNameBuilder = this.salesChannelsColumnsDefinition["Sales Channel Name"].exportDescriptor
            .buildDynamicColumnName;
        var columnNameDescriptionBuilder = this.salesChannelsColumnsDefinition["Sales Channel Description"].exportDescriptor
            .buildDynamicColumnName;
        var _loop_2 = function (i) {
            var columnNameId = columnNameIdBuilder(i);
            this_2.columnsDefinition[columnNameId] = {
                name: columnNameId,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.sales_channels[i]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
            var columnNameName = columnNameNameBuilder(i);
            this_2.columnsDefinition[columnNameName] = {
                name: columnNameName,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.sales_channels[i]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
            var columnNameDescription = columnNameDescriptionBuilder(i);
            this_2.columnsDefinition[columnNameDescription] = {
                name: columnNameDescription,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.sales_channels[i]) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
        };
        var this_2 = this;
        for (var i = 0; i < maxScCount; ++i) {
            _loop_2(i);
        }
    };
    ProductExportStrategy.prototype.appendProductCategoriesDescriptors = function (maxCategoriesCount) {
        var columnNameHandleBuilder = this.productCategoriesColumnDefinitions["Product Category Handle"].exportDescriptor
            .buildDynamicColumnName;
        var columnNameNameBuilder = this.productCategoriesColumnDefinitions["Product Category Name"].exportDescriptor
            .buildDynamicColumnName;
        var columnNameDescriptionBuilder = this
            .productCategoriesColumnDefinitions["Product Category Description"]
            .exportDescriptor
            .buildDynamicColumnName;
        var _loop_3 = function (i) {
            var columnNameId = columnNameHandleBuilder(i);
            this_3.columnsDefinition[columnNameId] = {
                name: columnNameId,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.categories[i]) === null || _a === void 0 ? void 0 : _a.handle) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
            columnNameId = columnNameNameBuilder(i);
            this_3.columnsDefinition[columnNameId] = {
                name: columnNameId,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.categories[i]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
            columnNameId = columnNameDescriptionBuilder(i);
            this_3.columnsDefinition[columnNameId] = {
                name: columnNameId,
                exportDescriptor: {
                    accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.categories[i]) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
        };
        var this_3 = this;
        for (var i = 0; i < maxCategoriesCount; ++i) {
            _loop_3(i);
        }
    };
    ProductExportStrategy.prototype.appendOptionsDescriptors = function (maxOptionsCount) {
        var _loop_4 = function (i) {
            var columnNameNameBuilder = this_4.columnsDefinition["Option Name"]
                .exportDescriptor
                .buildDynamicColumnName;
            var columnNameName = columnNameNameBuilder(i);
            this_4.columnsDefinition[columnNameName] = {
                name: columnNameName,
                exportDescriptor: {
                    accessor: function (productOption) { var _a, _b; return (_b = (_a = productOption === null || productOption === void 0 ? void 0 : productOption.options[i]) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : ""; },
                    entityName: "product",
                },
            };
            var columnNameValueBuilder = this_4.columnsDefinition["Option Value"]
                .exportDescriptor
                .buildDynamicColumnName;
            var columnNameNameValue = columnNameValueBuilder(i);
            // option values are not guaranteed to keep the same order as options on product. Pick them in the same order as product options
            this_4.columnsDefinition[columnNameNameValue] = {
                name: columnNameNameValue,
                exportDescriptor: {
                    accessor: function (variant, context) {
                        var _a, _b;
                        return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.options.find(function (ov) { var _a; return ov.option_id === ((_a = context.product.options[i]) === null || _a === void 0 ? void 0 : _a.id); })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
                    },
                    entityName: "variant",
                },
            };
        };
        var this_4 = this;
        for (var i = 0; i < maxOptionsCount; ++i) {
            _loop_4(i);
        }
    };
    ProductExportStrategy.prototype.appendMoneyAmountDescriptors = function (pricesData) {
        var e_1, _a;
        var columnNameBuilder = this.columnsDefinition["Price Currency"]
            .exportDescriptor
            .buildDynamicColumnName;
        var _loop_5 = function (priceData) {
            if (priceData.currency_code) {
                var columnName = columnNameBuilder(priceData);
                this_5.columnsDefinition[columnName] = {
                    name: columnName,
                    exportDescriptor: {
                        accessor: function (variant) {
                            var price = variant.prices.find(function (variantPrice) {
                                return (variantPrice.currency_code &&
                                    priceData.currency_code &&
                                    variantPrice.currency_code.toLowerCase() ===
                                        priceData.currency_code.toLowerCase());
                            });
                            return (price === null || price === void 0 ? void 0 : price.amount)
                                ? (0, medusa_core_utils_1.humanizeAmount)(price === null || price === void 0 ? void 0 : price.amount, priceData.currency_code).toString()
                                : "";
                        },
                        entityName: "variant",
                    },
                };
            }
            if (priceData.region) {
                var columnNameBuilder_1 = this_5.columnsDefinition["Price Region"]
                    .exportDescriptor
                    .buildDynamicColumnName;
                var columnName = columnNameBuilder_1(priceData);
                this_5.columnsDefinition[columnName] = {
                    name: columnName,
                    exportDescriptor: {
                        accessor: function (variant) {
                            var price = variant.prices.find(function (variantPrice) {
                                var _a, _b, _c, _d, _e, _f, _g, _h;
                                return (variantPrice.region &&
                                    priceData.region &&
                                    ((_b = (_a = variantPrice.region) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
                                        ((_d = (_c = priceData.region) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.toLowerCase()) &&
                                    ((_f = (_e = variantPrice.region) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.toLowerCase()) ===
                                        ((_h = (_g = priceData.region) === null || _g === void 0 ? void 0 : _g.id) === null || _h === void 0 ? void 0 : _h.toLowerCase()));
                            });
                            return (price === null || price === void 0 ? void 0 : price.amount)
                                ? (0, medusa_core_utils_1.humanizeAmount)(price === null || price === void 0 ? void 0 : price.amount, priceData.region.currency_code).toString()
                                : "";
                        },
                        entityName: "variant",
                    },
                };
            }
        };
        var this_5 = this;
        try {
            for (var pricesData_1 = __values(pricesData), pricesData_1_1 = pricesData_1.next(); !pricesData_1_1.done; pricesData_1_1 = pricesData_1.next()) {
                var priceData = pricesData_1_1.value;
                _loop_5(priceData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pricesData_1_1 && !pricesData_1_1.done && (_a = pricesData_1.return)) _a.call(pricesData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ProductExportStrategy.prototype.buildProductVariantLines = function (product) {
        var e_2, _a, e_3, _b;
        var outputLineData = [];
        try {
            for (var _c = __values(product.variants), _d = _c.next(); !_d.done; _d = _c.next()) {
                var variant = _d.value;
                var variantLineData = [];
                try {
                    for (var _e = (e_3 = void 0, __values(Object.entries(this.columnsDefinition))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var _g = __read(_f.value, 2), columnSchema = _g[1].exportDescriptor;
                        if (!columnSchema || "isDynamic" in columnSchema) {
                            continue;
                        }
                        if (columnSchema.entityName === "product") {
                            var formattedContent = (0, utils_2.csvCellContentFormatter)(columnSchema.accessor(product));
                            variantLineData.push(formattedContent);
                        }
                        if (columnSchema.entityName === "variant") {
                            var formattedContent = (0, utils_2.csvCellContentFormatter)(columnSchema.accessor(variant, { product: product }));
                            variantLineData.push(formattedContent);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                outputLineData.push(variantLineData.join(this.DELIMITER_) + this.NEWLINE_);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return outputLineData;
    };
    ProductExportStrategy.prototype.onProcessCanceled = function (batchJobId, fileKey) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.fileService_
                                .withTransaction(transactionManager)
                                .delete({ fileKey: fileKey })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.batchJobService_
                                .withTransaction(transactionManager)
                                .update(batchJobId, {
                                result: {
                                    file_key: undefined,
                                    file_size: undefined,
                                },
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return the maximum number of each relation that must appears in the export.
     * The number of item of a relation can vary between 0-Infinity and therefore the number of columns
     * that will be added to the export correspond to that number
     * @param products - The main entity to get the relation shape from
     * @return ({
     *   optionColumnCount: number
     *   imageColumnCount: number
     *   salesChannelsColumnCount: number
     *   pricesData: Set<string>
     * })
     * @private
     */
    ProductExportStrategy.prototype.getProductRelationsDynamicColumnsShape = function (products) {
        var e_4, _a, e_5, _b;
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var optionColumnCount = 0;
        var imageColumnCount = 0;
        var salesChannelsColumnCount = 0;
        var productCategoriesColumnCount = 0;
        var pricesData = new Set();
        try {
            // Retrieve the highest count of each object to build the dynamic columns later
            for (var products_1 = __values(products), products_1_1 = products_1.next(); !products_1_1.done; products_1_1 = products_1.next()) {
                var product = products_1_1.value;
                var optionsCount = (_d = (_c = product === null || product === void 0 ? void 0 : product.options) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
                optionColumnCount = Math.max(optionColumnCount, optionsCount);
                var imageCount = (_f = (_e = product === null || product === void 0 ? void 0 : product.images) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0;
                imageColumnCount = Math.max(imageColumnCount, imageCount);
                if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) {
                    var salesChannelCount = (_h = (_g = product === null || product === void 0 ? void 0 : product.sales_channels) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0;
                    salesChannelsColumnCount = Math.max(salesChannelsColumnCount, salesChannelCount);
                }
                if (this.featureFlagRouter_.isFeatureEnabled(product_categories_1.default.key)) {
                    var categoriesCount = (_k = (_j = product === null || product === void 0 ? void 0 : product.categories) === null || _j === void 0 ? void 0 : _j.length) !== null && _k !== void 0 ? _k : 0;
                    productCategoriesColumnCount = Math.max(productCategoriesColumnCount, categoriesCount);
                }
                try {
                    for (var _o = (e_5 = void 0, __values((_l = product === null || product === void 0 ? void 0 : product.variants) !== null && _l !== void 0 ? _l : [])), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var variant = _p.value;
                        if ((_m = variant.prices) === null || _m === void 0 ? void 0 : _m.length) {
                            variant.prices.forEach(function (price) {
                                pricesData.add(JSON.stringify({
                                    currency_code: price.currency_code,
                                    region: price.region
                                        ? {
                                            currency_code: price.region.currency_code,
                                            name: price.region.name,
                                            id: price.region.id,
                                        }
                                        : null,
                                }));
                            });
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_b = _o.return)) _b.call(_o);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (products_1_1 && !products_1_1.done && (_a = products_1.return)) _a.call(products_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return {
            optionColumnCount: optionColumnCount,
            imageColumnCount: imageColumnCount,
            salesChannelsColumnCount: salesChannelsColumnCount,
            productCategoriesColumnCount: productCategoriesColumnCount,
            pricesData: pricesData,
        };
    };
    ProductExportStrategy.identifier = "product-export-strategy";
    ProductExportStrategy.batchType = "product-export";
    return ProductExportStrategy;
}(interfaces_1.AbstractBatchJobStrategy));
exports.default = ProductExportStrategy;
//# sourceMappingURL=export.js.map