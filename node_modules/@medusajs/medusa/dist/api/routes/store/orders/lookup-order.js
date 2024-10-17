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
exports.StoreGetOrdersParams = exports.ShippingAddressPayload = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var common_1 = require("../../../../types/common");
/**
 * @oas [get] /store/orders
 * operationId: "GetOrders"
 * summary: "Look Up an Order"
 * description: "Look up an order using filters. If the filters don't narrow down the results to a single order, a 404 response is returned with no orders."
 * parameters:
 *   - (query) display_id=* {number} Filter by ID.
 *   - (query) fields {string} Comma-separated fields that should be expanded in the returned order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - in: query
 *     name: email
 *     style: form
 *     explode: false
 *     description: Filter by email.
 *     required: true
 *     schema:
 *       type: string
 *       format: email
 *   - in: query
 *     name: shipping_address
 *     style: form
 *     explode: false
 *     description: Filter by the shipping address's postal code.
 *     schema:
 *       type: object
 *       properties:
 *         postal_code:
 *           type: string
 *           description: The postal code of the shipping address
 * x-codegen:
 *   method: lookupOrder
 *   queryParams: StoreGetOrdersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orders.lookupOrder({
 *         display_id: 1,
 *         email: "user@example.com"
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useOrders } from "medusa-react"
 *
 *       type Props = {
 *         displayId: number
 *         email: string
 *       }
 *
 *       const Order = ({
 *         displayId,
 *         email
 *       }: Props) => {
 *         const {
 *           order,
 *           isLoading,
 *         } = useOrders({
 *           display_id: displayId,
 *           email,
 *         })
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {order && <span>{order.display_id}</span>}
 *
 *           </div>
 *         )
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/orders?display_id=1&email=user@example.com'
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrdersRes"
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
    var validated, orderService, orders, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validated = req.validatedQuery;
                orderService = req.scope.resolve("orderService");
                return [4 /*yield*/, orderService.list({
                        display_id: validated.display_id,
                        email: validated.email,
                    }, req.listConfig)];
            case 1:
                orders = _a.sent();
                if (orders.length !== 1) {
                    res.sendStatus(404);
                    return [2 /*return*/];
                }
                order = orders[0];
                res.json({
                    order: (0, clean_response_data_1.cleanResponseData)(order, req.allowedProperties || []),
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Filters to apply on the order's shipping address.
 */
var ShippingAddressPayload = /** @class */ (function () {
    function ShippingAddressPayload() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ShippingAddressPayload.prototype, "postal_code", void 0);
    return ShippingAddressPayload;
}());
exports.ShippingAddressPayload = ShippingAddressPayload;
/**
 * Filters to narrow down the looked-up order, with configurations applied on the retrieved order.
 */
var StoreGetOrdersParams = /** @class */ (function (_super) {
    __extends(StoreGetOrdersParams, _super);
    function StoreGetOrdersParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetOrdersParams.prototype, "display_id", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], StoreGetOrdersParams.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ShippingAddressPayload; }),
        __metadata("design:type", ShippingAddressPayload)
    ], StoreGetOrdersParams.prototype, "shipping_address", void 0);
    return StoreGetOrdersParams;
}(common_1.FindParams));
exports.StoreGetOrdersParams = StoreGetOrdersParams;
//# sourceMappingURL=lookup-order.js.map