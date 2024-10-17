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
exports.CustomerGroup = void 0;
var typeorm_1 = require("typeorm");
var customer_1 = require("./customer");
var db_aware_column_1 = require("../utils/db-aware-column");
var price_list_1 = require("./price-list");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var CustomerGroup = /** @class */ (function (_super) {
    __extends(CustomerGroup, _super);
    function CustomerGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    CustomerGroup.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "cgrp");
    };
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CustomerGroup.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return customer_1.Customer; }, function (customer) { return customer.groups; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], CustomerGroup.prototype, "customers", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return price_list_1.PriceList; }, function (priceList) { return priceList.customer_groups; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], CustomerGroup.prototype, "price_lists", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], CustomerGroup.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomerGroup.prototype, "beforeInsert", null);
    CustomerGroup = __decorate([
        (0, typeorm_1.Entity)()
    ], CustomerGroup);
    return CustomerGroup;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.CustomerGroup = CustomerGroup;
/**
 * @schema CustomerGroup
 * title: "Customer Group"
 * description: "A customer group that can be used to organize customers into groups of similar traits."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - name
 *   - updated_at
 * properties:
 *   id:
 *     description: The customer group's ID
 *     type: string
 *     example: cgrp_01G8ZH853Y6TFXWPG5EYE81X63
 *   name:
 *     description: The name of the customer group
 *     type: string
 *     example: VIP
 *   customers:
 *     description: The details of the customers that belong to the customer group.
 *     type: array
 *     x-expandable: "customers"
 *     items:
 *       $ref: "#/components/schemas/Customer"
 *   price_lists:
 *     description: The price lists that are associated with the customer group.
 *     type: array
 *     x-expandable: "price_lists"
 *     items:
 *       $ref: "#/components/schemas/PriceList"
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
//# sourceMappingURL=customer-group.js.map