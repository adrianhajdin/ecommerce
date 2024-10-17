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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var interfaces_1 = require("../../../interfaces");
var sales_channels_1 = __importDefault(require("../../../loaders/feature-flags/sales-channels"));
var batch_job_1 = require("../../../types/batch-job");
var get_query_config_1 = require("../../../utils/get-query-config");
var OrderExportStrategy = /** @class */ (function (_super) {
    __extends(OrderExportStrategy, _super);
    function OrderExportStrategy(_a) {
        var fileService = _a.fileService, batchJobService = _a.batchJobService, orderService = _a.orderService, manager = _a.manager, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.defaultMaxRetry = 3;
        _this.DEFAULT_LIMIT = 100;
        _this.NEWLINE = "\r\n";
        _this.DELIMITER = ";";
        _this.orderExportPropertiesDescriptors = __spreadArray([], __read(_1.orderExportPropertiesDescriptors), false);
        _this.defaultRelations_ = ["customer", "shipping_address"];
        _this.defaultFields_ = [
            "id",
            "display_id",
            "status",
            "created_at",
            "fulfillment_status",
            "payment_status",
            "subtotal",
            "shipping_total",
            "discount_total",
            "gift_card_total",
            "refunded_total",
            "tax_total",
            "total",
            "currency_code",
            "region_id",
        ];
        _this.manager_ = manager;
        _this.fileService_ = fileService;
        _this.batchJobService_ = batchJobService;
        _this.orderService_ = orderService;
        _this.featureFlagRouter_ = featureFlagRouter;
        if (featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key)) {
            _this.defaultRelations_.push("sales_channel");
            _this.addSalesChannelColumns();
        }
        return _this;
    }
    OrderExportStrategy.prototype.prepareBatchJobForProcessing = function (batchJob, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, limit, offset, order, fields, expand, filterable_fields, context, listConfig;
            return __generator(this, function (_b) {
                _a = batchJob.context, limit = _a.limit, offset = _a.offset, order = _a.order, fields = _a.fields, expand = _a.expand, filterable_fields = _a.filterable_fields, context = __rest(_a, ["limit", "offset", "order", "fields", "expand", "filterable_fields"]);
                listConfig = (0, get_query_config_1.prepareListQuery)({
                    limit: limit,
                    offset: offset,
                    order: order,
                    fields: fields,
                    expand: expand,
                }, {
                    isList: true,
                    defaultRelations: this.defaultRelations_,
                    defaultFields: this.defaultFields_,
                }).listConfig;
                batchJob.context = __assign(__assign({}, (context !== null && context !== void 0 ? context : {})), { list_config: listConfig, filterable_fields: filterable_fields });
                return [2 /*return*/, batchJob];
            });
        });
    };
    OrderExportStrategy.prototype.preProcessBatchJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob, offset, limit, _a, _b, list_config, _c, filterable_fields, count, _d, orderCount;
                            var _e, _f, _g, _h, _j, _k, _l, _m;
                            return __generator(this, function (_o) {
                                switch (_o.label) {
                                    case 0: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(transactionManager)
                                            .retrieve(batchJobId)];
                                    case 1:
                                        batchJob = (_o.sent());
                                        offset = (_g = (_f = (_e = batchJob.context) === null || _e === void 0 ? void 0 : _e.list_config) === null || _f === void 0 ? void 0 : _f.skip) !== null && _g !== void 0 ? _g : 0;
                                        limit = (_k = (_j = (_h = batchJob.context) === null || _h === void 0 ? void 0 : _h.list_config) === null || _j === void 0 ? void 0 : _j.take) !== null && _k !== void 0 ? _k : this.DEFAULT_LIMIT;
                                        _a = batchJob.context, _b = _a.list_config, list_config = _b === void 0 ? {} : _b, _c = _a.filterable_fields, filterable_fields = _c === void 0 ? {} : _c;
                                        count = (_l = batchJob.context) === null || _l === void 0 ? void 0 : _l.batch_size;
                                        if (!!count) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.orderService_
                                                .withTransaction(transactionManager)
                                                .listAndCount(filterable_fields, __assign(__assign({}, (list_config !== null && list_config !== void 0 ? list_config : {})), { skip: offset, order: { created_at: "DESC" }, take: Math.min((_m = batchJob.context.batch_size) !== null && _m !== void 0 ? _m : Infinity, limit) }))];
                                    case 2:
                                        _d = __read.apply(void 0, [_o.sent(), 2]), orderCount = _d[1];
                                        count = orderCount;
                                        _o.label = 3;
                                    case 3: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(transactionManager)
                                            .update(batchJob, {
                                            result: {
                                                stat_descriptors: [
                                                    {
                                                        key: "order-export-count",
                                                        name: "Order count to export",
                                                        message: "There will be ".concat(count, " orders exported by this action"),
                                                    },
                                                ],
                                            },
                                        })];
                                    case 4:
                                        _o.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderExportStrategy.prototype.processJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, limit, advancementCount, orderCount, approximateFileSize;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offset = 0;
                        limit = this.DEFAULT_LIMIT;
                        advancementCount = 0;
                        orderCount = 0;
                        approximateFileSize = 0;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var batchJob, _a, writeStream, fileKey, promise, _b, _c, list_config, _d, filterable_fields, _e, count, orders, lineDescriptor, header;
                                var _this = this;
                                var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                                return __generator(this, function (_s) {
                                    switch (_s.label) {
                                        case 0: return [4 /*yield*/, this.batchJobService_
                                                .withTransaction(transactionManager)
                                                .retrieve(batchJobId)];
                                        case 1:
                                            batchJob = (_s.sent());
                                            return [4 /*yield*/, this.fileService_
                                                    .withTransaction(transactionManager)
                                                    .getUploadStreamDescriptor({
                                                    name: "exports/orders/order-export-".concat(Date.now()),
                                                    ext: "csv",
                                                })];
                                        case 2:
                                            _a = _s.sent(), writeStream = _a.writeStream, fileKey = _a.fileKey, promise = _a.promise;
                                            advancementCount =
                                                (_g = (_f = batchJob.result) === null || _f === void 0 ? void 0 : _f.advancement_count) !== null && _g !== void 0 ? _g : advancementCount;
                                            offset = ((_k = (_j = (_h = batchJob.context) === null || _h === void 0 ? void 0 : _h.list_config) === null || _j === void 0 ? void 0 : _j.skip) !== null && _k !== void 0 ? _k : 0) + advancementCount;
                                            limit = (_o = (_m = (_l = batchJob.context) === null || _l === void 0 ? void 0 : _l.list_config) === null || _m === void 0 ? void 0 : _m.take) !== null && _o !== void 0 ? _o : limit;
                                            _b = batchJob.context, _c = _b.list_config, list_config = _c === void 0 ? {} : _c, _d = _b.filterable_fields, filterable_fields = _d === void 0 ? {} : _d;
                                            return [4 /*yield*/, this.orderService_.listAndCount(filterable_fields, __assign(__assign({}, list_config), { order: { created_at: "DESC" }, skip: offset, take: Math.min((_p = batchJob.context.batch_size) !== null && _p !== void 0 ? _p : Infinity, limit) }))];
                                        case 3:
                                            _e = __read.apply(void 0, [_s.sent(), 2]), count = _e[1];
                                            orderCount = (_r = (_q = batchJob.context) === null || _q === void 0 ? void 0 : _q.batch_size) !== null && _r !== void 0 ? _r : count;
                                            orders = [];
                                            lineDescriptor = this.getLineDescriptor(list_config.select, list_config.relations);
                                            header = this.buildHeader(lineDescriptor);
                                            writeStream.write(header);
                                            approximateFileSize += Buffer.from(header).byteLength;
                                            return [4 /*yield*/, this.batchJobService_
                                                    .withTransaction(transactionManager)
                                                    .update(batchJobId, {
                                                    result: {
                                                        file_key: fileKey,
                                                        file_size: approximateFileSize,
                                                    },
                                                })];
                                        case 4:
                                            _s.sent();
                                            _s.label = 5;
                                        case 5:
                                            if (!(offset < orderCount)) return [3 /*break*/, 10];
                                            return [4 /*yield*/, this.orderService_
                                                    .withTransaction(transactionManager)
                                                    .list(filterable_fields, __assign(__assign({}, list_config), { skip: offset, take: Math.min(orderCount - offset, limit) }))];
                                        case 6:
                                            orders = _s.sent();
                                            orders.forEach(function (order) {
                                                var line = _this.buildCSVLine(order, lineDescriptor);
                                                approximateFileSize += Buffer.from(line).byteLength;
                                                writeStream.write(line);
                                            });
                                            advancementCount += orders.length;
                                            offset += orders.length;
                                            return [4 /*yield*/, this.batchJobService_
                                                    .withTransaction(transactionManager)
                                                    .update(batchJobId, {
                                                    result: {
                                                        file_size: approximateFileSize,
                                                        count: orderCount,
                                                        advancement_count: advancementCount,
                                                        progress: advancementCount / orderCount,
                                                    },
                                                })];
                                        case 7:
                                            batchJob = (_s.sent());
                                            if (!(batchJob.status === batch_job_1.BatchJobStatus.CANCELED)) return [3 /*break*/, 9];
                                            writeStream.end();
                                            return [4 /*yield*/, this.fileService_
                                                    .withTransaction(transactionManager)
                                                    .delete({ fileKey: fileKey })];
                                        case 8:
                                            _s.sent();
                                            return [2 /*return*/];
                                        case 9: return [3 /*break*/, 5];
                                        case 10:
                                            writeStream.end();
                                            return [4 /*yield*/, promise];
                                        case 11:
                                            _s.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, "REPEATABLE READ", function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.handleProcessingError(batchJobId, err, {
                                            offset: offset,
                                            count: orderCount,
                                            progress: offset / orderCount,
                                        })];
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderExportStrategy.prototype.buildTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.buildHeader(this.getLineDescriptor(this.defaultFields_, this.defaultRelations_))];
            });
        });
    };
    OrderExportStrategy.prototype.buildHeader = function (lineDescriptor) {
        if (lineDescriptor === void 0) { lineDescriptor = this.orderExportPropertiesDescriptors; }
        return (__spreadArray([], __read(lineDescriptor.map(function (_a) {
            var title = _a.title;
            return title;
        })), false).join(this.DELIMITER) +
            this.NEWLINE);
    };
    OrderExportStrategy.prototype.buildCSVLine = function (order, lineDescriptor) {
        return (__spreadArray([], __read(lineDescriptor.map(function (_a) {
            var accessor = _a.accessor;
            return accessor(order);
        })), false).join(this.DELIMITER) + this.NEWLINE);
    };
    OrderExportStrategy.prototype.getLineDescriptor = function (fields, relations) {
        return this.orderExportPropertiesDescriptors.filter(function (_a) {
            var fieldName = _a.fieldName;
            return fields.indexOf(fieldName) !== -1 || relations.indexOf(fieldName) !== -1;
        });
    };
    OrderExportStrategy.prototype.addSalesChannelColumns = function () {
        this.orderExportPropertiesDescriptors.push({
            fieldName: "sales_channel",
            title: ["Sales channel name", "Sales channel description"].join(";"),
            accessor: function (order) {
                var _a, _b;
                return [
                    ((_a = order.sales_channel) === null || _a === void 0 ? void 0 : _a.name) || "",
                    ((_b = order.sales_channel) === null || _b === void 0 ? void 0 : _b.description) || "",
                ].join(";");
            },
        });
    };
    OrderExportStrategy.identifier = "order-export-strategy";
    OrderExportStrategy.batchType = "order-export";
    return OrderExportStrategy;
}(interfaces_1.AbstractBatchJobStrategy));
exports.default = OrderExportStrategy;
//# sourceMappingURL=export.js.map