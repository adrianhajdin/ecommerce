"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminBatchFields = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_batch_jobs_1 = require("./list-batch-jobs");
exports.default = (function (app) {
    var route = (0, express_1.Router)();
    app.use("/batch-jobs", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_batch_jobs_1.AdminGetBatchParams, {
        defaultFields: exports.defaultAdminBatchFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-batch-jobs").default));
    route.post("/", middlewares_1.default.wrap(require("./create-batch-job").default));
    var batchJobRouter = (0, express_1.Router)({ mergeParams: true });
    route.use("/:id", middlewares_1.getRequestedBatchJob, middlewares_1.canAccessBatchJob, batchJobRouter);
    batchJobRouter.get("/", middlewares_1.default.wrap(require("./get-batch-job").default));
    batchJobRouter.post("/confirm", middlewares_1.default.wrap(require("./confirm-batch-job").default));
    batchJobRouter.post("/cancel", middlewares_1.default.wrap(require("./cancel-batch-job").default));
    return app;
});
exports.defaultAdminBatchFields = [
    "id",
    "type",
    "context",
    "result",
    "created_by",
    "created_at",
    "updated_at",
    "deleted_at",
    "confirmed_at",
    "pre_processed_at",
    "confirmed_at",
    "processing_at",
    "completed_at",
    "canceled_at",
    "failed_at",
];
__exportStar(require("./cancel-batch-job"), exports);
__exportStar(require("./confirm-batch-job"), exports);
__exportStar(require("./create-batch-job"), exports);
__exportStar(require("./get-batch-job"), exports);
__exportStar(require("./list-batch-jobs"), exports);
//# sourceMappingURL=index.js.map