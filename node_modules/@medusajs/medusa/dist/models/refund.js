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
exports.Refund = exports.RefundReason = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../interfaces/models/base-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var order_1 = require("./order");
var payment_1 = require("./payment");
/**
 * @enum
 *
 * The reason of the refund.
 */
var RefundReason;
(function (RefundReason) {
    /**
     * The refund is applied as a discount.
     */
    RefundReason["DISCOUNT"] = "discount";
    /**
     * The refund is applied because of a created return.
     */
    RefundReason["RETURN"] = "return";
    /**
     * The refund is applied because of a created swap.
     */
    RefundReason["SWAP"] = "swap";
    /**
     * The refund is applied because of a created claim.
     */
    RefundReason["CLAIM"] = "claim";
    /**
     * The refund is created for a custom reason.
     */
    RefundReason["OTHER"] = "other";
})(RefundReason = exports.RefundReason || (exports.RefundReason = {}));
var Refund = /** @class */ (function (_super) {
    __extends(Refund, _super);
    function Refund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Refund.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "ref");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Refund.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Refund.prototype, "payment_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (order) { return order.payments; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], Refund.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return payment_1.Payment; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: "payment_id" }),
        __metadata("design:type", Object)
    ], Refund.prototype, "payment", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], Refund.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Refund.prototype, "note", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: RefundReason }),
        __metadata("design:type", String)
    ], Refund.prototype, "reason", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Refund.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Refund.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Refund.prototype, "beforeInsert", null);
    Refund = __decorate([
        (0, typeorm_1.Entity)()
    ], Refund);
    return Refund;
}(base_entity_1.BaseEntity));
exports.Refund = Refund;
/**
 * @schema Refund
 * title: "Refund"
 * description: "A refund represents an amount of money transfered back to the customer for a given reason. Refunds may occur in relation to Returns, Swaps and Claims, but can also be initiated by an admin for an order."
 * type: object
 * required:
 *   - amount
 *   - created_at
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - note
 *   - order_id
 *   - payment_id
 *   - reason
 *   - updated_at
 * properties:
 *   id:
 *     description: The refund's ID
 *     type: string
 *     example: ref_01G1G5V27GYX4QXNARRQCW1N8T
 *   order_id:
 *     description: The ID of the order this refund was created for.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order this refund was created for.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   payment_id:
 *     description: The payment's ID, if available.
 *     nullable: true
 *     type: string
 *     example: pay_01G8ZCC5W42ZNY842124G7P5R9
 *   payment:
 *     description: The details of the payment associated with the refund.
 *     x-expandable: "payment"
 *     nullable: true
 *     $ref: "#/components/schemas/Payment"
 *   amount:
 *     description: The amount that has be refunded to the Customer.
 *     type: integer
 *     example: 1000
 *   note:
 *     description: An optional note explaining why the amount was refunded.
 *     nullable: true
 *     type: string
 *     example: I didn't like it
 *   reason:
 *     description: The reason given for the Refund, will automatically be set when processed as part of a Swap, Claim or Return.
 *     type: string
 *     enum:
 *       - discount
 *       - return
 *       - swap
 *       - claim
 *       - other
 *     example: return
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the refund in case of failure.
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
//# sourceMappingURL=refund.js.map