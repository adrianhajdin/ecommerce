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
exports.discountConditions1646324713514 = void 0;
var discountConditions1646324713514 = /** @class */ (function () {
    function discountConditions1646324713514() {
        this.name = "discountConditions1646324713514";
    }
    discountConditions1646324713514.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TYPE \"discount_condition_type_enum\" AS ENUM('products', 'product_types', 'product_collections', 'product_tags', 'customer_groups')")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"discount_condition_operator_enum\" AS ENUM('in', 'not_in')")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition\" (\"id\" character varying NOT NULL, \"type\" \"discount_condition_type_enum\" NOT NULL, \"operator\" \"discount_condition_operator_enum\" NOT NULL, \"discount_rule_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"deleted_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, CONSTRAINT \"PK_e6b81d83133ddc21a2baf2e2204\" PRIMARY KEY (\"id\"), CONSTRAINT \"dctypeuniq\" UNIQUE (\"type\", \"operator\", \"discount_rule_id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_efff700651718e452ca9580a62\" ON \"discount_condition\" (\"discount_rule_id\") ")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition_customer_group\" (\"customer_group_id\" character varying NOT NULL, \"condition_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_cdc8b2277169a16b8b7d4c73e0e\" PRIMARY KEY (\"customer_group_id\", \"condition_id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition_product_collection\" (\"product_collection_id\" character varying NOT NULL, \"condition_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_b3508fc787aa4a38705866cbb6d\" PRIMARY KEY (\"product_collection_id\", \"condition_id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition_product_tag\" (\"product_tag_id\" character varying NOT NULL, \"condition_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_a95382c1e62205b121aa058682b\" PRIMARY KEY (\"product_tag_id\", \"condition_id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition_product_type\" (\"product_type_id\" character varying NOT NULL, \"condition_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_35d538a5a24399d0df978df12ed\" PRIMARY KEY (\"product_type_id\", \"condition_id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discount_condition_product\" (\"product_id\" character varying NOT NULL, \"condition_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_994eb4529fdbf14450d64ec17e8\" PRIMARY KEY (\"product_id\", \"condition_id\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f05132301e95bdab4ba1cf29a2\" ON \"discount_condition_product\" (\"condition_id\") ")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_c759f53b2e48e8cfb50638fe4e\" ON \"discount_condition_product\" (\"product_id\") ")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_6ef23ce0b1d9cf9b5b833e52b9\" ON \"discount_condition_product_type\" (\"condition_id\") ")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_e706deb68f52ab2756119b9e70\" ON \"discount_condition_product_type\" (\"product_type_id\") ")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_fbb2499551ed074526f3ee3624\" ON \"discount_condition_product_tag\" (\"condition_id\") ")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_01486cc9dc6b36bf658685535f\" ON \"discount_condition_product_tag\" (\"product_tag_id\") ")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_a1c4f9cfb599ad1f0db39cadd5\" ON \"discount_condition_product_collection\" (\"condition_id\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_a0b05dc4257abe639cb75f8eae\" ON \"discount_condition_product_collection\" (\"product_collection_id\") ")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_8486ee16e69013c645d0b8716b\" ON \"discount_condition_customer_group\" (\"condition_id\") ")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_4d5f98645a67545d8dea42e2eb\" ON \"discount_condition_customer_group\" (\"customer_group_id\") ")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition\" ADD CONSTRAINT \"FK_efff700651718e452ca9580a624\" FOREIGN KEY (\"discount_rule_id\") REFERENCES \"discount_rule\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" ADD CONSTRAINT \"FK_4d5f98645a67545d8dea42e2eb8\" FOREIGN KEY (\"customer_group_id\") REFERENCES \"customer_group\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" ADD CONSTRAINT \"FK_8486ee16e69013c645d0b8716b6\" FOREIGN KEY (\"condition_id\") REFERENCES \"discount_condition\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" ADD CONSTRAINT \"FK_a0b05dc4257abe639cb75f8eae2\" FOREIGN KEY (\"product_collection_id\") REFERENCES \"product_collection\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" ADD CONSTRAINT \"FK_a1c4f9cfb599ad1f0db39cadd5f\" FOREIGN KEY (\"condition_id\") REFERENCES \"discount_condition\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" ADD CONSTRAINT \"FK_01486cc9dc6b36bf658685535f6\" FOREIGN KEY (\"product_tag_id\") REFERENCES \"product_tag\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" ADD CONSTRAINT \"FK_fbb2499551ed074526f3ee36241\" FOREIGN KEY (\"condition_id\") REFERENCES \"discount_condition\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" ADD CONSTRAINT \"FK_e706deb68f52ab2756119b9e704\" FOREIGN KEY (\"product_type_id\") REFERENCES \"product_type\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" ADD CONSTRAINT \"FK_6ef23ce0b1d9cf9b5b833e52b9d\" FOREIGN KEY (\"condition_id\") REFERENCES \"discount_condition\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" ADD CONSTRAINT \"FK_c759f53b2e48e8cfb50638fe4e0\" FOREIGN KEY (\"product_id\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" ADD CONSTRAINT \"FK_f05132301e95bdab4ba1cf29a24\" FOREIGN KEY (\"condition_id\") REFERENCES \"discount_condition\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 30:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    discountConditions1646324713514.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" DROP CONSTRAINT \"FK_f05132301e95bdab4ba1cf29a24\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" DROP CONSTRAINT \"FK_c759f53b2e48e8cfb50638fe4e0\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" DROP CONSTRAINT \"FK_6ef23ce0b1d9cf9b5b833e52b9d\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" DROP CONSTRAINT \"FK_e706deb68f52ab2756119b9e704\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" DROP CONSTRAINT \"FK_fbb2499551ed074526f3ee36241\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" DROP CONSTRAINT \"FK_01486cc9dc6b36bf658685535f6\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" DROP CONSTRAINT \"FK_a1c4f9cfb599ad1f0db39cadd5f\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" DROP CONSTRAINT \"FK_a0b05dc4257abe639cb75f8eae2\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" DROP CONSTRAINT \"FK_8486ee16e69013c645d0b8716b6\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" DROP CONSTRAINT \"FK_4d5f98645a67545d8dea42e2eb8\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition\" DROP CONSTRAINT \"FK_efff700651718e452ca9580a624\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_4d5f98645a67545d8dea42e2eb\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_8486ee16e69013c645d0b8716b\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_a0b05dc4257abe639cb75f8eae\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_a1c4f9cfb599ad1f0db39cadd5\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_01486cc9dc6b36bf658685535f\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_fbb2499551ed074526f3ee3624\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_e706deb68f52ab2756119b9e70\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_6ef23ce0b1d9cf9b5b833e52b9\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_c759f53b2e48e8cfb50638fe4e\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f05132301e95bdab4ba1cf29a2\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" DROP COLUMN \"metadata\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" DROP COLUMN \"updated_at\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" DROP COLUMN \"created_at\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" DROP COLUMN \"metadata\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" DROP COLUMN \"updated_at\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" DROP COLUMN \"created_at\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" DROP COLUMN \"metadata\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" DROP COLUMN \"updated_at\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" DROP COLUMN \"created_at\"")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" DROP COLUMN \"metadata\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" DROP COLUMN \"updated_at\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" DROP COLUMN \"created_at\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" DROP COLUMN \"metadata\"")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" DROP COLUMN \"updated_at\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" DROP COLUMN \"created_at\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" ADD \"metadata\" jsonb")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" ADD \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_customer_group\" ADD \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" ADD \"metadata\" jsonb")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" ADD \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_collection\" ADD \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" ADD \"metadata\" jsonb")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" ADD \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_tag\" ADD \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" ADD \"metadata\" jsonb")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" ADD \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product_type\" ADD \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" ADD \"metadata\" jsonb")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" ADD \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"discount_condition_product\" ADD \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition_product\"")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition_product_type\"")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition_product_tag\"")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition_product_collection\"")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition_customer_group\"")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_efff700651718e452ca9580a62\"")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discount_condition\"")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"discount_condition_operator_enum\"")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"discount_condition_type_enum\"")];
                    case 60:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return discountConditions1646324713514;
}());
exports.discountConditions1646324713514 = discountConditions1646324713514;
//# sourceMappingURL=1646324713514-discount_conditions.js.map