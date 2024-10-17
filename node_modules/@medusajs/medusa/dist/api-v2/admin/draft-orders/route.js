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
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
var core_flows_1 = require("@medusajs/core-flows");
var utils_1 = require("@medusajs/utils");
var helpers_1 = require("./helpers");
var GET = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, queryObject, _a, draft_orders, metadata;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "order",
                    variables: __assign({ filters: __assign(__assign({}, req.filterableFields), { is_draft_order: true }) }, req.remoteQueryConfig.pagination),
                    fields: req.remoteQueryConfig.fields,
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 1:
                _a = _b.sent(), draft_orders = _a.rows, metadata = _a.metadata;
                res.json({
                    draft_orders: draft_orders,
                    count: metadata.count,
                    offset: metadata.skip,
                    limit: metadata.take,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.GET = GET;
var POST = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var input, workflowInput, remoteQuery, queryObject, _a, region, queryObject, _b, customer, _c, result, errors, draftOrder;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                input = req.validatedBody;
                workflowInput = __assign(__assign({}, input), { no_notification: !!input.no_notification_order, status: utils_1.OrderStatus.DRAFT, is_draft_order: true });
                remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                if (!!input.currency_code) return [3 /*break*/, 2];
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "region",
                    variables: {
                        filters: { id: input.region_id },
                    },
                    fields: ["currency_code"],
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 1:
                _a = __read.apply(void 0, [_d.sent(), 1]), region = _a[0];
                input.currency_code = region === null || region === void 0 ? void 0 : region.currency_code;
                _d.label = 2;
            case 2:
                if (!!input.email) return [3 /*break*/, 4];
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "customer",
                    variables: {
                        filters: { id: input.customer_id },
                    },
                    fields: ["email"],
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 3:
                _b = __read.apply(void 0, [_d.sent(), 1]), customer = _b[0];
                input.email = customer === null || customer === void 0 ? void 0 : customer.email;
                _d.label = 4;
            case 4: return [4 /*yield*/, (0, core_flows_1.createOrdersWorkflow)(req.scope).run({
                    input: workflowInput,
                    throwOnError: false,
                })];
            case 5:
                _c = _d.sent(), result = _c.result, errors = _c.errors;
                if (Array.isArray(errors) && errors[0]) {
                    throw errors[0].error;
                }
                return [4 /*yield*/, (0, helpers_1.refetchOrder)(result.id, req.scope, req.remoteQueryConfig.fields)];
            case 6:
                draftOrder = _d.sent();
                res.status(200).json({ draft_order: draftOrder });
                return [2 /*return*/];
        }
    });
}); };
exports.POST = POST;
//# sourceMappingURL=route.js.map