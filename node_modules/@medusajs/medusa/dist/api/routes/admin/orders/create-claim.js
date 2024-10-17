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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostOrdersOrderClaimsParams = exports.AdminPostOrdersOrderClaimsReq = void 0;
var class_validator_1 = require("class-validator");
var models_1 = require("../../../../models");
var class_transformer_1 = require("class-transformer");
var medusa_core_utils_1 = require("medusa-core-utils");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /admin/orders/{id}/claims
 * operationId: "PostOrdersOrderClaims"
 * summary: "Create a Claim"
 * description: "Create a Claim for an order. If a return shipping method is specified, a return will also be created and associated with the claim. If the claim's type is `refund`,
 *  the refund is processed as well."
 * externalDocs:
 *   description: How are claims created
 *   url: https://docs.medusajs.com/modules/orders/claims#how-are-claims-created
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderClaimsReq"
 * x-codegen:
 *   method: createClaim
 *   params: AdminPostOrdersOrderClaimsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createClaim(orderId, {
 *         type: 'refund',
 *         claim_items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateClaim } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const CreateClaim = ({ orderId }: Props) => {
 *
 *       const CreateClaim = (orderId: string) => {
 *         const createClaim = useAdminCreateClaim(orderId)
 *         // ...
 *
 *         const handleCreate = (itemId: string) => {
 *           createClaim.mutate({
 *             type: "refund",
 *             claim_items: [
 *               {
 *                 item_id: itemId,
 *                 quantity: 1,
 *               },
 *             ],
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.claims)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateClaim
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/claims' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "type": "refund",
 *           "claim_items": [
 *             {
 *               "item_id": "asdsd",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
    var id, value, idempotencyKeyService, manager, headerKey, idempotencyKey, error_1, orderService, claimService, returnService, inProgress, err, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                value = req.validatedBody;
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                manager = req.scope.resolve("manager");
                headerKey = req.get("Idempotency-Key") || "";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, idempotencyKeyService
                                        .withTransaction(transactionManager)
                                        .initializeRequest(headerKey, req.method, req.params, req.path)];
                                case 1:
                                    idempotencyKey = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(409).send("Failed to create idempotency key");
                return [2 /*return*/];
            case 4:
                res.setHeader("Access-Control-Expose-Headers", "Idempotency-Key");
                res.setHeader("Idempotency-Key", idempotencyKey.idempotency_key);
                orderService = req.scope.resolve("orderService");
                claimService = req.scope.resolve("claimService");
                returnService = req.scope.resolve("returnService");
                inProgress = true;
                err = false;
                _b.label = 5;
            case 5:
                if (!inProgress) return [3 /*break*/, 16];
                _a = idempotencyKey.recovery_point;
                switch (_a) {
                    case "started": return [3 /*break*/, 6];
                    case "claim_created": return [3 /*break*/, 8];
                    case "refund_handled": return [3 /*break*/, 10];
                    case "finished": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 13];
            case 6: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var order;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, orderService
                                                    .withTransaction(manager)
                                                    .retrieve(id, {
                                                    relations: [
                                                        "customer",
                                                        "shipping_address",
                                                        "region",
                                                        "items",
                                                        "items.tax_lines",
                                                        "discounts",
                                                        "discounts.rule",
                                                        "claims",
                                                        "claims.additional_items",
                                                        "claims.additional_items.tax_lines",
                                                        "swaps",
                                                        "swaps.additional_items",
                                                        "swaps.additional_items.tax_lines",
                                                    ],
                                                })];
                                            case 1:
                                                order = _a.sent();
                                                return [4 /*yield*/, claimService.withTransaction(manager).create(__assign({ idempotency_key: idempotencyKey.idempotency_key, order: order }, value))];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/, {
                                                        recovery_point: "claim_created",
                                                    }];
                                        }
                                    });
                                }); })];
                            case 1:
                                idempotencyKey = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (e) {
                    inProgress = false;
                    err = e;
                })];
            case 7:
                _b.sent();
                return [3 /*break*/, 15];
            case 8: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var claim;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, claimService.withTransaction(manager).list({
                                                    idempotency_key: idempotencyKey.idempotency_key,
                                                })];
                                            case 1:
                                                claim = _a.sent();
                                                if (!claim.length) {
                                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim not found");
                                                }
                                                claim = claim[0];
                                                if (!(claim.type === "refund")) return [3 /*break*/, 3];
                                                return [4 /*yield*/, claimService
                                                        .withTransaction(manager)
                                                        .processRefund(claim.id)];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/, {
                                                    recovery_point: "refund_handled",
                                                }];
                                        }
                                    });
                                }); })];
                            case 1:
                                idempotencyKey = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (e) {
                    inProgress = false;
                    err = e;
                })];
            case 9:
                _b.sent();
                return [3 /*break*/, 15];
            case 10: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var order, claim;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, orderService
                                                    .withTransaction(manager)
                                                    .retrieve(id, {
                                                    relations: ["items", "discounts"],
                                                })];
                                            case 1:
                                                order = _a.sent();
                                                return [4 /*yield*/, claimService.withTransaction(manager).list({
                                                        idempotency_key: idempotencyKey.idempotency_key,
                                                    }, {
                                                        relations: ["return_order"],
                                                    })];
                                            case 2:
                                                claim = _a.sent();
                                                if (!claim.length) {
                                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim not found");
                                                }
                                                claim = claim[0];
                                                if (!claim.return_order) return [3 /*break*/, 4];
                                                return [4 /*yield*/, returnService
                                                        .withTransaction(manager)
                                                        .fulfill(claim.return_order.id)];
                                            case 3:
                                                _a.sent();
                                                _a.label = 4;
                                            case 4: return [4 /*yield*/, orderService
                                                    .withTransaction(manager)
                                                    .retrieveWithTotals(id, req.retrieveConfig, {
                                                    includes: req.includes,
                                                })];
                                            case 5:
                                                order = _a.sent();
                                                return [2 /*return*/, {
                                                        response_code: 200,
                                                        response_body: {
                                                            order: order,
                                                        },
                                                    }];
                                        }
                                    });
                                }); })];
                            case 1:
                                idempotencyKey = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (e) {
                    inProgress = false;
                    err = e;
                })];
            case 11:
                _b.sent();
                return [3 /*break*/, 15];
            case 12:
                {
                    inProgress = false;
                    return [3 /*break*/, 15];
                }
                _b.label = 13;
            case 13: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .update(idempotencyKey.idempotency_key, {
                                    recovery_point: "finished",
                                    response_code: 500,
                                    response_body: { message: "Unknown recovery point" },
                                })];
                            case 1:
                                idempotencyKey = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 14:
                _b.sent();
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 5];
            case 16:
                if (err) {
                    throw err;
                }
                if (idempotencyKey.response_body.order) {
                    idempotencyKey.response_body.order = (0, clean_response_data_1.cleanResponseData)(idempotencyKey.response_body.order, []);
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [2 /*return*/];
        }
    });
}); });
/**
 * The return's shipping method details.
 */
