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
exports.Invite = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var user_1 = require("./user");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var Invite = /** @class */ (function (_super) {
    __extends(Invite, _super);
    function Invite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Invite.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "invite");
    };
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Invite.prototype, "user_email", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: user_1.UserRoles,
            nullable: true,
            default: user_1.UserRoles.MEMBER,
        }),
        __metadata("design:type", String)
    ], Invite.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], Invite.prototype, "accepted", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Invite.prototype, "token", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], Invite.prototype, "expires_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Invite.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Invite.prototype, "beforeInsert", null);
    Invite = __decorate([
        (0, typeorm_1.Entity)()
    ], Invite);
    return Invite;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Invite = Invite;
/**
 * @schema Invite
 * title: "Invite"
 * description: "An invite is created when an admin user invites a new user to join the store's team. Once the invite is accepted, it's deleted."
 * type: object
 * required:
 *   - accepted
 *   - created_at
 *   - deleted_at
 *   - expires_at
 *   - id
 *   - metadata
 *   - role
 *   - token
 *   - updated_at
 *   - user_email
 * properties:
 *   id:
 *     type: string
 *     description: The invite's ID
 *     example: invite_01G8TKE4XYCTHSCK2GDEP47RE1
 *   user_email:
 *     description: The email of the user being invited.
 *     type: string
 *     format: email
 *   role:
 *     description: The user's role. These roles don't change the privileges of the user.
 *     nullable: true
 *     type: string
 *     enum:
 *       - admin
 *       - member
 *       - developer
 *     default: member
 *   accepted:
 *     description: Whether the invite was accepted or not.
 *     type: boolean
 *     default: false
 *   token:
 *     description: The token used to accept the invite.
 *     type: string
 *   expires_at:
 *     description: The date the invite expires at.
 *     type: string
 *     format: date-time
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
//# sourceMappingURL=invite.js.map