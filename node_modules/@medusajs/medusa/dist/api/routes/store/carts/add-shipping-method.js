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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCartsCartShippingMethodReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /store/carts/{id}/shipping-methods
 * operationId: "PostCartsCartShippingMethod"
 * summary: "Add Shipping Method"
 * description: "Add a Shipping Method to the Cart. The validation of the `data` field is handled by the fulfillment provider of the chosen shipping option."
 * parameters:
 *   - (path) id=* {string} The cart ID.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartShippingMethodReq"
 * x-codegen:
 *   method: addShippingMethod
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.addShippingMethod(cartId, {
 *         option_id
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAddShippingMethodToCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const addShippingMethod = useAddShippingMethodToCart(cartId)
 *
 *         const handleAddShippingMethod = (
 *           optionId: string
 *         ) => {
 *           addShippingMethod.mutate({
 *             option_id: optionId,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.shipping_methods)
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
 *       curl -X POST '{backend_url}/store/carts/{id}/shipping-methods' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "option_id": "{option_id}",
 *       }'
 * tags:
 *   - Carts
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreCartsRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validated, manager, cartService, productVariantInventoryService, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                validated = req.validatedBody;
                manager = req.scope.resolve("manager");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                return [4 /*yield*/, manager.transaction(function (m) { return __awaiter(void 0, void 0, void 0, function () {
                        var txCartService, updated;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    txCartService = cartService.withTransaction(m);
                                    return [4 /*yield*/, txCartService.addShippingMethod(id, validated.option_id, validated.data)];
                                case 1:
                                    _b.sent();
                                    return [4 /*yield*/, txCartService.retrieve(id, {
                                            select: ["id"],
                                            relations: ["payment_sessions"],
                                        })];
                                case 2:
                                    updated = _b.sent();
                                    if (!((_a = updated.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, txCartService.setPaymentSessions(id)];
                                case 3:
                                    _b.sent();
                                    _b.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [4 /*yield*/, cartService.retrieveWithTotals(id, {
                        select: _1.defaultStoreCartFields,
                        relations: _1.defaultStoreCartRelations,
                    })];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(data.items.map(function (i) { return i.variant; }), data.sales_channel_id)];
            case 3:
                _a.sent();
                res.status(200).json({ cart: (0, clean_response_data_1.cleanResponseData)(data, []) });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema StorePostCartsCartShippingMethodReq
 * type: object
 * description: "The details of the shipping method to add to the cart."
 * required:
 *   - option_id
 * properties:
 *   option_id:
 *     type: string
 *     description: ID of the shipping option to create the method from.
 *   data:
 *     type: object
 *     description: Used to hold any data that the shipping method may need to process the fulfillment of the order. This depends on the fulfillment provider you're using.
 */
var StorePostCartsCartShippingMethodReq = /** @class */ (function () {
    function StorePostCartsCartShippingMethodReq() {
        this.data = {};
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartsCartShippingMethodReq.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCartsCartShippingMethodReq.prototype, "data", void 0);
    return StorePostCartsCartShippingMethodReq;
}());
exports.StorePostCartsCartShippingMethodReq = StorePostCartsCartShippingMethodReq;
//# sourceMappingURL=add-shipping-method.js.map