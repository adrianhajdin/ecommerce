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
exports.StorePostOrderEditsOrderEditDecline = void 0;
var class_validator_1 = require("class-validator");
var order_edit_1 = require("../../../../types/order-edit");
/**
 * @oas [post] /store/order-edits/{id}/decline
 * operationId: "PostOrderEditsOrderEditDecline"
 * summary: "Decline an Order Edit"
 * description: "Decline an Order Edit. The changes are not reflected on the original order."
 * parameters:
 *   - (path) id=* {string} The ID of the OrderEdit.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostOrderEditsOrderEditDecline"
 * x-codegen:
 *   method: decline
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orderEdits.decline(orderEditId)
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useDeclineOrderEdit } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const declineOrderEdit = useDeclineOrderEdit(orderEditId)
 *         // ...
 *
 *         const handleDeclineOrderEdit = (
 *           declinedReason: string
 *         ) => {
 *           declineOrderEdit.mutate({
 *             declined_reason: declinedReason,
 *           }, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.declined_at)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEdit
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/order-edits/{id}/decline'
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrderEditsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validatedBody, orderEditService, manager, userId, orderEdit;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                id = req.params.id;
                validatedBody = req.validatedBody;
                orderEditService = req.scope.resolve("orderEditService");
                manager = req.scope.resolve("manager");
                userId = (_d = (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id) !== null && _b !== void 0 ? _b : (_c = req.user) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : (_e = req.user) === null || _e === void 0 ? void 0 : _e.userId;
                return [4 /*yield*/, manager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, orderEditService.withTransaction(manager).decline(id, {
                                        declinedReason: validatedBody.declined_reason,
                                        declinedBy: userId,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _f.sent();
                return [4 /*yield*/, orderEditService.retrieve(id, {
                        select: order_edit_1.defaultStoreOrderEditFields,
                        relations: order_edit_1.defaultStoreOrderEditRelations,
                    })];
            case 2:
                orderEdit = _f.sent();
                return [4 /*yield*/, orderEditService.decorateTotals(orderEdit)];
            case 3:
                orderEdit = _f.sent();
                res.status(200).json({ order_edit: orderEdit });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema StorePostOrderEditsOrderEditDecline
 * type: object
 * description: "The details of the order edit's decline."
 * properties:
 *   declined_reason:
 *     type: string
 *     description: The reason for declining the Order Edit.
 */
var StorePostOrderEditsOrderEditDecline = /** @class */ (function () {
    function StorePostOrderEditsOrderEditDecline() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostOrderEditsOrderEditDecline.prototype, "declined_reason", void 0);
    return StorePostOrderEditsOrderEditDecline;
}());
exports.StorePostOrderEditsOrderEditDecline = StorePostOrderEditsOrderEditDecline;
//# sourceMappingURL=decline-order-edit.js.map