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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetVariantsParams = void 0;
var class_validator_1 = require("class-validator");
var is_type_1 = require("../../../../utils/validators/is-type");
var common_1 = require("../../../../types/common");
var price_selection_1 = require("../../../../types/price-selection");
var class_transformer_1 = require("class-transformer");
var validator_1 = require("../../../../utils/validator");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [get] /store/variants
 * operationId: GetVariants
 * summary: Get Product Variants
 * description: |
 *   Retrieves a list of product variants. The product variants can be filtered by fields such as `id` or `title`. The product variants can also be paginated.
 *
 *   For accurate and correct pricing of the product variants based on the customer's context, it's highly recommended to pass fields such as
 *   `region_id`, `currency_code`, and `cart_id` when available.
 *
 *   Passing `sales_channel_id` ensures retrieving only variants of products available in the specified sales channel.
 *   You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 * externalDocs:
 *   description: "How to pass product pricing parameters"
 *   url: "https://docs.medusajs.com/modules/products/storefront/show-products#product-pricing-parameters"
 * parameters:
 *   - (query) ids {string} Filter by a comma-separated list of IDs. If supplied, it overrides the `id` parameter.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by one or more IDs. If `ids` is supplied, it's overrides the value of this parameter.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: Filter by an ID.
 *         - type: array
 *           description: Filter by IDs.
 *           items:
 *             type: string
 *   - (query) sales_channel_id {string} "Filter by sales channel IDs. When provided, only products available in the selected sales channels are retrieved. Alternatively, you can pass a
 *      publishable API key in the request header and this will have the same effect."
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product variants.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product variants.
 *   - (query) offset=0 {number} The number of products to skip when retrieving the product variants.
 *   - (query) limit=100 {number} Limit the number of product variants returned.
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
 *   - in: query
 *     name: title
 *     style: form
 *     explode: false
 *     description: Filter by title
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: a single title to filter by
 *         - type: array
 *           description: multiple titles to filter by
 *           items:
 *             type: string
 *   - in: query
 *     name: inventory_quantity
 *     description: Filter by available inventory quantity
 *     schema:
 *       oneOf:
 *         - type: number
 *           description: A specific number to filter by.
 *         - type: object
 *           description: Filter using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: Filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: Filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: Filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: Filter by inventory quantity greater than or equal to this number
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetVariantsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.product.variants.list()
 *       .then(({ variants }) => {
 *         console.log(variants.length);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/variants'
 * tags:
 *   - Product Variants
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreVariantsListRes"
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
    var validated, customer_id, _a, cart_id, region_id, currency_code, sales_channel_id, ids, filterableFields, pricingService, variantService, cartService, productVariantInventoryService, regionService, featureFlagRouter, variants, regionId, currencyCode, cart, region, decoratePromises, _b, _c, _d, _e;
    var _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(StoreGetVariantsParams, req.query)];
            case 1:
                validated = _h.sent();
                customer_id = (_f = req.user) === null || _f === void 0 ? void 0 : _f.customer_id;
                _a = req.filterableFields, cart_id = _a.cart_id, region_id = _a.region_id, currency_code = _a.currency_code, sales_channel_id = _a.sales_channel_id, ids = _a.ids, filterableFields = __rest(_a, ["cart_id", "region_id", "currency_code", "sales_channel_id", "ids"]);
                if (validated.ids) {
                    filterableFields["id"] = validated.ids.split(",");
                }
                if (((_g = req.publishableApiKeyScopes) === null || _g === void 0 ? void 0 : _g.sales_channel_ids.length) === 1) {
                    sales_channel_id = req.publishableApiKeyScopes.sales_channel_ids[0];
                }
                pricingService = req.scope.resolve("pricingService");
                variantService = req.scope.resolve("productVariantService");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                regionService = req.scope.resolve("regionService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                return [4 /*yield*/, variantService.list(filterableFields, req.listConfig)];
            case 2:
                variants = _h.sent();
                regionId = validated.region_id;
                currencyCode = validated.currency_code;
                if (!validated.cart_id) return [3 /*break*/, 5];
                return [4 /*yield*/, cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 3:
                cart = _h.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 4:
                region = _h.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _h.label = 5;
            case 5:
                decoratePromises = [];
                _c = (_b = decoratePromises).push;
                return [4 /*yield*/, pricingService.setVariantPrices(variants, {
                        cart_id: validated.cart_id,
                        region_id: regionId,
                        currency_code: currencyCode,
                        customer_id: customer_id,
                        include_discount_prices: true,
                    })];
            case 6:
                _c.apply(_b, [(_h.sent())]);
                _e = (_d = decoratePromises).push;
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(variants, sales_channel_id)];
            case 7:
                _e.apply(_d, [(_h.sent())]);
                return [4 /*yield*/, (0, utils_1.promiseAll)(decoratePromises)];
            case 8:
                _h.sent();
                res.json({ variants: variants });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved product variants.
 */
var StoreGetVariantsParams = /** @class */ (function (_super) {
    __extends(StoreGetVariantsParams, _super);
    function StoreGetVariantsParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 100
         */
        _this.limit = 100;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        _this.offset = 0;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetVariantsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetVariantsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetVariantsParams.prototype, "ids", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetVariantsParams.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "inventory_quantity", void 0);
    return StoreGetVariantsParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetVariantsParams = StoreGetVariantsParams;
//# sourceMappingURL=list-variants.js.map