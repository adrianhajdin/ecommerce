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
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var feature_flag_enabled_1 = require("../../../middlewares/feature-flag-enabled");
var create_analytics_config_1 = require("./create-analytics-config");
var update_analytics_config_1 = require("./update-analytics-config");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/analytics-configs", (0, feature_flag_enabled_1.isFeatureFlagEnabled)("analytics"), route);
    route.get("/", middlewares_1.default.wrap(require("./get-analytics-config").default));
    route.post("/", (0, middlewares_1.transformBody)(create_analytics_config_1.AdminPostAnalyticsConfigReq), middlewares_1.default.wrap(require("./create-analytics-config").default));
    route.post("/update", (0, middlewares_1.transformBody)(update_analytics_config_1.AdminPostAnalyticsConfigAnalyticsConfigReq), middlewares_1.default.wrap(require("./update-analytics-config").default));
    route.delete("/", middlewares_1.default.wrap(require("./delete-analytics-config").default));
    return app;
});
__exportStar(require("./create-analytics-config"), exports);
__exportStar(require("./update-analytics-config"), exports);
//# sourceMappingURL=index.js.map