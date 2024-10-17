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
exports.indexes1612353094577 = void 0;
var indexes1612353094577 = /** @class */ (function () {
    function indexes1612353094577() {
        this.name = "indexes1612353094577";
    }
    indexes1612353094577.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_21cbfedd83d736d86f4c6f4ce5\" ON \"claim_image\" (\"claim_item_id\") ")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_7234ed737ff4eb1b6ae6e6d7b0\" ON \"product_option_value\" (\"variant_id\") ")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_b1aac8314662fa6b25569a575b\" ON \"country\" (\"region_id\") ")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_012a62ba743e427b5ebe9dee18\" ON \"shipping_option_requirement\" (\"shipping_option_id\") ")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5c58105f1752fca0f4ce69f466\" ON \"shipping_option\" (\"region_id\") ")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c951439af4c98bf2bd7fb8726c\" ON \"shipping_option\" (\"profile_id\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_a0e206bfaed3cb63c186091734\" ON \"shipping_option\" (\"provider_id\") ")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_80823b7ae866dc5acae2dac6d2\" ON \"product\" (\"profile_id\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_17a06d728e4cfbc5bd2ddb70af\" ON \"money_amount\" (\"variant_id\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_b433e27b7a83e6d12ab26b15b0\" ON \"money_amount\" (\"region_id\") ")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ca67dd080aac5ecf99609960cd\" ON \"product_variant\" (\"product_id\") ")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ac2c280de3701b2d66f6817f76\" ON \"discount\" (\"rule_id\") ")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d25ba0787e1510ddc5d442ebcf\" ON \"payment_session\" (\"cart_id\") ")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d18ad72f2fb7c87f075825b6f8\" ON \"payment_session\" (\"provider_id\") ")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c17aff091441b7c25ec3d68d36\" ON \"payment\" (\"swap_id\") ")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_4665f17abc1e81dd58330e5854\" ON \"payment\" (\"cart_id\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f5221735ace059250daac9d980\" ON \"payment\" (\"order_id\") ")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ea94f42b6c88e9191c3649d752\" ON \"payment\" (\"provider_id\") ")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_b6bcf8c3903097b84e85154eed\" ON \"gift_card\" (\"region_id\") ")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_dfc1f02bb0552e79076aa58dbb\" ON \"gift_card\" (\"order_id\") ")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_6b9c66b5e36f7c827dfaa092f9\" ON \"cart\" (\"billing_address_id\") ")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ced15a9a695d2b5db9dabce763\" ON \"cart\" (\"shipping_address_id\") ")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_484c329f4783be4e18e5e2ff09\" ON \"cart\" (\"region_id\") ")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_242205c81c1152fab1b6e84847\" ON \"cart\" (\"customer_id\") ")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_9d1a161434c610aae7c3df2dc7\" ON \"cart\" (\"payment_id\") ")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_bad82d7bff2b08b87094bfac3d\" ON \"return\" (\"swap_id\") ")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_71773d56eb2bacb922bc328339\" ON \"return\" (\"claim_order_id\") ")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d4bd17f918fc6c332b74a368c3\" ON \"return\" (\"order_id\") ")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f49e3974465d3c3a33d449d3f3\" ON \"claim_order\" (\"order_id\") ")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_017d58bf8260c6e1a2588d258e\" ON \"claim_order\" (\"shipping_address_id\") ")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d73e55964e0ff2db8f03807d52\" ON \"fulfillment\" (\"claim_order_id\") ")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_a52e234f729db789cf473297a5\" ON \"fulfillment\" (\"swap_id\") ")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f129acc85e346a10eed12b86fc\" ON \"fulfillment\" (\"order_id\") ")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_beb35a6de60a6c4f91d5ae57e4\" ON \"fulfillment\" (\"provider_id\") ")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_52dd74e8c989aa5665ad2852b8\" ON \"swap\" (\"order_id\") ")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d7d441b81012f87d4265fa57d2\" ON \"gift_card_transaction\" (\"order_id\") ")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_eec9d9af4ca098e19ea6b499ea\" ON \"refund\" (\"order_id\") ")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_579e01fb94f4f58db480857e05\" ON \"order\" (\"display_id\") ")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c99a206eb11ad45f6b7f04f2dc\" ON \"order\" (\"cart_id\") ")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_cd7812c96209c5bdd48a6b858b\" ON \"order\" (\"customer_id\") ")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5568d3b9ce9f7abeeb37511ecf\" ON \"order\" (\"billing_address_id\") ")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_19b0c6293443d1b464f604c331\" ON \"order\" (\"shipping_address_id\") ")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_e1fcce2b18dbcdbe0a5ba9a68b\" ON \"order\" (\"region_id\") ")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_8abe81b9aac151ae60bf507ad1\" ON \"customer\" (\"billing_address_id\") ")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_9c9614b2f9d01665800ea8dbff\" ON \"address\" (\"customer_id\") ")];
                    case 45:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    indexes1612353094577.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_9c9614b2f9d01665800ea8dbff\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_8abe81b9aac151ae60bf507ad1\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_e1fcce2b18dbcdbe0a5ba9a68b\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_19b0c6293443d1b464f604c331\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5568d3b9ce9f7abeeb37511ecf\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_cd7812c96209c5bdd48a6b858b\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c99a206eb11ad45f6b7f04f2dc\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_579e01fb94f4f58db480857e05\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_eec9d9af4ca098e19ea6b499ea\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d7d441b81012f87d4265fa57d2\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_52dd74e8c989aa5665ad2852b8\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_beb35a6de60a6c4f91d5ae57e4\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f129acc85e346a10eed12b86fc\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_a52e234f729db789cf473297a5\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d73e55964e0ff2db8f03807d52\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_017d58bf8260c6e1a2588d258e\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f49e3974465d3c3a33d449d3f3\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d4bd17f918fc6c332b74a368c3\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_71773d56eb2bacb922bc328339\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_bad82d7bff2b08b87094bfac3d\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_9d1a161434c610aae7c3df2dc7\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_242205c81c1152fab1b6e84847\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_484c329f4783be4e18e5e2ff09\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ced15a9a695d2b5db9dabce763\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_6b9c66b5e36f7c827dfaa092f9\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_dfc1f02bb0552e79076aa58dbb\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_b6bcf8c3903097b84e85154eed\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ea94f42b6c88e9191c3649d752\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f5221735ace059250daac9d980\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_4665f17abc1e81dd58330e5854\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c17aff091441b7c25ec3d68d36\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d18ad72f2fb7c87f075825b6f8\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d25ba0787e1510ddc5d442ebcf\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ac2c280de3701b2d66f6817f76\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ca67dd080aac5ecf99609960cd\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_b433e27b7a83e6d12ab26b15b0\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_17a06d728e4cfbc5bd2ddb70af\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_80823b7ae866dc5acae2dac6d2\"")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_a0e206bfaed3cb63c186091734\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c951439af4c98bf2bd7fb8726c\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5c58105f1752fca0f4ce69f466\"")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_012a62ba743e427b5ebe9dee18\"")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_b1aac8314662fa6b25569a575b\"")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7234ed737ff4eb1b6ae6e6d7b0\"")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_21cbfedd83d736d86f4c6f4ce5\"")];
                    case 45:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return indexes1612353094577;
}());
exports.indexes1612353094577 = indexes1612353094577;
//# sourceMappingURL=1612353094577-indexes.js.map