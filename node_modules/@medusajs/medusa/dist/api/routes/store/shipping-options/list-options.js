"use strict";
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
exports.StoreGetShippingOptionsParams = void 0;
var utils_1 = require("@medusajs/utils");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [get] /store/shipping-options
 * operationId: GetShippingOptions
 * summary: Get Shipping Options
 * description: "Retrieve a list of Shipping Options."
 * parameters:
 *   - (query) is_return {boolean} Whether return shipping options should be included. By default, all shipping options are returned.
 *   - (query) product_ids {string} "Comma-separated list of Product IDs to filter Shipping Options by. If provided, only shipping options that can be used with the provided products are retrieved."
 *   - (query) region_id {string} "The ID of the region that the shipping options belong to. If not provided, all shipping options are retrieved."
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetShippingOptionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.shippingOptions.list()
 *       .then(({ shipping_options }) => {
 *         console.log(shipping_options.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useShippingOptions } from "medusa-react"
 *
 *       const ShippingOptions = () => {
 *         const {
 *           shipping_options,
 *           isLoading,
 *         } = useShippingOptions()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {shipping_options?.length &&
 *               shipping_options?.length > 0 && (
 *               <ul>
 *                 {shipping_options?.map((shipping_option) => (
 *                   <li key={shipping_option.id}>
 *                     {shipping_option.id}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ShippingOptions
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/shipping-options'
 * tags:
 *   - Shipping Options
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreShippingOptionsListRes"
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
    var validated, productIds, regionId, productService, pricingService, shippingOptionService, shippingProfileService, featureFlagRouter, query, productShippinProfileMap, prods, options, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(StoreGetShippingOptionsParams, req.query)];
            case 1:
                validated = _a.sent();
                productIds = (validated.product_ids && validated.product_ids.split(",")) || [];
                regionId = validated.region_id;
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                shippingOptionService = req.scope.resolve("shippingOptionService");
                shippingProfileService = req.scope.resolve("shippingProfileService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                query = {};
                if ("is_return" in req.query) {
                    query.is_return = validated.is_return === "true";
                }
                if (regionId) {
                    query.region_id = regionId;
                }
                query.admin_only = false;
                if (!productIds.length) return [3 /*break*/, 5];
                if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 3];
                return [4 /*yield*/, shippingProfileService.getMapProfileIdsByProductIds(productIds)];
            case 2:
                productShippinProfileMap = _a.sent();
                query.profile_id = __spreadArray([], __read(productShippinProfileMap.values()), false);
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, productService.list({ id: productIds })];
            case 4:
                prods = _a.sent();
                query.profile_id = prods.map(function (p) { return p.profile_id; });
                _a.label = 5;
            case 5: return [4 /*yield*/, shippingOptionService.list(query, {
                    relations: _1.defaultRelations,
                })];
            case 6:
                options = _a.sent();
                return [4 /*yield*/, pricingService.setShippingOptionPrices(options)];
            case 7:
                data = _a.sent();
                res.status(200).json({ shipping_options: data });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Filters to apply on the retrieved shipping options.
 */
var StoreGetShippingOptionsParams = /** @class */ (function () {
    function StoreGetShippingOptionsParams() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetShippingOptionsParams.prototype, "product_ids", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetShippingOptionsParams.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBooleanString)(),
        __metadata("design:type", String)
    ], StoreGetShippingOptionsParams.prototype, "is_return", void 0);
    return StoreGetShippingOptionsParams;
}());
exports.StoreGetShippingOptionsParams = StoreGetShippingOptionsParams;
//# sourceMappingURL=list-options.js.map