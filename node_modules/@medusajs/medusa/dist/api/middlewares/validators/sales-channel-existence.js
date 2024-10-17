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
exports.validateSalesChannelsExist = void 0;
function validateSalesChannelsExist(getSalesChannels) {
    var _this = this;
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var salesChannels, salesChannelService, salesChannelIds, _a, existingChannels, nonExistingSalesChannels;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    salesChannels = getSalesChannels(req);
                    if (!(salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.length)) {
                        return [2 /*return*/, next()];
                    }
                    salesChannelService = req.scope.resolve("salesChannelService");
                    salesChannelIds = salesChannels.map(function (salesChannel) { return salesChannel.id; });
                    return [4 /*yield*/, salesChannelService.listAndCount({
                            id: salesChannelIds,
                        })];
                case 1:
                    _a = __read.apply(void 0, [_c.sent(), 1]), existingChannels = _a[0];
                    nonExistingSalesChannels = salesChannelIds.filter(function (scId) { return existingChannels.findIndex(function (sc) { return sc.id === scId; }) === -1; });
                    if (nonExistingSalesChannels.length) {
                        req.errors = (_b = req.errors) !== null && _b !== void 0 ? _b : [];
                        req.errors.push("Sales Channels ".concat(nonExistingSalesChannels.join(", "), " do not exist"));
                    }
                    return [2 /*return*/, next()];
            }
        });
    }); };
}
exports.validateSalesChannelsExist = validateSalesChannelsExist;
//# sourceMappingURL=sales-channel-existence.js.map