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
exports.AdminPostOrdersOrderSwapsSwapFulfillmentsParams = exports.AdminPostOrdersOrderSwapsSwapFulfillmentsReq = void 0;
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var validator_1 = require("../../../../utils/validator");
var create_fulfillment_1 = require("./create-fulfillment");
/**
 * @oas [post] /admin/orders/{id}/swaps/{swap_id}/fulfillments
 * operationId: "PostOrdersOrderSwapsSwapFulfillments"
 * summary: "Create a Swap Fulfillment"
 * description: "Create a Fulfillment for a Swap and change its fulfillment status to `fulfilled`. If it requires any additional actions,
 * its fulfillment status may change to `requires_action`."
 * x-authenticated: true
 * externalDocs:
 *   description: Handling a swap's fulfillment
 *   url: https://docs.medusajs.com/modules/orders/swaps#handling-swap-fulfillment
 * parameters:
 *   - (path) id=* {string} The ID of the Order the swap is associated with.
 *   - (path) swap_id=* {string} The ID of the Swap.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsSwapFulfillmentsReq"
 * x-codegen:
 *   method: fulfillSwap
 *   params: AdminPostOrdersOrderSwapsSwapFulfillmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.fulfillSwap(orderId, swapId, {
 *
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminFulfillSwap } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string,
 *         swapId: string
 *       }
 *
 *       const Swap = ({
 *         orderId,
 *         swapId
 *       }: Props) => {
 *         const fulfillSwap = useAdminFulfillSwap(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleFulfill = () => {
 *           fulfillSwap.mutate({
 *             swap_id: swapId,
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
 *       export default Swap
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps/{swap_id}/fulfillments' \
 *       -H 'x-medusa-access-token: {api_token}'
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
    var _a, id, swap_id, validated, orderService, swapService, entityManager, pvInventoryService, order;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, swap_id = _a.swap_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostOrdersOrderSwapsSwapFulfillmentsReq, req.body)];
            case 1:
                validated = _b.sent();
                orderService = req.scope.resolve("orderService");
                swapService = req.scope.resolve("swapService");
                entityManager = req.scope.resolve("manager");
                pvInventoryService = req.scope.resolve("productVariantInventoryService");
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var swapServiceTx, existingFulfillments, existingFulfillmentSet, fulfillments, pvInventoryServiceTx;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    swapServiceTx = swapService.withTransaction(manager);
                                    return [4 /*yield*/, swapServiceTx.retrieve(swap_id, {
                                            relations: [
                                                "fulfillments",
                                                "fulfillments.items",
                                                "fulfillments.items.item",
                                            ],
                                        })];
                                case 1:
                                    existingFulfillments = (_a.sent()).fulfillments;
                                    existingFulfillmentSet = new Set(existingFulfillments.map(function (fulfillment) { return fulfillment.id; }));
                                    return [4 /*yield*/, swapServiceTx.createFulfillment(swap_id, {
                                            metadata: validated.metadata,
                                            no_notification: validated.no_notification,
                                            location_id: validated.location_id,
                                        })];
                                case 2:
                                    _a.sent();
                                    if (!validated.location_id) return [3 /*break*/, 5];
                                    return [4 /*yield*/, swapServiceTx.retrieve(swap_id, {
                                            relations: [
                                                "fulfillments",
                                                "fulfillments.items",
                                                "fulfillments.items.item",
                                            ],
                                        })];
                                case 3:
                                    fulfillments = (_a.sent()).fulfillments;
                                    pvInventoryServiceTx = pvInventoryService.withTransaction(manager);
                                    return [4 /*yield*/, (0, create_fulfillment_1.updateInventoryAndReservations)(fulfillments.filter(function (f) { return !existingFulfillmentSet.has(f.id); }), {
                                            inventoryService: pvInventoryServiceTx,
                                            locationId: validated.location_id,
                                        })];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [4 /*yield*/, orderService.retrieveWithTotals(id, req.retrieveConfig, {
                        includes: req.includes,
                    })];
            case 3:
                order = _b.sent();
                res.status(200).json({ order: (0, clean_response_data_1.cleanResponseData)(order, []) });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostOrdersOrderSwapsSwapFulfillmentsReq
 * type: object
 * properties:
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   no_notification:
 *     description: If set to `true`, no notification will be sent to the customer related to this swap.
 *     type: boolean
 *   location_id:
 *     description: "The ID of the fulfillment's location."
 *     type: string
 */
var AdminPostOrdersOrderSwapsSwapFulfillmentsReq = /** @class */ (function () {
    function AdminPostOrdersOrderSwapsSwapFulfillmentsReq() {
    }
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostOrdersOrderSwapsSwapFulfillmentsReq.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderSwapsSwapFulfillmentsReq.prototype, "no_notification", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderSwapsSwapFulfillmentsReq.prototype, "location_id", void 0);
    return AdminPostOrdersOrderSwapsSwapFulfillmentsReq;
}());
exports.AdminPostOrdersOrderSwapsSwapFulfillmentsReq = AdminPostOrdersOrderSwapsSwapFulfillmentsReq;
// eslint-disable-next-line max-len
var AdminPostOrdersOrderSwapsSwapFulfillmentsParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderSwapsSwapFulfillmentsParams, _super);
    function AdminPostOrdersOrderSwapsSwapFulfillmentsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderSwapsSwapFulfillmentsParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderSwapsSwapFulfillmentsParams = AdminPostOrdersOrderSwapsSwapFulfillmentsParams;
//# sourceMappingURL=fulfill-swap.js.map