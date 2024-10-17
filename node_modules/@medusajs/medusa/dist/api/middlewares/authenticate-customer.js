"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var passport_1 = __importDefault(require("passport"));
// Optional customer authentication
// If authenticated, middleware attaches customer to request (as user) otherwise we pass through
// If you want to require authentication, use `requireCustomerAuthentication` in `packages/medusa/src/api/middlewares/require-customer-authentication.ts`
exports.default = (function () {
    return function (req, res, next) {
        var featureFlagRouter = req.scope.resolve(utils_1.ContainerRegistrationKeys.FEATURE_FLAG_ROUTER);
        if (featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
            return next();
        }
        passport_1.default.authenticate(["store-session", "store-bearer"], { session: false }, function (err, user) {
            if (err) {
                return next(err);
            }
            if (user) {
                req.user = user;
            }
            return next();
        })(req, res, next);
    };
});
//# sourceMappingURL=authenticate-customer.js.map