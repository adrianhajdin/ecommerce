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
exports.AdminPostOrdersOrderSwapsSwapShipmentsParams = exports.AdminPostOrdersOrderSwapsSwapShipmentsReq = void 0;
var class_validator_1 = require("class-validator");
var validator_1 = require("../../../../utils/validator");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /admin/orders/{id}/swaps/{swap_id}/shipments
 * operationId: "PostOrdersOrderSwapsSwapShipments"
 * summary: "Ship a Swap's Fulfillment"
 * description: "Create a shipment for a swap and mark its fulfillment as shipped. This changes the swap's fulfillment status to either `partially_shipped` or `shipped`, depending on
 *  whether all the items were shipped."
 * x-authenticated: true
 * externalDocs:
 *   description: Handling swap fulfillments
 *   url: https://docs.medusajs.com/modules/orders/swaps#handling-swap-fulfillment
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) swap_id=* {string} The ID of the Swap.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsSwapShipmentsReq"
 * x-codegen:
 *   method: createSwapShipment
 *   params: AdminPostOrdersOrderSwapsSwapShipmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createSwapShipment(orderId, swapId, {
 *         fulfillment_id
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateSwapShipment } from "medusa-react"
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
 *         const createShipment = useAdminCreateSwapShipment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCreateShipment = (
 *           fulfillmentId: string
 *         ) => {
 *           createShipment.mutate({
 *             swap_id: swapId,
 *             fulfillment_id: fulfillmentId,
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
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps/{swap_id}/shipments' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "fulfillment_id": "{fulfillment_id}"
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
    var _a, id, swap_id, validated, orderService, swapService, manager, order;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, swap_id = _a.swap_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostOrdersOrderSwapsSwapShipmentsReq, req.body)];
            case 1:
                validated = _b.sent();
                orderService = req.scope.resolve("orderService");
                swapService = req.scope.resolve("swapService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, swapService.withTransaction(transactionManager).createShipment(swap_id, validated.fulfillment_id, (_a = validated.tracking_numbers) === null || _a === void 0 ? void 0 : _a.map(function (n) { return ({ tracking_number: n }); }), { no_notification: validated.no_notification })];
                                case 1: return [2 /*return*/, _b.sent()];
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
                res.json({ order: (0, clean_response_data_1.cleanResponseData)(order, []) });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostOrdersOrderSwapsSwapShipmentsReq
 * type: object
 * required:
 *   - fulfillment_id
 * properties:
 *   fulfillment_id:
 *     description: The ID of the Fulfillment.
 *     type: string
 *   tracking_numbers:
 *     description: The tracking numbers for the shipment.
 *     type: array
 *     items:
 *       type: string
 *   no_notification:
 *     description: If set to true no notification will be sent related to this Claim.
 *     type: boolean
 */
var AdminPostOrdersOrderSwapsSwapShipmentsReq = /** @class */ (function () {
    function AdminPostOrdersOrderSwapsSwapShipmentsReq() {
        this.tracking_numbers = [];
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdminPostOrdersOrderSwapsSwapShipmentsReq.prototype, "fulfillment_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostOrdersOrderSwapsSwapShipmentsReq.prototype, "tracking_numbers", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostOrdersOrderSwapsSwapShipmentsReq.prototype, "no_notification", void 0);
    return AdminPostOrdersOrderSwapsSwapShipmentsReq;
}());
exports.AdminPostOrdersOrderSwapsSwapShipmentsReq = AdminPostOrdersOrderSwapsSwapShipmentsReq;
var AdminPostOrdersOrderSwapsSwapShipmentsParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderSwapsSwapShipmentsParams, _super);
    function AdminPostOrdersOrderSwapsSwapShipmentsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderSwapsSwapShipmentsParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderSwapsSwapShipmentsParams = AdminPostOrdersOrderSwapsSwapShipmentsParams;
//# sourceMappingURL=create-swap-shipment.js.map