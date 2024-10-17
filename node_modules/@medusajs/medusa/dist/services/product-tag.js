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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var ProductTagService = /** @class */ (function (_super) {
    __extends(ProductTagService, _super);
    function ProductTagService(_a) {
        var productTagRepository = _a.productTagRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.tagRepo_ = productTagRepository;
        return _this;
    }
    /**
     * Retrieves a product tag by id.
     * @param tagId - the id of the product tag to retrieve
     * @param config - the config to retrieve the tag by
     * @return the collection.
     */
    ProductTagService.prototype.retrieve = function (tagId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tagRepo, query, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tagRepo = this.activeManager_.withRepository(this.tagRepo_);
                        query = (0, utils_1.buildQuery)({ id: tagId }, config);
                        return [4 /*yield*/, tagRepo.findOne(query)];
                    case 1:
                        tag = _a.sent();
                        if (!tag) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product tag with id: ".concat(tagId, " was not found"));
                        }
                        return [2 /*return*/, tag];
                }
            });
        });
    };
    /**
     * Creates a product tag
     * @param tag - the product tag to create
     * @return created product tag
     */
    ProductTagService.prototype.create = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var tagRepo, productTag;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        tagRepo = manager.withRepository(this.tagRepo_);
                                        productTag = tagRepo.create(tag);
                                        return [4 /*yield*/, tagRepo.save(productTag)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Lists product tags
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    ProductTagService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, tags;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), tags = _a[0];
                        return [2 /*return*/, tags];
                }
            });
        });
    };
    /**
     * Lists product tags and adds count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    ProductTagService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var tagRepo, q, discount_condition_id, query, discountConditionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tagRepo = this.activeManager_.withRepository(this.tagRepo_);
                        if ((0, utils_1.isString)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        if (selector.discount_condition_id) {
                            discount_condition_id = selector.discount_condition_id;
                            delete selector.discount_condition_id;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.where = query.where;
                        if (q) {
                            query.where.value = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        if (!discount_condition_id) return [3 /*break*/, 2];
                        discountConditionId = discount_condition_id;
                        return [4 /*yield*/, tagRepo.findAndCountByDiscountConditionId(discountConditionId, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, tagRepo.findAndCount(query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProductTagService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductTagService;
//# sourceMappingURL=product-tag.js.map