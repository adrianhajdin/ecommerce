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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminWorkflowsExecutionsMiddlewares = void 0;
var QueryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_query_1 = require("../../utils/validate-query");
var validate_body_1 = require("../../utils/validate-body");
exports.adminWorkflowsExecutionsMiddlewares = [
    {
        method: ["ALL"],
        matcher: "/admin/workflows-executions*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/workflows-executions",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetWorkflowExecutionsParams, QueryConfig.listTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/workflows-executions/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetWorkflowExecutionDetailsParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/workflows-executions/:workflow_id/:transaction_id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetWorkflowExecutionDetailsParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/workflows-executions/:id/run",
        middlewares: [(0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateWorkflowsRun)],
    },
    {
        method: ["POST"],
        matcher: "/admin/workflows-executions/:id/steps/success",
        middlewares: [(0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateWorkflowsAsyncResponse)],
    },
    {
        method: ["POST"],
        matcher: "/admin/workflows-executions/:id/steps/failure",
        middlewares: [(0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateWorkflowsAsyncResponse)],
    },
];
//# sourceMappingURL=middlewares.js.map