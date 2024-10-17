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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetVariantsVariantParams = void 0;
var class_validator_1 = require("class-validator");
var price_selection_1 = require("../../../../types/price-selection");
var validator_1 = require("../../../../utils/validator");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [get] /store/variants/{id}
 * operationId: GetVariantsVariant
 * summary: Get a Product Variant
 * description: |
 *   Retrieve a Product Variant's details. For accurate and correct pricing of the product variant based on the customer's context, it's highly recommended to pass fields such as
 *   `region_id`, `currency_code`, and `cart_id` when available.
 *
 *   Passing `sales_channel_id` ensures retrieving only variants of products available in the current sales channel.
 *   You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 * externalDocs:
 *   description: "How to pass product pricing parameters"
 *   url: "https://docs.medusajs.com/modules/products/storefront/show-products#product-pricing-parameters"
 * parameters:
 *   - (path) id=* {string} The ID of the Product Variant.
 *   - (query) sales_channel_id {string} The ID of the sales channel the customer is viewing the product variant from.
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
 *   method: retrieve
 *   queryParams: StoreGetVariantsVariantParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.product.variants.retrieve(productVariantId)
 *       .then(({ variant }) => {
 *         console.log(variant.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/variants/{id}'
 * tags:
 *   - Product Variants
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreVariantsRes"
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
    var id, validated, variantService, pricingService, productVariantInventoryService, cartService, regionService, featureFlagRouter, customer_id, variant, sales_channel_id, regionId, currencyCode, cart, region, decoratePromises, _a, _b, _c, _d;
    var _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(StoreGetVariantsVariantParams, req.query)];
            case 1:
                validated = _g.sent();
                variantService = req.scope.resolve("productVariantService");
                pricingService = req.scope.resolve("pricingService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                cartService = req.scope.resolve("cartService");
                regionService = req.scope.resolve("regionService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                customer_id = (_e = req.user) === null || _e === void 0 ? void 0 : _e.customer_id;
                return [4 /*yield*/, variantService.retrieve(id, req.retrieveConfig)];
            case 2:
                variant = _g.sent();
                sales_channel_id = validated.sales_channel_id;
                if (((_f = req.publishableApiKeyScopes) === null || _f === void 0 ? void 0 : _f.sales_channel_ids.length) === 1) {
                    sales_channel_id = req.publishableApiKeyScopes.sales_channel_ids[0];
                }
                regionId = validated.region_id;
                currencyCode = validated.currency_code;
                if (!validated.cart_id) return [3 /*break*/, 5];
                return [4 /*yield*/, cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 3:
                cart = _g.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 4:
                region = _g.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _g.label = 5;
            case 5:
                decoratePromises = [];
                _b = (_a = decoratePromises).push;
                return [4 /*yield*/, pricingService.setVariantPrices([variant], {
                        cart_id: validated.cart_id,
                        customer_id: customer_id,
                        region_id: regionId,
                        currency_code: currencyCode,
                        include_discount_prices: true,
                    })];
            case 6:
                _b.apply(_a, [(_g.sent())]);
                _d = (_c = decoratePromises).push;
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability([variant], sales_channel_id)];
            case 7:
                _d.apply(_c, [(_g.sent())]);
                return [4 /*yield*/, (0, utils_1.promiseAll)(decoratePromises)];
            case 8:
                _g.sent();
                res.json({ variant: variant });
                return [2 /*return*/];
        }
    });
}); });
var StoreGetVariantsVariantParams = /** @class */ (function (_super) {
    __extends(StoreGetVariantsVariantParams, _super);
    function StoreGetVariantsVariantParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetVariantsVariantParams.prototype, "sales_channel_id", void 0);
    return StoreGetVariantsVariantParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetVariantsVariantParams = StoreGetVariantsVariantParams;
//# sourceMappingURL=get-variant.js.map