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
exports.updateMoneyAmountAddPriceList1646915480108 = void 0;
var updateMoneyAmountAddPriceList1646915480108 = /** @class */ (function () {
    function updateMoneyAmountAddPriceList1646915480108() {
        this.name = 'updateMoneyAmountAddPriceList1646915480108';
    }
    updateMoneyAmountAddPriceList1646915480108.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TYPE \"price_list_type_enum\" AS ENUM('sale', 'override')")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"price_list_status_enum\" AS ENUM('active', 'draft')")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"price_list\" (\"id\" character varying NOT NULL, \"name\" character varying NOT NULL, \"description\" character varying NOT NULL, \"type\" \"price_list_type_enum\" NOT NULL DEFAULT 'sale', \"status\" \"price_list_status_enum\" NOT NULL DEFAULT 'draft', \"starts_at\" TIMESTAMP WITH TIME ZONE, \"ends_at\" TIMESTAMP WITH TIME ZONE, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, CONSTRAINT \"PK_52ea7826468b1c889cb2c28df03\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"price_list_customer_groups\" (\"price_list_id\" character varying NOT NULL, \"customer_group_id\" character varying NOT NULL, CONSTRAINT \"PK_1afcbe15cc8782dc80c05707df9\" PRIMARY KEY (\"price_list_id\", \"customer_group_id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_52875734e9dd69064f0041f4d9\" ON \"price_list_customer_groups\" (\"price_list_id\") ")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c5516f550433c9b1c2630d787a\" ON \"price_list_customer_groups\" (\"customer_group_id\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" DROP COLUMN \"sale_amount\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" ADD \"min_quantity\" integer")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" ADD \"max_quantity\" integer")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" ADD \"price_list_id\" character varying")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" ADD CONSTRAINT \"FK_f249976b079375499662eb80c40\" FOREIGN KEY (\"price_list_id\") REFERENCES \"price_list\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"price_list_customer_groups\" ADD CONSTRAINT \"FK_52875734e9dd69064f0041f4d92\" FOREIGN KEY (\"price_list_id\") REFERENCES \"price_list\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"price_list_customer_groups\" ADD CONSTRAINT \"FK_c5516f550433c9b1c2630d787a7\" FOREIGN KEY (\"customer_group_id\") REFERENCES \"customer_group\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    updateMoneyAmountAddPriceList1646915480108.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"price_list_customer_groups\" DROP CONSTRAINT \"FK_c5516f550433c9b1c2630d787a7\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"price_list_customer_groups\" DROP CONSTRAINT \"FK_52875734e9dd69064f0041f4d92\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" DROP CONSTRAINT \"FK_f249976b079375499662eb80c40\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" DROP COLUMN \"price_list_id\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" DROP COLUMN \"max_quantity\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" DROP COLUMN \"min_quantity\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"money_amount\" ADD \"sale_amount\" integer")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c5516f550433c9b1c2630d787a\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_52875734e9dd69064f0041f4d9\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"price_list_customer_groups\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"price_list\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"price_list_status_enum\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"price_list_type_enum\"")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return updateMoneyAmountAddPriceList1646915480108;
}());
exports.updateMoneyAmountAddPriceList1646915480108 = updateMoneyAmountAddPriceList1646915480108;
//# sourceMappingURL=1646915480108-update_money_amount_add_price_list.js.map