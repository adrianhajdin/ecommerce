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
exports.Fulfillment = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var base_entity_1 = require("../interfaces/models/base-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var claim_order_1 = require("./claim-order");
var fulfillment_item_1 = require("./fulfillment-item");
var fulfillment_provider_1 = require("./fulfillment-provider");
var order_1 = require("./order");
var swap_1 = require("./swap");
var tracking_link_1 = require("./tracking-link");
var Fulfillment = /** @class */ (function (_super) {
    __extends(Fulfillment, _super);
    function Fulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Fulfillment.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "ful");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Fulfillment.prototype, "claim_order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return claim_order_1.ClaimOrder; }, function (co) { return co.fulfillments; }),
        (0, typeorm_1.JoinColumn)({ name: "claim_order_id" }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "claim_order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Fulfillment.prototype, "swap_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return swap_1.Swap; }, function (swap) { return swap.fulfillments; }),
        (0, typeorm_1.JoinColumn)({ name: "swap_id" }),
        __metadata("design:type", swap_1.Swap)
    ], Fulfillment.prototype, "swap", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Fulfillment.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (o) { return o.fulfillments; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
        __metadata("design:type", Boolean)
    ], Fulfillment.prototype, "no_notification", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Fulfillment.prototype, "provider_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "location_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return fulfillment_provider_1.FulfillmentProvider; }),
        (0, typeorm_1.JoinColumn)({ name: "provider_id" }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "provider", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fulfillment_item_1.FulfillmentItem; }, function (i) { return i.fulfillment; }, {
            eager: true,
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Fulfillment.prototype, "items", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return tracking_link_1.TrackingLink; }, function (tl) { return tl.fulfillment; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Fulfillment.prototype, "tracking_links", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", default: [] }),
        __metadata("design:type", Array)
    ], Fulfillment.prototype, "tracking_numbers", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Fulfillment.prototype, "shipped_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Fulfillment.prototype, "canceled_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Fulfillment.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Fulfillment.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Fulfillment.prototype, "beforeInsert", null);
    Fulfillment = __decorate([
        (0, typeorm_1.Entity)()
    ], Fulfillment);
    return Fulfillment;
}(base_entity_1.BaseEntity));
exports.Fulfillment = Fulfillment;
/**
 * @schema Fulfillment
 * title: "Fulfillment"
 * description: "A Fulfillment is created once an admin can prepare the purchased goods. Fulfillments will eventually be shipped and hold information about how to track shipments. Fulfillments are created through a fulfillment provider, which typically integrates a third-party shipping service. Fulfillments can be associated with orders, claims, swaps, and returns."
 * type: object
 * required:
 *   - canceled_at
 *   - claim_order_id
 *   - created_at
 *   - data
 *   - id
 *   - idempotency_key
 *   - location_id
 *   - metadata
 *   - no_notification
 *   - order_id
 *   - provider_id
 *   - shipped_at
 *   - swap_id
 *   - tracking_numbers
 *   - updated_at
 * properties:
 *   id:
 *     description: The fulfillment's ID
 *     type: string
 *     example: ful_01G8ZRTMQCA76TXNAT81KPJZRF
 *   claim_order_id:
 *     description: The ID of the Claim that the Fulfillment belongs to.
 *     nullable: true
 *     type: string
 *     example: null
 *   claim_order:
 *     description: The details of the claim that the fulfillment may belong to.
 *     x-expandable: "claim_order"
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   swap_id:
 *     description: The ID of the Swap that the Fulfillment belongs to.
 *     nullable: true
 *     type: string
 *     example: null
 *   swap:
 *     description: The details of the swap that the fulfillment may belong to.
 *     x-expandable: "swap"
 *     nullable: true
 *     $ref: "#/components/schemas/Swap"
 *   order_id:
 *     description: The ID of the Order that the Fulfillment belongs to.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the fulfillment may belong to.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   provider_id:
 *     description: The ID of the Fulfillment Provider responsible for handling the fulfillment.
 *     type: string
 *     example: manual
 *   provider:
 *     description: The details of the fulfillment provider responsible for handling the fulfillment.
 *     x-expandable: "provider"
 *     nullable: true
 *     $ref: "#/components/schemas/FulfillmentProvider"
 *   location_id:
 *     description: The ID of the stock location the fulfillment will be shipped from
 *     nullable: true
 *     type: string
 *     example: sloc_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   items:
 *     description: The Fulfillment Items in the Fulfillment. These hold information about how many of each Line Item has been fulfilled.
 *     type: array
 *     x-expandable: "items"
 *     items:
 *       $ref: "#/components/schemas/FulfillmentItem"
 *   tracking_links:
 *     description: The Tracking Links that can be used to track the status of the Fulfillment. These will usually be provided by the Fulfillment Provider.
 *     type: array
 *     x-expandable: "tracking_links"
 *     items:
 *       $ref: "#/components/schemas/TrackingLink"
 *   tracking_numbers:
 *     description: The tracking numbers that can be used to track the status of the fulfillment.
 *     deprecated: true
 *     type: array
 *     items:
 *       type: string
 *   data:
 *     description: This contains all the data necessary for the Fulfillment provider to handle the fulfillment.
 *     type: object
 *     example: {}
 *   shipped_at:
 *     description: The date with timezone at which the Fulfillment was shipped.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   no_notification:
 *     description: Flag for describing whether or not notifications related to this should be sent.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   canceled_at:
 *     description: The date with timezone at which the Fulfillment was canceled.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the fulfillment in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
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
//# sourceMappingURL=fulfillment.js.map