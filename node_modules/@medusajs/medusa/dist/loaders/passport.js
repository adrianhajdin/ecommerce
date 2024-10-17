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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_custom_1 = require("passport-custom");
var passport_jwt_1 = require("passport-jwt");
var passport_local_1 = require("passport-local");
exports.default = (function (_a) {
    var app = _a.app, configModule = _a.configModule;
    return __awaiter(void 0, void 0, void 0, function () {
        var jwt_secret;
        return __generator(this, function (_b) {
            // For good old email password authentication
            passport_1.default.use(new passport_local_1.Strategy({
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true,
            }, function (req, email, password, done) { return __awaiter(void 0, void 0, void 0, function () {
                var authService, _a, success, user, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            authService = req.scope.resolve("authService");
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.authenticate(email, password)];
                        case 2:
                            _a = _b.sent(), success = _a.success, user = _a.user;
                            if (success) {
                                return [2 /*return*/, done(null, user)];
                            }
                            else {
                                return [2 /*return*/, done("Incorrect Username / Password")];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            return [2 /*return*/, done(error_1)];
                        case 4: return [2 /*return*/];
                    }
                });
            }); }));
            jwt_secret = configModule.projectConfig.jwt_secret;
            passport_1.default.use("admin-session", new passport_custom_1.Strategy(function (req, done) { return __awaiter(void 0, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    // @ts-ignore
                    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.user_id) {
                        // @ts-ignore
                        return [2 /*return*/, done(null, { userId: req.session.user_id })];
                    }
                    return [2 /*return*/, done(null, false)];
                });
            }); }));
            passport_1.default.use("store-session", new passport_custom_1.Strategy(function (req, done) { return __awaiter(void 0, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    // @ts-ignore
                    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.customer_id) {
                        // @ts-ignore
                        return [2 /*return*/, done(null, { customer_id: req.session.customer_id })];
                    }
                    return [2 /*return*/, done(null, false)];
                });
            }); }));
            // Alternatively use API token to authenticate to the admin api
            passport_1.default.use("admin-api-token", new passport_custom_1.Strategy(function (req, done) { return __awaiter(void 0, void 0, void 0, function () {
                var token, authService, auth;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = req.headers["x-medusa-access-token"];
                            // check if header exists and is string
                            // typescript will complain if we don't check for type
                            if (!token || typeof token !== "string") {
                                return [2 /*return*/, done(null, false)];
                            }
                            authService = req.scope.resolve("authService");
                            return [4 /*yield*/, authService.authenticateAPIToken(token)];
                        case 1:
                            auth = _a.sent();
                            if (auth.success) {
                                done(null, auth.user);
                            }
                            else {
                                done(null, false);
                            }
                            return [2 /*return*/];
                    }
                });
            }); }));
            // Admin bearer JWT token authentication strategy, best suited for web SPAs or mobile apps
            passport_1.default.use("admin-bearer", new passport_jwt_1.Strategy({
                jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: jwt_secret,
            }, function (token, done) {
                if (token.domain !== "admin") {
                    done(null, false);
                    return;
                }
                if (!token.user_id) {
                    done(null, false);
                    return;
                }
                done(null, { userId: token.user_id });
            }));
            // Store bearer JWT token authentication strategy, best suited for web SPAs or mobile apps
            passport_1.default.use("store-bearer", new passport_jwt_1.Strategy({
                jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: jwt_secret,
            }, function (token, done) {
                if (token.domain !== "store") {
                    done(null, false);
                    return;
                }
                if (!token.customer_id) {
                    done(null, false);
                    return;
                }
                done(null, { customer_id: token.customer_id });
            }));
            app.use(passport_1.default.initialize());
            app.use(passport_1.default.session());
            return [2 /*return*/];
        });
    });
});
//# sourceMappingURL=passport.js.map