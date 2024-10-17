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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemAdjustment = void 0;
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var discount_1 = require("./discount");
var line_item_1 = require("./line-item");
var LineItemAdjustment = /** @class */ (function () {
    function LineItemAdjustment() {
    }
    /**
     * @apiIgnore
     */
    LineItemAdjustment.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "lia");
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], LineItemAdjustment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], LineItemAdjustment.prototype, "item_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return line_item_1.LineItem; }, function (li) { return li.adjustments; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "item_id" }),
        __metadata("design:type", Object)
    ], LineItemAdjustment.prototype, "item", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], LineItemAdjustment.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_1.Discount; }),
        (0, typeorm_1.JoinColumn)({ name: "discount_id" }),
        __metadata("design:type", Object)
    ], LineItemAdjustment.prototype, "discount", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], LineItemAdjustment.prototype, "discount_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "numeric",
            transformer: { to: function (value) { return value; }, from: function (value) { return parseFloat(value); } },
        }),
        __metadata("design:type", Number)
    ], LineItemAdjustment.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], LineItemAdjustment.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LineItemAdjustment.prototype, "beforeInsert", null);
    LineItemAdjustment = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Index)(["discount_id", "item_id"], {
            unique: true,
            where: "\"discount_id\" IS NOT NULL",
        })
    ], LineItemAdjustment);
    return LineItemAdjustment;
}());
exports.LineItemAdjustment = LineItemAdjustment;
/**
 * @schema LineItemAdjustment
 * title: "Line Item Adjustment"
 * description: "A Line Item Adjustment includes details on discounts applied on a line item."
 * type: object
 * required:
 *   - amount
 *   - description
 *   - discount_id
 *   - id
 *   - item_id
 *   - metadata
 * properties:
 *   id:
 *     description: The Line Item Adjustment's ID
 *     type: string
 *     example: lia_01G8TKE4XYCTHSCK2GDEP47RE1
 *   item_id:
 *     description: The ID of the line item
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   item:
 *     description: The details of the line item.
 *     x-expandable: "item"
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   description:
 *     description: The line item's adjustment description
 *     type: string
 *     example: Adjusted item's price.
 *   discount_id:
 *     description: The ID of the discount associated with the adjustment
 *     nullable: true
 *     type: string
 *     example: disc_01F0YESMW10MGHWJKZSDDMN0VN
 *   discount:
 *     description: The details of the discount associated with the adjustment.
 *     x-expandable: "discount"
 *     nullable: true
 *     $ref: "#/components/schemas/Discount"
 *   amount:
 *     description: The adjustment amount
 *     type: number
 *     example: 1000
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=line-item-adjustment.js.map