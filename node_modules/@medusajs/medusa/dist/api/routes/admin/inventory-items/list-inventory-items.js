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
exports.AdminGetInventoryItemsParams = void 0;
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
var join_levels_1 = require("./utils/join-levels");
var join_variants_1 = require("./utils/join-variants");
var class_transformer_1 = require("class-transformer");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [get] /admin/inventory-items
 * operationId: "GetInventoryItems"
 * summary: "List Inventory Items"
 * description: "Retrieve a list of inventory items. The inventory items can be filtered by fields such as `q` or `location_id`. The inventory items can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} The number of inventory items to skip when retrieving the inventory items.
 *   - (query) limit=20 {integer} Limit the number of inventory items returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned inventory item.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory item.
 *   - (query) q {string} term to search inventory item's sku, title, and description.
 *   - (query) order {string} Field to sort-order inventory items by.
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Filter by location IDs.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by the inventory ID
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: inventory ID
 *         - type: array
 *           description: an array of inventory IDs
 *           items:
 *             type: string
 *   - (query) sku {string} Filter by SKU
 *   - (query) origin_country {string} Filter by origin country
 *   - (query) mid_code {string} Filter by MID code
 *   - (query) material {string} Filter by material
 *   - (query) hs_code {string} Filter by HS Code
 *   - (query) weight {string} Filter by weight
 *   - (query) length {string} Filter by length
 *   - (query) height {string} Filter by height
 *   - (query) width {string} Filter by width
 *   - (query) requires_shipping {string} Filter by whether the item requires shipping
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetInventoryItemsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.list()
 *       .then(({ inventory_items, count, offset, limit }) => {
 *         console.log(inventory_items.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminInventoryItems } from "medusa-react"
 *
 *       function InventoryItems() {
 *         const {
 *           inventory_items,
 *           isLoading
 *         } = useAdminInventoryItems()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {inventory_items && !inventory_items.length && (
 *               <span>No Items</span>
 *             )}
 *             {inventory_items && inventory_items.length > 0 && (
 *               <ul>
 *                 {inventory_items.map(
 *                   (item) => (
 *                     <li key={item.id}>{item.id}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default InventoryItems
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/inventory-items' \
 *       -H 'x-medusa-access-token: {api_token}'
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
 *           $ref: "#/components/schemas/AdminInventoryItemsListWithVariantsAndLocationLevelsRes"
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
    var inventoryService, productVariantInventoryService, productVariantService, filterableFields, listConfig, skip, take, locationIds, _a, inventoryItems, count, inventory_items;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                inventoryService = req.scope.resolve("inventoryService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                productVariantService = req.scope.resolve("productVariantService");
                filterableFields = req.filterableFields, listConfig = req.listConfig;
                skip = listConfig.skip, take = listConfig.take;
                locationIds = [];
                if (filterableFields.location_id) {
                    locationIds = Array.isArray(filterableFields.location_id)
                        ? filterableFields.location_id
                        : [filterableFields.location_id];
                }
                return [4 /*yield*/, inventoryService.listInventoryItems(filterableFields, listConfig)];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), inventoryItems = _a[0], count = _a[1];
                return [4 /*yield*/, (0, join_variants_1.joinVariants)(inventoryItems, productVariantInventoryService, productVariantService).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, join_levels_1.joinLevels)(res, locationIds, inventoryService)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                inventory_items = _b.sent();
                res.status(200).json({
                    inventory_items: inventory_items,
                    count: count,
                    offset: skip,
                    limit: take,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved inventory items.
 */
var AdminGetInventoryItemsParams = /** @class */ (function (_super) {
    __extends(AdminGetInventoryItemsParams, _super);
    function AdminGetInventoryItemsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetInventoryItemsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "location_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "sku", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetInventoryItemsParams.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value === "true";
        }),
        __metadata("design:type", Boolean)
    ], AdminGetInventoryItemsParams.prototype, "requires_shipping", void 0);
    return AdminGetInventoryItemsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 20,
    offset: 0,
})));
exports.AdminGetInventoryItemsParams = AdminGetInventoryItemsParams;
//# sourceMappingURL=list-inventory-items.js.map