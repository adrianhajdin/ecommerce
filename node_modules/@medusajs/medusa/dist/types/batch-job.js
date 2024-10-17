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
exports.FilterableBatchJobProps = exports.BatchJobStatus = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var is_type_1 = require("../utils/validators/is-type");
var common_1 = require("./common");
var BatchJobStatus;
(function (BatchJobStatus) {
    BatchJobStatus["CREATED"] = "created";
    BatchJobStatus["PRE_PROCESSED"] = "pre_processed";
    BatchJobStatus["CONFIRMED"] = "confirmed";
    BatchJobStatus["PROCESSING"] = "processing";
    BatchJobStatus["COMPLETED"] = "completed";
    BatchJobStatus["CANCELED"] = "canceled";
    BatchJobStatus["FAILED"] = "failed";
})(BatchJobStatus = exports.BatchJobStatus || (exports.BatchJobStatus = {}));
var FilterableBatchJobProps = /** @class */ (function () {
    function FilterableBatchJobProps() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableBatchJobProps.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(BatchJobStatus, { each: true }),
        __metadata("design:type", Array)
    ], FilterableBatchJobProps.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableBatchJobProps.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableBatchJobProps.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableBatchJobProps.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableBatchJobProps.prototype, "updated_at", void 0);
    return FilterableBatchJobProps;
}());
exports.FilterableBatchJobProps = FilterableBatchJobProps;
//# sourceMappingURL=batch-job.js.map