"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostDraftOrdersDraftOrderReq = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var _1 = require(".");
var models_1 = require("../../../../models");
var common_1 = require("../../../../types/common");
var validator_1 = require("../../../../utils/validator");
var is_type_1 = require("../../../../utils/validators/is-type");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /admin/draft-orders/{id}
 * operationId: PostDraftOrdersDraftOrder
 * summary: Update a Draft Order
 * description: "Update a Draft Order's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.update(draftOrderId, {
 *         email: "user@example.com"
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateDraftOrder } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const updateDraftOrder = useAdminUpdateDraftOrder(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handleUpdate = (email: string) => {
 *           updateDraftOrder.mutate({
 *             email,
 *           }, {
 *             onSuccess: ({ draft_order }) => {
 *               console.log(draft_order.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
    var id, validated, draftOrderService, cartService, draftOrder, manager, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostDraftOrdersDraftOrderReq, req.body)];
            case 1:
                validated = _b.sent();
                draftOrderService = req.scope.resolve("draftOrderService");
                cartService = req.scope.resolve("cartService");
                return [4 /*yield*/, draftOrderService.retrieve(id)];
            case 2:
                draftOrder = _b.sent();
                if (draftOrder.status === models_1.DraftOrderStatus.COMPLETED) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You are only allowed to update open draft orders");
                }
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var shipping_address, billing_address, rest, cartDataToUpdate;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(validated.no_notification_order !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, draftOrderService
                                            .withTransaction(transactionManager)
                                            .update(draftOrder.id, {
                                            no_notification_order: validated.no_notification_order,
                                        })];
                                case 1:
                                    _a.sent();
                                    delete validated.no_notification_order;
                                    _a.label = 2;
                                case 2:
                                    shipping_address = validated.shipping_address, billing_address = validated.billing_address, rest = __rest(validated, ["shipping_address", "billing_address"]);
                                    cartDataToUpdate = __assign({}, rest);
                                    if (typeof shipping_address === "string") {
                                        cartDataToUpdate.shipping_address_id = shipping_address;
                                    }
                                    else {
                                        cartDataToUpdate.shipping_address = shipping_address;
                                    }
                                    if (typeof billing_address === "string") {
                                        cartDataToUpdate.billing_address_id = billing_address;
                                    }
                                    else {
                                        cartDataToUpdate.billing_address = billing_address;
                                    }
                                    return [4 /*yield*/, cartService.update(draftOrder.cart_id, cartDataToUpdate)];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 3:
                _b.sent();
                _a = draftOrder;
                return [4 /*yield*/, cartService.retrieveWithTotals(draftOrder.cart_id, {
                        relations: _1.defaultAdminDraftOrdersCartRelations,
                        select: _1.defaultAdminDraftOrdersCartFields,
                    })];
            case 4:
                _a.cart = _b.sent();
                res.status(200).json({ draft_order: (0, clean_response_data_1.cleanResponseData)(draftOrder, []) });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostDraftOrdersDraftOrderReq
 * type: object
 * description: "The details of the draft order to update."
 * properties:
 *   region_id:
 *     type: string
 *     description: The ID of the Region to create the Draft Order in.
 *   country_code:
 *     type: string
 *     description: "The 2 character ISO code for the Country."
 *     externalDocs:
 *        url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *        description: See a list of codes.
 *   email:
 *     type: string
 *     description: "An email to be used in the Draft Order."
 *     format: email
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *       - type: string
 *   shipping_address:
 *     description: "The Address to be used for shipping purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *       - type: string
 *   discounts:
 *     description: "An array of Discount codes to add to the Draft Order."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code that a Discount is identifed by."
 *           type: string
 *   no_notification_order:
 *     description: "An optional flag passed to the resulting order that indicates whether the customer should receive notifications about order updates."
 *     type: boolean
 *   customer_id:
 *     description: "The ID of the customer this draft order is associated with."
 *     type: string
 */
var AdminPostDraftOrdersDraftOrderReq = /** @class */ (function () {
    function AdminPostDraftOrdersDraftOrderReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "billing_address", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "shipping_address", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Discount; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "discounts", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "customer_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostDraftOrdersDraftOrderReq.prototype, "no_notification_order", void 0);
    return AdminPostDraftOrdersDraftOrderReq;
}());
exports.AdminPostDraftOrdersDraftOrderReq = AdminPostDraftOrdersDraftOrderReq;
var Discount = /** @class */ (function () {
    function Discount() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Discount.prototype, "code", void 0);
    return Discount;
}());
//# sourceMappingURL=update-draft-order.js.map