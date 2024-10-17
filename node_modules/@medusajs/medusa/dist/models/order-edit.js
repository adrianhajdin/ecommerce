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
exports.OrderEdit = exports.OrderEditStatus = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var db_aware_column_1 = require("../utils/db-aware-column");
var _1 = require(".");
/**
 * @enum
 *
 * The order edit's status.
 */
var OrderEditStatus;
(function (OrderEditStatus) {
    /**
     * The order edit is confirmed.
     */
    OrderEditStatus["CONFIRMED"] = "confirmed";
    /**
     * The order edit is declined.
     */
    OrderEditStatus["DECLINED"] = "declined";
    /**
     * The order edit is requested.
     */
    OrderEditStatus["REQUESTED"] = "requested";
    /**
     * The order edit is created.
     */
    OrderEditStatus["CREATED"] = "created";
    /**
     * The order edit is canceled.
     */
    OrderEditStatus["CANCELED"] = "canceled";
})(OrderEditStatus = exports.OrderEditStatus || (exports.OrderEditStatus = {}));
var OrderEdit = /** @class */ (function (_super) {
    __extends(OrderEdit, _super);
    function OrderEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    OrderEdit.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "oe");
    };
    /**
     * @apiIgnore
     */
    OrderEdit.prototype.loadStatus = function () {
        var _a;
        if (this.requested_at) {
            this.status = OrderEditStatus.REQUESTED;
        }
        if (this.declined_at) {
            this.status = OrderEditStatus.DECLINED;
        }
        if (this.confirmed_at) {
            this.status = OrderEditStatus.CONFIRMED;
        }
        if (this.canceled_at) {
            this.status = OrderEditStatus.CANCELED;
        }
        this.status = (_a = this.status) !== null && _a !== void 0 ? _a : OrderEditStatus.CREATED;
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Order; }, function (o) { return o.edits; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], OrderEdit.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.OrderItemChange; }, function (oic) { return oic.order_edit; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], OrderEdit.prototype, "changes", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "internal_note", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "requested_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], OrderEdit.prototype, "requested_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "confirmed_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], OrderEdit.prototype, "confirmed_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "declined_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "declined_reason", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], OrderEdit.prototype, "declined_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "canceled_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], OrderEdit.prototype, "canceled_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.LineItem; }, function (lineItem) { return lineItem.order_edit; }),
        __metadata("design:type", Array)
    ], OrderEdit.prototype, "items", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], OrderEdit.prototype, "payment_collection_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return _1.PaymentCollection; }),
        (0, typeorm_1.JoinColumn)({ name: "payment_collection_id" }),
        __metadata("design:type", _1.PaymentCollection
        // Computed
        )
    ], OrderEdit.prototype, "payment_collection", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrderEdit.prototype, "beforeInsert", null);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrderEdit.prototype, "loadStatus", null);
    OrderEdit = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderEdit);
    return OrderEdit;
}(interfaces_1.BaseEntity));
exports.OrderEdit = OrderEdit;
/**
 * @schema OrderEdit
 * title: "Order Edit"
 * description: "Order edit allows modifying items in an order, such as adding, updating, or deleting items from the original order. Once the order edit is confirmed, the changes are reflected on the original order."
 * type: object
 * required:
 *   - canceled_at
 *   - canceled_by
 *   - confirmed_by
 *   - confirmed_at
 *   - created_at
 *   - created_by
 *   - declined_at
 *   - declined_by
 *   - declined_reason
 *   - id
 *   - internal_note
 *   - order_id
 *   - payment_collection_id
 *   - requested_at
 *   - requested_by
 *   - status
 *   - updated_at
 * properties:
 *   id:
 *     description: The order edit's ID
 *     type: string
 *     example: oe_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order_id:
 *     description: The ID of the order that is edited
 *     type: string
 *     example: order_01G2SG30J8C85S4A5CHM2S1NS2
 *   order:
 *     description: The details of the order that this order edit was created for.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   changes:
 *     description: The details of all the changes on the original order's line items.
 *     x-expandable: "changes"
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/OrderItemChange"
 *   internal_note:
 *     description: An optional note with additional details about the order edit.
 *     nullable: true
 *     type: string
 *     example: Included two more items B to the order.
 *   created_by:
 *     description: The unique identifier of the user or customer who created the order edit.
 *     type: string
 *   requested_by:
 *     description: The unique identifier of the user or customer who requested the order edit.
 *     nullable: true
 *     type: string
 *   requested_at:
 *     description: The date with timezone at which the edit was requested.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   confirmed_by:
 *     description: The unique identifier of the user or customer who confirmed the order edit.
 *     nullable: true
 *     type: string
 *   confirmed_at:
 *     description: The date with timezone at which the edit was confirmed.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   declined_by:
 *     description: The unique identifier of the user or customer who declined the order edit.
 *     nullable: true
 *     type: string
 *   declined_at:
 *     description: The date with timezone at which the edit was declined.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   declined_reason:
 *     description: An optional note why  the order edit is declined.
 *     nullable: true
 *     type: string
 *   canceled_by:
 *     description: The unique identifier of the user or customer who cancelled the order edit.
 *     nullable: true
 *     type: string
 *   canceled_at:
 *     description: The date with timezone at which the edit was cancelled.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   subtotal:
 *     description: The total of subtotal
 *     type: integer
 *     example: 8000
 *   discount_total:
 *     description: The total of discount
 *     type: integer
 *     example: 800
 *   shipping_total:
 *     description: The total of the shipping amount
 *     type: integer
 *     example: 800
 *   gift_card_total:
 *     description: The total of the gift card amount
 *     type: integer
 *     example: 800
 *   gift_card_tax_total:
 *     description: The total of the gift card tax amount
 *     type: integer
 *     example: 800
 *   tax_total:
 *     description: The total of tax
 *     type: integer
 *     example: 0
 *   total:
 *     description: The total amount of the edited order.
 *     type: integer
 *     example: 8200
 *   difference_due:
 *     description: The difference between the total amount of the order and total amount of edited order.
 *     type: integer
 *     example: 8200
 *   status:
 *     description: The status of the order edit.
 *     type: string
 *     enum:
 *       - confirmed
 *       - declined
 *       - requested
 *       - created
 *       - canceled
 *   items:
 *     description: The details of the cloned items from the original order with the new changes. Once the order edit is confirmed, these line items are associated with the original order.
 *     type: array
 *     x-expandable: "items"
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   payment_collection_id:
 *     description: The ID of the payment collection
 *     nullable: true
 *     type: string
 *     example: paycol_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   payment_collection:
 *     description: The details of the payment collection used to authorize additional payment if necessary.
 *     x-expandable: "payment_collection"
 *     nullable: true
 *     $ref: "#/components/schemas/PaymentCollection"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=order-edit.js.map