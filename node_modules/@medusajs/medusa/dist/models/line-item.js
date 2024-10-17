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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
var typeorm_1 = require("typeorm");
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var feature_flags_1 = require("../loaders/feature-flags");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var cart_1 = require("./cart");
var claim_order_1 = require("./claim-order");
var line_item_adjustment_1 = require("./line-item-adjustment");
var line_item_tax_line_1 = require("./line-item-tax-line");
var order_1 = require("./order");
var order_edit_1 = require("./order-edit");
var product_variant_1 = require("./product-variant");
var swap_1 = require("./swap");
var LineItem = /** @class */ (function (_super) {
    __extends(LineItem, _super);
    function LineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    LineItem.prototype.beforeInsert = function () {
        this.id = (0, utils_2.generateEntityId)(this.id, "item");
        // This is to maintain compatibility while isolating the product domain
        if (feature_flags_1.featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
            if (this.variant &&
                Object.keys(this.variant).length === 1 &&
                this.variant.product_id) {
                this.variant = undefined;
            }
        }
    };
    /**
     * @apiIgnore
     */
    LineItem.prototype.beforeUpdate = function () {
        if (this.variant &&
            Object.keys(this.variant).length === 1 &&
            this.variant.product_id) {
            this.variant = undefined;
        }
    };
    /**
     * @apiIgnore
     */
    LineItem.prototype.afterUpdateOrLoad = function () {
        if (this.variant) {
            return;
        }
        if (this.product_id) {
            this.variant = { product_id: this.product_id };
        }
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], LineItem.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cart_1.Cart; }, function (cart) { return cart.items; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (order) { return order.items; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], LineItem.prototype, "swap_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return swap_1.Swap; }, function (swap) { return swap.additional_items; }),
        (0, typeorm_1.JoinColumn)({ name: "swap_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "swap", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], LineItem.prototype, "claim_order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return claim_order_1.ClaimOrder; }, function (co) { return co.additional_items; }),
        (0, typeorm_1.JoinColumn)({ name: "claim_order_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "claim_order", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_tax_line_1.LineItemTaxLine; }, function (tl) { return tl.item; }, {
            cascade: ["insert", "remove"],
        }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "tax_lines", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_adjustment_1.LineItemAdjustment; }, function (lia) { return lia.item; }, {
            cascade: ["insert", "remove"],
        }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "adjustments", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "original_item_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "order_edit_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_edit_1.OrderEdit; }, function (orderEdit) { return orderEdit.items; }),
        (0, typeorm_1.JoinColumn)({ name: "order_edit_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "order_edit", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], LineItem.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "thumbnail", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "is_return", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "is_giftcard", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "should_merge", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "allow_discounts", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "boolean" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "has_shipping", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], LineItem.prototype, "unit_price", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "variant_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_variant_1.ProductVariant; }),
        (0, typeorm_1.JoinColumn)({ name: "variant_id" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "variant", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(utils_1.MedusaV2Flag.key, { nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "product_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], LineItem.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "int" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "fulfilled_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "int" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "returned_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "int" }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "shipped_quantity", void 0);
    __decorate([
        (0, utils_2.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], LineItem.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "includes_tax", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LineItem.prototype, "beforeInsert", null);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(utils_1.MedusaV2Flag.key, [(0, typeorm_1.BeforeUpdate)()]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LineItem.prototype, "beforeUpdate", null);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(utils_1.MedusaV2Flag.key, [(0, typeorm_1.AfterLoad)(), (0, typeorm_1.AfterUpdate)()]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LineItem.prototype, "afterUpdateOrLoad", null);
    LineItem = __decorate([
        (0, typeorm_1.Check)("\"fulfilled_quantity\" <= \"quantity\""),
        (0, typeorm_1.Check)("\"shipped_quantity\" <= \"fulfilled_quantity\""),
        (0, typeorm_1.Check)("\"returned_quantity\" <= \"quantity\""),
        (0, typeorm_1.Check)("\"quantity\" > 0"),
        (0, typeorm_1.Index)("unique_li_original_item_id_order_edit_id", ["order_edit_id", "original_item_id"], {
            unique: true,
            where: "original_item_id IS NOT NULL AND order_edit_id IS NOT NULL",
        }),
        (0, typeorm_1.Entity)()
    ], LineItem);
    return LineItem;
}(interfaces_1.BaseEntity));
exports.LineItem = LineItem;
/**
 * @schema LineItem
 * title: "Line Item"
 * description: "Line Items are created when a product is added to a Cart. When Line Items are purchased they will get copied to the resulting order, swap, or claim, and can eventually be referenced in Fulfillments and Returns. Line items may also be used for order edits."
 * type: object
 * required:
 *   - allow_discounts
 *   - cart_id
 *   - claim_order_id
 *   - created_at
 *   - description
 *   - fulfilled_quantity
 *   - has_shipping
 *   - id
 *   - is_giftcard
 *   - is_return
 *   - metadata
 *   - order_edit_id
 *   - order_id
 *   - original_item_id
 *   - quantity
 *   - returned_quantity
 *   - shipped_quantity
 *   - should_merge
 *   - swap_id
 *   - thumbnail
 *   - title
 *   - unit_price
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The line item's ID
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   cart_id:
 *     description: The ID of the cart that the line item may belongs to.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart that the line item may belongs to.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   order_id:
 *     description: The ID of the order that the line item may belongs to.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the line item may belongs to.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   swap_id:
 *     description: The ID of the swap that the line item may belong to.
 *     nullable: true
 *     type: string
 *     example: null
 *   swap:
 *     description: The details of the swap that the line item may belong to.
 *     x-expandable: "swap"
 *     nullable: true
 *     $ref: "#/components/schemas/Swap"
 *   claim_order_id:
 *     description: The ID of the claim that the line item may belong to.
 *     nullable: true
 *     type: string
 *     example: null
 *   claim_order:
 *     description: The details of the claim that the line item may belong to.
 *     x-expandable: "claim_order"
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   tax_lines:
 *     description: The details of the item's tax lines.
 *     x-expandable: "tax_lines"
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItemTaxLine"
 *   adjustments:
 *     description: The details of the item's adjustments, which are available when a discount is applied on the item.
 *     x-expandable: "adjustments"
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItemAdjustment"
 *   original_item_id:
 *     description: The ID of the original line item. This is useful if the line item belongs to a resource that references an order, such as a return or an order edit.
 *     nullable: true
 *     type: string
 *   order_edit_id:
 *     description: The ID of the order edit that the item may belong to.
 *     nullable: true
 *     type: string
 *   order_edit:
 *     description: The details of the order edit.
 *     x-expandable: "order_edit"
 *     nullable: true
 *     $ref: "#/components/schemas/OrderEdit"
 *   title:
 *     description: The title of the Line Item.
 *     type: string
 *     example: Medusa Coffee Mug
 *   description:
 *     description: A more detailed description of the contents of the Line Item.
 *     nullable: true
 *     type: string
 *     example: One Size
 *   thumbnail:
 *     description: A URL string to a small image of the contents of the Line Item.
 *     nullable: true
 *     type: string
 *     format: uri
 *     example: https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png
 *   is_return:
 *     description: Is the item being returned
 *     type: boolean
 *     default: false
 *   is_giftcard:
 *     description: Flag to indicate if the Line Item is a Gift Card.
 *     type: boolean
 *     default: false
 *   should_merge:
 *     description: Flag to indicate if new Line Items with the same variant should be merged or added as an additional Line Item.
 *     type: boolean
 *     default: true
 *   allow_discounts:
 *     description: Flag to indicate if the Line Item should be included when doing discount calculations.
 *     type: boolean
 *     default: true
 *   has_shipping:
 *     description: Flag to indicate if the Line Item has fulfillment associated with it.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   unit_price:
 *     description: The price of one unit of the content in the Line Item. This should be in the currency defined by the Cart/Order/Swap/Claim that the Line Item belongs to.
 *     type: integer
 *     example: 8000
 *   variant_id:
 *     description: The id of the Product Variant contained in the Line Item.
 *     nullable: true
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: The details of the product variant that this item was created from.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   quantity:
 *     description: The quantity of the content in the Line Item.
 *     type: integer
 *     example: 1
 *   fulfilled_quantity:
 *     description: The quantity of the Line Item that has been fulfilled.
 *     nullable: true
 *     type: integer
 *     example: 0
 *   returned_quantity:
 *     description: The quantity of the Line Item that has been returned.
 *     nullable: true
 *     type: integer
 *     example: 0
 *   shipped_quantity:
 *     description: The quantity of the Line Item that has been shipped.
 *     nullable: true
 *     type: integer
 *     example: 0
 *   refundable:
 *     description: The amount that can be refunded from the given Line Item. Takes taxes and discounts into consideration.
 *     type: integer
 *     example: 0
 *   subtotal:
 *     description: The subtotal of the line item
 *     type: integer
 *     example: 8000
 *   tax_total:
 *     description: The total of tax of the line item
 *     type: integer
 *     example: 0
 *   total:
 *     description: The total amount of the line item
 *     type: integer
 *     example: 8000
 *   original_total:
 *     description: The original total amount of the line item
 *     type: integer
 *     example: 8000
 *   original_tax_total:
 *     description: The original tax total amount of the line item
 *     type: integer
 *     example: 0
 *   discount_total:
 *     description: The total of discount of the line item rounded
 *     type: integer
 *     example: 0
 *   raw_discount_total:
 *     description: The total of discount of the line item
 *     type: integer
 *     example: 0
 *   gift_card_total:
 *     description: The total of the gift card of the line item
 *     type: integer
 *     example: 0
 *   includes_tax:
 *     description: "Indicates if the line item unit_price include tax"
 *     x-featureFlag: "tax_inclusive_pricing"
 *     type: boolean
 *     default: false
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
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
//# sourceMappingURL=line-item.js.map