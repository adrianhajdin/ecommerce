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
exports.addTableProductShippingProfile1680857773273 = void 0;
var addTableProductShippingProfile1680857773273 = /** @class */ (function () {
    function addTableProductShippingProfile1680857773273() {
        this.name = "addTableProductShippingProfile1680857773273";
    }
    addTableProductShippingProfile1680857773273.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        CREATE TABLE IF NOT EXISTS \"product_shipping_profile\"\n        (\n            \"profile_id\" text NOT NULL,\n            \"product_id\" text NOT NULL\n        );\n\n        INSERT INTO \"product_shipping_profile\" (\"profile_id\", \"product_id\")\n        SELECT \"profile_id\", \"id\" FROM \"product\";\n\n        ALTER TABLE \"product\" DROP COLUMN IF EXISTS \"profile_id\";\n        CREATE UNIQUE INDEX IF NOT EXISTS \"idx_product_shipping_profile_profile_id_product_id_unique\" ON \"product_shipping_profile\" (\"profile_id\", \"product_id\");\n        CREATE INDEX IF NOT EXISTS \"idx_product_shipping_profile_product_id\" ON \"product_shipping_profile\" (\"product_id\");\n        CREATE INDEX IF NOT EXISTS \"idx_product_shipping_profile_profile_id\" ON \"product_shipping_profile\" (\"profile_id\");\n        DROP INDEX IF EXISTS \"IDX_80823b7ae866dc5acae2dac6d2\";\n      ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    addTableProductShippingProfile1680857773273.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        DROP INDEX IF EXISTS \"idx_product_shipping_profile_profile_id_product_id_unique\";\n        DROP INDEX IF EXISTS \"idx_product_shipping_profile_product_id\";\n        DROP INDEX IF EXISTS \"idx_product_shipping_profile_profile_id\";\n\n        ALTER TABLE \"product\" ADD COLUMN IF NOT EXISTS \"profile_id\" CHARACTER VARYING;\n\n        UPDATE \"product\" SET \"profile_id\" = \"product_shipping_profile\".\"profile_id\"\n            FROM \"product_shipping_profile\"\n        WHERE \"product\".\"id\" = \"product_shipping_profile\".\"product_id\";\n\n        DROP TABLE IF EXISTS \"product_shipping_profile\";\n\n        ALTER TABLE \"product\" ALTER COLUMN profile_id SET NOT NULL;\n\n        CREATE INDEX IF NOT EXISTS \"IDX_80823b7ae866dc5acae2dac6d2\" ON \"product\" (\"profile_id\");\n        ALTER TABLE \"product\" ADD CONSTRAINT \"FK_80823b7ae866dc5acae2dac6d2c\" FOREIGN KEY (\"profile_id\") REFERENCES \"shipping_profile\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return addTableProductShippingProfile1680857773273;
}());
exports.addTableProductShippingProfile1680857773273 = addTableProductShippingProfile1680857773273;
//# sourceMappingURL=1680857773273-add-table-product-shipping-profile.js.map