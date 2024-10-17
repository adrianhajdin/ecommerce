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
exports.AdminPostInventoryItemsParams = exports.AdminPostInventoryItemsReq = void 0;
var utils_1 = require("@medusajs/utils");
var class_validator_1 = require("class-validator");
var core_flows_1 = require("@medusajs/core-flows");
var workflows_sdk_1 = require("@medusajs/workflows-sdk");
var common_1 = require("../../../../types/common");
/**
 * @oas [post] /admin/inventory-items
 * operationId: "PostInventoryItems"
 * summary: "Create an Inventory Item"
 * description: "Create an Inventory Item for a product variant."
 * x-authenticated: true
 * parameters:
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned inventory item.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostInventoryItemsReq"
 * x-codegen:
 *   method: create
 *   queryParams: AdminPostInventoryItemsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.create({
 *         variant_id: "variant_123",
 *       })
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateInventoryItem } from "medusa-react"
 *
 *       const CreateInventoryItem = () => {
 *         const createInventoryItem = useAdminCreateInventoryItem()
 *         // ...
 *
 *         const handleCreate = (variantId: string) => {
 *           createInventoryItem.mutate({
 *             variant_id: variantId,
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
 *       export default CreateInventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/inventory-items' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "variant_id": "variant_123",
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
    var _a, variant_id, inventoryItemInput, featureFlagRouter, productVariantInventoryService, createInventoryItemWorkflow, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.validatedBody, variant_id = _a.variant_id, inventoryItemInput = __rest(_a, ["variant_id"]);
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                createInventoryItemWorkflow = (0, core_flows_1.createInventoryItems)(req.scope);
                if (!featureFlagRouter.isFeatureEnabled(utils_1.ManyToManyInventoryFeatureFlag.key)) {
                    if (!variant_id) {
                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "variant_id is required");
                    }
                    createInventoryItemWorkflow.appendAction("attachInventoryItems", core_flows_1.CreateInventoryItemActions.createInventoryItems, {
                        invoke: (0, workflows_sdk_1.pipe)({
                            invoke: {
                                from: core_flows_1.CreateInventoryItemActions.createInventoryItems,
                                alias: "createdItems",
                            },
                        }, generateAttachInventoryToVariantHandler(variant_id, productVariantInventoryService)),
                        compensate: (0, workflows_sdk_1.pipe)({
                            invoke: {
                                from: "attachInventoryItems",
                                alias: "attachedItems",
                            },
                        }, generateDetachInventoryItemFromVariantHandler(productVariantInventoryService)),
                    });
                }
                return [4 /*yield*/, createInventoryItemWorkflow.run({
                        input: {
                            inventoryItems: [inventoryItemInput],
                        },
                    })];
            case 1:
                result = (_b.sent()).result;
                res.status(200).json({ inventory_item: result[0].inventoryItem });
                return [2 /*return*/];
        }
    });
}); });
function generateDetachInventoryItemFromVariantHandler(productVariantInventoryService) {
    var _this = this;
    return function (_a) {
        var data = _a.data;
        return __awaiter(_this, void 0, void 0, function () {
            var _b, variantId, inventoryItemId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!data.attachedItems || !data.attachedItems.length) {
                            return [2 /*return*/];
                        }
                        _b = __read(data.attachedItems, 2), variantId = _b[0], inventoryItemId = _b[1];
                        if (!variantId || !inventoryItemId) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, productVariantInventoryService.detachInventoryItem(inventoryItemId, variantId)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
}
function generateAttachInventoryToVariantHandler(variantId, productVariantInventoryService) {
    var _this = this;
    return function (_a) {
        var data = _a.data;
        return __awaiter(_this, void 0, void 0, function () {
            var inventoryItems, inventoryItemId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, productVariantInventoryService.listByVariant(variantId)
                        // TODO: this is a temporary fix to prevent duplicate inventory
                        // items since we don't support this functionality yet
                    ];
                    case 1:
                        inventoryItems = _b.sent();
                        // TODO: this is a temporary fix to prevent duplicate inventory
                        // items since we don't support this functionality yet
                        if (inventoryItems.length) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Inventory Item already exists for this variant");
                        }
                        inventoryItemId = data.createdItems[0].inventoryItem.id;
                        return [4 /*yield*/, productVariantInventoryService.attachInventoryItem(variantId, inventoryItemId)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, [variantId, inventoryItemId]];
                }
            });
        });
    };
}
/**
 * @schema AdminPostInventoryItemsReq
 * type: object
 * description: "The details of the inventory item to create."
 * required:
 *   - variant_id
 * properties:
 *   variant_id:
 *     description: The ID of the variant to create the inventory item for.
 *     type: string
 *   sku:
 *     description: The unique SKU of the associated Product Variant.
 *     type: string
 *   ean:
 *     description: The EAN number of the item.
 *     type: string
 *   upc:
 *     description: The UPC number of the item.
 *     type: string
 *   barcode:
 *     description: A generic GTIN field for the Product Variant.
 *     type: string
 *   hs_code:
 *     description: The Harmonized System code of the Inventory Item. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   inventory_quantity:
 *     description: The amount of stock kept of the associated Product Variant.
 *     type: integer
 *     default: 0
 *   allow_backorder:
 *     description: Whether the associated Product Variant can be purchased when out of stock.
 *     type: boolean
 *   manage_inventory:
 *     description: Whether Medusa should keep track of the inventory for the associated Product Variant.
 *     type: boolean
 *     default: true
 *   weight:
 *     description: The weight of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   length:
 *     description: The length of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   height:
 *     description: The height of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   width:
 *     description: The width of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   origin_country:
 *     description: The country in which the Inventory Item was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   mid_code:
 *     description: The Manufacturers Identification code that identifies the manufacturer of the Inventory Item. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   material:
 *     description: The material and composition that the Inventory Item is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   title:
 *     description: The inventory item's title.
 *     type: string
 *   description:
 *     description: The inventory item's description.
 *     type: string
 *   thumbnail:
 *     description: The inventory item's thumbnail.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostInventoryItemsReq = /** @class */ (function () {
    function AdminPostInventoryItemsReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "sku", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostInventoryItemsReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostInventoryItemsReq.prototype, "thumbnail", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostInventoryItemsReq.prototype, "metadata", void 0);
    return AdminPostInventoryItemsReq;
}());
exports.AdminPostInventoryItemsReq = AdminPostInventoryItemsReq;
var AdminPostInventoryItemsParams = /** @class */ (function (_super) {
    __extends(AdminPostInventoryItemsParams, _super);
    function AdminPostInventoryItemsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostInventoryItemsParams;
}(common_1.FindParams));
exports.AdminPostInventoryItemsParams = AdminPostInventoryItemsParams;
//# sourceMappingURL=create-inventory-item.js.map