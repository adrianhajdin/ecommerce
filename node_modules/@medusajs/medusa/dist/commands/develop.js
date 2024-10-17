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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boxen_1 = __importDefault(require("boxen"));
var child_process_1 = require("child_process");
var chokidar_1 = __importDefault(require("chokidar"));
var store_1 = __importDefault(require("medusa-telemetry/dist/store"));
var os_1 = require("os");
var path_1 = __importDefault(require("path"));
var logger_1 = __importDefault(require("../loaders/logger"));
var resolve_admin_cli_1 = require("./utils/resolve-admin-cli");
var defaultConfig = {
    padding: 5,
    borderColor: "blue",
    borderStyle: "double",
};
function default_1(_a) {
    var port = _a.port, directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var args, argv, COMMAND_INITIATED_BY, cliPath, child, adminCLI, adminChild_1;
        return __generator(this, function (_b) {
            args = process.argv;
            argv = process.argv.indexOf("--") !== -1
                ? process.argv.slice(process.argv.indexOf("--") + 1)
                : [];
            args.shift();
            args.shift();
            args.shift();
            process.on("SIGINT", function () {
                var _a;
                var configStore = new store_1.default();
                var hasPrompted = (_a = configStore.getConfig("star.prompted")) !== null && _a !== void 0 ? _a : false;
                if (!hasPrompted) {
                    var defaultMessage = "\u2728 Thanks for using Medusa. \u2728".concat(os_1.EOL).concat(os_1.EOL) +
                        "If you liked it, please consider starring us on GitHub".concat(os_1.EOL) +
                        "https://medusajs.com/star".concat(os_1.EOL) +
                        "".concat(os_1.EOL) +
                        "Note: you will not see this message again.";
                    console.log();
                    console.log((0, boxen_1.default)(defaultMessage, defaultConfig));
                    configStore.setConfig("star.prompted", true);
                }
                process.exit(0);
            });
            (0, child_process_1.execSync)("npx --no-install babel src -d dist --ignore \"src/admin/**\"", {
                cwd: directory,
                stdio: ["ignore", process.stdout, process.stderr],
            });
            COMMAND_INITIATED_BY = {
                COMMAND_INITIATED_BY: "develop",
            };
            cliPath = path_1.default.resolve(require.resolve("@medusajs/medusa"), "../", "bin", "medusa.js");
            child = (0, child_process_1.fork)(cliPath, __spreadArray(["start"], __read(args), false), {
                execArgv: argv,
                cwd: directory,
                env: __assign(__assign({}, process.env), COMMAND_INITIATED_BY),
            });
            child.on("error", function (err) {
                console.log("Error ", err);
                process.exit(1);
            });
            adminCLI = (0, resolve_admin_cli_1.resolveAdminCLI)();
            if (adminCLI) {
                adminChild_1 = (0, child_process_1.fork)(adminCLI, ["develop"], {
                    cwd: directory,
                    env: process.env,
                    stdio: ["pipe", process.stdout, process.stderr, "ipc"],
                });
                adminChild_1.on("error", function (err) {
                    console.log("Error ", err);
                    adminChild_1.kill("SIGINT"); // Only kill admin in case of error
                });
            }
            chokidar_1.default
                .watch("".concat(directory, "/src"), {
                ignored: "".concat(directory, "/src/admin"),
            })
                .on("change", function (file) {
                var f = file.split("src")[1];
                logger_1.default.info("".concat(f, " changed: restarting..."));
                if (process.platform === "win32") {
                    (0, child_process_1.execSync)("taskkill /PID ".concat(child.pid, " /F /T"));
                }
                child.kill("SIGINT");
                (0, child_process_1.execSync)("npx --no-install babel src -d dist --extensions \".ts,.js\" --ignore \"src/admin/**\"", {
                    cwd: directory,
                    stdio: ["pipe", process.stdout, process.stderr],
                });
                logger_1.default.info("Rebuilt");
                child = (0, child_process_1.fork)(cliPath, __spreadArray(["start"], __read(args), false), {
                    cwd: directory,
                    env: __assign(__assign({}, process.env), COMMAND_INITIATED_BY),
                    stdio: ["pipe", process.stdout, process.stderr, "ipc"],
                });
                child.on("error", function (err) {
                    console.log("Error ", err);
                    process.exit(1);
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=develop.js.map