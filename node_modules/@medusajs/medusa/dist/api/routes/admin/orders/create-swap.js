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
exports.AdminPostOrdersOrderSwapsParams = exports.AdminPostOrdersOrderSwapsReq = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var medusa_core_utils_1 = require("medusa-core-utils");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /admin/orders/{id}/swaps
 * operationId: "PostOrdersOrderSwaps"
 * summary: "Create a Swap"
 * description: "Create a Swap. This includes creating a return that is associated with the swap."
 * x-authenticated: true
 * externalDocs:
 *   description: How are swaps created
 *   url: https://docs.medusajs.com/modules/orders/swaps#how-are-swaps-created
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsReq"
 * x-codegen:
 *   method: createSwap
 *   queryParams: AdminPostOrdersOrderSwapsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createSwap(orderId, {
 *         return_items: [
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
 *       import { useAdminCreateSwap } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const CreateSwap = ({ orderId }: Props) => {
 *         const createSwap = useAdminCreateSwap(orderId)
 *         // ...
 *
 *         const handleCreate = (
 *           returnItems: {
 *             item_id: string,
 *             quantity: number
 *           }[]
 *         ) => {
 *           createSwap.mutate({
 *             return_items: returnItems
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.swaps)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateSwap
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "return_items": [
 *             {
 *               "item_id": "asfasf",
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
    var id, validated, idempotencyKeyService, orderService, swapService, returnService, manager, headerKey, idempotencyKey, error_1, inProgress, err, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                validated = req.validatedBody;
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                orderService = req.scope.resolve("orderService");
                swapService = req.scope.resolve("swapService");
                returnService = req.scope.resolve("returnService");
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
                inProgress = true;
                err = false;
                _b.label = 5;
            case 5:
                if (!inProgress) return [3 /*break*/, 14];
                _a = idempotencyKey.recovery_point;
                switch (_a) {
                    case "started": return [3 /*break*/, 6];
                    case "swap_created": return [3 /*break*/, 8];
                    case "finished": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 11];
            case 6: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var order, swap, returnOrder;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, orderService
                                                    .withTransaction(manager)
                                                    .retrieveWithTotals(id, {
                                                    relations: [
                                                        "cart",
                                                        "items",
                                                        "items.variant",
                                                        "items.tax_lines",
                                                        "swaps",
                                                        "swaps.additional_items",
                                                        "swaps.additional_items.variant",
                                                        "swaps.additional_items.tax_lines",
                                                    ],
                                                })];
                                            case 1:
                                                order = _a.sent();
                                                return [4 /*yield*/, swapService
                                                        .withTransaction(manager)
                                                        .create(order, validated.return_items, validated.additional_items, validated.return_shipping, {
                                                        idempotency_key: idempotencyKey.idempotency_key,
                                                        no_notification: validated.no_notification,
                                                        allow_backorder: validated.allow_backorder,
                                                        location_id: validated.return_location_id,
                                                    })];
                                            case 2:
                                                swap = _a.sent();
                                                return [4 /*yield*/, swapService
                                                        .withTransaction(manager)
                                                        .createCart(swap.id, validated.custom_shipping_options, {
                                                        sales_channel_id: validated.sales_channel_id,
                                                    })];
                                            case 3:
                                                _a.sent();
                                                return [4 /*yield*/, returnService
                                                        .withTransaction(manager)
                                                        .retrieveBySwap(swap.id)];
                                            case 4:
                                                returnOrder = _a.sent();
                                                return [4 /*yield*/, returnService
                                                        .withTransaction(manager)
                                                        .fulfill(returnOrder.id)];
                                            case 5:
                                                _a.sent();
                                                return [2 /*return*/, {
                                                        recovery_point: "swap_created",
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
                return [3 /*break*/, 13];
            case 8: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var swaps, order;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, swapService
                                                    .withTransaction(transactionManager)
                                                    .list({
                                                    idempotency_key: idempotencyKey.idempotency_key,
                                                })];
                                            case 1:
                                                swaps = _a.sent();
                                                if (!swaps.length) {
                                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Swap not found");
                                                }
                                                return [4 /*yield*/, orderService
                                                        .withTransaction(transactionManager)
                                                        .retrieveWithTotals(id, req.retrieveConfig, {
                                                        includes: req.includes,
                                                    })];
                                            case 2:
                                                order = _a.sent();
                                                return [2 /*return*/, {
                                                        response_code: 200,
                                                        response_body: {
                                                            order: (0, clean_response_data_1.cleanResponseData)(order, []),
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
            case 9:
                _b.sent();
                return [3 /*break*/, 13];
            case 10:
                {
                    inProgress = false;
                    return [3 /*break*/, 13];
                }
                _b.label = 11;
            case 11: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
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
            case 12:
                _b.sent();
                return [3 /*break*/, 13];
            case 13: return [3 /*break*/, 5];
            case 14:
                if (err) {
                    throw err;
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [2 /*return*/];
        }
    });
}); });
var ReturnItem = /** @class */ (function () {
    function ReturnItem() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], ReturnItem.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "reason_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "note", void 0);
    return ReturnItem;
}());
/**
 * The return's shipping method details.
 */
var ReturnShipping = /** @class */ (function () {
    function ReturnShipping() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], ReturnShipping.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ReturnShipping.prototype, "price", void 0);
    return ReturnShipping;
}());
var CustomShippingOption = /** @class */ (function () {
    function CustomShippingOption() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CustomShippingOption.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CustomShippingOption.prototype, "price", void 0);
    return CustomShippingOption;
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
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], AdditionalItem.prototype, "quantity", void 0);
    return AdditionalItem;
}());
/**
 * @schema AdminPostOrdersOrderSwapsReq
 * type: object
 * description: "The details of the swap to create."
 * required:
 *   - return_items
 * properties:
 *   return_items:
 *     description: The Line Items to associate with the swap's return.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item that will be returned.
 *           type: string
 *         quantity:
 *           description: The number of items that will be returned
 *           type: integer
 *         reason_id:
 *           description: The ID of the Return Reason to use.
 *           type: string
 *         note:
 *           description: An optional note with information about the Return.
 *           type: string
 *   return_shipping:
 *     description: The shipping method associated with the swap's return.
 *     type: object
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 *       price:
 *         type: integer
 *         description: The price to charge for the Shipping Method.
 *   additional_items:
 *     description: The new items to send to the Customer.
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
 *           description: The quantity of the Product Variant.
 *           type: integer
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the sales channel associated with the swap."
 *   custom_shipping_options:
 *     description: An array of custom shipping options to potentially create a Shipping Method from to send the additional items.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - option_id
 *         - price
 *       properties:
 *         option_id:
 *           description: The ID of the Shipping Option.
 *           type: string
 *         price:
 *           description: The custom price of the Shipping Option.
 *           type: integer
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this Swap.
 *     type: boolean
 *   return_location_id:
 *     type: string
 *     description: "The ID of the location used for the associated return."
 *   allow_backorder:
 *     description: >-
 *       If set to `true`, swaps can be completed with items out of stock
 *     type: boolean
 *     default: true
 */
var AdminPostOrdersOrderSwapsReq = /** @class */ (function () {
    function AdminPostOrdersOrderSwapsReq() {
        this.custom_shipping_options = [];
        this.allow_backorder = true;
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ReturnItem; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderSwapsReq.prototype, "return_items", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ReturnShipping; }),
        __metadata("design:type", ReturnShipping)
    ], AdminPostOrdersOrderSwapsReq.prototype, "return_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderSwapsReq.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdditionalItem; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderSwapsReq.prototype, "additional_items", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return CustomShippingOption; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderSwapsReq.prototype, "custom_shipping_options", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderSwapsReq.prototype, "no_notification", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderSwapsReq.prototype, "return_location_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderSwapsReq.prototype, "allow_backorder", void 0);
    return AdminPostOrdersOrderSwapsReq;
}());
exports.AdminPostOrdersOrderSwapsReq = AdminPostOrdersOrderSwapsReq;
var AdminPostOrdersOrderSwapsParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderSwapsParams, _super);
    function AdminPostOrdersOrderSwapsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderSwapsParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderSwapsParams = AdminPostOrdersOrderSwapsParams;
//# sourceMappingURL=create-swap.js.map