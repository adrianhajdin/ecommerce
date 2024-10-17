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
exports.dropFksIsolatedProducts1694602553610 = exports.featureFlag = void 0;
var utils_1 = require("@medusajs/utils");
exports.featureFlag = utils_1.MedusaV2Flag.key;
var dropFksIsolatedProducts1694602553610 = /** @class */ (function () {
    function dropFksIsolatedProducts1694602553610() {
        this.name = "dropFksIsolatedProducts1694602553610";
    }
    dropFksIsolatedProducts1694602553610.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        ALTER TABLE IF EXISTS \"product_tax_rate\" DROP CONSTRAINT IF EXISTS \"FK_1d04aebeabb6a89f87e536a124d\";\n        ALTER TABLE IF EXISTS \"product_type_tax_rate\" DROP CONSTRAINT IF EXISTS \"FK_25a3138bb236f63d9bb6c8ff111\";\n        ALTER TABLE IF EXISTS \"claim_item\" DROP CONSTRAINT IF EXISTS \"FK_64980511ca32c8e92b417644afa\";\n        ALTER TABLE IF EXISTS \"discount_condition_product\" DROP CONSTRAINT IF EXISTS \"FK_c759f53b2e48e8cfb50638fe4e0\";\n        ALTER TABLE IF EXISTS \"discount_condition_product_collection\" DROP CONSTRAINT IF EXISTS \"FK_a0b05dc4257abe639cb75f8eae2\";\n        ALTER TABLE IF EXISTS \"discount_condition_product_tag\" DROP CONSTRAINT IF EXISTS \"FK_01486cc9dc6b36bf658685535f6\";\n        ALTER TABLE IF EXISTS \"discount_condition_product_type\" DROP CONSTRAINT IF EXISTS \"FK_e706deb68f52ab2756119b9e704\";\n        ALTER TABLE IF EXISTS \"discount_rule_products\" DROP CONSTRAINT IF EXISTS \"FK_be66106a673b88a81c603abe7eb\";\n\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    dropFksIsolatedProducts1694602553610.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        ALTER TABLE IF EXISTS \"product_tax_rate\" ADD CONSTRAINT \"FK_1d04aebeabb6a89f87e536a124d\" FOREIGN KEY (\"product_id\") REFERENCES \"product\"(\"id\") ON DELETE cascade ON UPDATE NO ACTION;\n        ALTER TABLE IF EXISTS \"product_type_tax_rate\" ADD CONSTRAINT \"FK_25a3138bb236f63d9bb6c8ff111\" FOREIGN KEY (\"product_type_id\") REFERENCES \"product_type\"(\"id\") ON DELETE cascade ON UPDATE NO ACTION;\n        ALTER TABLE IF EXISTS \"claim_item\" ADD CONSTRAINT \"FK_64980511ca32c8e92b417644afa\" FOREIGN KEY (\"variant_id\") REFERENCES \"product_variant\"(\"id\") ON UPDATE NO ACTION ON DELETE NO ACTION;\n        ALTER TABLE IF EXISTS discount_condition_product ADD CONSTRAINT \"FK_c759f53b2e48e8cfb50638fe4e0\" FOREIGN KEY (product_id) REFERENCES product (id) ON UPDATE NO ACTION ON DELETE CASCADE;\n        ALTER TABLE IF EXISTS discount_condition_product_collection ADD CONSTRAINT \"FK_a0b05dc4257abe639cb75f8eae2\" FOREIGN KEY (product_collection_id) REFERENCES product_collection (id) ON UPDATE NO ACTION ON DELETE CASCADE;\n        ALTER TABLE IF EXISTS discount_condition_product_tag ADD CONSTRAINT \"FK_01486cc9dc6b36bf658685535f6\" FOREIGN KEY (product_tag_id) REFERENCES product_tag (id) ON UPDATE NO ACTION ON DELETE CASCADE;\n        ALTER TABLE IF EXISTS discount_condition_product_type ADD CONSTRAINT \"FK_e706deb68f52ab2756119b9e704\" FOREIGN KEY (product_type_id) REFERENCES product_type (id) ON UPDATE NO ACTION ON DELETE CASCADE;\n        ALTER TABLE IF EXISTS discount_rule_products ADD CONSTRAINT \"FK_be66106a673b88a81c603abe7eb\" FOREIGN KEY (product_id) REFERENCES product (id) ON UPDATE NO ACTION ON DELETE CASCADE;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return dropFksIsolatedProducts1694602553610;
}());
exports.dropFksIsolatedProducts1694602553610 = dropFksIsolatedProducts1694602553610;
//# sourceMappingURL=1694602553610-drop-fks-isolated-product.js.map