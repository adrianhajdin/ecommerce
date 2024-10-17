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
exports.newTaxSystem1641636508055 = void 0;
var newTaxSystem1641636508055 = /** @class */ (function () {
    function newTaxSystem1641636508055() {
        this.name = "newTaxSystem1641636508055";
    }
    newTaxSystem1641636508055.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tax_rate\" (\"id\" character varying NOT NULL, \"rate\" real, \"code\" character varying, \"name\" character varying NOT NULL, \"region_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_23b71b53f650c0b39e99ccef4fd\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tax_provider\" (\"id\" character varying NOT NULL, \"is_installed\" boolean NOT NULL DEFAULT true, CONSTRAINT \"PK_b198bf82ba6a317c11763d99b99\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"line_item_tax_line\" (\"id\" character varying NOT NULL, \"rate\" real NOT NULL, \"name\" character varying NOT NULL, \"code\" character varying, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, \"item_id\" character varying NOT NULL, CONSTRAINT \"PK_4a0f4322fcd5ce4af85727f89a8\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5077fa54b0d037e984385dfe8a\" ON \"line_item_tax_line\" (\"item_id\") ")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"shipping_method_tax_line\" (\"id\" character varying NOT NULL, \"rate\" real NOT NULL, \"name\" character varying NOT NULL, \"code\" character varying, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, \"shipping_method_id\" character varying NOT NULL, CONSTRAINT \"PK_54c94f5908aacbd51cf0a73edb1\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_926ca9f29014af8091722dede0\" ON \"shipping_method_tax_line\" (\"shipping_method_id\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_tax_rate\" (\"product_id\" character varying NOT NULL, \"rate_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_326257ce468df46cd5c8c5922e9\" PRIMARY KEY (\"product_id\", \"rate_id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_type_tax_rate\" (\"product_type_id\" character varying NOT NULL, \"rate_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_ddc9242de1d99bc7674969289f0\" PRIMARY KEY (\"product_type_id\", \"rate_id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"shipping_tax_rate\" (\"shipping_option_id\" character varying NOT NULL, \"rate_id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"metadata\" jsonb, CONSTRAINT \"PK_bcd93b14d7e2695365d383f5eae\" PRIMARY KEY (\"shipping_option_id\", \"rate_id\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" ADD \"gift_cards_taxable\" boolean NOT NULL DEFAULT true")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" ADD \"automatic_taxes\" boolean NOT NULL DEFAULT true")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" ADD \"tax_provider_id\" character varying")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" ADD \"is_return\" boolean NOT NULL DEFAULT false")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE \"line_item\" SET \"is_return\" = true WHERE \"id\" IN (SELECT \"id\" from \"line_item\" WHERE \"metadata\"->>'is_return_line' = 'true')")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ALTER COLUMN \"tax_rate\" DROP NOT NULL")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_2484cf14c437a04586b07e7ddd\" ON \"product_tax_rate\" (\"rate_id\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_1d04aebeabb6a89f87e536a124\" ON \"product_tax_rate\" (\"product_id\") ")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ece65a774192b34253abc4cd67\" ON \"product_type_tax_rate\" (\"rate_id\") ")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_25a3138bb236f63d9bb6c8ff11\" ON \"product_type_tax_rate\" (\"product_type_id\") ")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_346e0016cf045b998074774764\" ON \"shipping_tax_rate\" (\"rate_id\") ")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_f672727ab020df6c50fb64c1a7\" ON \"shipping_tax_rate\" (\"shipping_option_id\") ")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tax_rate\" ADD CONSTRAINT \"FK_b95a1e03b051993d208366cb960\" FOREIGN KEY (\"region_id\") REFERENCES \"region\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" ADD CONSTRAINT \"FK_91f88052197680f9790272aaf5b\" FOREIGN KEY (\"tax_provider_id\") REFERENCES \"tax_provider\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item_tax_line\" ADD CONSTRAINT \"FK_5077fa54b0d037e984385dfe8ad\" FOREIGN KEY (\"item_id\") REFERENCES \"line_item\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method_tax_line\" ADD CONSTRAINT \"FK_926ca9f29014af8091722dede08\" FOREIGN KEY (\"shipping_method_id\") REFERENCES \"shipping_method\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_tax_rate\" ADD CONSTRAINT \"FK_1d04aebeabb6a89f87e536a124d\" FOREIGN KEY (\"product_id\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_tax_rate\" ADD CONSTRAINT \"FK_2484cf14c437a04586b07e7dddb\" FOREIGN KEY (\"rate_id\") REFERENCES \"tax_rate\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_type_tax_rate\" ADD CONSTRAINT \"FK_25a3138bb236f63d9bb6c8ff111\" FOREIGN KEY (\"product_type_id\") REFERENCES \"product_type\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_type_tax_rate\" ADD CONSTRAINT \"FK_ece65a774192b34253abc4cd672\" FOREIGN KEY (\"rate_id\") REFERENCES \"tax_rate\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_tax_rate\" ADD CONSTRAINT \"FK_f672727ab020df6c50fb64c1a70\" FOREIGN KEY (\"shipping_option_id\") REFERENCES \"shipping_option\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_tax_rate\" ADD CONSTRAINT \"FK_346e0016cf045b9980747747645\" FOREIGN KEY (\"rate_id\") REFERENCES \"tax_rate\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 31:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    newTaxSystem1641636508055.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_tax_rate\" DROP CONSTRAINT \"FK_346e0016cf045b9980747747645\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_tax_rate\" DROP CONSTRAINT \"FK_f672727ab020df6c50fb64c1a70\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_type_tax_rate\" DROP CONSTRAINT \"FK_ece65a774192b34253abc4cd672\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_type_tax_rate\" DROP CONSTRAINT \"FK_25a3138bb236f63d9bb6c8ff111\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_tax_rate\" DROP CONSTRAINT \"FK_2484cf14c437a04586b07e7dddb\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_tax_rate\" DROP CONSTRAINT \"FK_1d04aebeabb6a89f87e536a124d\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_method_tax_line\" DROP CONSTRAINT \"FK_926ca9f29014af8091722dede08\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item_tax_line\" DROP CONSTRAINT \"FK_5077fa54b0d037e984385dfe8ad\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" DROP CONSTRAINT \"FK_91f88052197680f9790272aaf5b\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"tax_rate\" DROP CONSTRAINT \"FK_b95a1e03b051993d208366cb960\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_f672727ab020df6c50fb64c1a7\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_346e0016cf045b998074774764\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_25a3138bb236f63d9bb6c8ff11\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ece65a774192b34253abc4cd67\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_1d04aebeabb6a89f87e536a124\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_2484cf14c437a04586b07e7ddd\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ALTER COLUMN \"tax_rate\" SET NOT NULL")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"line_item\" DROP COLUMN \"is_return\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" DROP COLUMN \"tax_provider_id\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" DROP COLUMN \"automatic_taxes\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"region\" DROP COLUMN \"gift_cards_taxable\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"shipping_tax_rate\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_type_tax_rate\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_tax_rate\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_926ca9f29014af8091722dede0\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"shipping_method_tax_line\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5077fa54b0d037e984385dfe8a\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"line_item_tax_line\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tax_provider\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"tax_rate\"")];
                    case 30:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return newTaxSystem1641636508055;
}());
exports.newTaxSystem1641636508055 = newTaxSystem1641636508055;
//# sourceMappingURL=1641636508055-new_tax_system.js.map