var ReturnShipping = /** @class */ (function () {
    function ReturnShipping() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ReturnShipping.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ReturnShipping.prototype, "price", void 0);
    return ReturnShipping;
}());
var ShippingMethod = /** @class */ (function () {
    function ShippingMethod() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ShippingMethod.prototype, "price", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "data", void 0);
    return ShippingMethod;
}());
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Item.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], Item.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Item.prototype, "note", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.ClaimReason),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Item.prototype, "reason", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], Item.prototype, "tags", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], Item.prototype, "images", void 0);
    return Item;
}());
var AdditionalItem = /** @class */ (function () {
    function AdditionalItem() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdditionalItem.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], AdditionalItem.prototype, "quantity", void 0);
    return AdditionalItem;
}());
/**
 * @schema AdminPostOrdersOrderClaimsReq
 * type: object
 * description: "The details of the claim to be created."
 * required:
 *   - type
 *   - claim_items
 * properties:
 *   type:
 *     description: >-
 *       The type of the Claim. This will determine how the Claim is treated: `replace` Claims will result in a Fulfillment with new items being created, while a `refund` Claim will refund the amount paid for the claimed items.
 *     type: string
 *     enum:
 *       - replace
 *       - refund
 *   claim_items:
 *     description: The Claim Items that the Claim will consist of.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item that will be claimed.
 *           type: string
 *         quantity:
 *           description: The number of items that will be returned
 *           type: integer
 *         note:
 *           description: Short text describing the Claim Item in further detail.
 *           type: string
 *         reason:
 *           description: The reason for the Claim
 *           type: string
 *           enum:
 *             - missing_item
 *             - wrong_item
 *             - production_failure
 *             - other
 *         tags:
 *           description: A list of tags to add to the Claim Item
 *           type: array
 *           items:
 *             type: string
 *         images:
 *           description: A list of image URL's that will be associated with the Claim
 *           items:
 *             type: string
 *   return_shipping:
 *      description: Optional details for the Return Shipping Method, if the items are to be sent back. Providing this field will result in a return being created and associated with the claim.
 *      type: object
 *      properties:
 *        option_id:
 *          type: string
 *          description: The ID of the Shipping Option to create the Shipping Method from.
 *        price:
 *          type: integer
 *          description: The price to charge for the Shipping Method.
 *   additional_items:
 *      description: The new items to send to the Customer. This is only used if the claim's type is `replace`.
 *      type: array
 *      items:
 *        type: object
 *        required:
 *          - variant_id
 *          - quantity
 *        properties:
 *          variant_id:
 *            description: The ID of the Product Variant.
 *            type: string
 *          quantity:
 *            description: The quantity of the Product Variant.
 *            type: integer
 *   shipping_methods:
 *      description: The Shipping Methods to send the additional Line Items with. This is only used if the claim's type is `replace`.
 *      type: array
 *      items:
 *         type: object
 *         properties:
 *           id:
 *             description: The ID of an existing Shipping Method
 *             type: string
 *           option_id:
 *             description: The ID of the Shipping Option to create a Shipping Method from
 *             type: string
 *           price:
 *             description: The price to charge for the Shipping Method
 *             type: integer
 *           data:
 *             description: An optional set of key-value pairs to hold additional information.
 *             type: object
 *   shipping_address:
 *      description: "An optional shipping address to send the claimed items to. If not provided, the parent order's shipping address will be used."
 *      $ref: "#/components/schemas/AddressPayload"
 *   refund_amount:
 *      description: The amount to refund the customer. This is used when the claim's type is `refund`.
 *      type: integer
 *   no_notification:
 *      description: If set to true no notification will be send related to this Claim.
 *      type: boolean
 *   return_location_id:
 *      description: The ID of the location used for the associated return.
 *      type: string
 *   metadata:
 *      description: An optional set of key-value pairs to hold additional information.
 *      type: object
 *      externalDocs:
 *        description: "Learn about the metadata attribute, and how to delete and update it."
 *        url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostOrdersOrderClaimsReq = /** @class */ (function () {
    function AdminPostOrdersOrderClaimsReq() {
    }
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.ClaimType),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderClaimsReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Item; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderClaimsReq.prototype, "claim_items", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ReturnShipping; }),
        __metadata("design:type", ReturnShipping)
    ], AdminPostOrdersOrderClaimsReq.prototype, "return_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdditionalItem; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderClaimsReq.prototype, "additional_items", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ShippingMethod; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderClaimsReq.prototype, "shipping_methods", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostOrdersOrderClaimsReq.prototype, "refund_amount", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.AddressPayload; }),
        __metadata("design:type", common_1.AddressPayload)
    ], AdminPostOrdersOrderClaimsReq.prototype, "shipping_address", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderClaimsReq.prototype, "no_notification", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderClaimsReq.prototype, "return_location_id", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostOrdersOrderClaimsReq.prototype, "metadata", void 0);
    return AdminPostOrdersOrderClaimsReq;
}());
exports.AdminPostOrdersOrderClaimsReq = AdminPostOrdersOrderClaimsReq;
var AdminPostOrdersOrderClaimsParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderClaimsParams, _super);
    function AdminPostOrdersOrderClaimsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderClaimsParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderClaimsParams = AdminPostOrdersOrderClaimsParams;
//# sourceMappingURL=create-claim.js.map