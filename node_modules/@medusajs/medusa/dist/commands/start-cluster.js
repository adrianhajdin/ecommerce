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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/stable");
require("regenerator-runtime/runtime");
var cluster_1 = __importDefault(require("cluster"));
var express_1 = __importDefault(require("express"));
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var node_schedule_1 = require("node-schedule");
var os_1 = __importDefault(require("os"));
var loaders_1 = __importDefault(require("../loaders"));
var logger_1 = __importDefault(require("../loaders/logger"));
var EVERY_SIXTH_HOUR = "0 */6 * * *";
var CRON_SCHEDULE = EVERY_SIXTH_HOUR;
var isShuttingDown = false;
function default_1(_a) {
    var port = _a.port, cpus = _a.cpus, directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var killMainProccess_1, numCPUs, index, worker, gracefulShutDown, start_1;
        var _this = this;
        return __generator(this, function (_b) {
            if (cluster_1.default.isPrimary) {
                killMainProccess_1 = function () { return process.exit(0); };
                cpus !== null && cpus !== void 0 ? cpus : (cpus = os_1.default.cpus().length);
                numCPUs = Math.min(os_1.default.cpus().length, cpus);
                for (index = 0; index < numCPUs; index++) {
                    worker = cluster_1.default.fork();
                    worker.send({ index: index });
                }
                cluster_1.default.on("exit", function (worker) {
                    if (!isShuttingDown) {
                        cluster_1.default.fork();
                    }
                    else if (Object.keys(cluster_1.default.workers).length === 0) {
                        setTimeout(killMainProccess_1, 100);
                    }
                });
                gracefulShutDown = function () {
                    var e_1, _a;
                    isShuttingDown = true;
                    try {
                        for (var _b = __values(Object.keys(cluster_1.default.workers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            cluster_1.default.workers[id].kill("SIGTERM");
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                (0, node_schedule_1.scheduleJob)(CRON_SCHEDULE, function () {
                    (0, medusa_telemetry_1.track)("PING");
                });
                process.on("SIGTERM", gracefulShutDown);
                process.on("SIGINT", gracefulShutDown);
            }
            else {
                start_1 = function () { return __awaiter(_this, void 0, void 0, function () {
                    var app, _a, dbConnection, shutdown, prepareShutdown, serverActivity, server, gracefulShutDown;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                (0, medusa_telemetry_1.track)("CLI_START");
                                app = (0, express_1.default)();
                                return [4 /*yield*/, (0, loaders_1.default)({
                                        directory: directory,
                                        expressApp: app,
                                    })];
                            case 1:
                                _a = _b.sent(), dbConnection = _a.dbConnection, shutdown = _a.shutdown, prepareShutdown = _a.prepareShutdown;
                                serverActivity = logger_1.default.activity("Creating server");
                                server = medusa_core_utils_1.GracefulShutdownServer.create(app.listen(port, function (err) {
                                    if (err) {
                                        return;
                                    }
                                    logger_1.default.success(serverActivity, "Server is ready on port: ".concat(port));
                                    (0, medusa_telemetry_1.track)("CLI_START_COMPLETED");
                                }));
                                gracefulShutDown = function () {
                                    server
                                        .shutdown()
                                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, prepareShutdown()];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); })
                                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, shutdown()];
                                                case 1:
                                                    _a.sent();
                                                    process.exit(0);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })
                                        .catch(function (e) {
                                        process.exit(1);
                                    });
                                };
                                process.on("SIGTERM", gracefulShutDown);
                                process.on("SIGINT", gracefulShutDown);
                                return [2 /*return*/, { dbConnection: dbConnection, server: server }];
                        }
                    });
                }); };
                process.on("message", function (msg) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (msg.index > 0) {
                                    process.env.PLUGIN_ADMIN_UI_SKIP_CACHE = true;
                                }
                                return [4 /*yield*/, start_1()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            return [2 /*return*/];
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=start-cluster.js.map