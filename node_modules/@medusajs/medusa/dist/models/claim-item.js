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
exports.ClaimItem = exports.ClaimReason = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var claim_image_1 = require("./claim-image");
var claim_order_1 = require("./claim-order");
var claim_tag_1 = require("./claim-tag");
var line_item_1 = require("./line-item");
var product_variant_1 = require("./product-variant");
var ClaimReason;
(function (ClaimReason) {
    ClaimReason["MISSING_ITEM"] = "missing_item";
    ClaimReason["WRONG_ITEM"] = "wrong_item";
    ClaimReason["PRODUCTION_FAILURE"] = "production_failure";
    ClaimReason["OTHER"] = "other";
})(ClaimReason = exports.ClaimReason || (exports.ClaimReason = {}));
var ClaimItem = /** @class */ (function (_super) {
    __extends(ClaimItem, _super);
    function ClaimItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ClaimItem.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "citm");
    };
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return claim_image_1.ClaimImage; }, function (ci) { return ci.claim_item; }, {
            cascade: ["insert", "remove"],
        }),
        __metadata("design:type", Array)
    ], ClaimItem.prototype, "images", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClaimItem.prototype, "claim_order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return claim_order_1.ClaimOrder; }, function (co) { return co.claim_items; }),
        (0, typeorm_1.JoinColumn)({ name: "claim_order_id" }),
        __metadata("design:type", Object)
    ], ClaimItem.prototype, "claim_order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClaimItem.prototype, "item_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return line_item_1.LineItem; }),
        (0, typeorm_1.JoinColumn)({ name: "item_id" }),
        __metadata("design:type", Object)
    ], ClaimItem.prototype, "item", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClaimItem.prototype, "variant_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_variant_1.ProductVariant; }),
        (0, typeorm_1.JoinColumn)({ name: "variant_id" }),
        __metadata("design:type", Object)
    ], ClaimItem.prototype, "variant", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: ClaimReason }),
        __metadata("design:type", Object)
    ], ClaimItem.prototype, "reason", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClaimItem.prototype, "note", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], ClaimItem.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return claim_tag_1.ClaimTag; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinTable)({
            name: "claim_item_tags",
            joinColumn: {
                name: "item_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "tag_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], ClaimItem.prototype, "tags", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ClaimItem.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ClaimItem.prototype, "beforeInsert", null);
    ClaimItem = __decorate([
        (0, typeorm_1.Entity)()
    ], ClaimItem);
    return ClaimItem;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ClaimItem = ClaimItem;
/**
 * @schema ClaimItem
 * title: "Claim Item"
 * description: "A claim item is an item created as part of a claim. It references an item in the order that should be exchanged or refunded."
 * type: object
 * required:
 *   - claim_order_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - item_id
 *   - metadata
 *   - note
 *   - quantity
 *   - reason
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The claim item's ID
 *     type: string
 *     example: citm_01G8ZH853Y6TFXWPG5EYE81X63
 *   images:
 *     description: The claim images that are attached to the claim item.
 *     type: array
 *     x-expandable: "images"
 *     items:
 *       $ref: "#/components/schemas/ClaimImage"
 *   claim_order_id:
 *     description: The ID of the claim this item is associated with.
 *     type: string
 *   claim_order:
 *     description: The details of the claim this item belongs to.
 *     x-expandable: "claim_order"
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   item_id:
 *     description: The ID of the line item that the claim item refers to.
 *     type: string
 *     example: item_01G8ZM25TN49YV9EQBE2NC27KC
 *   item:
 *     description: The details of the line item in the original order that this claim item refers to.
 *     x-expandable: "item"
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   variant_id:
 *     description: The ID of the product variant that is claimed.
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: The details of the product variant to potentially replace the item in the original order.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   reason:
 *     description: The reason for the claim
 *     type: string
 *     enum:
 *       - missing_item
 *       - wrong_item
 *       - production_failure
 *       - other
 *   note:
 *     description: An optional note about the claim, for additional information
 *     nullable: true
 *     type: string
 *     example: "I don't like it."
 *   quantity:
 *     description: The quantity of the item that is being claimed; must be less than or equal to the amount purchased in the original order.
 *     type: integer
 *     example: 1
 *   tags:
 *     description: User defined tags for easy filtering and grouping.
 *     type: array
 *     x-expandable: "tags"
 *     items:
 *       $ref: "#/components/schemas/ClaimTag"
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=claim-item.js.map