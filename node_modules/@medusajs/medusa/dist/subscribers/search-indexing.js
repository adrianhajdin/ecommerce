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
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var product_categories_1 = __importDefault(require("../loaders/feature-flags/product-categories"));
var search_index_1 = require("../loaders/search-index");
var product_1 = __importDefault(require("../services/product"));
var SearchIndexingSubscriber = /** @class */ (function () {
    function SearchIndexingSubscriber(_a) {
        var eventBusService = _a.eventBusService, searchService = _a.searchService, productService = _a.productService, featureFlagRouter = _a.featureFlagRouter;
        var _this = this;
        this.indexDocuments = function () { return __awaiter(_this, void 0, void 0, function () {
            var TAKE, hasMore, lastSeenId, products;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        TAKE = (_c = (_b = (_a = this.searchService_) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.batch_size) !== null && _c !== void 0 ? _c : 1000;
                        hasMore = true;
                        lastSeenId = "";
                        _d.label = 1;
                    case 1:
                        if (!hasMore) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.retrieveNextProducts(lastSeenId, TAKE)];
                    case 2:
                        products = _d.sent();
                        if (!(products.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.searchService_.addDocuments(product_1.default.IndexName, products, medusa_core_utils_1.indexTypes.products)];
                    case 3:
                        _d.sent();
                        lastSeenId = products[products.length - 1].id;
                        return [3 /*break*/, 5];
                    case 4:
                        hasMore = false;
                        _d.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.eventBusService_ = eventBusService;
        this.searchService_ = searchService;
        this.productService_ = productService;
        this.featureFlagRouter_ = featureFlagRouter;
        this.eventBusService_.subscribe(search_index_1.SEARCH_INDEX_EVENT, this.indexDocuments);
    }
    SearchIndexingSubscriber.prototype.retrieveNextProducts = function (lastSeenId, take) {
        return __awaiter(this, void 0, void 0, function () {
            var relations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relations = __spreadArray([], __read(utils_1.defaultSearchIndexingProductRelations), false);
                        if (this.featureFlagRouter_.isFeatureEnabled(product_categories_1.default.key)) {
                            relations.push("categories");
                        }
                        return [4 /*yield*/, this.productService_.list({ id: { gt: lastSeenId } }, {
                                relations: relations,
                                take: take,
                                order: { id: "ASC" },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SearchIndexingSubscriber;
}());
exports.default = SearchIndexingSubscriber;
//# sourceMappingURL=search-indexing.js.map