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
exports.User = exports.UserRoles = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
/**
 * @enum
 *
 * The user's role. These roles don't change the user's capabilities or provide access-control features.
 */
var UserRoles;
(function (UserRoles) {
    /**
     * The user is an admin.
     */
    UserRoles["ADMIN"] = "admin";
    /**
     * The user is a team member.
     */
    UserRoles["MEMBER"] = "member";
    /**
     * The user is a developer.
     */
    UserRoles["DEVELOPER"] = "developer";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    User.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "usr");
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: UserRoles,
            nullable: true,
            default: UserRoles.MEMBER,
        }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "first_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "last_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, select: false }),
        __metadata("design:type", String)
    ], User.prototype, "password_hash", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "api_token", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], User.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "beforeInsert", null);
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.User = User;
/**
 * @schema User
 * title: "User"
 * description: "A User is an administrator who can manage store settings and data."
 * type: object
 * required:
 *   - api_token
 *   - created_at
 *   - deleted_at
 *   - email
 *   - first_name
 *   - id
 *   - last_name
 *   - metadata
 *   - role
 *   - updated_at
 * properties:
 *   id:
 *     description: The user's ID
 *     type: string
 *     example: usr_01G1G5V26F5TB3GPAPNJ8X1S3V
 *   role:
 *     description: The user's role. These roles don't provide any different privileges.
 *     type: string
 *     enum:
 *       - admin
 *       - member
 *       - developer
 *     default: member
 *   email:
 *     description: The email of the User
 *     type: string
 *     format: email
 *   first_name:
 *     description: The first name of the User
 *     nullable: true
 *     type: string
 *     example: Levi
 *   last_name:
 *     description: The last name of the User
 *     nullable: true
 *     type: string
 *     example: Bogan
 *   api_token:
 *     description: An API token associated with the user.
 *     nullable: true
 *     type: string
 *     example: null
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
//# sourceMappingURL=user.js.map