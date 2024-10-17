"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminShippingOptionRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validators_1 = require("./validators");
var query_config_1 = require("./query-config");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var validators_2 = require("../../utils/validators");
exports.adminShippingOptionRoutesMiddlewares = [
    {
        matcher: "/admin/shipping-options*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/shipping-options",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingOptionsParams, query_config_1.listTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateShippingOption),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingOptionParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminUpdateShippingOption),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingOptionParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/shipping-options/:id",
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options/:id/rules/batch",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_2.createBatchBody)(validators_1.AdminCreateShippingOptionRule, validators_1.AdminUpdateShippingOptionRule)),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingOptionRuleParams, query_config_1.retrieveRuleTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map