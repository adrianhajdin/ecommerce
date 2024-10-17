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
exports.AdminPostReturnsReturnReceiveReq = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
var _1 = require(".");
/**
 * @oas [post] /admin/returns/{id}/receive
 * operationId: "PostReturnsReturnReceive"
 * summary: "Receive a Return"
 * description: "Mark a Return as received. This also updates the status of associated order, claim, or swap accordingly."
 * parameters:
 *   - (path) id=* {string} The ID of the Return.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostReturnsReturnReceiveReq"
 * x-codegen:
 *   method: receive
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returns.receive(returnId, {
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
 *       import { useAdminReceiveReturn } from "medusa-react"
 *
 *       type ReceiveReturnData = {
 *         items: {
 *           item_id: string
 *           quantity: number
 *         }[]
 *       }
 *
 *       type Props = {
 *         returnId: string
 *       }
 *
 *       const Return = ({ returnId }: Props) => {
 *         const receiveReturn = useAdminReceiveReturn(
 *           returnId
 *         )
 *         // ...
 *
 *         const handleReceive = (data: ReceiveReturnData) => {
 *           receiveReturn.mutate(data, {
 *             onSuccess: ({ return: dataReturn }) => {
 *               console.log(dataReturn.status)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Return
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/returns/{id}/receive' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "items": [
 *             {
 *               "item_id": "asafg",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnsRes"
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
    var id, validated, returnService, orderService, swapService, entityManager, receivedReturn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostReturnsReturnReceiveReq, req.body)];
            case 1:
                validated = _a.sent();
                returnService = req.scope.resolve("returnService");
                orderService = req.scope.resolve("orderService");
                swapService = req.scope.resolve("swapService");
                entityManager = req.scope.resolve("manager");
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var refundAmount;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    refundAmount = validated.refund;
                                    if ((0, medusa_core_utils_1.isDefined)(validated.refund) && validated.refund < 0) {
                                        refundAmount = 0;
                                    }
                                    return [4 /*yield*/, returnService
                                            .withTransaction(manager)
                                            .receive(id, validated.items, refundAmount, true, {
                                            locationId: validated.location_id,
                                        })];
                                case 1:
                                    receivedReturn = _a.sent();
                                    if (!receivedReturn.order_id) return [3 /*break*/, 3];
                                    return [4 /*yield*/, orderService
                                            .withTransaction(manager)
                                            .registerReturnReceived(receivedReturn.order_id, receivedReturn, refundAmount)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    if (!receivedReturn.swap_id) return [3 /*break*/, 5];
                                    return [4 /*yield*/, swapService
                                            .withTransaction(manager)
                                            .registerReceived(receivedReturn.swap_id)];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, returnService.retrieve(id, {
                        relations: _1.defaultRelations,
                    })];
            case 3:
                receivedReturn = _a.sent();
                res.status(200).json({ return: receivedReturn });
                return [2 /*return*/];
        }
    });
}); });
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Item.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], Item.prototype, "quantity", void 0);
    return Item;
}());
/**
 * @schema AdminPostReturnsReturnReceiveReq
 * type: object
 * description: "The details of the received return."
 * required:
 *   - items
 * properties:
 *   items:
 *     description: The Line Items that have been received.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item.
 *           type: integer
 *   refund:
 *     description: The amount to refund.
 *     type: number
 *   location_id:
 *     description: The ID of the location to return items from.
 *     type: string
 */
var AdminPostReturnsReturnReceiveReq = /** @class */ (function () {
    function AdminPostReturnsReturnReceiveReq() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Item; }),
        __metadata("design:type", Array)
    ], AdminPostReturnsReturnReceiveReq.prototype, "items", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], AdminPostReturnsReturnReceiveReq.prototype, "refund", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostReturnsReturnReceiveReq.prototype, "location_id", void 0);
    return AdminPostReturnsReturnReceiveReq;
}());
exports.AdminPostReturnsReturnReceiveReq = AdminPostReturnsReturnReceiveReq;
//# sourceMappingURL=receive-return.js.map