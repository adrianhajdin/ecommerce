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
exports.ProductCategory = void 0;
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var base_entity_1 = require("../interfaces/models/base-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var ProductCategory = /** @class */ (function (_super) {
    __extends(ProductCategory, _super);
    function ProductCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCategory_1 = ProductCategory;
    /**
     * @apiIgnore
     */
    ProductCategory.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "pcat");
        if (!this.handle) {
            this.handle = (0, lodash_1.kebabCase)(this.name);
        }
    };
    var ProductCategory_1;
    /**
     * @apiIgnore
     */
    ProductCategory.productCategoryProductJoinTable = "product_category_product";
    /**
     * @apiIgnore
     */
    ProductCategory.treeRelations = ["parent_category", "category_children"];
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductCategory.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, default: "" }),
        __metadata("design:type", String)
    ], ProductCategory.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true }),
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], ProductCategory.prototype, "handle", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], ProductCategory.prototype, "is_active", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean
        // The materialized path column is added dynamically by typeorm. Commenting this here for it
        // to not be a mystery
        // https://github.com/typeorm/typeorm/blob/62518ae1226f22b2f230afa615532c92f1544f01/src/metadata-builder/EntityMetadataBuilder.ts#L615
        // @Column({ nullable: true, default: '' })
        // mpath: String
        )
    ], ProductCategory.prototype, "is_internal", void 0);
    __decorate([
        (0, typeorm_1.TreeParent)(),
        (0, typeorm_1.JoinColumn)({ name: "parent_category_id" }),
        __metadata("design:type", Object)
    ], ProductCategory.prototype, "parent_category", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Object)
    ], ProductCategory.prototype, "parent_category_id", void 0);
    __decorate([
        (0, typeorm_1.TreeChildren)({ cascade: true }),
        __metadata("design:type", Array)
    ], ProductCategory.prototype, "category_children", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, default: 0 }),
        __metadata("design:type", Number)
    ], ProductCategory.prototype, "rank", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductCategory.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return _1.Product; }, { cascade: ["remove", "soft-remove"] }),
        (0, typeorm_1.JoinTable)({
            name: ProductCategory_1.productCategoryProductJoinTable,
            joinColumn: {
                name: "product_category_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], ProductCategory.prototype, "products", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductCategory.prototype, "beforeInsert", null);
    ProductCategory = ProductCategory_1 = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Tree)("materialized-path"),
        (0, typeorm_1.Index)(["parent_category_id", "rank"], { unique: true })
    ], ProductCategory);
    return ProductCategory;
}(base_entity_1.BaseEntity));
exports.ProductCategory = ProductCategory;
/**
 * @schema ProductCategory
 * title: "Product Category"
 * description: "A product category can be used to categorize products into a hierarchy of categories."
 * x-resourceId: ProductCategory
 * x-featureFlag: "product_categories"
 * type: object
 * required:
 *   - category_children
 *   - created_at
 *   - handle
 *   - id
 *   - is_active
 *   - is_internal
 *   - metadata
 *   - mpath
 *   - name
 *   - parent_category_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The product category's ID
 *     type: string
 *     example: pcat_01G2SG30J8C85S4A5CHM2S1NS2
 *   name:
 *     description: The product category's name
 *     type: string
 *     example: Regular Fit
 *   description:
 *     description: The product category's description.
 *     type: string
 *     default: ""
 *   handle:
 *     description: A unique string that identifies the Product Category - can for example be used in slug structures.
 *     type: string
 *     example: regular-fit
 *   mpath:
 *     description: A string for Materialized Paths - used for finding ancestors and descendents
 *     nullable: true
 *     type: string
 *     example: pcat_id1.pcat_id2.pcat_id3
 *   is_internal:
 *     type: boolean
 *     description: A flag to make product category an internal category for admins
 *     default: false
 *   is_active:
 *     type: boolean
 *     description: A flag to make product category visible/hidden in the store front
 *     default: false
 *   rank:
 *     type: integer
 *     description: An integer that depicts the rank of category in a tree node
 *     default: 0
 *   category_children:
 *     description: The details of the category's children.
 *     type: array
 *     x-expandable: "category_children"
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
 *   parent_category_id:
 *     description: The ID of the parent category.
 *     nullable: true
 *     type: string
 *     default: null
 *   parent_category:
 *     description: The details of the parent of this category.
 *     x-expandable: "parent_category"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCategory"
 *   products:
 *     description: The details of the products that belong to this category.
 *     type: array
 *     x-expandable: "products"
 *     items:
 *       $ref: "#/components/schemas/Product"
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
//# sourceMappingURL=product-category.js.map