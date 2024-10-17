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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var add_channels_batch_1 = require("./add-channels-batch");
var create_publishable_api_key_1 = require("./create-publishable-api-key");
var delete_channels_batch_1 = require("./delete-channels-batch");
var list_publishable_api_keys_1 = require("./list-publishable-api-keys");
var update_publishable_api_key_1 = require("./update-publishable-api-key");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/publishable-api-keys", route);
    route.post("/", (0, middlewares_1.transformBody)(create_publishable_api_key_1.AdminPostPublishableApiKeysReq), middlewares_1.default.wrap(require("./create-publishable-api-key").default));
    route.get("/:id", middlewares_1.default.wrap(require("./get-publishable-api-key").default));
    route.post("/:id", (0, middlewares_1.transformBody)(update_publishable_api_key_1.AdminPostPublishableApiKeysPublishableApiKeyReq), middlewares_1.default.wrap(require("./update-publishable-api-key").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-publishable-api-key").default));
    route.post("/:id/revoke", middlewares_1.default.wrap(require("./revoke-publishable-api-key").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_publishable_api_keys_1.GetPublishableApiKeysParams, {
        isList: true,
    }), middlewares_1.default.wrap(require("./list-publishable-api-keys").default));
    route.get("/:id/sales-channels", middlewares_1.default.wrap(require("./list-publishable-api-key-sales-channels").default));
    route.post("/:id/sales-channels/batch", (0, middlewares_1.transformBody)(add_channels_batch_1.AdminPostPublishableApiKeySalesChannelsBatchReq), middlewares_1.default.wrap(require("./add-channels-batch").default));
    route.delete("/:id/sales-channels/batch", (0, middlewares_1.transformBody)(delete_channels_batch_1.AdminDeletePublishableApiKeySalesChannelsBatchReq), middlewares_1.default.wrap(require("./delete-channels-batch").default));
});
__exportStar(require("./add-channels-batch"), exports);
__exportStar(require("./create-publishable-api-key"), exports);
__exportStar(require("./delete-channels-batch"), exports);
__exportStar(require("./list-publishable-api-key-sales-channels"), exports);
__exportStar(require("./list-publishable-api-keys"), exports);
__exportStar(require("./update-publishable-api-key"), exports);
//# sourceMappingURL=index.js.map