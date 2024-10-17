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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndTransformQuery = void 0;
var lodash_1 = require("lodash");
var utils_1 = require("../../utils");
var get_query_config_1 = require("../../utils/get-query-config");
var validate_body_1 = require("./validate-body");
/**
 * Normalize an input query, especially from array like query params to an array type
 * e.g: /admin/orders/?fields[]=id,status,cart_id becomes { fields: ["id", "status", "cart_id"] }
 */
var normalizeQuery = function (req) {
    return Object.entries(req.query).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        if (Array.isArray(val) && val.length === 1) {
            acc[key] = val[0].split(",");
        }
        else {
            acc[key] = val;
        }
        return acc;
    }, {});
};
/**
 * Omit the non filterable config from the validated object
 * @param obj
 */
var getFilterableFields = function (obj) {
    var result = (0, lodash_1.omit)(obj, ["limit", "offset", "fields", "order"]);
    return (0, utils_1.removeUndefinedProperties)(result);
};
function validateAndTransformQuery(zodSchema, queryConfig) {
    var _this = this;
    return function (req, _, next) { return __awaiter(_this, void 0, void 0, function () {
        var query, validated, cnf, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    query = normalizeQuery(req);
                    return [4 /*yield*/, (0, validate_body_1.zodValidator)(zodSchema, query)];
                case 1:
                    validated = _a.sent();
                    cnf = queryConfig.isList
                        ? (0, get_query_config_1.prepareListQuery)(validated, queryConfig)
                        : (0, get_query_config_1.prepareRetrieveQuery)(validated, queryConfig);
                    req.validatedQuery = validated;
                    req.filterableFields = getFilterableFields(req.validatedQuery);
                    req.remoteQueryConfig = cnf.remoteQueryConfig;
                    req.listConfig = cnf.listConfig;
                    req.retrieveConfig = cnf.retrieveConfig;
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    next(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports.validateAndTransformQuery = validateAndTransformQuery;
//# sourceMappingURL=validate-query.js.map