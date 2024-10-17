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
var utils_1 = require("@medusajs/utils");
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var qs_1 = __importDefault(require("qs"));
var api_1 = __importDefault(require("../api"));
var routing_1 = require("./helpers/routing");
exports.default = (function (_a) {
    var app = _a.app, container = _a.container, configModule = _a.configModule, featureFlagRouter = _a.featureFlagRouter;
    return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // This is a workaround for the issue described here: https://github.com/expressjs/express/issues/3454
                    // We parse the url and get the qs to be parsed and override the query prop from the request
                    app.use(function (req, res, next) {
                        var parsedUrl = req.url.split("?");
                        parsedUrl.shift();
                        var queryParamsStr = parsedUrl.join("?");
                        if (queryParamsStr) {
                            req.query = qs_1.default.parse(queryParamsStr, { arrayLimit: Infinity });
                        }
                        next();
                    });
                    if (!(featureFlagRouter === null || featureFlagRouter === void 0 ? void 0 : featureFlagRouter.isFeatureEnabled(utils_1.FeatureFlagUtils.MedusaV2Flag.key))) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    /**
                     * Register the Medusa CORE API routes using the file based routing.
                     */
                    return [4 /*yield*/, new routing_1.RoutesLoader({
                            app: app,
                            rootDir: path_1.default.join(__dirname, "../api-v2"),
                            configModule: configModule,
                        }).load()];
                case 2:
                    /**
                     * Register the Medusa CORE API routes using the file based routing.
                     */
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    throw Error("An error occurred while registering Medusa Core API Routes. See error in logs for more details.");
                case 4: return [3 /*break*/, 6];
                case 5:
                    app.use(body_parser_1.default.json());
                    app.use("/", (0, api_1.default)(container, configModule.projectConfig));
                    _b.label = 6;
                case 6: return [2 /*return*/, app];
            }
        });
    });
});
//# sourceMappingURL=api.js.map