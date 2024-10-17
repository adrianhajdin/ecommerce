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
exports.transformStoreQuery = exports.transformQuery = void 0;
var lodash_1 = require("lodash");
var utils_1 = require("../../utils");
var get_query_config_1 = require("../../utils/get-query-config");
var validator_1 = require("../../utils/validator");
var normalized_query_1 = __importDefault(require("./normalized-query"));
/**
 * Middleware that transform the query input for the admin end points
 * @param plainToClass
 * @param queryConfig
 * @param config
 */
function transformQuery(plainToClass, queryConfig, config) {
    var _this = this;
    if (queryConfig === void 0) { queryConfig = {}; }
    if (config === void 0) { config = {}; }
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var validated, queryConfigRes, includesRelations, e_1;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __generator(this, function (_p) {
            switch (_p.label) {
                case 0:
                    _p.trys.push([0, 2, , 3]);
                    (0, normalized_query_1.default)()(req, res, function () { return void 0; });
                    return [4 /*yield*/, (0, validator_1.validator)(plainToClass, req.query, config)];
                case 1:
                    validated = _p.sent();
                    req.validatedQuery = validated;
                    req.filterableFields = getFilterableFields(validated);
                    attachListOrRetrieveConfig(req, __assign(__assign({}, queryConfig), { allowed: (_c = (_b = (_a = req.allowed) !== null && _a !== void 0 ? _a : queryConfig.allowed) !== null && _b !== void 0 ? _b : queryConfig.allowedFields) !== null && _c !== void 0 ? _c : [] }));
                    queryConfigRes = !queryConfig.isList
                        ? req.retrieveConfig
                        : req.listConfig;
                    includesRelations = Object.keys((_d = req.includes) !== null && _d !== void 0 ? _d : {});
                    req.allowedProperties = Array.from(new Set(__spreadArray(__spreadArray([], __read((req.validatedQuery.fields
                        ? (_e = queryConfigRes.select) !== null && _e !== void 0 ? _e : []
                        : (_k = (_j = (_h = (_g = (_f = req.allowed) !== null && _f !== void 0 ? _f : queryConfig.allowed) !== null && _g !== void 0 ? _g : queryConfig.allowedFields) !== null && _h !== void 0 ? _h : queryConfig.defaults) !== null && _j !== void 0 ? _j : queryConfig.defaultFields) !== null && _k !== void 0 ? _k : [])), false), __read((req.validatedQuery.expand || includesRelations.length
                        ? __spreadArray(__spreadArray([], __read((((_l = validated.expand) === null || _l === void 0 ? void 0 : _l.split(",")) || [])), false), __read(includesRelations), false) : (_o = (_m = queryConfig.allowedRelations) !== null && _m !== void 0 ? _m : queryConfigRes.relations) !== null && _o !== void 0 ? _o : [])), false).filter(Boolean)));
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _p.sent();
                    next(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports.transformQuery = transformQuery;
/**
 * Middleware that transform the query input for the store endpoints
 * @param plainToClass
 * @param queryConfig
 * @param config
 *
 * @deprecated use `transformQuery` instead
 */
function transformStoreQuery(plainToClass, queryConfig, config) {
    if (config === void 0) { config = {}; }
    return transformQuery(plainToClass, queryConfig, config);
}
exports.transformStoreQuery = transformStoreQuery;
/**
 * Omit the non filterable config from the validated object
 * @param obj
 */
function getFilterableFields(obj) {
    var result = (0, lodash_1.omit)(obj, [
        "limit",
        "offset",
        /**
         * @deprecated
         */
        "expand",
        "fields",
        "order",
    ]);
    return (0, utils_1.removeUndefinedProperties)(result);
}
/**
 * build and attach the `retrieveConfig` or `listConfig` and remoteQueryConfig to the request object
 * @param req
 * @param queryConfig
 */
function attachListOrRetrieveConfig(req, queryConfig) {
    if (queryConfig === void 0) { queryConfig = {}; }
    var validated = req.validatedQuery;
    var config = queryConfig.isList
        ? (0, get_query_config_1.prepareListQuery)(validated, queryConfig)
        : (0, get_query_config_1.prepareRetrieveQuery)(validated, queryConfig);
    req.listConfig = ("listConfig" in config &&
        config.listConfig);
    req.retrieveConfig = ("retrieveConfig" in config &&
        config.retrieveConfig);
    req.remoteQueryConfig = config.remoteQueryConfig;
}
//# sourceMappingURL=transform-query.js.map