"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var passport_1 = __importDefault(require("passport"));
exports.default = (function () {
    return function (req, res, next) {
        var featureFlagRouter = req.scope.resolve(utils_1.ContainerRegistrationKeys.FEATURE_FLAG_ROUTER);
        if (featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
            return next();
        }
        passport_1.default.authenticate(["admin-session", "admin-bearer", "admin-api-token"], { session: false })(req, res, next);
    };
});
//# sourceMappingURL=authenticate.js.map