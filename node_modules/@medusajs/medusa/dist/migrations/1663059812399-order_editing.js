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
exports.orderEditing1663059812399 = void 0;
var orderEditing1663059812399 = /** @class */ (function () {
    function orderEditing1663059812399() {
        this.name = "orderEditing1663059812399";
    }
    orderEditing1663059812399.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TYPE \"order_item_change_type_enum\" AS ENUM('item_add', 'item_remove', 'item_update')")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"order_item_change\" (\"id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"type\" \"order_item_change_type_enum\" NOT NULL, \"order_edit_id\" character varying NOT NULL, \"original_line_item_id\" character varying, \"line_item_id\" character varying, CONSTRAINT \"UQ_da93cee3ca0dd50a5246268c2e9\" UNIQUE (\"order_edit_id\", \"line_item_id\"), CONSTRAINT \"UQ_5b7a99181e4db2ea821be0b6196\" UNIQUE (\"order_edit_id\", \"original_line_item_id\"), CONSTRAINT \"REL_5f9688929761f7df108b630e64\" UNIQUE (\"line_item_id\"), CONSTRAINT \"PK_d6eb138f77ffdee83567b85af0c\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"order_edit\" (\"id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"order_id\" character varying NOT NULL, \"internal_note\" character varying, \"created_by\" character varying NOT NULL, \"requested_by\" character varying, \"requested_at\" TIMESTAMP WITH TIME ZONE, \"confirmed_by\" character varying, \"confirmed_at\" TIMESTAMP WITH TIME ZONE, \"declined_by\" character varying, \"declined_reason\" character varying, \"declined_at\" TIMESTAMP WITH TIME ZONE, \"canceled_by\" character varying, \"canceled_at\" TIMESTAMP WITH TIME ZONE, CONSTRAINT \"PK_58ab6acf2e84b4e827f5f846f7a\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" ADD CONSTRAINT \"FK_44feeebb258bf4cfa4cc4202281\" FOREIGN KEY (\"order_edit_id\") REFERENCES \"order_edit\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" ADD CONSTRAINT \"FK_b4d53b8d03c9f5e7d4317e818d9\" FOREIGN KEY (\"original_line_item_id\") REFERENCES \"line_item\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" ADD CONSTRAINT \"FK_5f9688929761f7df108b630e64a\" FOREIGN KEY (\"line_item_id\") REFERENCES \"line_item\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_edit\" ADD CONSTRAINT \"FK_1f3a251488a91510f57e1bf93cd\" FOREIGN KEY (\"order_id\") REFERENCES \"order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    orderEditing1663059812399.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_edit\" DROP CONSTRAINT \"FK_1f3a251488a91510f57e1bf93cd\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" DROP CONSTRAINT \"FK_5f9688929761f7df108b630e64a\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" DROP CONSTRAINT \"FK_b4d53b8d03c9f5e7d4317e818d9\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_item_change\" DROP CONSTRAINT \"FK_44feeebb258bf4cfa4cc4202281\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"order_edit\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"order_item_change\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"order_item_change_type_enum\"")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return orderEditing1663059812399;
}());
exports.orderEditing1663059812399 = orderEditing1663059812399;
//# sourceMappingURL=1663059812399-order_editing.js.map