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
exports.addCustomShippingOptions1633614437919 = void 0;
var addCustomShippingOptions1633614437919 = /** @class */ (function () {
    function addCustomShippingOptions1633614437919() {
        this.name = 'addCustomShippingOptions1633614437919';
    }
    addCustomShippingOptions1633614437919.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"custom_shipping_option\" (\"id\" character varying NOT NULL, \"price\" integer NOT NULL, \"shipping_option_id\" character varying NOT NULL, \"cart_id\" character varying, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, CONSTRAINT \"UQ_0f838b122a9a01d921aa1cdb669\" UNIQUE (\"shipping_option_id\", \"cart_id\"), CONSTRAINT \"PK_8dfcb5c1172c29eec4a728420cc\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_44090cb11b06174cbcc667e91c\" ON \"custom_shipping_option\" (\"shipping_option_id\") ")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_93caeb1bb70d37c1d36d6701a7\" ON \"custom_shipping_option\" (\"cart_id\") ")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"cart_type_enum\" RENAME TO \"cart_type_enum_old\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"cart_type_enum\" AS ENUM('default', 'swap', 'draft_order', 'payment_link', 'claim')")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" DROP DEFAULT")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" TYPE \"cart_type_enum\" USING \"type\"::\"text\"::\"cart_type_enum\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" SET DEFAULT 'default'")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"cart_type_enum_old\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"custom_shipping_option\" ADD CONSTRAINT \"FK_44090cb11b06174cbcc667e91ca\" FOREIGN KEY (\"shipping_option_id\") REFERENCES \"shipping_option\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"custom_shipping_option\" ADD CONSTRAINT \"FK_93caeb1bb70d37c1d36d6701a7a\" FOREIGN KEY (\"cart_id\") REFERENCES \"cart\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    addCustomShippingOptions1633614437919.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"custom_shipping_option\" DROP CONSTRAINT \"FK_93caeb1bb70d37c1d36d6701a7a\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"custom_shipping_option\" DROP CONSTRAINT \"FK_44090cb11b06174cbcc667e91ca\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"cart_type_enum_old\" AS ENUM('default', 'swap', 'draft_order', 'payment_link')")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" DROP DEFAULT")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" TYPE \"cart_type_enum_old\" USING \"type\"::\"text\"::\"cart_type_enum_old\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" SET DEFAULT 'default'")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"cart_type_enum\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"cart_type_enum_old\" RENAME TO \"cart_type_enum\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_93caeb1bb70d37c1d36d6701a7\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_44090cb11b06174cbcc667e91c\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"custom_shipping_option\"")];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return addCustomShippingOptions1633614437919;
}());
exports.addCustomShippingOptions1633614437919 = addCustomShippingOptions1633614437919;
//# sourceMappingURL=1633614437919-add_custom_shipping_options.js.map