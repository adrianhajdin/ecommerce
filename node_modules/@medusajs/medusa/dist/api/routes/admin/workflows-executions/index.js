"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var middlewares_1 = __importStar(require("../../../middlewares"));
var express_1 = require("express");
var query_config_1 = require("./query-config");
var validators_1 = require("./validators");
var route = (0, express_1.Router)();
var retrieveTransformQueryConfig = {
    defaultFields: query_config_1.defaultAdminWorkflowExecutionDetailFields,
    defaultRelations: query_config_1.defaultAdminWorkflowExecutionsRelations,
    allowedRelations: query_config_1.allowedAdminWorkflowExecutionsRelations,
    isList: false,
};
var listTransformQueryConfig = __assign(__assign({}, retrieveTransformQueryConfig), { defaultFields: query_config_1.defaultAdminWorkflowExecutionsFields, isList: true });
exports.default = (function (app) {
    app.use("/workflows-executions", route);
    route.get("/", (0, middlewares_1.transformQuery)(validators_1.AdminGetWorkflowExecutionsParams, listTransformQueryConfig), middlewares_1.default.wrap(require("./list-execution").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(validators_1.AdminGetWorkflowExecutionDetailsParams, retrieveTransformQueryConfig), middlewares_1.default.wrap(require("./get-execution").default));
    route.get("/:workflow_id/:transaction_id", (0, middlewares_1.transformQuery)(validators_1.AdminGetWorkflowExecutionDetailsParams, retrieveTransformQueryConfig), middlewares_1.default.wrap(require("./get-execution").default));
    route.post("/:id/steps/success", (0, middlewares_1.transformBody)(validators_1.AdminPostWorkflowsAsyncResponseReq), middlewares_1.default.wrap(require("./set-step-success").default));
    route.post("/:id/steps/failure", (0, middlewares_1.transformBody)(validators_1.AdminPostWorkflowsAsyncResponseReq), middlewares_1.default.wrap(require("./set-step-failure").default));
    route.post("/:id/run", (0, middlewares_1.transformBody)(validators_1.AdminPostWorkflowsRunReq), middlewares_1.default.wrap(require("./run-workflow").default));
    return app;
});
__exportStar(require("./query-config"), exports);
__exportStar(require("./validators"), exports);
//# sourceMappingURL=index.js.map