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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCartsCartReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [post] /store/carts/{id}
 * operationId: PostCartsCart
 * summary: Update a Cart
 * description: "Update a Cart's details. If the cart has payment sessions and the region was not changed, the payment sessions are updated. The cart's totals are also recalculated."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.update(cartId, {
 *         email: "user@example.com"
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdateCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const updateCart = useUpdateCart(cartId)
 *
 *         const handleUpdate = (
 *           email: string
 *         ) => {
 *           updateCart.mutate({
 *             email
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.email)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
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
    var id, validated, cartService, featureFlagRouter, manager, productVariantInventoryService, cart, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                validated = req.validatedBody;
                cartService = req.scope.resolve("cartService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                manager = req.scope.resolve("manager");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id) {
                    validated.customer_id = req.user.customer_id;
                }
                if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                return [4 /*yield*/, retrieveCartWithIsolatedProductModule(req, id)];
            case 1:
                cart = _b.sent();
                _b.label = 2;
            case 2: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    var updated;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, cartService
                                    .withTransaction(transactionManager)
                                    .update(cart !== null && cart !== void 0 ? cart : id, validated)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, cartService
                                        .withTransaction(transactionManager)
                                        .retrieve(id, {
                                        relations: ["payment_sessions", "shipping_methods"],
                                    })];
                            case 2:
                                updated = _b.sent();
                                if (!(((_a = updated.payment_sessions) === null || _a === void 0 ? void 0 : _a.length) && !validated.region_id)) return [3 /*break*/, 4];
                                return [4 /*yield*/, cartService
                                        .withTransaction(transactionManager)
                                        .setPaymentSessions(id)];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })];
            case 3:
                _b.sent();
                return [4 /*yield*/, cartService.retrieveWithTotals(id, {
                        select: _1.defaultStoreCartFields,
                        relations: _1.defaultStoreCartRelations,
                    })];
            case 4:
                data = _b.sent();
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(data.items.map(function (i) { return i.variant; }), data.sales_channel_id)];
            case 5:
                _b.sent();
                res.json({ cart: (0, clean_response_data_1.cleanResponseData)(data, []) });
                return [2 /*return*/];
        }
    });
}); });
function retrieveCartWithIsolatedProductModule(req, id) {
    return __awaiter(this, void 0, void 0, function () {
        var cartService, remoteQuery, relations, cart, products, variantsMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cartService = req.scope.resolve("cartService");
                    remoteQuery = req.scope.resolve("remoteQuery");
                    relations = [
                        "items",
                        "shipping_methods",
                        "shipping_methods.shipping_option",
                        "shipping_address",
                        "billing_address",
                        "gift_cards",
                        "customer",
                        "region",
                        "payment_sessions",
                        "region.countries",
                        "discounts",
                        "discounts.rule",
                    ];
                    return [4 /*yield*/, cartService.retrieve(id, {
                            relations: relations,
                        })];
                case 1:
                    cart = _a.sent();
                    return [4 /*yield*/, remoteQuery({
                            products: {
                                __args: {
                                    id: cart.items.map(function (i) { return i.product_id; }),
                                },
                                fields: ["id"],
                                variants: {
                                    fields: ["id"],
                                },
                            },
                        })];
                case 2:
                    products = _a.sent();
                    variantsMap = new Map(products.flatMap(function (p) { return p.variants; }).map(function (v) { return [v.id, v]; }));
                    cart.items.forEach(function (item) {
                        if (!item.variant_id) {
                            return;
                        }
                        item.variant = variantsMap.get(item.variant_id);
                    });
                    return [2 /*return*/, cart];
            }
        });
    });
}
var GiftCard = /** @class */ (function () {
    function GiftCard() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], GiftCard.prototype, "code", void 0);
    return GiftCard;
}());
var Discount = /** @class */ (function () {
    function Discount() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Discount.prototype, "code", void 0);
    return Discount;
}());
/**
 * @schema StorePostCartsCartReq
 * type: object
 * description: "The details to update of the cart."
 * properties:
 *   region_id:
 *     type: string
 *     description: "The ID of the Region to create the Cart in. Setting the cart's region can affect the pricing of the items in the cart as well as the used currency."
 *   country_code:
 *     type: string
 *     description: "The 2 character ISO country code to create the Cart in. Setting this parameter will set the country code of the shipping address."
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *       description: See a list of codes.
 *   email:
 *     type: string
 *     description: "An email to be used on the Cart."
 *     format: email
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the Sales channel to create the Cart in. The cart's sales channel affects which products can be added to the cart. If a product does not
 *      exist in the cart's sales channel, it cannot be added to the cart. If you add a publishable API key in the header of this request and specify a sales channel ID,
 *      the specified sales channel must be within the scope of the publishable API key's resources."
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: A full billing address object.
 *       - type: string
 *         description: The billing address ID
 *   shipping_address:
 *     description: "The Address to be used for shipping purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: A full shipping address object.
 *       - type: string
 *         description: The shipping address ID
 *   gift_cards:
 *     description: "An array of Gift Card codes to add to the Cart."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code of a gift card."
 *           type: string
 *   discounts:
 *     description: "An array of Discount codes to add to the Cart."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code of the discount."
 *           type: string
 *   customer_id:
 *     description: "The ID of the Customer to associate the Cart with."
 *     type: string
 *   context:
 *     description: >-
 *       An object to provide context to the Cart. The `context` field is automatically populated with `ip` and `user_agent`
 *     type: object
 *     example:
 *       ip: "::1"
 *       user_agent: "Chrome"
 */
var StorePostCartsCartReq = /** @class */ (function () {
    function StorePostCartsCartReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartsCartReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartsCartReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCartsCartReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], StorePostCartsCartReq.prototype, "billing_address", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], StorePostCartsCartReq.prototype, "shipping_address", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return GiftCard; }),
        __metadata("design:type", Array)
    ], StorePostCartsCartReq.prototype, "gift_cards", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Discount; }),
        __metadata("design:type", Array)
    ], StorePostCartsCartReq.prototype, "discounts", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCartsCartReq.prototype, "customer_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCartsCartReq.prototype, "context", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [
            (0, class_validator_1.IsString)(),
            (0, class_validator_1.IsOptional)(),
        ]),
        __metadata("design:type", String)
    ], StorePostCartsCartReq.prototype, "sales_channel_id", void 0);
    return StorePostCartsCartReq;
}());
exports.StorePostCartsCartReq = StorePostCartsCartReq;
//# sourceMappingURL=update-cart.js.map