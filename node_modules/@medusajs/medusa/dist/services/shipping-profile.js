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
var models_1 = require("../models");
var utils_2 = require("../utils");
/**
 * Provides layer to manipulate profiles.
 * @constructor
 * @implements {BaseService}
 */
var ShippingProfileService = /** @class */ (function (_super) {
    __extends(ShippingProfileService, _super);
    function ShippingProfileService(_a) {
        var shippingProfileRepository = _a.shippingProfileRepository, productService = _a.productService, productRepository = _a.productRepository, shippingOptionService = _a.shippingOptionService, customShippingOptionService = _a.customShippingOptionService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.shippingProfileRepository_ = shippingProfileRepository;
        _this.productService_ = productService;
        _this.productRepository_ = productRepository;
        _this.shippingOptionService_ = shippingOptionService;
        _this.customShippingOptionService_ = customShippingOptionService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * @param selector - the query object for find
     * @param config - the config object for find
     * @return the result of the find operation
     */
    ShippingProfileService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { relations: [], skip: 0, take: 10 }; }
        return __awaiter(this, void 0, void 0, function () {
            var shippingProfileRepo, query;
            return __generator(this, function (_a) {
                shippingProfileRepo = this.activeManager_.withRepository(this.shippingProfileRepository_);
                query = (0, utils_2.buildQuery)(selector, config);
                return [2 /*return*/, shippingProfileRepo.find(query)];
            });
        });
    };
    ShippingProfileService.prototype.getMapProfileIdsByProductIds = function (productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var mappedProfiles, shippingProfiles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mappedProfiles = new Map();
                        if (!(productIds === null || productIds === void 0 ? void 0 : productIds.length)) {
                            return [2 /*return*/, mappedProfiles];
                        }
                        return [4 /*yield*/, this.shippingProfileRepository_.find({
                                select: {
                                    id: true,
                                    products: {
                                        id: true,
                                    },
                                },
                                where: {
                                    products: {
                                        id: (0, typeorm_1.In)(productIds),
                                    },
                                },
                                relations: {
                                    products: true,
                                },
                            })];
                    case 1:
                        shippingProfiles = _a.sent();
                        shippingProfiles.forEach(function (profile) {
                            profile.products.forEach(function (product) {
                                mappedProfiles.set(product.id, profile.id);
                            });
                        });
                        return [2 /*return*/, mappedProfiles];
                }
            });
        });
    };
    /**
     * Gets a profile by id.
     * Throws in case of DB Error and if profile was not found.
     * @param profileId - the id of the profile to get.
     * @param options - options opf the query.
     * @return {Promise<Product>} the profile document.
     */
    ShippingProfileService.prototype.retrieve = function (profileId, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var profileRepository, query, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(profileId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"profileId\" must be defined");
                        }
                        profileRepository = this.activeManager_.withRepository(this.shippingProfileRepository_);
                        query = (0, utils_2.buildQuery)({ id: profileId }, options);
                        return [4 /*yield*/, profileRepository.findOne(query)];
                    case 1:
                        profile = _a.sent();
                        if (!profile) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Profile with id: ".concat(profileId, " was not found"));
                        }
                        return [2 /*return*/, profile];
                }
            });
        });
    };
    ShippingProfileService.prototype.retrieveForProducts = function (productIds) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var profileRepository, productProfilesMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(productIds)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"productIds\" must be defined");
                        }
                        productIds = (0, utils_2.isString)(productIds) ? [productIds] : productIds;
                        profileRepository = this.activeManager_.withRepository(this.shippingProfileRepository_);
                        return [4 /*yield*/, profileRepository.findByProducts(productIds)];
                    case 1:
                        productProfilesMap = _b.sent();
                        if (!((_a = Object.keys(productProfilesMap)) === null || _a === void 0 ? void 0 : _a.length)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "No Profile found for products with id: ".concat(productIds.join(", ")));
                        }
                        return [2 /*return*/, productProfilesMap];
                }
            });
        });
    };
    ShippingProfileService.prototype.retrieveDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profileRepository, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profileRepository = this.activeManager_.withRepository(this.shippingProfileRepository_);
                        return [4 /*yield*/, profileRepository.findOne({
                                where: { type: models_1.ShippingProfileType.DEFAULT },
                            })];
                    case 1:
                        profile = _a.sent();
                        return [2 /*return*/, profile];
                }
            });
        });
    };
    /**
     * Creates a default shipping profile, if this does not already exist.
     * @return {Promise<ShippingProfile>} the shipping profile
     */
    ShippingProfileService.prototype.createDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profile, profileRepository, toCreate, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveDefault()];
                                    case 1:
                                        profile = _a.sent();
                                        if (!!profile) return [3 /*break*/, 3];
                                        profileRepository = manager.withRepository(this.shippingProfileRepository_);
                                        toCreate = {
                                            type: models_1.ShippingProfileType.DEFAULT,
                                            name: "Default Shipping Profile",
                                        };
                                        created = profileRepository.create(toCreate);
                                        return [4 /*yield*/, profileRepository.save(created)];
                                    case 2:
                                        profile = _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, profile];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves the default gift card profile
     * @return the shipping profile for gift cards
     */
    ShippingProfileService.prototype.retrieveGiftCardDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profileRepository, giftCardProfile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profileRepository = this.activeManager_.withRepository(this.shippingProfileRepository_);
                        return [4 /*yield*/, profileRepository.findOne({
                                where: { type: models_1.ShippingProfileType.GIFT_CARD },
                            })];
                    case 1:
                        giftCardProfile = _a.sent();
                        return [2 /*return*/, giftCardProfile];
                }
            });
        });
    };
    /**
     * Creates a default shipping profile, for gift cards if unless it already
     * exists.
     * @return the shipping profile
     */
    ShippingProfileService.prototype.createGiftCardDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profile, profileRepository, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveGiftCardDefault()];
                                    case 1:
                                        profile = _a.sent();
                                        if (!!profile) return [3 /*break*/, 3];
                                        profileRepository = manager.withRepository(this.shippingProfileRepository_);
                                        created = profileRepository.create({
                                            type: models_1.ShippingProfileType.GIFT_CARD,
                                            name: "Gift Card Profile",
                                        });
                                        return [4 /*yield*/, profileRepository.save(created)];
                                    case 2:
                                        profile = _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, profile];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a new shipping profile.
     * @param profile - the shipping profile to create from
     * @return the result of the create operation
     */
    ShippingProfileService.prototype.create = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profileRepository, metadata, rest, created, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        profileRepository = manager.withRepository(this.shippingProfileRepository_);
                                        if (profile["products"] || profile["shipping_options"]) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Please add products and shipping_options after creating Shipping Profiles");
                                        }
                                        metadata = profile.metadata, rest = __rest(profile, ["metadata"]);
                                        created = profileRepository.create(rest);
                                        if (metadata) {
                                            created.metadata = (0, utils_2.setMetadata)(created, metadata);
                                        }
                                        return [4 /*yield*/, profileRepository.save(created)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a profile. Metadata updates and product updates should use
     * dedicated methods, e.g. `setMetadata`, `addProduct`, etc. The function
     * will throw errors if metadata or product updates are attempted.
     * @param profileId - the id of the profile. Must be a string that
     *   can be casted to an ObjectId
     * @param update - an object with the update values.
     * @return resolves to the update result.
     */
    ShippingProfileService.prototype.update = function (profileId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profileRepository, profile, metadata, products, shipping_options, rest, _a, _b, _c, key, value;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        profileRepository = manager.withRepository(this.shippingProfileRepository_);
                                        return [4 /*yield*/, this.retrieve(profileId)];
                                    case 1:
                                        profile = _e.sent();
                                        metadata = update.metadata, products = update.products, shipping_options = update.shipping_options, rest = __rest(update, ["metadata", "products", "shipping_options"]);
                                        if (!products) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.addProduct(profile.id, products)];
                                    case 2:
                                        _e.sent();
                                        _e.label = 3;
                                    case 3:
                                        if (!shipping_options) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.addShippingOption(profile.id, shipping_options)];
                                    case 4:
                                        _e.sent();
                                        _e.label = 5;
                                    case 5:
                                        if (metadata) {
                                            profile.metadata = (0, utils_2.setMetadata)(profile, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                profile[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, profileRepository.save(profile)];
                                    case 6: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a profile with a given profile id.
     * @param profileId - the id of the profile to delete. Must be
     *   castable as an ObjectId
     * @return the result of the delete operation.
     */
    ShippingProfileService.prototype.delete = function (profileId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profileRepo, profile;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        profileRepo = manager.withRepository(this.shippingProfileRepository_);
                                        return [4 /*yield*/, profileRepo.findOne({ where: { id: profileId } })];
                                    case 1:
                                        profile = _a.sent();
                                        if (!profile) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, profileRepo.softRemove(profile)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated use {@link addProducts} instead
     */
    ShippingProfileService.prototype.addProduct = function (profileId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addProducts(profileId, productId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a product or an array of products to the profile.
     * @param profileId - the profile to add the products to.
     * @param productId - the ID of the product or multiple products to add.
     * @return the result of update
     */
    ShippingProfileService.prototype.addProducts = function (profileId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productServiceTx;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productServiceTx = this.productService_.withTransaction(manager);
                                        return [4 /*yield*/, productServiceTx.updateShippingProfile((0, utils_2.isString)(productId) ? [productId] : productId, profileId)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(profileId)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a product or an array of products from the profile.
     * @param profileId - the profile to add the products to.
     * @param productId - the ID of the product or multiple products to add.
     * @return the result of update
     */
    ShippingProfileService.prototype.removeProducts = function (profileId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productServiceTx;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productServiceTx = this.productService_.withTransaction(manager);
                                        return [4 /*yield*/, productServiceTx.updateShippingProfile((0, utils_2.isString)(productId) ? [productId] : productId, null)];
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
    /**
     * Adds a shipping option to the profile. The shipping option can be used to
     * fulfill the products in the products field.
     * @param profileId - the profile to apply the shipping option to
     * @param optionId - the ID of the option or multiple options to add to the profile
     * @return the result of the model update operation
     */
    ShippingProfileService.prototype.addShippingOption = function (profileId, optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var shippingOptionServiceTx;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(manager);
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingProfile((0, utils_2.isString)(optionId) ? [optionId] : optionId, profileId)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(profileId, {
                                                relations: ["products.profiles", "shipping_options.profile"],
                                            })];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Finds all the shipping profiles that cover the products in a cart, and
     * validates all options that are available for the cart.
     * @param cart - the cart object to find shipping options for
     * @return a list of the available shipping options
     */
    ShippingProfileService.prototype.fetchCartOptions = function (cart) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var profileIds, selector, customShippingOptions, hasCustomShippingOptions, rawOpts, customShippingOptionsMap_1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getProfilesInCart(cart)];
                                    case 1:
                                        profileIds = _a.sent();
                                        selector = {
                                            profile_id: profileIds,
                                            admin_only: false,
                                        };
                                        return [4 /*yield*/, this.customShippingOptionService_
                                                .withTransaction(manager)
                                                .list({
                                                cart_id: cart.id,
                                            }, { select: ["id", "shipping_option_id", "price"] })];
                                    case 2:
                                        customShippingOptions = _a.sent();
                                        hasCustomShippingOptions = customShippingOptions === null || customShippingOptions === void 0 ? void 0 : customShippingOptions.length;
                                        // if there are custom shipping options associated with the cart, use those
                                        if (hasCustomShippingOptions) {
                                            selector.id = customShippingOptions.map(function (cso) { return cso.shipping_option_id; });
                                        }
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(manager)
                                                .list(selector, {
                                                relations: ["requirements", "profile"],
                                            })
                                            // if there are custom shipping options associated with the cart, return cart shipping options with custom price
                                        ];
                                    case 3:
                                        rawOpts = _a.sent();
                                        // if there are custom shipping options associated with the cart, return cart shipping options with custom price
                                        if (hasCustomShippingOptions) {
                                            customShippingOptionsMap_1 = new Map();
                                            customShippingOptions.forEach(function (option) {
                                                customShippingOptionsMap_1.set(option.shipping_option_id, option);
                                            });
                                            return [2 /*return*/, rawOpts.map(function (so) {
                                                    var customOption = customShippingOptionsMap_1.get(so.id);
                                                    return __assign(__assign({}, so), { amount: customOption === null || customOption === void 0 ? void 0 : customOption.price });
                                                })];
                                        }
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(rawOpts.map(function (so) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.shippingOptionService_
                                                                .withTransaction(manager)
                                                                .validateCartOption(so, cart)
                                                                .catch(function () { return null; })]; // if validateCartOption fails it means the option is not valid
                                                        case 1: return [2 /*return*/, _a.sent()]; // if validateCartOption fails it means the option is not valid
                                                    }
                                                });
                                            }); }))];
                                    case 4: return [2 /*return*/, (_a.sent()).filter(function (option) { return !!option; })];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a list of all the productIds in the cart.
     * @param cart - the cart to extract products from
     * @return a list of product ids
     */
    ShippingProfileService.prototype.getProfilesInCart = function (cart) {
        return __awaiter(this, void 0, void 0, function () {
            var profileIds, productShippinProfileMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profileIds = new Set();
                        if (!this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getMapProfileIdsByProductIds(cart.items.map(function (item) { var _a; return (_a = item.variant) === null || _a === void 0 ? void 0 : _a.product_id; }))];
                    case 1:
                        productShippinProfileMap = _a.sent();
                        profileIds = new Set(__spreadArray([], __read(productShippinProfileMap.values()), false));
                        return [3 /*break*/, 3];
                    case 2:
                        cart.items.forEach(function (item) {
                            var _a;
                            if ((_a = item.variant) === null || _a === void 0 ? void 0 : _a.product) {
                                profileIds.add(item.variant.product.profile_id);
                            }
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/, __spreadArray([], __read(profileIds), false)];
                }
            });
        });
    };
    return ShippingProfileService;
}(interfaces_1.TransactionBaseService));
exports.default = ShippingProfileService;
//# sourceMappingURL=shipping-profile.js.map