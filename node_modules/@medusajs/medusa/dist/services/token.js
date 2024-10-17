"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var path_1 = require("path");
var medusa_core_utils_1 = require("medusa-core-utils");
var TokenService = /** @class */ (function () {
    function TokenService(_a) {
        var configModule = _a.configModule;
        this.configModule_ = configModule;
    }
    TokenService.prototype.verifyToken = function (token, options) {
        var jwt_secret = this.configModule_.projectConfig.jwt_secret;
        if (jwt_secret) {
            return jsonwebtoken_1.default.verify(token, jwt_secret, options);
        }
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Please configure jwt_secret");
    };
    TokenService.prototype.signToken = function (data, options) {
        var jwt_secret = this.configModule_.projectConfig.jwt_secret;
        if (jwt_secret) {
            return jsonwebtoken_1.default.sign(data, jwt_secret, options);
        }
        else {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "Please configure a jwt token");
        }
    };
    TokenService.RESOLUTION_KEY = (0, format_registration_name_1.default)((0, path_1.resolve)(__dirname, __filename));
    return TokenService;
}());
exports.default = TokenService;
//# sourceMappingURL=token.js.map