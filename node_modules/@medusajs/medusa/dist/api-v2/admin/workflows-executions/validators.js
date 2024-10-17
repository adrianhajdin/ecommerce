"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateWorkflowsAsyncResponse = exports.AdminCreateWorkflowsRun = exports.AdminGetWorkflowExecutionsParams = exports.AdminGetWorkflowExecutionDetailsParams = void 0;
var utils_1 = require("@medusajs/utils");
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetWorkflowExecutionDetailsParams = (0, validators_1.createSelectParams)();
exports.AdminGetWorkflowExecutionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 100,
}).merge(zod_1.z.object({
    transaction_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    workflow_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
}));
exports.AdminCreateWorkflowsRun = zod_1.z.object({
    input: zod_1.z.any().optional(),
    transaction_id: zod_1.z.string().optional(),
});
exports.AdminCreateWorkflowsAsyncResponse = zod_1.z.object({
    transaction_id: zod_1.z.string(),
    step_id: zod_1.z.string(),
    response: zod_1.z.any().optional(),
    compensate_input: zod_1.z.any().optional(),
    action: zod_1.z
        .preprocess(function (val) { return (val + "").toLowerCase(); }, zod_1.z.nativeEnum(utils_1.TransactionHandlerType).optional())
        .optional(),
});
//# sourceMappingURL=validators.js.map