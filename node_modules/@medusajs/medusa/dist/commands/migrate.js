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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var get_migrations_1 = __importStar(require("./utils/get-migrations"));
var utils_1 = require("@medusajs/utils");
var config_1 = __importDefault(require("../loaders/config"));
var database_1 = __importDefault(require("../loaders/database"));
var feature_flags_1 = __importDefault(require("../loaders/feature-flags"));
var logger_1 = __importDefault(require("../loaders/logger"));
var medusa_app_1 = require("../loaders/medusa-app");
var pg_connection_1 = __importDefault(require("../loaders/pg-connection"));
var getDataSource = function (directory) { return __awaiter(void 0, void 0, void 0, function () {
    var configModule, featureFlagRouter, coreMigrations, moduleMigrations, container;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                configModule = (0, config_1.default)(directory);
                featureFlagRouter = (0, feature_flags_1.default)(configModule);
                coreMigrations = (0, get_migrations_1.default)(directory, featureFlagRouter).coreMigrations;
                moduleMigrations = (0, get_migrations_1.getModuleSharedResources)(configModule, featureFlagRouter).migrations;
                container = (0, awilix_1.createContainer)();
                container.register("db_entities", (0, awilix_1.asValue)([]));
                return [4 /*yield*/, (0, database_1.default)({
                        container: container,
                        configModule: configModule,
                        customOptions: {
                            migrations: coreMigrations.concat(moduleMigrations),
                            logging: "all",
                        },
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var runLinkMigrations = function (directory) { return __awaiter(void 0, void 0, void 0, function () {
    var configModule, container, featureFlagRouter, runMigrations, options;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                configModule = (0, config_1.default)(directory);
                container = (0, utils_1.createMedusaContainer)();
                featureFlagRouter = (0, feature_flags_1.default)(configModule);
                container.register((_a = {
                        featureFlagRouter: (0, awilix_1.asValue)(featureFlagRouter)
                    },
                    _a[utils_1.ContainerRegistrationKeys.LOGGER] = (0, awilix_1.asValue)(logger_1.default),
                    _a));
                return [4 /*yield*/, (0, pg_connection_1.default)({ configModule: configModule, container: container })];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, medusa_app_1.loadMedusaApp)({ configModule: configModule, container: container }, { registerInContainer: false })];
            case 2:
                runMigrations = (_b.sent()).runMigrations;
                options = {
                    database: {
                        clientUrl: configModule.projectConfig.database_url,
                    },
                };
                return [4 /*yield*/, runMigrations(options)];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var main = function (_a) {
    var directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var args, configModule, featureFlagRouter, container, pgConnection, dataSource, dataSource, dataSource, unapplied;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    args = process.argv;
                    args.shift();
                    args.shift();
                    args.shift();
                    configModule = (0, config_1.default)(directory);
                    featureFlagRouter = (0, feature_flags_1.default)(configModule);
                    if (!(args[0] === "run")) return [3 /*break*/, 10];
                    if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 3];
                    container = (0, utils_1.createMedusaContainer)();
                    return [4 /*yield*/, (0, pg_connection_1.default)({ configModule: configModule, container: container })];
                case 1:
                    pgConnection = _c.sent();
                    container.register((_b = {},
                        _b[utils_1.ContainerRegistrationKeys.CONFIG_MODULE] = (0, awilix_1.asValue)(configModule),
                        _b[utils_1.ContainerRegistrationKeys.LOGGER] = (0, awilix_1.asValue)(logger_1.default),
                        _b[utils_1.ContainerRegistrationKeys.PG_CONNECTION] = (0, awilix_1.asValue)(pgConnection),
                        _b.featureFlagRouter = (0, awilix_1.asValue)(featureFlagRouter),
                        _b));
                    return [4 /*yield*/, (0, medusa_app_1.migrateMedusaApp)({ configModule: configModule, container: container }, { registerInContainer: false })];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, getDataSource(directory)];
                case 4:
                    dataSource = _c.sent();
                    return [4 /*yield*/, dataSource.runMigrations()];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, dataSource.destroy()];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, (0, get_migrations_1.runIsolatedModulesMigration)(configModule)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, runLinkMigrations(directory)];
                case 8:
                    _c.sent();
                    _c.label = 9;
                case 9:
                    process.exit();
                    logger_1.default.info("Migrations completed.");
                    return [3 /*break*/, 19];
                case 10:
                    if (!(args[0] === "revert")) return [3 /*break*/, 15];
                    return [4 /*yield*/, getDataSource(directory)];
                case 11:
                    dataSource = _c.sent();
                    return [4 /*yield*/, dataSource.undoLastMigration({ transaction: "all" })];
                case 12:
                    _c.sent();
                    return [4 /*yield*/, dataSource.destroy()];
                case 13:
                    _c.sent();
                    return [4 /*yield*/, (0, get_migrations_1.revertIsolatedModulesMigration)(configModule)];
                case 14:
                    _c.sent();
                    logger_1.default.info("Migrations reverted.");
                    return [3 /*break*/, 19];
                case 15:
                    if (!(args[0] === "show")) return [3 /*break*/, 19];
                    return [4 /*yield*/, getDataSource(directory)];
                case 16:
                    dataSource = _c.sent();
                    return [4 /*yield*/, dataSource.showMigrations()];
                case 17:
                    unapplied = _c.sent();
                    logger_1.default.info(unapplied);
                    return [4 /*yield*/, dataSource.destroy()];
                case 18:
                    _c.sent();
                    process.exit(unapplied ? 1 : 0);
                    _c.label = 19;
                case 19: return [2 /*return*/];
            }
        });
    });
};
exports.default = main;
//# sourceMappingURL=migrate.js.map