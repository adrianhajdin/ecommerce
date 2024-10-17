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
exports.AdminGetVariantsParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var common_1 = require("../../../../types/common");
var price_selection_1 = require("../../../../types/price-selection");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [get] /admin/variants
 * operationId: "GetVariants"
 * summary: "List Product Variants"
 * description: "Retrieve a list of Product Variants. The product variant can be filtered by fields such as `id` or `title`. The product variant can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by product variant IDs.
 *     schema:
 *       oneOf:
 *        - type: string
 *          description: A product variant ID.
 *        - type: array
 *          description: An array of product variant IDs.
 *          items:
 *            type: string
 *   - (query) expand {string} "Comma-separated relations that should be expanded in the returned product variants."
 *   - (query) fields {string} "Comma-separated fields that should be included in the returned product variants."
 *   - (query) offset=0 {number} The number of product variants to skip when retrieving the product variants.
 *   - (query) limit=100 {number} Limit the number of product variants returned.
 *   - (query) order {string} The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *   - (query) manage_inventory {boolean} Filter product variants by whether their inventory is managed or not.
 *   - (query) allow_backorder {boolean} Filter product variants by whether they are allowed to be backordered or not.
 *   - in: query
 *     name: cart_id
 *     style: form
 *     explode: false
 *     description: The ID of the cart to use for the price selection context.
 *     schema:
 *       type: string
 *   - in: query
 *     name: region_id
 *     style: form
 *     explode: false
 *     description: The ID of the region to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: The 3 character ISO currency code to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: customer_id
 *     style: form
 *     explode: false
 *     description: The ID of the customer to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: title
 *     style: form
 *     explode: false
 *     description: Filter by title.
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
 *           description: a specific number to filter by.
 *         - type: object
 *           description: filter using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: filter by inventory quantity greater than or equal to this number
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetVariantsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.variants.list()
 *       .then(({ variants, limit, offset, count }) => {
 *         console.log(variants.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminVariants } from "medusa-react"
 *
 *       const Variants = () => {
 *         const { variants, isLoading } = useAdminVariants()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {variants && !variants.length && (
 *               <span>No Variants</span>
 *             )}
 *             {variants && variants.length > 0 && (
 *               <ul>
 *                 {variants.map((variant) => (
 *                   <li key={variant.id}>{variant.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Variants
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/variants' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Variants
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminVariantsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
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
    var variantService, pricingService, cartService, regionService, cleanFilterableFields, _a, rawVariants, count, regionId, currencyCode, cart, region, variants, inventoryService, salesChannelService, productVariantInventoryService, _b, salesChannelsIds;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                variantService = req.scope.resolve("productVariantService");
                pricingService = req.scope.resolve("pricingService");
                cartService = req.scope.resolve("cartService");
                regionService = req.scope.resolve("regionService");
                cleanFilterableFields = (0, lodash_1.omit)(req.filterableFields, [
                    "cart_id",
                    "region_id",
                    "currency_code",
                    "customer_id",
                ]);
                return [4 /*yield*/, variantService.listAndCount(cleanFilterableFields, req.listConfig)];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 2]), rawVariants = _a[0], count = _a[1];
                regionId = req.validatedQuery.region_id;
                currencyCode = req.validatedQuery.currency_code;
                if (!req.validatedQuery.cart_id) return [3 /*break*/, 4];
                return [4 /*yield*/, cartService.retrieve(req.validatedQuery.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 2:
                cart = _c.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 3:
                region = _c.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _c.label = 4;
            case 4: return [4 /*yield*/, pricingService.setAdminVariantPricing(rawVariants, {
                    cart_id: req.validatedQuery.cart_id,
                    region_id: regionId,
                    currency_code: currencyCode,
                    customer_id: req.validatedQuery.customer_id,
                    include_discount_prices: true,
                    ignore_cache: true,
                })];
            case 5:
                variants = _c.sent();
                inventoryService = req.scope.resolve("inventoryService");
                salesChannelService = req.scope.resolve("salesChannelService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                if (!inventoryService) return [3 /*break*/, 8];
                return [4 /*yield*/, salesChannelService.listAndCount({}, { select: ["id"] })];
            case 6:
                _b = __read.apply(void 0, [_c.sent(), 1]), salesChannelsIds = _b[0];
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(variants, salesChannelsIds.map(function (salesChannel) { return salesChannel.id; }))];
            case 7:
                variants = (_c.sent());
                _c.label = 8;
            case 8:
                res.json({
                    variants: variants,
                    count: count,
                    offset: req.listConfig.offset,
                    limit: req.listConfig.limit,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved product variants.
 */
var AdminGetVariantsParams = /** @class */ (function (_super) {
    __extends(AdminGetVariantsParams, _super);
    function AdminGetVariantsParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 20
         */
        _this.limit = 20;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        _this.offset = 0;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetVariantsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetVariantsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetVariantsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetVariantsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetVariantsParams.prototype, "fields", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetVariantsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetVariantsParams.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetVariantsParams.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetVariantsParams.prototype, "order", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], AdminGetVariantsParams.prototype, "manage_inventory", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], AdminGetVariantsParams.prototype, "allow_backorder", void 0);
    return AdminGetVariantsParams;
}(price_selection_1.AdminPriceSelectionParams));
exports.AdminGetVariantsParams = AdminGetVariantsParams;
//# sourceMappingURL=list-variants.js.map