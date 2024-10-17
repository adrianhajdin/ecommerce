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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantInventoryItem = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var product_variant_1 = require("./product-variant");
var ProductVariantInventoryItem = /** @class */ (function (_super) {
    __extends(ProductVariantInventoryItem, _super);
    function ProductVariantInventoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductVariantInventoryItem.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "pvitem");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], ProductVariantInventoryItem.prototype, "inventory_item_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], ProductVariantInventoryItem.prototype, "variant_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_variant_1.ProductVariant; }, function (variant) { return variant.inventory_items; }),
        (0, typeorm_1.JoinColumn)({ name: "variant_id" }),
        __metadata("design:type", Object)
    ], ProductVariantInventoryItem.prototype, "variant", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", default: 1 }),
        __metadata("design:type", Number)
    ], ProductVariantInventoryItem.prototype, "required_quantity", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductVariantInventoryItem.prototype, "beforeInsert", null);
    ProductVariantInventoryItem = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductVariantInventoryItem);
    return ProductVariantInventoryItem;
}(interfaces_1.SoftDeletableEntity));
exports.ProductVariantInventoryItem = ProductVariantInventoryItem;
/**
 * @schema ProductVariantInventoryItem
 * title: "Product Variant Inventory Item"
 * description: "A Product Variant Inventory Item links variants with inventory items and denotes the required quantity of the variant."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - inventory_item_id
 *   - required_quantity
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The product variant inventory item's ID
 *     type: string
 *     example: pvitem_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   inventory_item_id:
 *     description: The id of the inventory item
 *     type: string
 *   variant_id:
 *     description: The id of the variant.
 *     type: string
 *   variant:
 *     description: The details of the product variant.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   required_quantity:
 *     description: The quantity of an inventory item required for the variant.
 *     type: integer
 *     default: 1
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=product-variant-inventory-item.js.map