"use strict";
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
var promises_1 = require("fs/promises");
var path_1 = require("path");
var logger_1 = __importDefault(require("../../logger"));
var ScheduledJobsLoader = /** @class */ (function () {
    function ScheduledJobsLoader(rootDir, container, options) {
        if (options === void 0) { options = {}; }
        this.excludes = [
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ];
        this.jobDescriptors_ = new Map();
        this.rootDir_ = rootDir;
        this.pluginOptions_ = options;
        this.container_ = container;
    }
    ScheduledJobsLoader.prototype.validateJob = function (job, path) {
        var handler = job.default;
        if (!handler || typeof handler !== "function") {
            logger_1.default.warn("The job in ".concat(path, " is not a function."));
            return false;
        }
        var config = job.config;
        if (!config) {
            logger_1.default.warn("The job in ".concat(path, " is missing a config."));
            return false;
        }
        if (!config.schedule) {
            logger_1.default.warn("The job in ".concat(path, " is missing a schedule."));
            return false;
        }
        if (!config.name) {
            logger_1.default.warn("The job in ".concat(path, " is missing a name."));
            return false;
        }
        if (config.data && typeof config.data !== "object") {
            logger_1.default.warn("The job data in ".concat(path, " is not an object."));
            return false;
        }
        return true;
    };
    ScheduledJobsLoader.prototype.createDescriptor = function (absolutePath, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                var _b;
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (_b = absolutePath, Promise.resolve().then(function () { return __importStar(require(_b)); })).then(function (module_) {
                            var isValid = _this.validateJob(module_, absolutePath);
                            if (!isValid) {
                                return;
                            }
                            _this.jobDescriptors_.set(absolutePath, {
                                config: module_.config,
                                handler: module_.default,
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ScheduledJobsLoader.prototype.createMap = function (dirPath) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, (0, promises_1.readdir)(dirPath, { withFileTypes: true }).then(function (entries) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, entries
                                            .filter(function (entry) {
                                            if (_this.excludes.length &&
                                                _this.excludes.some(function (exclude) { return exclude.test(entry.name); })) {
                                                return false;
                                            }
                                            return true;
                                        })
                                            .map(function (entry) { return __awaiter(_this, void 0, void 0, function () {
                                            var fullPath;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        fullPath = (0, path_1.join)(dirPath, entry.name);
                                                        if (entry.isDirectory()) {
                                                            return [2 /*return*/, this.createMap(fullPath)];
                                                        }
                                                        return [4 /*yield*/, this.createDescriptor(fullPath, entry.name)];
                                                    case 1: return [2 /*return*/, _a.sent()];
                                                }
                                            });
                                        }); })];
                                });
                            }); })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScheduledJobsLoader.prototype.createScheduledJobs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobs, jobSchedulerService, _loop_1, jobs_1, jobs_1_1, job, e_1_1;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        jobs = Array.from(this.jobDescriptors_.values());
                        if (!jobs.length) {
                            return [2 /*return*/];
                        }
                        jobSchedulerService = this.container_.resolve("jobSchedulerService");
                        _loop_1 = function (job) {
                            var _c, name_1, data_1, schedule, handler, err_1;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        _d.trys.push([0, 2, , 3]);
                                        _c = job.config, name_1 = _c.name, data_1 = _c.data, schedule = _c.schedule;
                                        handler = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, job.handler({
                                                            container: this.container_,
                                                            data: data_1,
                                                            pluginOptions: this.pluginOptions_,
                                                        })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        return [4 /*yield*/, jobSchedulerService.create(name_1, data_1, schedule, handler, {
                                                keepExisting: false, // For now, we do not support changing this flag
                                            })];
                                    case 1:
                                        _d.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_1 = _d.sent();
                                        logger_1.default.error("An error occurred while registering job ".concat(job.config.name), err_1);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        jobs_1 = __values(jobs), jobs_1_1 = jobs_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!jobs_1_1.done) return [3 /*break*/, 5];
                        job = jobs_1_1.value;
                        return [5 /*yield**/, _loop_1(job)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        jobs_1_1 = jobs_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (jobs_1_1 && !jobs_1_1.done && (_a = jobs_1.return)) _a.call(jobs_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ScheduledJobsLoader.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasJobsDir, _err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasJobsDir = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, promises_1.readdir)(this.rootDir_)];
                    case 2:
                        _a.sent();
                        hasJobsDir = true;
                        return [3 /*break*/, 4];
                    case 3:
                        _err_1 = _a.sent();
                        hasJobsDir = false;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!hasJobsDir) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.createMap(this.rootDir_)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.createScheduledJobs()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ScheduledJobsLoader;
}());
exports.default = ScheduledJobsLoader;
//# sourceMappingURL=index.js.map