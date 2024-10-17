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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostReservationsReq = void 0;
var class_validator_1 = require("class-validator");
var utils_1 = require("@medusajs/utils");
var validate_reservation_quantity_1 = require("./utils/validate-reservation-quantity");
/**
 * @oas [post] /admin/reservations
 * operationId: "PostReservations"
 * summary: "Create a Reservation"
 * description: "Create a Reservation which can be associated with any resource, such as an order's line item."
 * x-authenticated: true
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostReservationsReq"
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.reservations.create({
 *         line_item_id: "item_123",
 *         location_id: "loc_123",
 *         inventory_item_id: "iitem_123",
 *         quantity: 1
 *       })
 *       .then(({ reservation }) => {
 *         console.log(reservation.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateReservation } from "medusa-react"
 *
 *       const CreateReservation = () => {
 *         const createReservation = useAdminCreateReservation()
 *         // ...
 *
 *         const handleCreate = (
 *           locationId: string,
 *           inventoryItemId: string,
 *           quantity: number
 *         ) => {
 *           createReservation.mutate({
 *             location_id: locationId,
 *             inventory_item_id: inventoryItemId,
 *             quantity,
 *           }, {
 *             onSuccess: ({ reservation }) => {
 *               console.log(reservation.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateReservation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/reservations' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "line_item_id": "item_123",
 *           "location_id": "loc_123",
 *           "inventory_item_id": "iitem_123",
 *           "quantity": 1
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Reservations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReservationsRes"
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
    var validatedBody, inventoryService, userId, reservation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedBody = req.validatedBody;
                inventoryService = req.scope.resolve("inventoryService");
                userId = req.user.id || req.user.userId;
                if (!(0, utils_1.isDefined)(validatedBody.line_item_id)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, validate_reservation_quantity_1.validateUpdateReservationQuantity)(validatedBody.line_item_id, validatedBody.quantity, {
                        lineItemService: req.scope.resolve("lineItemService"),
                        inventoryService: req.scope.resolve("inventoryService"),
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4 /*yield*/, inventoryService.createReservationItem(__assign(__assign({}, validatedBody), { created_by: userId }))];
            case 3:
                reservation = _a.sent();
                res.status(200).json({ reservation: reservation });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostReservationsReq
 * type: object
 * description: "The details of the reservation to create."
 * required:
 *   - location_id
 *   - inventory_item_id
 *   - quantity
 * properties:
 *   line_item_id:
 *     description: "The ID of the line item of the reservation."
 *     type: string
 *   location_id:
 *     description: "The ID of the location of the reservation."
 *     type: string
 *   inventory_item_id:
 *     description: "The ID of the inventory item the reservation is associated with."
 *     type: string
 *   quantity:
 *     description: "The quantity to reserve."
 *     type: number
 *   description:
 *     description: "The reservation's description."
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostReservationsReq = /** @class */ (function () {
    function AdminPostReservationsReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostReservationsReq.prototype, "line_item_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostReservationsReq.prototype, "location_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostReservationsReq.prototype, "inventory_item_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], AdminPostReservationsReq.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostReservationsReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostReservationsReq.prototype, "metadata", void 0);
    return AdminPostReservationsReq;
}());
exports.AdminPostReservationsReq = AdminPostReservationsReq;
//# sourceMappingURL=create-reservation.js.map