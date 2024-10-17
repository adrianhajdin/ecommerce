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
exports.PaymentCollection = exports.PaymentCollectionType = exports.PaymentCollectionStatus = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var utils_1 = require("../utils");
var db_aware_column_1 = require("../utils/db-aware-column");
/**
 * @enum
 *
 * The payment collection's status.
 */
var PaymentCollectionStatus;
(function (PaymentCollectionStatus) {
    /**
     * The payment collection isn't paid.
     */
    PaymentCollectionStatus["NOT_PAID"] = "not_paid";
    /**
     * The payment collection is awaiting payment.
     */
    PaymentCollectionStatus["AWAITING"] = "awaiting";
    /**
     * The payment colleciton is authorized.
     */
    PaymentCollectionStatus["AUTHORIZED"] = "authorized";
    /**
     * Some of the payments in the payment collection are authorized.
     */
    PaymentCollectionStatus["PARTIALLY_AUTHORIZED"] = "partially_authorized";
    /**
     * The payment collection is canceled.
     */
    PaymentCollectionStatus["CANCELED"] = "canceled";
})(PaymentCollectionStatus = exports.PaymentCollectionStatus || (exports.PaymentCollectionStatus = {}));
/**
 * @enum
 *
 * The payment collection's type.
 */
var PaymentCollectionType;
(function (PaymentCollectionType) {
    /**
     * The payment collection is used for an order edit.
     */
    PaymentCollectionType["ORDER_EDIT"] = "order_edit";
})(PaymentCollectionType = exports.PaymentCollectionType || (exports.PaymentCollectionType = {}));
var PaymentCollection = /** @class */ (function (_super) {
    __extends(PaymentCollection, _super);
    function PaymentCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    PaymentCollection.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "paycol");
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: PaymentCollectionType }),
        __metadata("design:type", String)
    ], PaymentCollection.prototype, "type", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: PaymentCollectionStatus }),
        __metadata("design:type", String)
    ], PaymentCollection.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], PaymentCollection.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], PaymentCollection.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], PaymentCollection.prototype, "authorized_amount", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PaymentCollection.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Region; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", _1.Region)
    ], PaymentCollection.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PaymentCollection.prototype, "currency_code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Currency; }),
        (0, typeorm_1.JoinColumn)({ name: "currency_code", referencedColumnName: "code" }),
        __metadata("design:type", _1.Currency)
    ], PaymentCollection.prototype, "currency", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return _1.PaymentSession; }),
        (0, typeorm_1.JoinTable)({
            name: "payment_collection_sessions",
            joinColumn: {
                name: "payment_collection_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "payment_session_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], PaymentCollection.prototype, "payment_sessions", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return _1.Payment; }),
        (0, typeorm_1.JoinTable)({
            name: "payment_collection_payments",
            joinColumn: {
                name: "payment_collection_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "payment_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], PaymentCollection.prototype, "payments", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], PaymentCollection.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PaymentCollection.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PaymentCollection.prototype, "beforeInsert", null);
    PaymentCollection = __decorate([
        (0, typeorm_1.Entity)()
    ], PaymentCollection);
    return PaymentCollection;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.PaymentCollection = PaymentCollection;
/**
 * @schema PaymentCollection
 * title: "Payment Collection"
 * description: "A payment collection allows grouping and managing a list of payments at one. This can be helpful when making additional payment for order edits or integrating installment payments."
 * type: object
 * required:
 *   - amount
 *   - authorized_amount
 *   - created_at
 *   - created_by
 *   - currency_code
 *   - deleted_at
 *   - description
 *   - id
 *   - metadata
 *   - region_id
 *   - status
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The payment collection's ID
 *     type: string
 *     example: paycol_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   type:
 *     description: The type of the payment collection
 *     type: string
 *     enum:
 *       - order_edit
 *   status:
 *     description: The type of the payment collection
 *     type: string
 *     enum:
 *       - not_paid
 *       - awaiting
 *       - authorized
 *       - partially_authorized
 *       - canceled
 *   description:
 *     description: Description of the payment collection
 *     nullable: true
 *     type: string
 *   amount:
 *     description: Amount of the payment collection.
 *     type: integer
 *   authorized_amount:
 *     description: Authorized amount of the payment collection.
 *     nullable: true
 *     type: integer
 *   region_id:
 *     description: The ID of the region this payment collection is associated with.
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region this payment collection is associated with.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   currency_code:
 *     description: The three character ISO code for the currency this payment collection is associated with.
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency this payment collection is associated with.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   payment_sessions:
 *     description: The details of the payment sessions created as part of the payment collection.
 *     type: array
 *     x-expandable: "payment_sessions"
 *     items:
 *       $ref: "#/components/schemas/PaymentSession"
 *   payments:
 *     description: The details of the payments created as part of the payment collection.
 *     type: array
 *     x-expandable: "payments"
 *     items:
 *       $ref: "#/components/schemas/Payment"
 *   created_by:
 *     description: The ID of the user that created the payment collection.
 *     type: string
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
//# sourceMappingURL=payment-collection.js.map