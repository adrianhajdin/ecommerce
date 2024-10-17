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
exports.Discount = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var discount_rule_1 = require("./discount-rule");
var region_1 = require("./region");
var Discount = /** @class */ (function (_super) {
    __extends(Discount, _super);
    function Discount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Discount_1 = Discount;
    /**
     * @apiIgnore
     */
    Discount.prototype.upperCaseCodeAndTrim = function () {
        this.code = this.code.toUpperCase().trim();
        if (this.id) {
            return;
        }
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "disc");
    };
    var Discount_1;
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Discount.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Discount.prototype, "is_dynamic", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Discount.prototype, "rule_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_rule_1.DiscountRule; }, { cascade: true }),
        (0, typeorm_1.JoinColumn)({ name: "rule_id" }),
        __metadata("design:type", discount_rule_1.DiscountRule)
    ], Discount.prototype, "rule", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Discount.prototype, "is_disabled", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Discount.prototype, "parent_discount_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Discount_1; }),
        (0, typeorm_1.JoinColumn)({ name: "parent_discount_id" }),
        __metadata("design:type", Discount)
    ], Discount.prototype, "parent_discount", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: (0, db_aware_column_1.resolveDbType)("timestamptz"),
            default: function () { return "CURRENT_TIMESTAMP"; },
        }),
        __metadata("design:type", Date)
    ], Discount.prototype, "starts_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Object)
    ], Discount.prototype, "ends_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: String, nullable: true }),
        __metadata("design:type", Object)
    ], Discount.prototype, "valid_duration", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return region_1.Region; }, { cascade: true }),
        (0, typeorm_1.JoinTable)({
            name: "discount_regions",
            joinColumn: {
                name: "discount_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "region_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Discount.prototype, "regions", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: Number, nullable: true }),
        __metadata("design:type", Object)
    ], Discount.prototype, "usage_limit", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Discount.prototype, "usage_count", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Discount.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Discount.prototype, "upperCaseCodeAndTrim", null);
    Discount = Discount_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], Discount);
    return Discount;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Discount = Discount;
/**
 * @schema Discount
 * title: "Discount"
 * description: "A discount can be applied to a cart for promotional purposes."
 * type: object
 * required:
 *   - code
 *   - created_at
 *   - deleted_at
 *   - ends_at
 *   - id
 *   - is_disabled
 *   - is_dynamic
 *   - metadata
 *   - parent_discount_id
 *   - rule_id
 *   - starts_at
 *   - updated_at
 *   - usage_count
 *   - usage_limit
 *   - valid_duration
 * properties:
 *   id:
 *     description: The discount's ID
 *     type: string
 *     example: disc_01F0YESMW10MGHWJKZSDDMN0VN
 *   code:
 *     description: A unique code for the discount - this will be used by the customer to apply the discount
 *     type: string
 *     example: 10DISC
 *   is_dynamic:
 *     description: A flag to indicate if multiple instances of the discount can be generated. I.e. for newsletter discounts
 *     type: boolean
 *     example: false
 *   rule_id:
 *     description: The ID of the discount rule that defines how the discount will be applied to a cart.
 *     nullable: true
 *     type: string
 *     example: dru_01F0YESMVK96HVX7N419E3CJ7C
 *   rule:
 *     description: The details of the discount rule that defines how the discount will be applied to a cart..
 *     x-expandable: "rule"
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountRule"
 *   is_disabled:
 *     description: Whether the Discount has been disabled. Disabled discounts cannot be applied to carts
 *     type: boolean
 *     example: false
 *   parent_discount_id:
 *     description: The Discount that the discount was created from. This will always be a dynamic discount
 *     nullable: true
 *     type: string
 *     example: disc_01G8ZH853YPY9B94857DY91YGW
 *   parent_discount:
 *     description: The details of the parent discount that this discount was created from.
 *     x-expandable: "parent_discount"
 *     nullable: true
 *     $ref: "#/components/schemas/Discount"
 *   starts_at:
 *     description: The time at which the discount can be used.
 *     type: string
 *     format: date-time
 *   ends_at:
 *     description: The time at which the discount can no longer be used.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   valid_duration:
 *     description: Duration the discount runs between
 *     nullable: true
 *     type: string
 *     example: P3Y6M4DT12H30M5S
 *   regions:
 *     description: The details of the regions in which the Discount can be used.
 *     type: array
 *     x-expandable: "regions"
 *     items:
 *       $ref: "#/components/schemas/Region"
 *   usage_limit:
 *     description: The maximum number of times that a discount can be used.
 *     nullable: true
 *     type: integer
 *     example: 100
 *   usage_count:
 *     description: The number of times a discount has been used.
 *     type: integer
 *     example: 50
 *     default: 0
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
//# sourceMappingURL=discount.js.map