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
var connect_redis_1 = __importDefault(require("connect-redis"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var morgan_1 = __importDefault(require("morgan"));
var ioredis_1 = __importDefault(require("ioredis"));
exports.default = (function (_a) {
    var app = _a.app, configModule = _a.configModule;
    return __awaiter(void 0, void 0, void 0, function () {
        var sameSite, secure, _b, cookie_secret, session_options, sessionOpts, redisClient, RedisStore, shutdown;
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            sameSite = false;
            secure = false;
            if (process.env.NODE_ENV === "production" ||
                process.env.NODE_ENV === "staging") {
                secure = true;
                sameSite = "none";
            }
            _b = configModule.projectConfig, cookie_secret = _b.cookie_secret, session_options = _b.session_options;
            sessionOpts = {
                name: (_c = session_options === null || session_options === void 0 ? void 0 : session_options.name) !== null && _c !== void 0 ? _c : "connect.sid",
                resave: (_d = session_options === null || session_options === void 0 ? void 0 : session_options.resave) !== null && _d !== void 0 ? _d : true,
                rolling: (_e = session_options === null || session_options === void 0 ? void 0 : session_options.rolling) !== null && _e !== void 0 ? _e : false,
                saveUninitialized: (_f = session_options === null || session_options === void 0 ? void 0 : session_options.saveUninitialized) !== null && _f !== void 0 ? _f : true,
                proxy: true,
                secret: (_g = session_options === null || session_options === void 0 ? void 0 : session_options.secret) !== null && _g !== void 0 ? _g : cookie_secret,
                cookie: {
                    sameSite: sameSite,
                    secure: secure,
                    maxAge: (_h = session_options === null || session_options === void 0 ? void 0 : session_options.ttl) !== null && _h !== void 0 ? _h : 10 * 60 * 60 * 1000,
                },
                store: null,
            };
            if ((_j = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _j === void 0 ? void 0 : _j.redis_url) {
                RedisStore = (0, connect_redis_1.default)(express_session_1.default);
                redisClient = new ioredis_1.default(configModule.projectConfig.redis_url, (_k = configModule.projectConfig.redis_options) !== null && _k !== void 0 ? _k : {});
                sessionOpts.store = new RedisStore({
                    client: redisClient,
                    prefix: "".concat((_m = (_l = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _l === void 0 ? void 0 : _l.redis_prefix) !== null && _m !== void 0 ? _m : "", "sess:"),
                });
            }
            app.set("trust proxy", 1);
            app.use((0, morgan_1.default)("combined", {
                skip: function () { return process.env.NODE_ENV === "test"; },
            }));
            app.use((0, cookie_parser_1.default)());
            app.use((0, express_session_1.default)(sessionOpts));
            app.get("/health", function (req, res) {
                res.status(200).send("OK");
            });
            shutdown = function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    redisClient === null || redisClient === void 0 ? void 0 : redisClient.disconnect();
                    return [2 /*return*/];
                });
            }); };
            return [2 /*return*/, { app: app, shutdown: shutdown }];
        });
    });
});
//# sourceMappingURL=express.js.map