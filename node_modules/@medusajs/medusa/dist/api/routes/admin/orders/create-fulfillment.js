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
exports.AdminPostOrdersOrderFulfillmentsParams = exports.AdminPostOrdersOrderFulfillmentsReq = exports.updateInventoryAndReservations = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [post] /admin/orders/{id}/fulfillment
 * operationId: "PostOrdersOrderFulfillments"
 * summary: "Create a Fulfillment"
 * description: "Create a Fulfillment of an Order using the fulfillment provider, and change the order's fulfillment status to either `partially_fulfilled` or `fulfilled`, depending on
 *  whether all the items were fulfilled."
 * x-authenticated: true
 * externalDocs:
 *   description: Fulfillments of orders
 *   url: https://docs.medusajs.com/modules/orders/#fulfillments-in-orders
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderFulfillmentsReq"
 * x-codegen:
 *   method: createFulfillment
 *   params: AdminPostOrdersOrderFulfillmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createFulfillment(orderId, {
 *         items: [
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
 *       import { useAdminCreateFulfillment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const createFulfillment = useAdminCreateFulfillment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCreateFulfillment = (
 *           itemId: string,
 *           quantity: number
 *         ) => {
 *           createFulfillment.mutate({
 *             items: [
 *               {
 *                 item_id: itemId,
 *                 quantity,
 *               },
 *             ],
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.fulfillments)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/fulfillment' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "items": [
 *             {
 *               "item_id": "{item_id}",
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
    var id, validatedBody, orderService, pvInventoryService, manager, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                validatedBody = req.validatedBody;
                orderService = req.scope.resolve("orderService");
                pvInventoryService = req.scope.resolve("productVariantInventoryService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var orderServiceTx, existingFulfillments, existingFulfillmentSet, fulfillments, pvInventoryServiceTx;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    orderServiceTx = orderService.withTransaction(transactionManager);
                                    return [4 /*yield*/, orderServiceTx.retrieve(id, {
                                            relations: ["fulfillments"],
                                        })];
                                case 1:
                                    existingFulfillments = (_a.sent()).fulfillments;
                                    existingFulfillmentSet = new Set(existingFulfillments.map(function (fulfillment) { return fulfillment.id; }));
                                    return [4 /*yield*/, orderServiceTx.createFulfillment(id, validatedBody.items, {
                                            metadata: validatedBody.metadata,
                                            no_notification: validatedBody.no_notification,
                                            location_id: validatedBody.location_id,
                                        })];
                                case 2:
                                    _a.sent();
                                    if (!validatedBody.location_id) return [3 /*break*/, 5];
                                    return [4 /*yield*/, orderServiceTx.retrieve(id, {
                                            relations: [
                                                "fulfillments",
                                                "fulfillments.items",
                                                "fulfillments.items.item",
                                            ],
                                        })];
                                case 3:
                                    fulfillments = (_a.sent()).fulfillments;
                                    pvInventoryServiceTx = pvInventoryService.withTransaction(transactionManager);
                                    return [4 /*yield*/, (0, exports.updateInventoryAndReservations)(fulfillments.filter(function (f) { return !existingFulfillmentSet.has(f.id); }), {
                                            inventoryService: pvInventoryServiceTx,
                                            locationId: validatedBody.location_id,
                                        })];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [4 /*yield*/, orderService.retrieveWithTotals(id, req.retrieveConfig, {
                        includes: req.includes,
                    })];
            case 2:
                order = _a.sent();
                res.json({ order: (0, clean_response_data_1.cleanResponseData)(order, []) });
                return [2 /*return*/];
        }
    });
}); });
var updateInventoryAndReservations = function (fulfillments, context) { return __awaiter(void 0, void 0, void 0, function () {
    var inventoryService, locationId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inventoryService = context.inventoryService, locationId = context.locationId;
                return [4 /*yield*/, (0, utils_1.promiseAll)(fulfillments.map(function (_a) {
                        var items = _a.items;
                        return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, inventoryService.validateInventoryAtLocation(items.map(function (_a) {
                                            var item = _a.item, quantity = _a.quantity;
                                            return (__assign(__assign({}, item), { quantity: quantity }));
                                        }), locationId)];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }))];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, utils_1.promiseAll)(fulfillments.map(function (_a) {
                        var items = _a.items;
                        return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(items.map(function (_a) {
                                            var item = _a.item, quantity = _a.quantity;
                                            return __awaiter(void 0, void 0, void 0, function () {
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            if (!item.variant_id) {
                                                                return [2 /*return*/];
                                                            }
                                                            return [4 /*yield*/, inventoryService.adjustReservationsQuantityByLineItem(item.id, item.variant_id, locationId, -quantity)];
                                                        case 1:
                                                            _b.sent();
                                                            return [4 /*yield*/, inventoryService.adjustInventory(item.variant_id, locationId, -quantity)];
                                                        case 2:
                                                            _b.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        }))];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateInventoryAndReservations = updateInventoryAndReservations;
/**
 * @schema AdminPostOrdersOrderFulfillmentsReq
 * type: object
 * description: "The details of the fulfillment to be created."
 * required:
 *   - items
 * properties:
 *   items:
 *     description: The Line Items to include in the Fulfillment.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item to fulfill.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item to fulfill.
 *           type: integer
 *   location_id:
 *     type: string
 *     description: "The ID of the location where the items will be fulfilled from."
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this fulfillment.
 *     type: boolean
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostOrdersOrderFulfillmentsReq = /** @class */ (function () {
    function AdminPostOrdersOrderFulfillmentsReq() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Item; }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderFulfillmentsReq.prototype, "items", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderFulfillmentsReq.prototype, "location_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value);
        }),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderFulfillmentsReq.prototype, "no_notification", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostOrdersOrderFulfillmentsReq.prototype, "metadata", void 0);
    return AdminPostOrdersOrderFulfillmentsReq;
}());
exports.AdminPostOrdersOrderFulfillmentsReq = AdminPostOrdersOrderFulfillmentsReq;
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
    return Item;
}());
var AdminPostOrdersOrderFulfillmentsParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderFulfillmentsParams, _super);
    function AdminPostOrdersOrderFulfillmentsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderFulfillmentsParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderFulfillmentsParams = AdminPostOrdersOrderFulfillmentsParams;
//# sourceMappingURL=create-fulfillment.js.map