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
exports.draftOrders1613384784316 = void 0;
var draftOrders1613384784316 = /** @class */ (function () {
    function draftOrders1613384784316() {
        this.name = 'draftOrders1613384784316';
    }
    draftOrders1613384784316.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TYPE \"draft_order_status_enum\" AS ENUM('open', 'completed')")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"draft_order\" (\"id\" character varying NOT NULL, \"status\" \"draft_order_status_enum\" NOT NULL DEFAULT 'open', \"display_id\" SERIAL NOT NULL, \"cart_id\" character varying, \"order_id\" character varying, \"canceled_at\" TIMESTAMP WITH TIME ZONE, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"completed_at\" TIMESTAMP WITH TIME ZONE, \"metadata\" jsonb, \"idempotency_key\" character varying, CONSTRAINT \"REL_5bd11d0e2a9628128e2c26fd0a\" UNIQUE (\"cart_id\"), CONSTRAINT \"REL_8f6dd6c49202f1466ebf21e77d\" UNIQUE (\"order_id\"), CONSTRAINT \"PK_f478946c183d98f8d88a94cfcd7\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_e87cc617a22ef4edce5601edab\" ON \"draft_order\" (\"display_id\") ")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_5bd11d0e2a9628128e2c26fd0a\" ON \"draft_order\" (\"cart_id\") ")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_8f6dd6c49202f1466ebf21e77d\" ON \"draft_order\" (\"order_id\") ")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD \"draft_order_id\" character varying")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD CONSTRAINT \"UQ_727b872f86c7378474a8fa46147\" UNIQUE (\"draft_order_id\")")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"cart_type_enum\" RENAME TO \"cart_type_enum_old\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"cart_type_enum\" AS ENUM('default', 'swap', 'draft_order', 'payment_link')")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" DROP DEFAULT")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" TYPE \"cart_type_enum\" USING \"type\"::\"text\"::\"cart_type_enum\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" SET DEFAULT 'default'")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"cart_type_enum_old\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"cart\".\"type\" IS NULL")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"draft_order\" ADD CONSTRAINT \"FK_5bd11d0e2a9628128e2c26fd0a6\" FOREIGN KEY (\"cart_id\") REFERENCES \"cart\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"draft_order\" ADD CONSTRAINT \"FK_8f6dd6c49202f1466ebf21e77da\" FOREIGN KEY (\"order_id\") REFERENCES \"order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD CONSTRAINT \"FK_727b872f86c7378474a8fa46147\" FOREIGN KEY (\"draft_order_id\") REFERENCES \"draft_order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"store\" ADD \"payment_link_template\" character varying")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_option\" ADD \"admin_only\" boolean NOT NULL DEFAULT false")];
                    case 19:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    draftOrders1613384784316.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP CONSTRAINT \"FK_727b872f86c7378474a8fa46147\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"draft_order\" DROP CONSTRAINT \"FK_8f6dd6c49202f1466ebf21e77da\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"draft_order\" DROP CONSTRAINT \"FK_5bd11d0e2a9628128e2c26fd0a6\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"cart\".\"type\" IS NULL")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"cart_type_enum_old\" AS ENUM('default', 'swap', 'payment_link')")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" DROP DEFAULT")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" TYPE \"cart_type_enum_old\" USING \"type\"::\"text\"::\"cart_type_enum_old\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart\" ALTER COLUMN \"type\" SET DEFAULT 'default'")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"cart_type_enum\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TYPE \"cart_type_enum_old\" RENAME TO  \"cart_type_enum\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP CONSTRAINT \"UQ_727b872f86c7378474a8fa46147\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP COLUMN \"draft_order_id\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_8f6dd6c49202f1466ebf21e77d\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_5bd11d0e2a9628128e2c26fd0a\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_e87cc617a22ef4edce5601edab\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"draft_order\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"draft_order_status_enum\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"store\" DROP COLUMN \"payment_link_template\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"shipping_option\" DROP COLUMN \"admin_only\"")];
                    case 19:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return draftOrders1613384784316;
}());
exports.draftOrders1613384784316 = draftOrders1613384784316;
//# sourceMappingURL=1613384784316-draft_orders.js.map