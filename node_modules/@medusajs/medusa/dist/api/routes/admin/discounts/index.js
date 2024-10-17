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
exports.defaultAdminDiscountConditionRelations = exports.defaultAdminDiscountConditionFields = exports.defaultAdminDiscountsRelations = exports.defaultAdminDiscountsFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var add_resources_to_condition_batch_1 = require("./add-resources-to-condition-batch");
var update_condition_1 = require("./update-condition");
var create_condition_1 = require("./create-condition");
var create_dynamic_code_1 = require("./create-dynamic-code");
var update_discount_1 = require("./update-discount");
var create_discount_1 = require("./create-discount");
var list_discounts_1 = require("./list-discounts");
var get_condition_1 = require("./get-condition");
var delete_condition_1 = require("./delete-condition");
var get_discount_by_code_1 = require("./get-discount-by-code");
var get_discount_1 = require("./get-discount");
var delete_resources_from_condition_batch_1 = require("./delete-resources-from-condition-batch");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/discounts", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_discounts_1.AdminGetDiscountsParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-discounts").default));
    route.post("/", (0, middlewares_1.transformQuery)(create_discount_1.AdminPostDiscountsParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(create_discount_1.AdminPostDiscountsReq), middlewares_1.default.wrap(require("./create-discount").default));
    route.get("/:discount_id", (0, middlewares_1.transformQuery)(get_discount_1.AdminGetDiscountParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-discount").default));
    route.get("/code/:code", (0, middlewares_1.transformQuery)(get_discount_by_code_1.AdminGetDiscountsDiscountCodeParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-discount-by-code").default));
    route.post("/:discount_id", (0, middlewares_1.transformQuery)(update_discount_1.AdminPostDiscountsDiscountParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_discount_1.AdminPostDiscountsDiscountReq), middlewares_1.default.wrap(require("./update-discount").default));
    route.delete("/:discount_id", middlewares_1.default.wrap(require("./delete-discount").default));
    // Dynamic codes
    route.post("/:discount_id/dynamic-codes", (0, middlewares_1.transformBody)(create_dynamic_code_1.AdminPostDiscountsDiscountDynamicCodesReq), middlewares_1.default.wrap(require("./create-dynamic-code").default));
    route.delete("/:discount_id/dynamic-codes/:code", middlewares_1.default.wrap(require("./delete-dynamic-code").default));
    // Discount region management
    route.post("/:discount_id/regions/:region_id", middlewares_1.default.wrap(require("./add-region").default));
    route.delete("/:discount_id/regions/:region_id", middlewares_1.default.wrap(require("./remove-region").default));
    // Discount condition management
    route.post("/:discount_id/conditions", (0, middlewares_1.transformQuery)(create_condition_1.AdminPostDiscountsDiscountConditionsParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(create_condition_1.AdminPostDiscountsDiscountConditions), middlewares_1.default.wrap(require("./create-condition").default));
    route.delete("/:discount_id/conditions/:condition_id", (0, middlewares_1.transformQuery)(delete_condition_1.AdminDeleteDiscountsDiscountConditionsConditionParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./delete-condition").default));
    var conditionRouter = (0, express_1.Router)({ mergeParams: true });
    route.use("/:discount_id/conditions/:condition_id", middlewares_1.doesConditionBelongToDiscount, conditionRouter);
    conditionRouter.get("/", (0, middlewares_1.transformQuery)(get_condition_1.AdminGetDiscountsDiscountConditionsConditionParams, {
        defaultFields: exports.defaultAdminDiscountConditionFields,
        defaultRelations: exports.defaultAdminDiscountConditionRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-condition").default));
    conditionRouter.post("/", (0, middlewares_1.transformQuery)(update_condition_1.AdminPostDiscountsDiscountConditionsConditionParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_condition_1.AdminPostDiscountsDiscountConditionsCondition), middlewares_1.default.wrap(require("./update-condition").default));
    conditionRouter.post("/batch", (0, middlewares_1.transformQuery)(add_resources_to_condition_batch_1.AdminPostDiscountsDiscountConditionsConditionBatchParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(add_resources_to_condition_batch_1.AdminPostDiscountsDiscountConditionsConditionBatchReq), middlewares_1.default.wrap(require("./add-resources-to-condition-batch").default));
    conditionRouter.delete("/batch", (0, middlewares_1.transformQuery)(delete_resources_from_condition_batch_1.AdminDeleteDiscountsDiscountConditionsConditionBatchParams, {
        defaultFields: exports.defaultAdminDiscountsFields,
        defaultRelations: exports.defaultAdminDiscountsRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(delete_resources_from_condition_batch_1.AdminDeleteDiscountsDiscountConditionsConditionBatchReq), middlewares_1.default.wrap(require("./delete-resources-from-condition-batch").default));
    return app;
});
exports.defaultAdminDiscountsFields = [
    "id",
    "code",
    "is_dynamic",
    "is_disabled",
    "rule_id",
    "parent_discount_id",
    "usage_limit",
    "usage_count",
    "starts_at",
    "ends_at",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "valid_duration",
];
exports.defaultAdminDiscountsRelations = [
    "parent_discount",
    "regions",
    "rule.conditions",
];
exports.defaultAdminDiscountConditionFields = ["id", "type", "operator", "discount_rule_id", "created_at", "updated_at"];
exports.defaultAdminDiscountConditionRelations = ["discount_rule"];
__exportStar(require("./add-region"), exports);
__exportStar(require("./create-condition"), exports);
__exportStar(require("./create-discount"), exports);
__exportStar(require("./create-dynamic-code"), exports);
__exportStar(require("./delete-condition"), exports);
__exportStar(require("./delete-discount"), exports);
__exportStar(require("./delete-dynamic-code"), exports);
__exportStar(require("./get-condition"), exports);
__exportStar(require("./get-discount"), exports);
__exportStar(require("./get-discount-by-code"), exports);
__exportStar(require("./list-discounts"), exports);
__exportStar(require("./remove-region"), exports);
__exportStar(require("./update-condition"), exports);
__exportStar(require("./update-discount"), exports);
__exportStar(require("./add-resources-to-condition-batch"), exports);
__exportStar(require("./delete-resources-from-condition-batch"), exports);
//# sourceMappingURL=index.js.map