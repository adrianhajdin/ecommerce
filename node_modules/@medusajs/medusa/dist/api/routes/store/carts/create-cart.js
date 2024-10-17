"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCartReq = exports.Item = void 0;
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var _1 = require(".");
var class_transformer_1 = require("class-transformer");
var request_ip_1 = __importDefault(require("request-ip"));
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
/**
 * @oas [post] /store/carts
 * operationId: "PostCart"
 * summary: "Create a Cart"
 * description: |
 *   Create a Cart. Although optional, specifying the cart's region and sales channel can affect the cart's pricing and
 *   the products that can be added to the cart respectively. So, make sure to set those early on and change them if necessary, such as when the customer changes their region.
 *
 *   If a customer is logged in, make sure to pass its ID or email within the cart's details so that the cart is attached to the customer.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.create()
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateCart } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Cart = ({ regionId }: Props) => {
 *         const createCart = useCreateCart()
 *
 *         const handleCreate = () => {
 *           createCart.mutate({
 *             region_id: regionId
 *             // creates an empty cart
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.items)
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
 *       curl -X POST '{backend_url}/store/carts'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: "Successfully created a new Cart"
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
    var entityManager, featureFlagRouter, cartService, productVariantInventoryService, validated, reqContext, lineItemService, regionService, regionId, regions, toCreate, customerService, customer, cart;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                entityManager = req.scope.resolve("manager");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                validated = req.validatedBody;
                reqContext = {
                    ip: request_ip_1.default.getClientIp(req),
                    user_agent: req.get("user-agent"),
                };
                lineItemService = req.scope.resolve("lineItemService");
                regionService = req.scope.resolve("regionService");
                if (!(0, medusa_core_utils_1.isDefined)(validated.region_id)) return [3 /*break*/, 1];
                regionId = validated.region_id;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, regionService.list({})];
            case 2:
                regions = _b.sent();
                if (!(regions === null || regions === void 0 ? void 0 : regions.length)) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "A region is required to create a cart");
                }
                regionId = regions[0].id;
                _b.label = 3;
            case 3:
                toCreate = {
                    region_id: regionId,
                    sales_channel_id: validated.sales_channel_id,
                    context: __assign(__assign({}, reqContext), validated.context),
                };
                if (!(req.user && req.user.customer_id)) return [3 /*break*/, 5];
                customerService = req.scope.resolve("customerService");
                return [4 /*yield*/, customerService.retrieve(req.user.customer_id)];
            case 4:
                customer = _b.sent();
                toCreate["customer_id"] = customer.id;
                toCreate["email"] = customer.email;
                _b.label = 5;
            case 5:
                if (validated.country_code) {
                    toCreate["shipping_address"] = {
                        country_code: validated.country_code.toLowerCase(),
                    };
                }
                if (!toCreate.sales_channel_id &&
                    ((_a = req.publishableApiKeyScopes) === null || _a === void 0 ? void 0 : _a.sales_channel_ids.length)) {
                    if (req.publishableApiKeyScopes.sales_channel_ids.length > 1) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "The PublishableApiKey provided in the request header has multiple associated sales channels.");
                    }
                    toCreate.sales_channel_id = req.publishableApiKeyScopes.sales_channel_ids[0];
                }
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var cartServiceTx, lineItemServiceTx, createdCart, generateInputData, generatedLineItems;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    cartServiceTx = cartService.withTransaction(manager);
                                    lineItemServiceTx = lineItemService.withTransaction(manager);
                                    return [4 /*yield*/, cartServiceTx.create(toCreate)];
                                case 1:
                                    createdCart = _c.sent();
                                    if (!((_a = validated.items) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 4];
                                    generateInputData = validated.items.map(function (item) {
                                        return {
                                            variantId: item.variant_id,
                                            quantity: item.quantity,
                                        };
                                    });
                                    return [4 /*yield*/, lineItemServiceTx.generate(generateInputData, {
                                            region_id: regionId,
                                            customer_id: (_b = req.user) === null || _b === void 0 ? void 0 : _b.customer_id,
                                        })];
                                case 2:
                                    generatedLineItems = _c.sent();
                                    return [4 /*yield*/, cartServiceTx.addOrUpdateLineItems(createdCart.id, generatedLineItems, {
                                            validateSalesChannels: featureFlagRouter.isFeatureEnabled("sales_channels"),
                                        })];
                                case 3:
                                    _c.sent();
                                    _c.label = 4;
                                case 4: return [2 /*return*/, createdCart];
                            }
                        });
                    }); })];
            case 6:
                cart = _b.sent();
                return [4 /*yield*/, cartService.retrieveWithTotals(cart.id, {
                        select: _1.defaultStoreCartFields,
                        relations: _1.defaultStoreCartRelations,
                    })];
            case 7:
                cart = _b.sent();
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(cart.items.map(function (i) { return i.variant; }), cart.sales_channel_id)];
            case 8:
                _b.sent();
                res.status(200).json({ cart: (0, clean_response_data_1.cleanResponseData)(cart, []) });
                return [2 /*return*/];
        }
    });
}); });
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Item.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], Item.prototype, "quantity", void 0);
    return Item;
}());
exports.Item = Item;
/**
 * @schema StorePostCartReq
 * type: object
 * description: "The details of the cart to be created."
 * properties:
 *   region_id:
 *     type: string
 *     description: "The ID of the Region to create the Cart in. Setting the cart's region can affect the pricing of the items in the cart as well as the used currency.
 *      If this parameter is not provided, the first region in the store is used by default."
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the Sales channel to create the Cart in. The cart's sales channel affects which products can be added to the cart. If a product does not
 *      exist in the cart's sales channel, it cannot be added to the cart. If you add a publishable API key in the header of this request and specify a sales channel ID,
 *      the specified sales channel must be within the scope of the publishable API key's resources. If you add a publishable API key in the header of this request,
 *      you don't specify a sales channel ID, and the publishable API key is associated with one sales channel, that sales channel will be attached to the cart.
 *      If no sales channel is passed and no publishable API key header is passed or the publishable API key isn't associated with any sales channel,
 *      the cart will not be associated with any sales channel."
 *   country_code:
 *     type: string
 *     description: "The two character ISO country code to create the Cart in. Setting this parameter will set the country code of the shipping address."
 *     externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *      description: See a list of codes.
 *   items:
 *     description: "An array of product variants to generate line items from."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - variant_id
 *         - quantity
 *       properties:
 *         variant_id:
 *           description: The ID of the Product Variant.
 *           type: string
 *         quantity:
 *           description: The quantity to add into the cart.
 *           type: integer
 *   context:
 *     description: >-
 *       An object to provide context to the Cart. The `context` field is automatically populated with `ip` and `user_agent`
 *     type: object
 *     example:
 *       ip: "::1"
 *       user_agent: "Chrome"
 */
var StorePostCartReq = /** @class */ (function () {
    function StorePostCartReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Item; }),
        __metadata("design:type", Array)
    ], StorePostCartReq.prototype, "items", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCartReq.prototype, "context", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [
            (0, class_validator_1.IsString)(),
            (0, class_validator_1.IsOptional)(),
        ]),
        __metadata("design:type", String)
    ], StorePostCartReq.prototype, "sales_channel_id", void 0);
    return StorePostCartReq;
}());
exports.StorePostCartReq = StorePostCartReq;
//# sourceMappingURL=create-cart.js.map