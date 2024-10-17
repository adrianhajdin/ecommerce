"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminShippingProfilesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var query_config_1 = require("./query-config");
var validators_1 = require("./validators");
exports.adminShippingProfilesMiddlewares = [
    {
        matcher: "/admin/shipping-profiles*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session", "api-key"])],
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-profiles",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateShippingProfile),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingProfilesParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/shipping-profiles",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingProfilesParams, query_config_1.listTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/shipping-profiles/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetShippingProfileParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map