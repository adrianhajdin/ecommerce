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
exports.defaultReturnCancelFields = exports.defaultReturnCancelRelations = exports.defaultRelationsList = exports.defaultRelations = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var orders_1 = require("../../../../types/orders");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/returns", route);
    /**
     * List returns
     */
    route.get("/", middlewares_1.default.wrap(require("./list-returns").default));
    route.post("/:id/receive", middlewares_1.default.wrap(require("./receive-return").default));
    route.post("/:id/cancel", middlewares_1.default.wrap(require("./cancel-return").default));
    return app;
});
exports.defaultRelations = ["swap"];
exports.defaultRelationsList = ["swap", "order"];
exports.defaultReturnCancelRelations = __spreadArray([], __read(orders_1.defaultAdminOrdersRelations), false);
exports.defaultReturnCancelFields = __spreadArray([], __read(orders_1.defaultAdminOrdersFields), false);
__exportStar(require("./list-returns"), exports);
__exportStar(require("./receive-return"), exports);
//# sourceMappingURL=index.js.map