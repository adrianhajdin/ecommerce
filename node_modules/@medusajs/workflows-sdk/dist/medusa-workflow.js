"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedusaWorkflow = void 0;
class MedusaWorkflow {
    static registerWorkflow(workflowId, exportedWorkflow) {
        MedusaWorkflow.workflows[workflowId] = exportedWorkflow;
    }
    static getWorkflow(workflowId) {
        return MedusaWorkflow.workflows[workflowId];
    }
}
exports.MedusaWorkflow = MedusaWorkflow;
MedusaWorkflow.workflows = {};
global.MedusaWorkflow ?? (global.MedusaWorkflow = MedusaWorkflow);
exports.MedusaWorkflow = global.MedusaWorkflow;
//# sourceMappingURL=medusa-workflow.js.map