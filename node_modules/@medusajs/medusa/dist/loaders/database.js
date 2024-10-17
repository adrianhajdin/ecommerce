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
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var utils_1 = require("@medusajs/utils");
var typeorm_1 = require("typeorm");
require("../utils/naming-strategy");
// TODO: With the latest version of typeorm, the datasource is expected to be
// available globally. During the integration test, the medusa
// files are imported from @medusajs/medusa, therefore, the repositories are
// evaluated at the same time, unfortunately, the integration tests have their
// own way to load and at the moment, the datasource does not exists. This is
// why we are mocking them here
if (process.env.NODE_ENV === "test") {
    exports.dataSource = {
        getRepository: function (target) { return new typeorm_1.Repository(target, {}); },
        getTreeRepository: function (target) { return new typeorm_1.TreeRepository(target, {}); },
    };
}
exports.default = (function (_a) {
    var container = _a.container, configModule = _a.configModule, customOptions = _a.customOptions;
    return __awaiter(void 0, void 0, void 0, function () {
        var entities, connectionString, database, extra, schema;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    entities = container.resolve("db_entities");
                    connectionString = configModule.projectConfig.database_url;
                    database = configModule.projectConfig.database_database;
                    extra = configModule.projectConfig.database_extra || {};
                    schema = configModule.projectConfig.database_schema || "public";
                    exports.dataSource = new typeorm_1.DataSource({
                        type: "postgres",
                        url: connectionString,
                        database: database,
                        extra: extra,
                        schema: schema,
                        entities: entities,
                        migrations: customOptions === null || customOptions === void 0 ? void 0 : customOptions.migrations,
                        logging: (_b = customOptions === null || customOptions === void 0 ? void 0 : customOptions.logging) !== null && _b !== void 0 ? _b : (configModule.projectConfig.database_logging || false),
                    });
                    return [4 /*yield*/, exports.dataSource.initialize().catch(utils_1.handlePostgresDatabaseError)
                        // If migrations are not included in the config, we assume you are attempting to start the server
                        // Therefore, throw if the database is not migrated
                    ];
                case 1:
                    _d.sent();
                    if (!!((_c = exports.dataSource.migrations) === null || _c === void 0 ? void 0 : _c.length)) return [3 /*break*/, 3];
                    return [4 /*yield*/, exports.dataSource
                            .query("select * from migrations")
                            .catch(utils_1.handlePostgresDatabaseError)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3: return [2 /*return*/, exports.dataSource];
            }
        });
    });
});
//# sourceMappingURL=database.js.map