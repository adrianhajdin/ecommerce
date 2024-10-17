"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
exports.default = (function () {
    return function (req, res, next) {
        if (req.user) {
            return next();
        }
        passport_1.default.authenticate(["store-session", "store-bearer"], { session: false })(req, res, next);
    };
});
//# sourceMappingURL=require-customer-authentication.js.map