"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformStoreQuery = exports.transformQuery = exports.transformIncludesOptions = exports.transformBody = exports.requireCustomerAuthentication = exports.normalizeQuery = exports.isFeatureFlagEnabled = exports.errorHandler = exports.doesConditionBelongToDiscount = exports.getRequestedBatchJob = exports.canAccessBatchJob = exports.wrapHandler = exports.authenticateCustomer = exports.authenticate = void 0;
var authenticate_1 = __importDefault(require("./authenticate"));
var authenticate_customer_1 = __importDefault(require("./authenticate-customer"));
var await_middleware_1 = __importDefault(require("./await-middleware"));
var normalized_query_1 = __importDefault(require("./normalized-query"));
var require_customer_authentication_1 = __importDefault(require("./require-customer-authentication"));
var authenticate_2 = require("./authenticate");
Object.defineProperty(exports, "authenticate", { enumerable: true, get: function () { return __importDefault(authenticate_2).default; } });
var authenticate_customer_2 = require("./authenticate-customer");
Object.defineProperty(exports, "authenticateCustomer", { enumerable: true, get: function () { return __importDefault(authenticate_customer_2).default; } });
var await_middleware_2 = require("./await-middleware");
Object.defineProperty(exports, "wrapHandler", { enumerable: true, get: function () { return __importDefault(await_middleware_2).default; } });
var can_access_batch_job_1 = require("./batch-job/can-access-batch-job");
Object.defineProperty(exports, "canAccessBatchJob", { enumerable: true, get: function () { return can_access_batch_job_1.canAccessBatchJob; } });
var get_requested_batch_job_1 = require("./batch-job/get-requested-batch-job");
Object.defineProperty(exports, "getRequestedBatchJob", { enumerable: true, get: function () { return get_requested_batch_job_1.getRequestedBatchJob; } });
var does_condition_belong_to_discount_1 = require("./discount/does-condition-belong-to-discount");
Object.defineProperty(exports, "doesConditionBelongToDiscount", { enumerable: true, get: function () { return does_condition_belong_to_discount_1.doesConditionBelongToDiscount; } });
var error_handler_1 = require("./error-handler");
Object.defineProperty(exports, "errorHandler", { enumerable: true, get: function () { return __importDefault(error_handler_1).default; } });
var feature_flag_enabled_1 = require("./feature-flag-enabled");
Object.defineProperty(exports, "isFeatureFlagEnabled", { enumerable: true, get: function () { return feature_flag_enabled_1.isFeatureFlagEnabled; } });
var normalized_query_2 = require("./normalized-query");
Object.defineProperty(exports, "normalizeQuery", { enumerable: true, get: function () { return __importDefault(normalized_query_2).default; } });
var require_customer_authentication_2 = require("./require-customer-authentication");
Object.defineProperty(exports, "requireCustomerAuthentication", { enumerable: true, get: function () { return __importDefault(require_customer_authentication_2).default; } });
var transform_body_1 = require("./transform-body");
Object.defineProperty(exports, "transformBody", { enumerable: true, get: function () { return transform_body_1.transformBody; } });
var transform_includes_options_1 = require("./transform-includes-options");
Object.defineProperty(exports, "transformIncludesOptions", { enumerable: true, get: function () { return transform_includes_options_1.transformIncludesOptions; } });
var transform_query_1 = require("./transform-query");
Object.defineProperty(exports, "transformQuery", { enumerable: true, get: function () { return transform_query_1.transformQuery; } });
Object.defineProperty(exports, "transformStoreQuery", { enumerable: true, get: function () { return transform_query_1.transformStoreQuery; } });
/**
 * @deprecated you can now import the middlewares directly without passing by the default export
 * e.g `import { authenticate } from "@medusajs/medusa"
 */
exports.default = {
    authenticate: authenticate_1.default,
    authenticateCustomer: authenticate_customer_1.default,
    requireCustomerAuthentication: require_customer_authentication_1.default,
    normalizeQuery: normalized_query_1.default,
    /**
     * @deprecated use `import { wrapHandler } from "@medusajs/medusa"`
     */
    wrap: await_middleware_1.default,
};
//# sourceMappingURL=index.js.map