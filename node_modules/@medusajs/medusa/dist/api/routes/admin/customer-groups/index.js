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
exports.defaultAdminCustomerGroupsRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var get_customer_group_1 = require("./get-customer-group");
var list_customer_groups_1 = require("./list-customer-groups");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/customer-groups", route);
    route.post("/", middlewares_1.default.wrap(require("./create-customer-group").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_customer_groups_1.AdminGetCustomerGroupsParams, {
        defaultRelations: exports.defaultAdminCustomerGroupsRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-customer-groups").default));
    var customerGroupRouter = (0, express_1.Router)({ mergeParams: true });
    route.use("/:id", customerGroupRouter);
    customerGroupRouter.get("/", (0, middlewares_1.transformQuery)(get_customer_group_1.AdminGetCustomerGroupsGroupParams, {
        defaultRelations: exports.defaultAdminCustomerGroupsRelations,
    }), middlewares_1.default.wrap(require("./get-customer-group").default));
    customerGroupRouter.delete("/", middlewares_1.default.wrap(require("./delete-customer-group").default));
    customerGroupRouter.post("/", middlewares_1.default.wrap(require("./update-customer-group").default));
    customerGroupRouter.get("/customers", middlewares_1.default.wrap(require("./get-customer-group-customers").default));
    customerGroupRouter.post("/customers/batch", middlewares_1.default.wrap(require("./add-customers-batch").default));
    customerGroupRouter.delete("/customers/batch", middlewares_1.default.wrap(require("./delete-customers-batch").default));
    return app;
});
exports.defaultAdminCustomerGroupsRelations = [];
__exportStar(require("./add-customers-batch"), exports);
__exportStar(require("./create-customer-group"), exports);
__exportStar(require("./delete-customers-batch"), exports);
__exportStar(require("./get-customer-group"), exports);
__exportStar(require("./list-customer-groups"), exports);
__exportStar(require("./update-customer-group"), exports);
//# sourceMappingURL=index.js.map