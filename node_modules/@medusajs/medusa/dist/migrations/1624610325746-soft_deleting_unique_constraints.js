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
exports.softDeletingUniqueConstraints1624610325746 = void 0;
var softDeletingUniqueConstraints1624610325746 = /** @class */ (function () {
    function softDeletingUniqueConstraints1624610325746() {
        this.name = 'softDeletingUniqueConstraints1624610325746';
    }
    softDeletingUniqueConstraints1624610325746.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_6910923cb678fd6e99011a21cc\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_db7355f7bd36c547c8a4f539e5\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_087926f6fec32903be3c8eedfa\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f4dc2c0888b66d547c175f090e\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_9db95c4b71f632fc93ecbc3d8b\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7124082c8846a06a857cca386c\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_a0a3f124dc5b167622217fee02\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_e08af711f3493df1e921c4c9ef\" ON \"product_collection\" (\"handle\") WHERE deleted_at IS NOT NULL")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_77c4073c30ea7793f484750529\" ON \"product\" (\"handle\") WHERE deleted_at IS NOT NULL")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_ae3e22c67d7c7a969a363533c0\" ON \"discount\" (\"code\") WHERE deleted_at IS NOT NULL")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_0683952543d7d3f4fffc427034\" ON \"product_variant\" (\"sku\") WHERE deleted_at IS NOT NULL")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_410649600ce31c10c4b667ca10\" ON \"product_variant\" (\"barcode\") WHERE deleted_at IS NOT NULL")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_5248fda27b9f16ef818604bb6f\" ON \"product_variant\" (\"ean\") WHERE deleted_at IS NOT NULL")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_832f86daf8103491d634a967da\" ON \"product_variant\" (\"upc\") WHERE deleted_at IS NOT NULL")];
                    case 14:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    softDeletingUniqueConstraints1624610325746.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ae3e22c67d7c7a969a363533c0\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_77c4073c30ea7793f484750529\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_e08af711f3493df1e921c4c9ef\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_832f86daf8103491d634a967da\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5248fda27b9f16ef818604bb6f\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_410649600ce31c10c4b667ca10\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_0683952543d7d3f4fffc427034\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_087926f6fec32903be3c8eedfa\" ON \"discount\" (\"code\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_db7355f7bd36c547c8a4f539e5\" ON \"product\" (\"handle\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_6910923cb678fd6e99011a21cc\" ON \"product_collection\" (\"handle\") ")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_a0a3f124dc5b167622217fee02\" ON \"product_variant\" (\"upc\") ")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_7124082c8846a06a857cca386c\" ON \"product_variant\" (\"ean\") ")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_9db95c4b71f632fc93ecbc3d8b\" ON \"product_variant\" (\"barcode\") ")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE UNIQUE INDEX \"IDX_f4dc2c0888b66d547c175f090e\" ON \"product_variant\" (\"sku\") ")];
                    case 14:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return softDeletingUniqueConstraints1624610325746;
}());
exports.softDeletingUniqueConstraints1624610325746 = softDeletingUniqueConstraints1624610325746;
//# sourceMappingURL=1624610325746-soft_deleting_unique_constraints.js.map