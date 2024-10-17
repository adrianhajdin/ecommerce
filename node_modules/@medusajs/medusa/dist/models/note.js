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
exports.Note = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var user_1 = require("./user");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Note.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "note");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "resource_type", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "resource_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Note.prototype, "author_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }),
        (0, typeorm_1.JoinColumn)({ name: "author_id" }),
        __metadata("design:type", user_1.User)
    ], Note.prototype, "author", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Note.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Note.prototype, "beforeInsert", null);
    Note = __decorate([
        (0, typeorm_1.Entity)()
    ], Note);
    return Note;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Note = Note;
/**
 * @schema Note
 * title: "Note"
 * description: "A Note is an element that can be used in association with different resources to allow admin users to describe additional information. For example, they can be used to add additional information about orders."
 * type: object
 * required:
 *   - author_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - resource_id
 *   - resource_type
 *   - updated_at
 *   - value
 * properties:
 *   id:
 *     description: The note's ID
 *     type: string
 *     example: note_01G8TM8ENBMC7R90XRR1G6H26Q
 *   resource_type:
 *     description: The type of resource that the Note refers to.
 *     type: string
 *     example: order
 *   resource_id:
 *     description: The ID of the resource that the Note refers to.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   value:
 *     description: The contents of the note.
 *     type: string
 *     example: This order must be fulfilled on Monday
 *   author_id:
 *     description: The ID of the user that created the note.
 *     nullable: true
 *     type: string
 *     example: usr_01G1G5V26F5TB3GPAPNJ8X1S3V
 *   author:
 *     description: The details of the user that created the note.
 *     x-expandable: "author"
 *     nullable: true
 *     $ref: "#/components/schemas/User"
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
 */
//# sourceMappingURL=note.js.map