"use strict";
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
exports.StagedJob = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var StagedJob = /** @class */ (function () {
    function StagedJob() {
    }
    /**
     * @apiIgnore
     */
    StagedJob.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "job");
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], StagedJob.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], StagedJob.prototype, "event_name", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], StagedJob.prototype, "data", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", default: {} }),
        __metadata("design:type", Object)
    ], StagedJob.prototype, "options", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StagedJob.prototype, "beforeInsert", null);
    StagedJob = __decorate([
        (0, typeorm_1.Entity)()
    ], StagedJob);
    return StagedJob;
}());
exports.StagedJob = StagedJob;
/**
 * @schema StagedJob
 * title: "Staged Job"
 * description: "A staged job resource"
 * type: object
 * required:
 *   - data
 *   - event_name
 *   - id
 *   - options
 * properties:
 *   id:
 *     description: The staged job's ID
 *     type: string
 *     example: job_01F0YET7BZTARY9MKN1SJ7AAXF
 *   event_name:
 *     description: The name of the event
 *     type: string
 *     example: order.placed
 *   data:
 *     description: Data necessary for the job
 *     type: object
 *     example: {}
 *   option:
 *     description: The staged job's option
 *     type: object
 *     example: {}
 */
//# sourceMappingURL=staged-job.js.map