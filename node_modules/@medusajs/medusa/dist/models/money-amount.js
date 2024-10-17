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
exports.MoneyAmount = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var currency_1 = require("./currency");
var price_list_1 = require("./price-list");
var product_variant_1 = require("./product-variant");
var region_1 = require("./region");
var MoneyAmount = /** @class */ (function (_super) {
    __extends(MoneyAmount, _super);
    function MoneyAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    MoneyAmount.prototype.beforeInsert = function () {
        var _a;
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "ma");
        if (this.variant || this.variant_id) {
            this.variants = [
                { id: ((_a = this.variant) === null || _a === void 0 ? void 0 : _a.id) || this.variant_id },
            ];
        }
    };
    /**
     * @apiIgnore
     */
    MoneyAmount.prototype.beforeUpdate = function () {
        var _a;
        if (this.variant || this.variant_id) {
            this.variants = [
                { id: ((_a = this.variant) === null || _a === void 0 ? void 0 : _a.id) || this.variant_id },
            ];
        }
    };
    /**
     * @apiIgnore
     */
    MoneyAmount.prototype.afterLoad = function () {
        var _a, _b;
        this.variant = (_a = this.variants) === null || _a === void 0 ? void 0 : _a[0];
        this.variant_id = (_b = this.variant) === null || _b === void 0 ? void 0 : _b.id;
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MoneyAmount.prototype, "currency_code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return currency_1.Currency; }),
        (0, typeorm_1.JoinColumn)({ name: "currency_code", referencedColumnName: "code" }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "currency", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], MoneyAmount.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "min_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "max_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "price_list_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return price_list_1.PriceList; }, function (priceList) { return priceList.prices; }, {
            cascade: true,
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)({ name: "price_list_id" }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "price_list", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_variant_1.ProductVariant; }, {
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinTable)({
            name: "product_variant_money_amount",
            joinColumn: {
                name: "money_amount_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "variant_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], MoneyAmount.prototype, "variants", void 0);
    __decorate([
        (0, typeorm_1.Index)("idx_money_amount_region_id"),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", Object)
    ], MoneyAmount.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MoneyAmount.prototype, "beforeInsert", null);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MoneyAmount.prototype, "beforeUpdate", null);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MoneyAmount.prototype, "afterLoad", null);
    MoneyAmount = __decorate([
        (0, typeorm_1.Entity)()
    ], MoneyAmount);
    return MoneyAmount;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.MoneyAmount = MoneyAmount;
/**
 * @schema MoneyAmount
 * title: "Money Amount"
 * description: "A Money Amount represent a price amount, for example, a product variant's price or a price in a price list. Each Money Amount either has a Currency or Region associated with it to indicate the pricing in a given Currency or, for fully region-based pricing, the given price in a specific Region. If region-based pricing is used, the amount will be in the currency defined for the Region."
 * type: object
 * required:
 *   - amount
 *   - created_at
 *   - currency_code
 *   - deleted_at
 *   - id
 *   - max_quantity
 *   - min_quantity
 *   - price_list_id
 *   - region_id
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The money amount's ID
 *     type: string
 *     example: ma_01F0YESHRFQNH5S8Q0PK84YYZN
 *   currency_code:
 *     description: The 3 character currency code that the money amount may belong to.
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency that the money amount may belong to.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   amount:
 *     description: The amount in the smallest currecny unit (e.g. cents 100 cents to charge $1) that the Product Variant will cost.
 *     type: integer
 *     example: 100
 *   min_quantity:
 *     description: The minimum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   max_quantity:
 *     description: The maximum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   price_list_id:
 *     description: The ID of the price list that the money amount may belong to.
 *     nullable: true
 *     type: string
 *     example: pl_01G8X3CKJXCG5VXVZ87H9KC09W
 *   price_list:
 *     description: The details of the price list that the money amount may belong to.
 *     x-expandable: "price_list"
 *     nullable: true
 *     $ref: "#/components/schemas/PriceList"
 *   variant_id:
 *     description: The ID of the Product Variant contained in the Line Item.
 *     nullable: true
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: The details of the product variant that the money amount may belong to.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   region_id:
 *     description: The region's ID
 *     nullable: true
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region that the money amount may belong to.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
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
//# sourceMappingURL=money-amount.js.map