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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPriceListResponse = void 0;
var utils_1 = require("@medusajs/utils");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
__exportStar(require("./get-price-list"), exports);
__exportStar(require("./list-price-lists"), exports);
__exportStar(require("./list-prices"), exports);
function buildPriceListResponse(priceLists, apiFields) {
    var e_1, _a;
    try {
        for (var priceLists_1 = __values(priceLists), priceLists_1_1 = priceLists_1.next(); !priceLists_1_1.done; priceLists_1_1 = priceLists_1.next()) {
            var priceList = priceLists_1_1.value;
            priceList.rules = (0, utils_1.buildPriceListRules)(priceList.price_list_rules);
            priceList.prices = (0, utils_1.buildPriceSetPricesForCore)(priceList.prices);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (priceLists_1_1 && !priceLists_1_1.done && (_a = priceLists_1.return)) _a.call(priceLists_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return priceLists.map(function (priceList) { return (0, clean_response_data_1.cleanResponseData)(priceList, apiFields); });
}
exports.buildPriceListResponse = buildPriceListResponse;
//# sourceMappingURL=index.js.map