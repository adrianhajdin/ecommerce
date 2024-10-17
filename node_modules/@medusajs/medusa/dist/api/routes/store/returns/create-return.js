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
exports.StorePostReturnsReq = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
var _1 = require(".");
/**
 * @oas [post] /store/returns
 * operationId: "PostReturns"
 * summary: "Create Return"
 * description: "Create a Return for an Order. If a return shipping method is specified, the return is automatically fulfilled."
 * externalDocs:
 *   description: "How to create a return in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/create-return"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostReturnsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.returns.create({
 *         order_id,
 *         items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then((data) => {
 *         console.log(data.return.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateReturn } from "medusa-react"
 *
 *       type CreateReturnData = {
 *         items: {
 *           item_id: string,
 *           quantity: number
 *         }[]
 *         return_shipping: {
 *           option_id: string
 *         }
 *       }
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const CreateReturn = ({ orderId }: Props) => {
 *         const createReturn = useCreateReturn()
 *         // ...
 *
 *         const handleCreate = (data: CreateReturnData) => {
 *           createReturn.mutate({
 *             ...data,
 *             order_id: orderId
 *           }, {
 *             onSuccess: ({ return: returnData }) => {
 *               console.log(returnData.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateReturn
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/returns' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_id": "asfasf",
 *           "items": [
 *             {
 *               "item_id": "assfasf",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreReturnsRes"
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
    var returnDto, idempotencyKeyService, manager, headerKey, idempotencyKey, error_1, returnService_1, eventBus_1, inProgress_1, err_2, _a, err_1, logger;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(StorePostReturnsReq, req.body)];
            case 1:
                returnDto = _b.sent();
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
                _b.label = 6;
            case 6:
                _b.trys.push([6, 17, , 18]);
                returnService_1 = req.scope.resolve("returnService");
                eventBus_1 = req.scope.resolve("eventBusService");
                inProgress_1 = true;
                err_2 = false;
                _b.label = 7;
            case 7:
                if (!inProgress_1) return [3 /*break*/, 16];
                _a = idempotencyKey.recovery_point;
                switch (_a) {
                    case "started": return [3 /*break*/, 8];
                    case "return_requested": return [3 /*break*/, 10];
                    case "finished": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 13];
            case 8: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var returnObj, createdReturn;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                returnObj = {
                                                    order_id: returnDto.order_id,
                                                    idempotency_key: idempotencyKey.idempotency_key,
                                                    items: returnDto.items,
                                                };
                                                if (returnDto.return_shipping) {
                                                    returnObj.shipping_method = returnDto.return_shipping;
                                                }
                                                return [4 /*yield*/, returnService_1
                                                        .withTransaction(manager)
                                                        .create(returnObj)];
                                            case 1:
                                                createdReturn = _a.sent();
                                                if (!returnDto.return_shipping) return [3 /*break*/, 3];
                                                return [4 /*yield*/, returnService_1
                                                        .withTransaction(manager)
                                                        .fulfill(createdReturn.id)];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [4 /*yield*/, eventBus_1
                                                    .withTransaction(manager)
                                                    .emit("order.return_requested", {
                                                    id: returnDto.order_id,
                                                    return_id: createdReturn.id,
                                                })];
                                            case 4:
                                                _a.sent();
                                                return [2 /*return*/, {
                                                        recovery_point: "return_requested",
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
                    inProgress_1 = false;
                    err_2 = e;
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
                                    var returnOrders, returnOrder;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, returnService_1
                                                    .withTransaction(manager)
                                                    .list({
                                                    idempotency_key: idempotencyKey.idempotency_key,
                                                }, {
                                                    relations: _1.defaultRelations,
                                                })];
                                            case 1:
                                                returnOrders = _a.sent();
                                                if (!returnOrders.length) {
                                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Return not found");
                                                }
                                                returnOrder = returnOrders[0];
                                                return [2 /*return*/, {
                                                        response_code: 200,
                                                        response_body: { return: returnOrder },
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
                    inProgress_1 = false;
                    err_2 = e;
                })];
            case 11:
                _b.sent();
                return [3 /*break*/, 15];
            case 12:
                {
                    inProgress_1 = false;
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
            case 15: return [3 /*break*/, 7];
            case 16:
                if (err_2) {
                    throw err_2;
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [3 /*break*/, 18];
            case 17:
                err_1 = _b.sent();
                logger = req.scope.resolve("logger");
                logger.log(err_1);
                throw err_1;
            case 18: return [2 /*return*/];
        }
    });
}); });
var ReturnShipping = /** @class */ (function () {
    function ReturnShipping() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], ReturnShipping.prototype, "option_id", void 0);
    return ReturnShipping;
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
/**
 * @schema StorePostReturnsReq
 * type: object
 * description: "The details of the return to create."
 * required:
 *   - order_id
 *   - items
 * properties:
 *   order_id:
 *     type: string
 *     description: The ID of the Order to create the return for.
 *   items:
 *     description: "The items to include in the return."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the line item to return.
 *           type: string
 *         quantity:
 *           description: The quantity to return.
 *           type: integer
 *         reason_id:
 *           description: The ID of the return reason. Return reasons can be retrieved from the List Return Reasons API Route.
 *           type: string
 *         note:
 *           description: A note to add to the item returned.
 *           type: string
 *   return_shipping:
 *     description: The return shipping method used to return the items. If provided, a fulfillment is automatically created for the return.
 *     type: object
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 */
var StorePostReturnsReq = /** @class */ (function () {
    function StorePostReturnsReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], StorePostReturnsReq.prototype, "order_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Item; }),
        __metadata("design:type", Array)
    ], StorePostReturnsReq.prototype, "items", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ReturnShipping; }),
        __metadata("design:type", ReturnShipping)
    ], StorePostReturnsReq.prototype, "return_shipping", void 0);
    return StorePostReturnsReq;
}());
exports.StorePostReturnsReq = StorePostReturnsReq;
//# sourceMappingURL=create-return.js.map