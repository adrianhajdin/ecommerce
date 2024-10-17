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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetProductsParams = exports.StoreGetProductsPaginationParams = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var utils_1 = require("@medusajs/utils");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var common_1 = require("../../../../types/common");
var price_selection_1 = require("../../../../types/price-selection");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
var is_type_1 = require("../../../../utils/validators/is-type");
var product_categories_1 = require("../product-categories");
var index_1 = require("./index");
/**
 * @oas [get] /store/products
 * operationId: GetProducts
 * summary: List Products
 * description: |
 *   Retrieves a list of products. The products can be filtered by fields such as `id` or `q`. The products can also be sorted or paginated.
 *   This API Route can also be used to retrieve a product by its handle.
 *
 *   For accurate and correct pricing of the products based on the customer's context, it's highly recommended to pass fields such as
 *   `region_id`, `currency_code`, and `cart_id` when available.
 *
 *   Passing `sales_channel_id` ensures retrieving only products available in the specified sales channel.
 *   You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 * externalDocs:
 *   description: "How to retrieve a product by its handle"
 *   url: "https://docs.medusajs.com/modules/products/storefront/show-products#retrieve-product-by-handle"
 * parameters:
 *   - (query) q {string} term used to search products' title, description, variant's title, variant's sku, and collection's title.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by IDs.
 *     schema:
 *       oneOf:
 *         - type: string
 *         - type: array
 *           items:
 *             type: string
 *   - in: query
 *     name: sales_channel_id
 *     style: form
 *     explode: false
 *     description: "Filter by sales channel IDs. When provided, only products available in the selected sales channels are retrieved. Alternatively, you can pass a
 *      publishable API key in the request header and this will have the same effect."
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: collection_id
 *     style: form
 *     explode: false
 *     description: Filter by product collection IDs. When provided, only products that belong to the specified product collections are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: type_id
 *     style: form
 *     explode: false
 *     description: Filter by product type IDs. When provided, only products that belong to the specified product types are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: tags
 *     style: form
 *     explode: false
 *     description: Filter by product tag IDs. When provided, only products that belong to the specified product tags are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) title {string} Filter by title.
 *   - (query) description {string} Filter by description
 *   - (query) handle {string} Filter by handle.
 *   - (query) is_giftcard {boolean} Whether to retrieve regular products or gift-card products.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: category_id
 *     style: form
 *     explode: false
 *     description: Filter by product category IDs. When provided, only products that belong to the specified product categories are retrieved.
 *     schema:
 *       type: array
 *       x-featureFlag: "product_categories"
 *       items:
 *         type: string
 *   - in: query
 *     name: include_category_children
 *     style: form
 *     explode: false
 *     description: Whether to include child product categories when filtering using the `category_id` field.
 *     schema:
 *       type: boolean
 *       x-featureFlag: "product_categories"
 *   - (query) offset=0 {integer} The number of products to skip when retrieving the products.
 *   - (query) limit=100 {integer} Limit the number of products returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned products.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned products.
 *   - (query) order {string} A product field to sort-order the retrieved products by.
 *   - (query) cart_id {string} The ID of the cart. This is useful for accurate pricing based on the cart's context.
 *   - (query) region_id {string} The ID of the region. This is useful for accurate pricing based on the selected region.
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: A 3 character ISO currency code. This is useful for accurate pricing based on the selected currency.
 *     schema:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.products.list()
 *       .then(({ products, limit, offset, count }) => {
 *         console.log(products.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProducts } from "medusa-react"
 *
 *       const Products = () => {
 *         const { products, isLoading } = useProducts()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {products && !products.length && <span>No Products</span>}
 *             {products && products.length > 0 && (
 *               <ul>
 *                 {products.map((product) => (
 *                   <li key={product.id}>{product.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Products
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/products'
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreProductsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productService, productVariantInventoryService, pricingService, cartService, featureFlagRouter, validated, _a, cart_id, regionId, currencyCode, filterableFields, listConfig, isMedusaV2Enabled, promises, _b, _c, rawProducts, count, cart, computedProducts, shouldSetPricing, shouldSetAvailability, decoratePromises;
    var _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                productService = req.scope.resolve("productService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                pricingService = req.scope.resolve("pricingService");
                cartService = req.scope.resolve("cartService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                validated = req.validatedQuery;
                _a = req.filterableFields, cart_id = _a.cart_id, regionId = _a.region_id, currencyCode = _a.currency_code, filterableFields = __rest(_a, ["cart_id", "region_id", "currency_code"]);
                listConfig = req.listConfig;
                // get only published products for store endpoint
                filterableFields["status"] = ["published"];
                // store APIs only receive active and public categories to query from
                filterableFields["categories"] = __assign(__assign({}, (filterableFields.categories || {})), product_categories_1.defaultStoreCategoryScope);
                if ((_d = req.publishableApiKeyScopes) === null || _d === void 0 ? void 0 : _d.sales_channel_ids.length) {
                    filterableFields.sales_channel_id =
                        filterableFields.sales_channel_id ||
                            req.publishableApiKeyScopes.sales_channel_ids;
                    if (!listConfig.relations.includes("listConfig.relations")) {
                        listConfig.relations.push("sales_channels");
                    }
                }
                isMedusaV2Enabled = featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                promises = [];
                if (isMedusaV2Enabled) {
                    promises.push(listAndCountProductWithIsolatedProductModule(req, filterableFields, listConfig));
                }
                else {
                    promises.push(productService.listAndCount(filterableFields, listConfig));
                }
                if (validated.cart_id) {
                    promises.push(cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                        relations: ["region"],
                    }));
                }
                return [4 /*yield*/, (0, utils_1.promiseAll)(promises)];
            case 1:
                _b = __read.apply(void 0, [_g.sent(), 2]), _c = __read(_b[0], 2), rawProducts = _c[0], count = _c[1], cart = _b[1];
                if (validated.cart_id) {
                    regionId = cart.region_id;
                    currencyCode = cart.region.currency_code;
                }
                computedProducts = rawProducts;
                shouldSetPricing = ["variants", "variants.prices"].every(function (relation) { var _a; return (_a = listConfig.relations) === null || _a === void 0 ? void 0 : _a.includes(relation); });
                shouldSetAvailability = (_e = listConfig.relations) === null || _e === void 0 ? void 0 : _e.includes("variants");
                decoratePromises = [];
                if (shouldSetPricing) {
                    decoratePromises.push(pricingService.setProductPrices(computedProducts, {
                        cart_id: cart_id,
                        region_id: regionId,
                        currency_code: currencyCode,
                        customer_id: (_f = req.user) === null || _f === void 0 ? void 0 : _f.customer_id,
                        include_discount_prices: true,
                    }));
                }
                if (shouldSetAvailability) {
                    decoratePromises.push(productVariantInventoryService.setProductAvailability(computedProducts, filterableFields.sales_channel_id));
                }
                // We can run them concurrently as the new properties are assigned to the references
                // of the appropriate entity
                return [4 /*yield*/, (0, utils_1.promiseAll)(decoratePromises)];
            case 2:
                // We can run them concurrently as the new properties are assigned to the references
                // of the appropriate entity
                _g.sent();
                res.json({
                    products: (0, clean_response_data_1.cleanResponseData)(computedProducts, req.allowedProperties || []),
                    count: count,
                    offset: validated.offset,
                    limit: validated.limit,
                });
                return [2 /*return*/];
        }
    });
}); });
function listAndCountProductWithIsolatedProductModule(req, filterableFields, listConfig) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var remoteQuery, salesChannelIdFilter, salesChannelService, productIdsInSalesChannel, filteredProductIds, salesChannelProductIdsSet_1, variables, query, _b, products, count;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    remoteQuery = req.scope.resolve("remoteQuery");
                    salesChannelIdFilter = filterableFields.sales_channel_id;
                    if ((_a = req.publishableApiKeyScopes) === null || _a === void 0 ? void 0 : _a.sales_channel_ids.length) {
                        salesChannelIdFilter !== null && salesChannelIdFilter !== void 0 ? salesChannelIdFilter : (salesChannelIdFilter = req.publishableApiKeyScopes.sales_channel_ids);
                    }
                    delete filterableFields.sales_channel_id;
                    filterableFields["categories"] = {
                        $or: [
                            {
                                id: null,
                            },
                            __assign(__assign({}, (filterableFields.categories || {})), product_categories_1.defaultStoreCategoryScope),
                        ],
                    };
                    if (!salesChannelIdFilter) return [3 /*break*/, 2];
                    salesChannelService = req.scope.resolve("salesChannelService");
                    return [4 /*yield*/, salesChannelService.listProductIdsBySalesChannelIds(salesChannelIdFilter)];
                case 1:
                    productIdsInSalesChannel = _c.sent();
                    filteredProductIds = productIdsInSalesChannel[salesChannelIdFilter];
                    if (filterableFields.id) {
                        filterableFields.id = Array.isArray(filterableFields.id)
                            ? filterableFields.id
                            : [filterableFields.id];
                        salesChannelProductIdsSet_1 = new Set(filteredProductIds);
                        filteredProductIds = filterableFields.id.filter(function (productId) {
                            return salesChannelProductIdsSet_1.has(productId);
                        });
                    }
                    filterableFields.id = filteredProductIds;
                    _c.label = 2;
                case 2:
                    variables = {
                        filters: filterableFields,
                        order: listConfig.order,
                        skip: listConfig.skip,
                        take: listConfig.take,
                    };
                    query = {
                        product: __assign({ __args: variables }, index_1.defaultStoreProductRemoteQueryObject),
                    };
                    if (salesChannelIdFilter) {
                        query.product["sales_channels"]["__args"] = { id: salesChannelIdFilter };
                    }
                    return [4 /*yield*/, remoteQuery(query)];
                case 3:
                    _b = _c.sent(), products = _b.rows, count = _b.metadata.count;
                    products.forEach(function (product) {
                        var _a;
                        product.profile_id = (_a = product.profile) === null || _a === void 0 ? void 0 : _a.id;
                    });
                    return [2 /*return*/, [products, count]];
            }
        });
    });
}
/**
 * {@inheritDoc FindPaginationParams}
 */
var StoreGetProductsPaginationParams = /** @class */ (function (_super) {
    __extends(StoreGetProductsPaginationParams, _super);
    function StoreGetProductsPaginationParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        _this.offset = 0;
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 100
         */
        _this.limit = 100;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetProductsPaginationParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetProductsPaginationParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsPaginationParams.prototype, "order", void 0);
    return StoreGetProductsPaginationParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetProductsPaginationParams = StoreGetProductsPaginationParams;
/**
 * Parameters used to filter and configure the pagination of the retrieved products.
 */
var StoreGetProductsParams = /** @class */ (function (_super) {
    __extends(StoreGetProductsParams, _super);
    function StoreGetProductsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetProductsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "tags", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], StoreGetProductsParams.prototype, "is_giftcard", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "type_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)()]),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "category_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], StoreGetProductsParams.prototype, "include_category_children", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * {@inheritDoc FilterableProductProps.created_at}
         */
        )
    ], StoreGetProductsParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], StoreGetProductsParams.prototype, "updated_at", void 0);
    return StoreGetProductsParams;
}(StoreGetProductsPaginationParams));
exports.StoreGetProductsParams = StoreGetProductsParams;
//# sourceMappingURL=list-products.js.map