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
exports.claims1612284947120 = void 0;
var claims1612284947120 = /** @class */ (function () {
    function claims1612284947120() {
        this.name = "claims1612284947120";
    }
    claims1612284947120.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" DROP CONSTRAINT \"CHK_3c00b878c1426d119cd70aa065\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"claim_image\" (\"id\" character varying NOT NULL, \"claim_item_id\" character varying NOT NULL, \"url\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, CONSTRAINT \"PK_7c49e44bfe8840ca7d917890101\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"claim_tag\" (\"id\" character varying NOT NULL, \"value\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, CONSTRAINT \"PK_7761180541142a5926501018d34\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ec10c54769877840c132260e4a\" ON \"claim_tag\" (\"value\") ")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"claim_item_reason_enum\" AS ENUM('missing_item', 'wrong_item', 'production_failure', 'other')")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"claim_item\" (\"id\" character varying NOT NULL, \"claim_order_id\" character varying NOT NULL, \"item_id\" character varying NOT NULL, \"variant_id\" character varying NOT NULL, \"reason\" \"claim_item_reason_enum\" NOT NULL, \"note\" character varying, \"quantity\" integer NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, CONSTRAINT \"PK_5679662039bc4c7c6bc7fa1be2d\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_900a9c3834257304396b2b0fe7\" ON \"claim_item\" (\"claim_order_id\") ")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_6e0cad0daef76bb642675910b9\" ON \"claim_item\" (\"item_id\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_64980511ca32c8e92b417644af\" ON \"claim_item\" (\"variant_id\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"claim_order_payment_status_enum\" AS ENUM('na', 'not_refunded', 'refunded')")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"claim_order_fulfillment_status_enum\" AS ENUM('not_fulfilled', 'partially_fulfilled', 'fulfilled', 'partially_shipped', 'shipped', 'partially_returned', 'returned', 'canceled', 'requires_action')")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"claim_order_type_enum\" AS ENUM('refund', 'replace')")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"claim_order\" (\"id\" character varying NOT NULL, \"payment_status\" \"claim_order_payment_status_enum\" NOT NULL DEFAULT 'na', \"fulfillment_status\" \"claim_order_fulfillment_status_enum\" NOT NULL DEFAULT 'not_fulfilled', \"type\" \"claim_order_type_enum\" NOT NULL, \"order_id\" character varying NOT NULL, \"shipping_address_id\" character varying, \"refund_amount\" integer, \"canceled_at\" TIMESTAMP WITH TIME ZONE, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, \"idempotency_key\" character varying, CONSTRAINT \"PK_8981f5595a4424021466aa4c7a4\" PRIMARY KEY (\"id\"))")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"claim_item_tags\" (\"item_id\" character varying NOT NULL, \"tag_id\" character varying NOT NULL, CONSTRAINT \"PK_54ab8ce0f7e99167068188fbd81\" PRIMARY KEY (\"item_id\", \"tag_id\"))")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c2c0f3edf39515bd15432afe6e\" ON \"claim_item_tags\" (\"item_id\") ")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_dc9bbf9fcb9ba458d25d512811\" ON \"claim_item_tags\" (\"tag_id\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" ADD \"claim_order_id\" character varying")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" ADD \"claim_order_id\" character varying")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" ADD CONSTRAINT \"UQ_71773d56eb2bacb922bc3283398\" UNIQUE (\"claim_order_id\")")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"fulfillment\" ADD \"claim_order_id\" character varying")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" ADD \"claim_order_id\" character varying")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"refund_reason_enum\" RENAME TO \"refund_reason_enum_old\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"refund_reason_enum\" AS ENUM('discount', 'return', 'swap', 'claim', 'other')")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"refund\" ALTER COLUMN \"reason\" TYPE \"refund_reason_enum\" USING \"reason\"::\"text\"::\"refund_reason_enum\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"refund_reason_enum_old\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"refund\".\"reason\" IS NULL")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_d783a66d1c91c0858752c933e6\" ON \"shipping_method\" (\"claim_order_id\") ")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_118e3c48f09a7728f41023c94e\" ON \"line_item\" (\"claim_order_id\") ")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" ADD CONSTRAINT \"CHK_a7020b08665bbd64d84a6641cf\" CHECK (\"claim_order_id\" IS NOT NULL OR \"order_id\" IS NOT NULL OR \"cart_id\" IS NOT NULL OR \"swap_id\" IS NOT NULL OR \"return_id\" IS NOT NULL)")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_image\" ADD CONSTRAINT \"FK_21cbfedd83d736d86f4c6f4ce56\" FOREIGN KEY (\"claim_item_id\") REFERENCES \"claim_item\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" ADD CONSTRAINT \"FK_900a9c3834257304396b2b0fe7c\" FOREIGN KEY (\"claim_order_id\") REFERENCES \"claim_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" ADD CONSTRAINT \"FK_6e0cad0daef76bb642675910b9d\" FOREIGN KEY (\"item_id\") REFERENCES \"line_item\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" ADD CONSTRAINT \"FK_64980511ca32c8e92b417644afa\" FOREIGN KEY (\"variant_id\") REFERENCES \"product_variant\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" ADD CONSTRAINT \"FK_d783a66d1c91c0858752c933e68\" FOREIGN KEY (\"claim_order_id\") REFERENCES \"claim_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" ADD CONSTRAINT \"FK_71773d56eb2bacb922bc3283398\" FOREIGN KEY (\"claim_order_id\") REFERENCES \"claim_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_order\" ADD CONSTRAINT \"FK_f49e3974465d3c3a33d449d3f31\" FOREIGN KEY (\"order_id\") REFERENCES \"order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_order\" ADD CONSTRAINT \"FK_017d58bf8260c6e1a2588d258e2\" FOREIGN KEY (\"shipping_address_id\") REFERENCES \"address\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"fulfillment\" ADD CONSTRAINT \"FK_d73e55964e0ff2db8f03807d52e\" FOREIGN KEY (\"claim_order_id\") REFERENCES \"claim_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" ADD CONSTRAINT \"FK_118e3c48f09a7728f41023c94ef\" FOREIGN KEY (\"claim_order_id\") REFERENCES \"claim_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item_tags\" ADD CONSTRAINT \"FK_c2c0f3edf39515bd15432afe6e5\" FOREIGN KEY (\"item_id\") REFERENCES \"claim_item\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item_tags\" ADD CONSTRAINT \"FK_dc9bbf9fcb9ba458d25d512811b\" FOREIGN KEY (\"tag_id\") REFERENCES \"claim_tag\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 41:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    claims1612284947120.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item_tags\" DROP CONSTRAINT \"FK_dc9bbf9fcb9ba458d25d512811b\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item_tags\" DROP CONSTRAINT \"FK_c2c0f3edf39515bd15432afe6e5\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" DROP CONSTRAINT \"FK_118e3c48f09a7728f41023c94ef\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"fulfillment\" DROP CONSTRAINT \"FK_d73e55964e0ff2db8f03807d52e\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_order\" DROP CONSTRAINT \"FK_017d58bf8260c6e1a2588d258e2\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_order\" DROP CONSTRAINT \"FK_f49e3974465d3c3a33d449d3f31\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" DROP CONSTRAINT \"FK_71773d56eb2bacb922bc3283398\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" DROP CONSTRAINT \"FK_d783a66d1c91c0858752c933e68\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" DROP CONSTRAINT \"FK_64980511ca32c8e92b417644afa\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" DROP CONSTRAINT \"FK_6e0cad0daef76bb642675910b9d\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_item\" DROP CONSTRAINT \"FK_900a9c3834257304396b2b0fe7c\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"claim_image\" DROP CONSTRAINT \"FK_21cbfedd83d736d86f4c6f4ce56\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" DROP CONSTRAINT \"CHK_a7020b08665bbd64d84a6641cf\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_118e3c48f09a7728f41023c94e\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_d783a66d1c91c0858752c933e6\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"refund\".\"reason\" IS NULL")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"refund_reason_enum_old\" AS ENUM('discount', 'return', 'swap', 'other')")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"refund\" ALTER COLUMN \"reason\" TYPE \"refund_reason_enum_old\" USING \"reason\"::\"text\"::\"refund_reason_enum_old\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"refund_reason_enum\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"refund_reason_enum_old\" RENAME TO  \"refund_reason_enum\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" DROP COLUMN \"claim_order_id\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"fulfillment\" DROP COLUMN \"claim_order_id\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" DROP CONSTRAINT \"UQ_71773d56eb2bacb922bc3283398\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"return\" DROP COLUMN \"claim_order_id\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" DROP COLUMN \"claim_order_id\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_dc9bbf9fcb9ba458d25d512811\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c2c0f3edf39515bd15432afe6e\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"claim_item_tags\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"claim_order\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"claim_order_type_enum\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"claim_order_fulfillment_status_enum\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"claim_order_payment_status_enum\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_64980511ca32c8e92b417644af\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_6e0cad0daef76bb642675910b9\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_900a9c3834257304396b2b0fe7\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"claim_item\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"claim_item_reason_enum\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ec10c54769877840c132260e4a\"")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"claim_tag\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"claim_image\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method\" ADD CONSTRAINT \"CHK_3c00b878c1426d119cd70aa065\" CHECK (((order_id IS NOT NULL) OR (cart_id IS NOT NULL) OR (swap_id IS NOT NULL) OR (return_id IS NOT NULL)))")];
                    case 41:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return claims1612284947120;
}());
exports.claims1612284947120 = claims1612284947120;
//# sourceMappingURL=1612284947120-claims.js.map