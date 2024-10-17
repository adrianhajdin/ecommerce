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
exports.multiLocationSoftDelete1675689306130 = void 0;
var multiLocationSoftDelete1675689306130 = /** @class */ (function () {
    function multiLocationSoftDelete1675689306130() {
        this.name = "multiLocationSoftDelete1675689306130";
    }
    multiLocationSoftDelete1675689306130.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      ALTER TABLE sales_channel_location\n      ADD COLUMN \"deleted_at\" TIMESTAMP WITH TIME ZONE;\n\n      DROP INDEX \"IDX_6caaa358f12ed0b846f00e2dcd\";\n      DROP INDEX \"IDX_c2203162ca946a71aeb98390b0\";\n\n      CREATE INDEX \"IDX_sales_channel_location_sales_channel_id\" ON \"sales_channel_location\" (\"sales_channel_id\") WHERE deleted_at IS NULL;\n      CREATE INDEX \"IDX_sales_channel_location_location_id\" ON \"sales_channel_location\" (\"location_id\") WHERE deleted_at IS NULL;\n\n      ALTER TABLE product_variant_inventory_item\n      ADD COLUMN \"deleted_at\" TIMESTAMP WITH TIME ZONE;\n\n      DROP INDEX \"IDX_c74e8c2835094a37dead376a3b\";\n      DROP INDEX \"IDX_bf5386e7f2acc460adbf96d6f3\";\n\n      CREATE INDEX \"IDX_product_variant_inventory_item_inventory_item_id\" ON \"product_variant_inventory_item\" (\"inventory_item_id\") WHERE deleted_at IS NULL;\n      CREATE INDEX \"IDX_product_variant_inventory_item_variant_id\" ON \"product_variant_inventory_item\" (\"variant_id\") WHERE deleted_at IS NULL;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    multiLocationSoftDelete1675689306130.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      DROP INDEX \"IDX_sales_channel_location_sales_channel_id\";\n      DROP INDEX \"IDX_sales_channel_location_location_id\";\n\n      DROP INDEX \"IDX_product_variant_inventory_item_inventory_item_id\";\n      DROP INDEX \"IDX_product_variant_inventory_item_variant_id\";\n\n      CREATE INDEX \"IDX_6caaa358f12ed0b846f00e2dcd\" ON \"sales_channel_location\" (\"sales_channel_id\");\n      CREATE INDEX \"IDX_c2203162ca946a71aeb98390b0\" ON \"sales_channel_location\" (\"location_id\");\n\n      CREATE INDEX \"IDX_c74e8c2835094a37dead376a3b\" ON \"product_variant_inventory_item\" (\"inventory_item_id\");\n      CREATE INDEX \"IDX_bf5386e7f2acc460adbf96d6f3\" ON \"product_variant_inventory_item\" (\"variant_id\");\n\n      ALTER TABLE sales_channel_location\n      DROP COLUMN \"deleted_at\";\n\n      ALTER TABLE product_variant_inventory_item\n      DROP COLUMN \"deleted_at\";\n   ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return multiLocationSoftDelete1675689306130;
}());
exports.multiLocationSoftDelete1675689306130 = multiLocationSoftDelete1675689306130;
//# sourceMappingURL=1675689306130-multi_location_soft_delete.js.map