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
exports.ProductTagRepository = void 0;
var typeorm_1 = require("typeorm");
var product_tag_1 = require("../models/product-tag");
var database_1 = require("../loaders/database");
var utils_1 = require("@medusajs/utils");
exports.ProductTagRepository = database_1.dataSource
    .getRepository(product_tag_1.ProductTag)
    .extend({
    insertBulk: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, rawTags_1, rawTags;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = this.createQueryBuilder()
                            .insert()
                            .into(product_tag_1.ProductTag)
                            .values(data);
                        if (!!queryBuilder.connection.driver.isReturningSqlSupported("insert")) return [3 /*break*/, 2];
                        return [4 /*yield*/, queryBuilder.execute()];
                    case 1:
                        rawTags_1 = _a.sent();
                        return [2 /*return*/, rawTags_1.generatedMaps.map(function (d) { return _this.create(d); })];
                    case 2: return [4 /*yield*/, queryBuilder.returning("*").execute()];
                    case 3:
                        rawTags = _a.sent();
                        return [2 /*return*/, rawTags.generatedMaps.map(function (d) { return _this.create(d); })];
                }
            });
        });
    },
    listTagsByUsage: function (take) {
        if (take === void 0) { take = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("pt")
                            .select(["id", "COUNT(pts.product_tag_id) as usage_count", "value"])
                            .leftJoin("product_tags", "pts", "pt.id = pts.product_tag_id")
                            .groupBy("id")
                            .orderBy("usage_count", "DESC")
                            .limit(take);
                        return [4 /*yield*/, qb.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    upsertTags: function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            var tagsValues, existingTags, existingTagsMap, upsertedTags, tagsToCreate, tags_1, tags_1_1, tag, aTag, newTag, newTags;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tagsValues = tags.map(function (tag) { return tag.value; });
                        return [4 /*yield*/, this.find({
                                where: {
                                    value: (0, typeorm_1.In)(tagsValues),
                                },
                            })];
                    case 1:
                        existingTags = _b.sent();
                        existingTagsMap = new Map(existingTags.map(function (tag) { return [tag.value, tag]; }));
                        upsertedTags = [];
                        tagsToCreate = [];
                        try {
                            for (tags_1 = __values(tags), tags_1_1 = tags_1.next(); !tags_1_1.done; tags_1_1 = tags_1.next()) {
                                tag = tags_1_1.value;
                                aTag = existingTagsMap.get(tag.value);
                                if (aTag) {
                                    upsertedTags.push(aTag);
                                }
                                else {
                                    newTag = this.create(tag);
                                    tagsToCreate.push(newTag);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tags_1_1 && !tags_1_1.done && (_a = tags_1.return)) _a.call(tags_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!tagsToCreate.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.insertBulk(tagsToCreate)];
                    case 2:
                        newTags = _b.sent();
                        upsertedTags.push.apply(upsertedTags, __spreadArray([], __read(newTags), false));
                        _b.label = 3;
                    case 3: return [2 /*return*/, upsertedTags];
                }
            });
        });
    },
    findAndCountByDiscountConditionId: function (conditionId, query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("pt")
                            .where(query.where)
                            .setFindOptions(query)
                            .innerJoin("discount_condition_product_tag", "dc_pt", "dc_pt.product_tag_id = pt.id AND dc_pt.condition_id = :dcId", { dcId: conditionId });
                        return [4 /*yield*/, (0, utils_1.promiseAll)([qb.getMany(), qb.getCount()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
});
exports.default = exports.ProductTagRepository;
//# sourceMappingURL=product-tag.js.map