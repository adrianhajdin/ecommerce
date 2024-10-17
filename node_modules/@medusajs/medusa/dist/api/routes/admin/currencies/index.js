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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var middlewares_1 = __importStar(require("../../../middlewares"));
var feature_flag_enabled_1 = require("../../../middlewares/feature-flag-enabled");
var list_currencies_1 = require("./list-currencies");
var update_currency_1 = require("./update-currency");
exports.default = (function (app) {
    var route = (0, express_1.Router)();
    app.use("/currencies", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_currencies_1.AdminGetCurrenciesParams, {
        isList: true,
    }), middlewares_1.default.wrap(require("./list-currencies").default));
    route.post("/:code", (0, middlewares_1.transformBody)(update_currency_1.AdminPostCurrenciesCurrencyReq), (0, feature_flag_enabled_1.isFeatureFlagEnabled)(tax_inclusive_pricing_1.default.key), middlewares_1.default.wrap(require("./update-currency").default));
    return app;
});
__exportStar(require("./list-currencies"), exports);
__exportStar(require("./update-currency"), exports);
//# sourceMappingURL=index.js.map