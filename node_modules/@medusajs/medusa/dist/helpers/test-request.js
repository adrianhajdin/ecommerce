"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.request = exports.clientSessionOpts = exports.adminSessionOpts = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var awilix_1 = require("awilix");
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var medusa_test_utils_1 = require("medusa-test-utils");
var querystring_1 = __importDefault(require("querystring"));
require("reflect-metadata");
var supertest_1 = __importDefault(require("supertest"));
var api_1 = __importDefault(require("../loaders/api"));
var feature_flags_1 = __importStar(require("../loaders/feature-flags"));
var models_1 = __importDefault(require("../loaders/models"));
var passport_1 = __importDefault(require("../loaders/passport"));
var repositories_1 = __importDefault(require("../loaders/repositories"));
var services_1 = __importDefault(require("../loaders/services"));
var strategies_1 = __importDefault(require("../loaders/strategies"));
var adminSessionOpts = {
    cookieName: "session",
    secret: "test",
};
exports.adminSessionOpts = adminSessionOpts;
var clientSessionOpts = {
    cookieName: "session",
    secret: "test",
};
exports.clientSessionOpts = clientSessionOpts;
var moduleResolutions = {};
Object.entries(modules_sdk_1.ModulesDefinition).forEach(function (_a) {
    var _b = __read(_a, 2), moduleKey = _b[0], module = _b[1];
    moduleResolutions[moduleKey] = (0, modules_sdk_1.registerMedusaModule)(moduleKey, module.defaultModuleDeclaration, undefined, module)[moduleKey];
});
var config = {
    projectConfig: {
        jwt_secret: "supersecret",
        cookie_secret: "superSecret",
        admin_cors: "",
        store_cors: "",
    },
};
var testApp = (0, express_1.default)();
function asArray(resolvers) {
    return {
        resolve: function (container) {
            return resolvers.map(function (resolver) { return container.build(resolver); });
        },
    };
}
var container = (0, awilix_1.createContainer)();
// TODO: remove once the util is merged in master
container.registerAdd = function (name, registration) {
    var storeKey = name + "_STORE";
    if (this.registrations[storeKey] === undefined) {
        this.register(storeKey, (0, awilix_1.asValue)([]));
    }
    var store = this.resolve(storeKey);
    if (this.registrations[name] === undefined) {
        this.register(name, asArray(store));
    }
    store.unshift(registration);
    return this;
}.bind(container);
container.register("featureFlagRouter", (0, awilix_1.asValue)(feature_flags_1.featureFlagRouter));
container.register("modulesHelper", (0, awilix_1.asValue)(modules_sdk_1.moduleHelper));
container.register("configModule", (0, awilix_1.asValue)(config));
container.register({
    logger: (0, awilix_1.asValue)({
        error: function () { },
    }),
    manager: (0, awilix_1.asValue)(medusa_test_utils_1.MockManager),
});
testApp.set("trust proxy", 1);
testApp.use(function (req, res, next) {
    req.session = {};
    var data = req.get("Cookie");
    if (data) {
        req.session = __assign(__assign({}, req.session), JSON.parse(data));
    }
    next();
});
var supertestRequest;
var resolveIsInit;
var isInit = new Promise(function (resolve) {
    resolveIsInit = resolve;
});
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, feature_flags_1.default)(config);
                    (0, models_1.default)({ container: container, configModule: config, isTest: true });
                    (0, repositories_1.default)({ container: container, isTest: true });
                    (0, services_1.default)({ container: container, configModule: config });
                    (0, strategies_1.default)({ container: container, configModule: config });
                    return [4 /*yield*/, (0, passport_1.default)({ app: testApp, container: container, configModule: config })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, modules_sdk_1.moduleLoader)({ container: container, moduleResolutions: moduleResolutions })];
                case 2:
                    _a.sent();
                    testApp.use(function (req, res, next) {
                        req.scope = container.createScope();
                        next();
                    });
                    return [4 /*yield*/, (0, api_1.default)({ container: container, app: testApp, configModule: config })];
                case 3:
                    _a.sent();
                    supertestRequest = (0, supertest_1.default)(testApp);
                    resolveIsInit(true);
                    return [2 /*return*/];
            }
        });
    });
}
init();
function request(method, url, opts) {
    var _a, _b;
    if (opts === void 0) { opts = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var payload, query, _c, headers, _d, flags, queryParams, req, token, token, name_1, res, e_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, isInit];
                case 1:
                    _e.sent();
                    payload = opts.payload, query = opts.query, _c = opts.headers, headers = _c === void 0 ? {} : _c, _d = opts.flags, flags = _d === void 0 ? [] : _d;
                    flags.forEach(function (flag) {
                        feature_flags_1.featureFlagRouter.setFlag(flag.key, true);
                    });
                    queryParams = query && querystring_1.default.stringify(query);
                    req = supertestRequest[method.toLowerCase()]("".concat(url).concat(queryParams ? "?" + queryParams : ""));
                    headers.Cookie = headers.Cookie || "";
                    if (opts.adminSession) {
                        token = jsonwebtoken_1.default.sign({
                            user_id: opts.adminSession.userId || ((_a = opts.adminSession.jwt) === null || _a === void 0 ? void 0 : _a.userId),
                            domain: "admin",
                        }, config.projectConfig.jwt_secret);
                        headers.Authorization = "Bearer ".concat(token);
                    }
                    if (opts.clientSession) {
                        token = jsonwebtoken_1.default.sign({
                            customer_id: opts.clientSession.customer_id || ((_b = opts.clientSession.jwt) === null || _b === void 0 ? void 0 : _b.customer_id),
                            domain: "store",
                        }, config.projectConfig.jwt_secret);
                        headers.Authorization = "Bearer ".concat(token);
                    }
                    for (name_1 in headers) {
                        if ({}.hasOwnProperty.call(headers, name_1)) {
                            req.set(name_1, headers[name_1]);
                        }
                    }
                    if (payload && !req.get("content-type")) {
                        req.set("Content-Type", "application/json");
                    }
                    if (!req.get("accept")) {
                        req.set("Accept", "application/json");
                    }
                    req.set("Host", "localhost");
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, req.send(JSON.stringify(payload))];
                case 3:
                    res = _e.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _e.sent();
                    if (e_1.response) {
                        res = e_1.response;
                    }
                    else {
                        throw e_1;
                    }
                    return [3 /*break*/, 5];
                case 5: 
                // let c =
                //  res.headers["set-cookie"] && cookie.parse(res.headers["set-cookie"][0])
                // res.adminSession =
                //  c &&
                //  c[adminSessionOpts.cookieName] &&
                //  sessions.util.decode(adminSessionOpts, c[adminSessionOpts.cookieName])
                //    .content
                // res.clientSession =
                //  c &&
                //  c[clientSessionOpts.cookieName] &&
                //  sessions.util.decode(clientSessionOpts, c[clientSessionOpts.cookieName])
                //    .content
                return [2 /*return*/, res];
            }
        });
    });
}
exports.request = request;
//# sourceMappingURL=test-request.js.map