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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRelationsExtended = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/store", route);
    route.get("/", middlewares_1.default.wrap(require("./get-store").default));
    route.get("/payment-providers", middlewares_1.default.wrap(require("./list-payment-providers").default));
    route.get("/tax-providers", middlewares_1.default.wrap(require("./list-tax-providers").default));
    route.post("/", middlewares_1.default.wrap(require("./update-store").default));
    route.post("/currencies/:currency_code", middlewares_1.default.wrap(require("./add-currency").default));
    route.delete("/currencies/:currency_code", middlewares_1.default.wrap(require("./remove-currency").default));
    return app;
});
exports.defaultRelationsExtended = ["currencies", "default_currency"];
__exportStar(require("./update-store"), exports);
//# sourceMappingURL=index.js.map