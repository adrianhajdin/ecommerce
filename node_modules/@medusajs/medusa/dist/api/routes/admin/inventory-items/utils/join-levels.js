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
exports.joinLevels = exports.getLevelsByInventoryItemId = exports.buildLevelsByInventoryItemId = void 0;
var utils_1 = require("@medusajs/utils");
var buildLevelsByInventoryItemId = function (inventoryLevels, locationIds) {
    var filteredLevels = inventoryLevels.filter(function (level) {
        return !locationIds.length || locationIds.includes(level.location_id);
    });
    return filteredLevels.reduce(function (acc, level) {
        var _a;
        acc[level.inventory_item_id] = (_a = acc[level.inventory_item_id]) !== null && _a !== void 0 ? _a : [];
        acc[level.inventory_item_id].push(level);
        return acc;
    }, {});
};
exports.buildLevelsByInventoryItemId = buildLevelsByInventoryItemId;
var getLevelsByInventoryItemId = function (items, locationIds, inventoryService) { return __awaiter(void 0, void 0, void 0, function () {
    var selector, _a, levels, levelsWithAvailability;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                selector = {
                    inventory_item_id: items.map(function (inventoryItem) { return inventoryItem.id; }),
                };
                if (locationIds.length) {
                    selector.location_id = locationIds;
                }
                return [4 /*yield*/, inventoryService.listInventoryLevels(selector, {})];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 1]), levels = _a[0];
                return [4 /*yield*/, (0, utils_1.promiseAll)(levels.map(function (level) { return __awaiter(void 0, void 0, void 0, function () {
                        var availability;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, inventoryService.retrieveAvailableQuantity(level.inventory_item_id, [level.location_id])];
                                case 1:
                                    availability = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, level), { available_quantity: availability })];
                            }
                        });
                    }); }))];
            case 2:
                levelsWithAvailability = _b.sent();
                return [2 /*return*/, (0, exports.buildLevelsByInventoryItemId)(levelsWithAvailability, locationIds)];
        }
    });
}); };
exports.getLevelsByInventoryItemId = getLevelsByInventoryItemId;
var joinLevels = function (inventoryItems, locationIds, inventoryService) { return __awaiter(void 0, void 0, void 0, function () {
    var levelsByItemId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getLevelsByInventoryItemId)(inventoryItems, locationIds, inventoryService)];
            case 1:
                levelsByItemId = _a.sent();
                return [2 /*return*/, inventoryItems.map(function (inventoryItem) {
                        var _a;
                        var levels = (_a = levelsByItemId[inventoryItem.id]) !== null && _a !== void 0 ? _a : [];
                        var itemAvailability = levels.reduce(function (acc, curr) {
                            return {
                                reserved_quantity: acc.reserved_quantity + curr.reserved_quantity,
                                stocked_quantity: acc.stocked_quantity + curr.stocked_quantity,
                            };
                        }, { reserved_quantity: 0, stocked_quantity: 0 });
                        return __assign(__assign(__assign({}, inventoryItem), itemAvailability), { location_levels: levels });
                    })];
        }
    });
}); };
exports.joinLevels = joinLevels;
//# sourceMappingURL=join-levels.js.map