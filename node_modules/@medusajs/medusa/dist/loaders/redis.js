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
var awilix_1 = require("awilix");
var ioredis_1 = __importDefault(require("ioredis"));
var ioredis_mock_1 = __importDefault(require("ioredis-mock"));
var os_1 = require("os");
// TODO: Will be removed when the strict dependency on Redis in the core is removed
function redisLoader(_a) {
    var _b;
    var container = _a.container, configModule = _a.configModule, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var client, err_1;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!configModule.projectConfig.redis_url) return [3 /*break*/, 5];
                    client = new ioredis_1.default(configModule.projectConfig.redis_url, __assign({ 
                        // Lazy connect to properly handle connection errors
                        lazyConnect: true }, ((_b = configModule.projectConfig.redis_options) !== null && _b !== void 0 ? _b : {})));
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.connect()];
                case 2:
                    _c.sent();
                    logger === null || logger === void 0 ? void 0 : logger.info("Connection to Redis established");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _c.sent();
                    logger === null || logger === void 0 ? void 0 : logger.error("An error occurred while connecting to Redis:".concat(os_1.EOL, " ").concat(err_1));
                    return [3 /*break*/, 4];
                case 4:
                    container.register({
                        redisClient: (0, awilix_1.asValue)(client),
                    });
                    return [3 /*break*/, 6];
                case 5:
                    if (process.env.NODE_ENV === "production") {
                        logger.warn("No Redis url was provided - using Medusa in production without a proper Redis instance is not recommended");
                    }
                    logger.info("Using fake Redis");
                    // Economical way of dealing with redis clients
                    client = new ioredis_mock_1.default();
                    container.register({
                        redisClient: (0, awilix_1.asValue)(client),
                    });
                    _c.label = 6;
                case 6: return [2 /*return*/, {
                        shutdown: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                client.disconnect();
                                return [2 /*return*/];
                            });
                        }); },
                    }];
            }
        });
    });
}
exports.default = redisLoader;
//# sourceMappingURL=redis.js.map