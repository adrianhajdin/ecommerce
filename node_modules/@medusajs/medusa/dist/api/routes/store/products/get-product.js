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
exports.StoreGetProductsProductParams = void 0;
var class_validator_1 = require("class-validator");
var utils_1 = require("@medusajs/utils");
var price_selection_1 = require("../../../../types/price-selection");
var utils_2 = require("../../../../utils");
var index_1 = require("./index");
/**
 * @oas [get] /store/products/{id}
 * operationId: GetProductsProduct
 * summary: Get a Product
 * description: |
 *   Retrieve a Product's details. For accurate and correct pricing of the product based on the customer's context, it's highly recommended to pass fields such as
 *   `region_id`, `currency_code`, and `cart_id` when available.
 *
 *   Passing `sales_channel_id` ensures retrieving only products available in the current sales channel.
 *   You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 * externalDocs:
 *   description: "How to pass product pricing parameters"
 *   url: "https://docs.medusajs.com/modules/products/storefront/show-products#product-pricing-parameters"
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 *   - (query) sales_channel_id {string} The ID of the sales channel the customer is viewing the product from.
 *   - (query) cart_id {string} The ID of the cart. This is useful for accurate pricing based on the cart's context.
 *   - (query) region_id {string} The ID of the region. This is useful for accurate pricing based on the selected region.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product.
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
 *   method: retrieve
 *   queryParams: StoreGetProductsProductParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.products.retrieve(productId)
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProduct } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *       }
 *
 *       const Product = ({ productId }: Props) => {
 *         const { product, isLoading } = useProduct(productId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product && <span>{product.title}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Product
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/products/{id}'
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreProductsRes"
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
    var id, validated, customer_id, productVariantInventoryService, productService, pricingService, cartService, regionService, featureFlagRouter, rawProduct, sales_channel_id, regionId, currencyCode, cart, region, decoratedProduct, shouldSetPricing, shouldSetAvailability, decoratePromises;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                id = req.params.id;
                validated = req.validatedQuery;
                customer_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id;
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                cartService = req.scope.resolve("cartService");
                regionService = req.scope.resolve("regionService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                return [4 /*yield*/, getProductWithIsolatedProductModule(req, id)];
            case 1:
                rawProduct = _d.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, productService.retrieve(id, req.retrieveConfig)];
            case 3:
                rawProduct = _d.sent();
                _d.label = 4;
            case 4:
                sales_channel_id = validated.sales_channel_id;
                if (((_b = req.publishableApiKeyScopes) === null || _b === void 0 ? void 0 : _b.sales_channel_ids.length) === 1) {
                    sales_channel_id = req.publishableApiKeyScopes.sales_channel_ids[0];
                }
                regionId = validated.region_id;
                currencyCode = validated.currency_code;
                if (!validated.cart_id) return [3 /*break*/, 7];
                return [4 /*yield*/, cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 5:
                cart = _d.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 6:
                region = _d.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _d.label = 7;
            case 7:
                decoratedProduct = rawProduct;
                shouldSetPricing = ["variants", "variants.prices"].every(function (relation) { var _a; return (_a = req.retrieveConfig.relations) === null || _a === void 0 ? void 0 : _a.includes(relation); });
                shouldSetAvailability = (_c = req.retrieveConfig.relations) === null || _c === void 0 ? void 0 : _c.includes("variants");
                decoratePromises = [];
                if (shouldSetPricing) {
                    decoratePromises.push(pricingService.setProductPrices([decoratedProduct], {
                        cart_id: validated.cart_id,
                        customer_id: customer_id,
                        region_id: regionId,
                        currency_code: currencyCode,
                        include_discount_prices: true,
                    }));
                }
                if (shouldSetAvailability) {
                    decoratePromises.push(productVariantInventoryService.setProductAvailability([decoratedProduct], sales_channel_id));
                }
                // We can run them concurrently as the new properties are assigned to the references
                // of the appropriate entity
                return [4 /*yield*/, (0, utils_1.promiseAll)(decoratePromises)];
            case 8:
                // We can run them concurrently as the new properties are assigned to the references
                // of the appropriate entity
                _d.sent();
                res.json({
                    product: (0, utils_2.cleanResponseData)(decoratedProduct, req.allowedProperties || []),
                });
                return [2 /*return*/];
        }
    });
}); });
function getProductWithIsolatedProductModule(req, id) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var remoteQuery, variables, query, _b, product;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    remoteQuery = req.scope.resolve("remoteQuery");
                    variables = { id: id };
                    query = {
                        product: __assign({ __args: variables }, index_1.defaultStoreProductRemoteQueryObject),
                    };
                    return [4 /*yield*/, remoteQuery(query)];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 1]), product = _b[0];
                    if (!product) {
                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Product with id: ".concat(id, " not found"));
                    }
                    product.profile_id = (_a = product.profile) === null || _a === void 0 ? void 0 : _a.id;
                    return [2 /*return*/, product];
            }
        });
    });
}
var StoreGetProductsProductParams = /** @class */ (function (_super) {
    __extends(StoreGetProductsProductParams, _super);
    function StoreGetProductsProductParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsProductParams.prototype, "sales_channel_id", void 0);
    return StoreGetProductsProductParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetProductsProductParams = StoreGetProductsProductParams;
//# sourceMappingURL=get-product.js.map