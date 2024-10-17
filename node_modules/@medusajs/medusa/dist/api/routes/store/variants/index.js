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
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedStoreVariantRelations = exports.defaultStoreVariantRelations = void 0;
var middlewares_1 = __importStar(require("../../../middlewares"));
var express_1 = require("express");
var extend_request_params_1 = require("../../../middlewares/publishable-api-key/extend-request-params");
var validate_sales_channel_param_1 = require("../../../middlewares/publishable-api-key/validate-sales-channel-param");
var validate_variant_sales_channel_association_1 = require("../../../middlewares/publishable-api-key/validate-variant-sales-channel-association");
var with_default_sales_channel_1 = require("../../../middlewares/with-default-sales-channel");
var get_variant_1 = require("./get-variant");
var list_variants_1 = require("./list-variants");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/variants", extend_request_params_1.extendRequestParams, validate_sales_channel_param_1.validateSalesChannelParam, route);
    route.use("/:id", validate_variant_sales_channel_association_1.validateProductVariantSalesChannelAssociation);
    route.get("/", (0, with_default_sales_channel_1.withDefaultSalesChannel)(), (0, middlewares_1.transformStoreQuery)(list_variants_1.StoreGetVariantsParams, {
        defaultRelations: exports.defaultStoreVariantRelations,
        allowedRelations: exports.allowedStoreVariantRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-variants").default));
    route.get("/:id", (0, with_default_sales_channel_1.withDefaultSalesChannel)(), (0, middlewares_1.transformStoreQuery)(get_variant_1.StoreGetVariantsVariantParams, {
        defaultRelations: exports.defaultStoreVariantRelations,
        allowedRelations: exports.allowedStoreVariantRelations,
    }), middlewares_1.default.wrap(require("./get-variant").default));
    return app;
});
exports.defaultStoreVariantRelations = ["prices", "options", "product"];
exports.allowedStoreVariantRelations = __spreadArray(__spreadArray([], __read(exports.defaultStoreVariantRelations), false), [
    "inventory_items",
], false);
__exportStar(require("./get-variant"), exports);
__exportStar(require("./list-variants"), exports);
//# sourceMappingURL=index.js.map