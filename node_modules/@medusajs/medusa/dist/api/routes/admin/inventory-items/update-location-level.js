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
exports.AdminPostInventoryItemsItemLocationLevelsLevelParams = exports.AdminPostInventoryItemsItemLocationLevelsLevelReq = void 0;
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
/**
 * @oas [post] /admin/inventory-items/{id}/location-levels/{location_id}
 * operationId: "PostInventoryItemsInventoryItemLocationLevelsLocationLevel"
 * summary: "Update a Inventory Level"
 * description: "Update an inventory level's details for a given Inventory Item."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item that the location is associated with.
 *   - (path) location_id=* {string} The ID of the inventory level to update.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned inventory level.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory level.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostInventoryItemsItemLocationLevelsLevelReq"
 * x-codegen:
 *   method: updateLocationLevel
 *   queryParams: AdminPostInventoryItemsItemLocationLevelsLevelParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.updateLocationLevel(inventoryItemId, locationId, {
 *         stocked_quantity: 15,
 *       })
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateLocationLevel } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const updateLocationLevel = useAdminUpdateLocationLevel(
 *           inventoryItemId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           stockLocationId: string,
 *           stocked_quantity: number
 *         ) => {
 *           updateLocationLevel.mutate({
 *             stockLocationId,
 *             stocked_quantity,
 *           }, {
 *             onSuccess: ({ inventory_item }) => {
 *               console.log(inventory_item.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default InventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/inventory-items/{id}/location-levels/{location_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "stocked_quantity": 15
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsRes"
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
    var _a, id, location_id, inventoryService, manager, validatedBody, inventoryItem;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, location_id = _a.location_id;
                inventoryService = req.scope.resolve("inventoryService");
                manager = req.scope.resolve("manager");
                validatedBody = req.validatedBody;
                return [4 /*yield*/, inventoryService.updateInventoryLevel(id, location_id, validatedBody)];
            case 1:
                _b.sent();
                return [4 /*yield*/, inventoryService.retrieveInventoryItem(id, req.retrieveConfig)];
            case 2:
                inventoryItem = _b.sent();
                res.status(200).json({ inventory_item: inventoryItem });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostInventoryItemsItemLocationLevelsLevelReq
 * type: object
 * properties:
 *   stocked_quantity:
 *     description: the total stock quantity of an inventory item at the specified inventory level
 *     type: number
 *   incoming_quantity:
 *     description: the incoming stock quantity of an inventory item at the specified inventory level
 *     type: number
 */
var AdminPostInventoryItemsItemLocationLevelsLevelReq = /** @class */ (function () {
    function AdminPostInventoryItemsItemLocationLevelsLevelReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsItemLocationLevelsLevelReq.prototype, "incoming_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsItemLocationLevelsLevelReq.prototype, "stocked_quantity", void 0);
    return AdminPostInventoryItemsItemLocationLevelsLevelReq;
}());
exports.AdminPostInventoryItemsItemLocationLevelsLevelReq = AdminPostInventoryItemsItemLocationLevelsLevelReq;
// eslint-disable-next-line
var AdminPostInventoryItemsItemLocationLevelsLevelParams = /** @class */ (function (_super) {
    __extends(AdminPostInventoryItemsItemLocationLevelsLevelParams, _super);
    function AdminPostInventoryItemsItemLocationLevelsLevelParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostInventoryItemsItemLocationLevelsLevelParams;
}(common_1.FindParams));
exports.AdminPostInventoryItemsItemLocationLevelsLevelParams = AdminPostInventoryItemsItemLocationLevelsLevelParams;
//# sourceMappingURL=update-location-level.js.map