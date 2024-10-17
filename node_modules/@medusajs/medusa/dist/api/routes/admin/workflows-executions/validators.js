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
exports.AdminPostWorkflowsAsyncResponseReq = exports.AdminPostWorkflowsRunReq = exports.AdminGetWorkflowExecutionsParams = exports.AdminGetWorkflowExecutionDetailsParams = void 0;
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
var utils_2 = require("../../../../utils");
var AdminGetWorkflowExecutionDetailsParams = /** @class */ (function (_super) {
    __extends(AdminGetWorkflowExecutionDetailsParams, _super);
    function AdminGetWorkflowExecutionDetailsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetWorkflowExecutionDetailsParams;
}(common_1.FindParams));
exports.AdminGetWorkflowExecutionDetailsParams = AdminGetWorkflowExecutionDetailsParams;
var AdminGetWorkflowExecutionsParams = /** @class */ (function (_super) {
    __extends(AdminGetWorkflowExecutionsParams, _super);
    function AdminGetWorkflowExecutionsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_2.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetWorkflowExecutionsParams.prototype, "transaction_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_2.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetWorkflowExecutionsParams.prototype, "workflow_id", void 0);
    return AdminGetWorkflowExecutionsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetWorkflowExecutionsParams = AdminGetWorkflowExecutionsParams;
var AdminPostWorkflowsRunReq = /** @class */ (function () {
    function AdminPostWorkflowsRunReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostWorkflowsRunReq.prototype, "input", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostWorkflowsRunReq.prototype, "transaction_id", void 0);
    return AdminPostWorkflowsRunReq;
}());
exports.AdminPostWorkflowsRunReq = AdminPostWorkflowsRunReq;
var AdminPostWorkflowsAsyncResponseReq = /** @class */ (function () {
    function AdminPostWorkflowsAsyncResponseReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostWorkflowsAsyncResponseReq.prototype, "transaction_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostWorkflowsAsyncResponseReq.prototype, "step_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostWorkflowsAsyncResponseReq.prototype, "response", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostWorkflowsAsyncResponseReq.prototype, "compensate_input", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return (value + "").toLowerCase();
        }),
        (0, class_validator_1.IsEnum)(utils_1.TransactionHandlerType),
        __metadata("design:type", String)
    ], AdminPostWorkflowsAsyncResponseReq.prototype, "action", void 0);
    return AdminPostWorkflowsAsyncResponseReq;
}());
exports.AdminPostWorkflowsAsyncResponseReq = AdminPostWorkflowsAsyncResponseReq;
//# sourceMappingURL=validators.js.map