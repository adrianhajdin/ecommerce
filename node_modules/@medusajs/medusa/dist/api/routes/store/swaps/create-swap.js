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
exports.StorePostSwapsReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var medusa_core_utils_1 = require("medusa-core-utils");
var class_transformer_1 = require("class-transformer");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /store/swaps
 * operationId: PostSwaps
 * summary: Create a Swap
 * description: |
 *   Create a Swap for an Order. This will also create a return and associate it with the swap. If a return shipping option is specified, the return will automatically be fulfilled.
 *   To complete the swap, you must use the Complete Cart API Route passing it the ID of the swap's cart.
 *
 *   An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
 *   the response. If an error occurs during swap creation or the request is interrupted for any reason, the swap creation can be retried by passing the idempotency
 *   key in the `Idempotency-Key` header.
 * externalDocs:
 *   description: "How to create a swap"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/create-swap"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostSwapsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.swaps.create({
 *         order_id,
 *         return_items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ],
 *         additional_items: [
 *           {
 *             variant_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then(({ swap }) => {
 *         console.log(swap.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateSwap } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       type CreateData = {
 *         return_items: {
 *           item_id: string
 *           quantity: number
 *         }[]
 *         additional_items: {
 *           variant_id: string
 *           quantity: number
 *         }[]
 *         return_shipping_option: string
 *       }
 *
 *       const CreateSwap = ({
 *         orderId
 *       }: Props) => {
 *         const createSwap = useCreateSwap()
 *         // ...
 *
 *         const handleCreate = (
 *           data: CreateData
 *         ) => {
 *           createSwap.mutate({
 *             ...data,
 *             order_id: orderId
 *           }, {
 *             onSuccess: ({ swap }) => {
 *               console.log(swap.id)
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
 *       curl -X POST '{backend_url}/store/swaps' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_id": "{order_id}",
 *           "return_items": [
 *             {
 *               "item_id": "{item_id}",
 *               "quantity": 1
 *             }
 *           ],
 *           "additional_items": [
 *             {
 *               "variant_id": "{variant_id}",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * tags:
 *   - Swaps
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreSwapsRes"
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
    var swapDto, idempotencyKeyService, manager, headerKey, idempotencyKey, error_1, orderService, swapService, returnService, inProgress, err, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(StorePostSwapsReq, req.body)];
            case 1:
                swapDto = _b.sent();
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                manager = req.scope.resolve("manager");
                headerKey = req.get("Idempotency-Key") || "";
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
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
            case 3:
                _b.sent();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                res.status(409).send("Failed to create idempotency key");
                return [2 /*return*/];
            case 5:
                res.setHeader("Access-Control-Expose-Headers", "Idempotency-Key");
                res.setHeader("Idempotency-Key", idempotencyKey.idempotency_key);
                orderService = req.scope.resolve("orderService");
                swapService = req.scope.resolve("swapService");
                returnService = req.scope.resolve("returnService");
                inProgress = true;
                err = false;
                _b.label = 6;
            case 6:
                if (!inProgress) return [3 /*break*/, 15];
                _a = idempotencyKey.recovery_point;
                switch (_a) {
                    case "started": return [3 /*break*/, 7];
                    case "swap_created": return [3 /*break*/, 9];
                    case "finished": return [3 /*break*/, 11];
                }
                return [3 /*break*/, 12];
            case 7: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var order, returnShipping, swap, returnOrder;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, orderService
                                                    .withTransaction(manager)
                                                    .retrieve(swapDto.order_id, {
                                                    select: ["refunded_total", "total"],
                                                    relations: [
                                                        "items.variant",
                                                        "items.tax_lines",
                                                        "swaps.additional_items.variant.product.profiles",
                                                        "swaps.additional_items.tax_lines",
                                                    ],
                                                })];
                                            case 1:
                                                order = _a.sent();
                                                if (swapDto.return_shipping_option) {
                                                    returnShipping = {
                                                        option_id: swapDto.return_shipping_option,
                                                    };
                                                }
                                                return [4 /*yield*/, swapService
                                                        .withTransaction(manager)
                                                        .create(order, swapDto.return_items, swapDto.additional_items, returnShipping, {
                                                        idempotency_key: idempotencyKey.idempotency_key,
                                                        no_notification: true,
                                                    })];
                                            case 2:
                                                swap = _a.sent();
                                                return [4 /*yield*/, swapService.withTransaction(manager).createCart(swap.id)];
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
            case 8:
                _b.sent();
                return [3 /*break*/, 14];
            case 9: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var swaps, swap;
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
                                                return [4 /*yield*/, swapService
                                                        .withTransaction(transactionManager)
                                                        .retrieve(swaps[0].id, {
                                                        select: _1.defaultStoreSwapFields,
                                                        relations: _1.defaultStoreSwapRelations,
                                                    })];
                                            case 2:
                                                swap = _a.sent();
                                                return [2 /*return*/, {
                                                        response_code: 200,
                                                        response_body: { swap: swap },
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
            case 10:
                _b.sent();
                return [3 /*break*/, 14];
            case 11:
                {
                    inProgress = false;
                    return [3 /*break*/, 14];
                }
                _b.label = 12;
            case 12: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
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
            case 13:
                _b.sent();
                return [3 /*break*/, 14];
            case 14: return [3 /*break*/, 6];
            case 15:
                if (err) {
                    throw err;
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [2 /*return*/];
        }
    });
}); });
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Item.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], Item.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Item.prototype, "reason_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Item.prototype, "note", void 0);
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
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], AdditionalItem.prototype, "quantity", void 0);
    return AdditionalItem;
}());
/**
 * @schema StorePostSwapsReq
 * type: object
 * description: "The details of the swap to create."
 * required:
 *   - order_id
 *   - return_items
 *   - additional_items
 * properties:
 *   order_id:
 *     type: string
 *     description: The ID of the Order to create the Swap for.
 *   return_items:
 *     description: "The items to include in the Return."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the order's line item to return.
 *           type: string
 *         quantity:
 *           description: The quantity to return.
 *           type: integer
 *         reason_id:
 *           description: The ID of the reason of this return. Return reasons can be retrieved from the List Return Reasons API Route.
 *           type: string
 *         note:
 *           description: The note to add to the item being swapped.
 *           type: string
 *   return_shipping_option:
 *     type: string
 *     description: The ID of the Shipping Option to create the Shipping Method from.
 *   additional_items:
 *     description: "The items to exchange the returned items with."
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
 *           description: The quantity of the variant.
 *           type: integer
 */
var StorePostSwapsReq = /** @class */ (function () {
    function StorePostSwapsReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], StorePostSwapsReq.prototype, "order_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Item; }),
        __metadata("design:type", Array)
    ], StorePostSwapsReq.prototype, "return_items", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdditionalItem; }),
        __metadata("design:type", Array)
    ], StorePostSwapsReq.prototype, "additional_items", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostSwapsReq.prototype, "return_shipping_option", void 0);
    return StorePostSwapsReq;
}());
exports.StorePostSwapsReq = StorePostSwapsReq;
//# sourceMappingURL=create-swap.js.map