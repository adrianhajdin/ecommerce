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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetCustomersCustomerOrdersParams = exports.StoreGetCustomersCustomerOrdersPaginationParams = void 0;
var class_validator_1 = require("class-validator");
var order_1 = require("../../../../models/order");
var class_transformer_1 = require("class-transformer");
var common_1 = require("../../../../types/common");
/**
 * @oas [get] /store/customers/me/orders
 * operationId: GetCustomersCustomerOrders
 * summary: List Orders
 * description: "Retrieve a list of the logged-in Customer's Orders. The orders can be filtered by fields such as `status` or `fulfillment_status`. The orders can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search orders' display ID, email, shipping address's first name, customer's first name, customer's last name, and customer's phone number.
 *   - (query) id {string} Filter by ID.
 *   - in: query
 *     name: status
 *     style: form
 *     explode: false
 *     description: Filter by status.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [pending, completed, archived, canceled, requires_action]
 *   - in: query
 *     name: fulfillment_status
 *     style: form
 *     explode: false
 *     description: Fulfillment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [not_fulfilled, partially_fulfilled, fulfilled, partially_shipped, shipped, partially_returned, returned, canceled, requires_action]
 *   - in: query
 *     name: payment_status
 *     style: form
 *     explode: false
 *     description: Payment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [not_paid, awaiting, captured, partially_refunded, refunded, canceled, requires_action]
 *   - (query) display_id {string} Filter by display ID.
 *   - (query) cart_id {string} Filter by cart ID.
 *   - (query) email {string} Filter by email.
 *   - (query) region_id {string} Filter by region ID.
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: Filter by the 3 character ISO currency code of the order.
 *     schema:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 *   - (query) tax_rate {string} Filter by tax rate.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: canceled_at
 *     description: Filter by a cancelation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) limit=10 {integer} Limit the number of orders returned.
 *   - (query) offset=0 {integer} The number of orders to skip when retrieving the orders.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned orders.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned orders.
 * x-codegen:
 *   method: listOrders
 *   queryParams: StoreGetCustomersCustomerOrdersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.listOrders()
 *       .then(({ orders, limit, offset, count }) => {
 *         console.log(orders);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCustomerOrders } from "medusa-react"
 *
 *       const Orders = () => {
 *         // refetch a function that can be used to
 *         // re-retrieve orders after the customer logs in
 *         const { orders, isLoading } = useCustomerOrders()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading orders...</span>}
 *             {orders?.length && (
 *               <ul>
 *                 {orders.map((order) => (
 *                   <li key={order.id}>{order.display_id}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Orders
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/customers/me/orders' \
 *       -H 'Authorization: Bearer {access_token}'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersListOrdersRes"
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
    var id, orderService, _a, orders, count, _b, limit, offset;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                id = (_c = req.user) === null || _c === void 0 ? void 0 : _c.customer_id;
                orderService = req.scope.resolve("orderService");
                req.filterableFields = __assign(__assign({}, req.filterableFields), { customer_id: id });
                return [4 /*yield*/, orderService.listAndCount(req.filterableFields, req.listConfig)];
            case 1:
                _a = __read.apply(void 0, [_d.sent(), 2]), orders = _a[0], count = _a[1];
                _b = req.validatedQuery, limit = _b.limit, offset = _b.offset;
                res.json({ orders: orders, count: count, offset: offset, limit: limit });
                return [2 /*return*/];
        }
    });
}); });
/**
 * {@inheritDoc FindPaginationParams}
 */
var StoreGetCustomersCustomerOrdersPaginationParams = /** @class */ (function () {
    function StoreGetCustomersCustomerOrdersPaginationParams() {
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 10
         */
        this.limit = 10;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        this.offset = 0;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], StoreGetCustomersCustomerOrdersPaginationParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], StoreGetCustomersCustomerOrdersPaginationParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersPaginationParams.prototype, "fields", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersPaginationParams.prototype, "expand", void 0);
    return StoreGetCustomersCustomerOrdersPaginationParams;
}());
exports.StoreGetCustomersCustomerOrdersPaginationParams = StoreGetCustomersCustomerOrdersPaginationParams;
/**
 * Parameters used to filter and configure the pagination of the retrieved orders.
 */
// eslint-disable-next-line max-len
var StoreGetCustomersCustomerOrdersParams = /** @class */ (function (_super) {
    __extends(StoreGetCustomersCustomerOrdersParams, _super);
    function StoreGetCustomersCustomerOrdersParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(order_1.OrderStatus, { each: true }),
        __metadata("design:type", Array)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(order_1.FulfillmentStatus, { each: true }),
        __metadata("design:type", Array)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "fulfillment_status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(order_1.PaymentStatus, { each: true }),
        __metadata("design:type", Array)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "payment_status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "display_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "cart_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "tax_rate", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the orders' `updated_at` date.
         */
        )
    ], StoreGetCustomersCustomerOrdersParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the orders' `canceled_at` date.
         */
        )
    ], StoreGetCustomersCustomerOrdersParams.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], StoreGetCustomersCustomerOrdersParams.prototype, "canceled_at", void 0);
    return StoreGetCustomersCustomerOrdersParams;
}(StoreGetCustomersCustomerOrdersPaginationParams));
exports.StoreGetCustomersCustomerOrdersParams = StoreGetCustomersCustomerOrdersParams;
//# sourceMappingURL=list-orders.js.map