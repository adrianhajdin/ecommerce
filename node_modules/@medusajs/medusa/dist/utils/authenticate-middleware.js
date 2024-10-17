"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var utils_1 = require("@medusajs/utils");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SESSION_AUTH = "session";
var BEARER_AUTH = "bearer";
var API_KEY_AUTH = "api-key";
var authenticate = function (authScope, authType, options) {
    if (options === void 0) { options = {}; }
    return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var authTypes, apiKey, authUser, jwt_secret, isMedusaScope, isRegistered;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    authTypes = Array.isArray(authType) ? authType : [authType];
                    if (!(authTypes.includes(API_KEY_AUTH) && isAdminScope(authScope))) return [3 /*break*/, 2];
                    return [4 /*yield*/, getApiKeyInfo(req)];
                case 1:
                    apiKey = _c.sent();
                    if (apiKey) {
                        ;
                        req.auth = {
                            actor_id: apiKey.id,
                            auth_user_id: "",
                            app_metadata: {},
                            // TODO: Add more limited scope once we have support for it in the API key module
                            scope: "admin",
                        };
                        return [2 /*return*/, next()];
                    }
                    _c.label = 2;
                case 2:
                    authUser = getAuthUserFromSession(req.session, authTypes, authScope);
                    if (!authUser) {
                        jwt_secret = req.scope.resolve("configModule").projectConfig.jwt_secret;
                        authUser = getAuthUserFromJwtToken(req.headers.authorization, jwt_secret, authTypes, authScope);
                    }
                    isMedusaScope = isAdminScope(authScope) || isStoreScope(authScope);
                    isRegistered = !isMedusaScope ||
                        (((_a = authUser === null || authUser === void 0 ? void 0 : authUser.app_metadata) === null || _a === void 0 ? void 0 : _a.user_id) &&
                            (0, utils_1.stringEqualsOrRegexMatch)(authScope, "admin")) ||
                        (((_b = authUser === null || authUser === void 0 ? void 0 : authUser.app_metadata) === null || _b === void 0 ? void 0 : _b.customer_id) &&
                            (0, utils_1.stringEqualsOrRegexMatch)(authScope, "store"));
                    if (authUser &&
                        (isRegistered || (!isRegistered && options.allowUnregistered))) {
                        ;
                        req.auth = {
                            actor_id: getActorId(authUser, authScope),
                            auth_user_id: authUser.id,
                            app_metadata: authUser.app_metadata,
                            scope: authUser.scope,
                        };
                        return [2 /*return*/, next()];
                    }
                    if (options.allowUnauthenticated) {
                        return [2 /*return*/, next()];
                    }
                    res.status(401).json({ message: "Unauthorized" });
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.authenticate = authenticate;
var getApiKeyInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var authHeader, _a, tokenType, token, normalizedToken, apiKeyModule, apiKey, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authHeader = req.headers.authorization;
                if (!authHeader) {
                    return [2 /*return*/, null];
                }
                _a = __read(authHeader.split(" "), 2), tokenType = _a[0], token = _a[1];
                if (tokenType.toLowerCase() !== "basic" || !token) {
                    return [2 /*return*/, null];
                }
                normalizedToken = token;
                if (!token.startsWith("sk_")) {
                    normalizedToken = Buffer.from(token, "base64").toString("utf-8");
                }
                // Basic auth is defined as a username:password set, and since the token is set to the username we need to trim the colon
                if (normalizedToken.endsWith(":")) {
                    normalizedToken = normalizedToken.slice(0, -1);
                }
                // Secret tokens start with 'sk_', and if it doesn't it could be a user JWT or a malformed token
                if (!normalizedToken.startsWith("sk_")) {
                    return [2 /*return*/, null];
                }
                apiKeyModule = req.scope.resolve(modules_sdk_1.ModuleRegistrationName.API_KEY);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, apiKeyModule.authenticate(normalizedToken)];
            case 2:
                apiKey = _b.sent();
                if (!apiKey) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, apiKey];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getAuthUserFromSession = function (session, authTypes, authScope) {
    if (session === void 0) { session = {}; }
    if (!authTypes.includes(SESSION_AUTH)) {
        return null;
    }
    if (session.auth_user &&
        (0, utils_1.stringEqualsOrRegexMatch)(authScope, session.auth_user.scope)) {
        return session.auth_user;
    }
    return null;
};
var getAuthUserFromJwtToken = function (authHeader, jwtSecret, authTypes, authScope) {
    if (!authTypes.includes(BEARER_AUTH)) {
        return null;
    }
    if (!authHeader) {
        return null;
    }
    var re = /(\S+)\s+(\S+)/;
    var matches = authHeader.match(re);
    // TODO: figure out how to obtain token (and store correct data in token)
    if (matches) {
        var tokenType = matches[1];
        var token = matches[2];
        if (tokenType.toLowerCase() === BEARER_AUTH) {
            // get config jwt secret
            // verify token and set authUser
            try {
                var verified = jsonwebtoken_1.default.verify(token, jwtSecret);
                if ((0, utils_1.stringEqualsOrRegexMatch)(authScope, verified.scope)) {
                    return verified;
                }
            }
            catch (err) {
                return null;
            }
        }
    }
    return null;
};
var getActorId = function (authUser, scope) {
    if ((0, utils_1.stringEqualsOrRegexMatch)(scope, "admin")) {
        return authUser.app_metadata.user_id;
    }
    if ((0, utils_1.stringEqualsOrRegexMatch)(scope, "store")) {
        return authUser.app_metadata.customer_id;
    }
    return undefined;
};
var isAdminScope = function (authScope) {
    return (0, utils_1.stringEqualsOrRegexMatch)(authScope, "admin");
};
var isStoreScope = function (authScope) {
    return (0, utils_1.stringEqualsOrRegexMatch)(authScope, "store");
};
//# sourceMappingURL=authenticate-middleware.js.map