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
exports.Address = void 0;
var typeorm_1 = require("typeorm");
var country_1 = require("./country");
var customer_1 = require("./customer");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Address.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "addr");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "customer_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_1.Customer; }),
        (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
        __metadata("design:type", Object)
    ], Address.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "first_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "last_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "address_1", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "address_2", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "country_code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return country_1.Country; }),
        (0, typeorm_1.JoinColumn)({ name: "country_code", referencedColumnName: "iso_2" }),
        __metadata("design:type", Object)
    ], Address.prototype, "country", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "province", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "postal_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "phone", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Address.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Address.prototype, "beforeInsert", null);
    Address = __decorate([
        (0, typeorm_1.Entity)()
    ], Address);
    return Address;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Address = Address;
/**
 * @schema Address
 * title: "Address"
 * description: "An address is used across the Medusa backend within other schemas and object types. For example, a customer's billing and shipping addresses both use the Address entity."
 * type: object
 * required:
 *   - address_1
 *   - address_2
 *   - city
 *   - company
 *   - country_code
 *   - created_at
 *   - customer_id
 *   - deleted_at
 *   - first_name
 *   - id
 *   - last_name
 *   - metadata
 *   - phone
 *   - postal_code
 *   - province
 *   - updated_at
 * properties:
 *  id:
 *    type: string
 *    description: ID of the address
 *    example: addr_01G8ZC9VS1XVE149MGH2J7QSSH
 *  customer_id:
 *    description: ID of the customer this address belongs to
 *    nullable: true
 *    type: string
 *    example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *  customer:
 *    description: Available if the relation `customer` is expanded.
 *    nullable: true
 *    $ref: "#/components/schemas/Customer"
 *  company:
 *    description: Company name
 *    nullable: true
 *    type: string
 *    example: Acme
 *  first_name:
 *    description: First name
 *    nullable: true
 *    type: string
 *    example: Arno
 *  last_name:
 *    description: Last name
 *    nullable: true
 *    type: string
 *    example: Willms
 *  address_1:
 *    description: Address line 1
 *    nullable: true
 *    type: string
 *    example: 14433 Kemmer Court
 *  address_2:
 *    description: Address line 2
 *    nullable: true
 *    type: string
 *    example: Suite 369
 *  city:
 *    description: City
 *    nullable: true
 *    type: string
 *    example: South Geoffreyview
 *  country_code:
 *    description: The 2 character ISO code of the country in lower case
 *    nullable: true
 *    type: string
 *    externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *      description: See a list of codes.
 *    example: st
 *  country:
 *    description: A country object.
 *    x-expandable: "country"
 *    nullable: true
 *    $ref: "#/components/schemas/Country"
 *  province:
 *    description: Province
 *    nullable: true
 *    type: string
 *    example: Kentucky
 *  postal_code:
 *    description: Postal Code
 *    nullable: true
 *    type: string
 *    example: 72093
 *  phone:
 *    description: Phone Number
 *    nullable: true
 *    type: string
 *    example: 16128234334802
 *  created_at:
 *    type: string
 *    description: "The date with timezone at which the resource was created."
 *    format: date-time
 *  updated_at:
 *    type: string
 *    description: "The date with timezone at which the resource was updated."
 *    format: date-time
 *  deleted_at:
 *    description: The date with timezone at which the resource was deleted.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  metadata:
 *    description: An optional key-value map with additional details
 *    nullable: true
 *    type: object
 *    example: {car: "white"}
 *    externalDocs:
 *      description: "Learn about the metadata attribute, and how to delete and update it."
 *      url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=address.js.map