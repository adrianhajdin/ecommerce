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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
var core_flows_1 = require("@medusajs/core-flows");
var modules_sdk_1 = require("@medusajs/modules-sdk");
var GET = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cart_id, cartService, cart, shippingOptions;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                cart_id = req.params.cart_id;
                cartService = req.scope.resolve(modules_sdk_1.ModuleRegistrationName.CART);
                return [4 /*yield*/, cartService.retrieve(cart_id, {
                        select: [
                            "id",
                            "sales_channel_id",
                            "subtotal",
                            "currency_code",
                            "shipping_address.city",
                            "shipping_address.country_code",
                            "shipping_address.province",
                        ],
                        relations: ["shipping_address"],
                    })];
            case 1:
                cart = _d.sent();
                return [4 /*yield*/, (0, core_flows_1.listShippingOptionsForCartWorkflow)(req.scope).run({
                        input: {
                            cart_id: cart.id,
                            sales_channel_id: cart.sales_channel_id,
                            currency_code: cart.currency_code,
                            shipping_address: {
                                city: (_a = cart.shipping_address) === null || _a === void 0 ? void 0 : _a.city,
                                country_code: (_b = cart.shipping_address) === null || _b === void 0 ? void 0 : _b.country_code,
                                province: (_c = cart.shipping_address) === null || _c === void 0 ? void 0 : _c.province,
                            },
                        },
                    })];
            case 2:
                shippingOptions = _d.sent();
                res.json({ shipping_options: shippingOptions });
                return [2 /*return*/];
        }
    });
}); };
exports.GET = GET;
//# sourceMappingURL=route.js.map