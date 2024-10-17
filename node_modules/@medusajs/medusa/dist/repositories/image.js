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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRepository = void 0;
var typeorm_1 = require("typeorm");
var database_1 = require("../loaders/database");
var models_1 = require("../models");
exports.ImageRepository = database_1.dataSource.getRepository(models_1.Image).extend({
    insertBulk: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, rawImages_1, rawImages;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = this.createQueryBuilder()
                            .insert()
                            .into(models_1.Image)
                            .values(data);
                        if (!!queryBuilder.connection.driver.isReturningSqlSupported("insert")) return [3 /*break*/, 2];
                        return [4 /*yield*/, queryBuilder.execute()];
                    case 1:
                        rawImages_1 = _a.sent();
                        return [2 /*return*/, rawImages_1.generatedMaps.map(function (d) { return _this.create(d); })];
                    case 2: return [4 /*yield*/, queryBuilder.returning("*").execute()];
                    case 3:
                        rawImages = _a.sent();
                        return [2 /*return*/, rawImages.generatedMaps.map(function (d) { return _this.create(d); })];
                }
            });
        });
    },
    upsertImages: function (imageUrls) {
        return __awaiter(this, void 0, void 0, function () {
            var existingImages, existingImagesMap, upsertedImgs, imageToCreate, newImgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find({
                            where: {
                                url: (0, typeorm_1.In)(imageUrls),
                            },
                        })];
                    case 1:
                        existingImages = _a.sent();
                        existingImagesMap = new Map(existingImages.map(function (img) { return [img.url, img]; }));
                        upsertedImgs = [];
                        imageToCreate = [];
                        imageUrls.forEach(function (url) {
                            var aImg = existingImagesMap.get(url);
                            if (aImg) {
                                upsertedImgs.push(aImg);
                            }
                            else {
                                var newImg = _this.create({ url: url });
                                imageToCreate.push(newImg);
                            }
                        });
                        if (!imageToCreate.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.insertBulk(imageToCreate)];
                    case 2:
                        newImgs = _a.sent();
                        upsertedImgs.push.apply(upsertedImgs, __spreadArray([], __read(newImgs), false));
                        _a.label = 3;
                    case 3: return [2 /*return*/, upsertedImgs];
                }
            });
        });
    },
});
exports.default = exports.ImageRepository;
//# sourceMappingURL=image.js.map