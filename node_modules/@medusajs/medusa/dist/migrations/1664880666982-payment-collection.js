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
exports.paymentCollection1664880666982 = void 0;
var paymentCollection1664880666982 = /** @class */ (function () {
    function paymentCollection1664880666982() {
        this.name = "paymentCollection1664880666982";
    }
    paymentCollection1664880666982.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        CREATE TYPE \"PAYMENT_COLLECTION_TYPE_ENUM\" AS ENUM ('order_edit');\n\n        CREATE TYPE \"PAYMENT_COLLECTION_STATUS_ENUM\" AS ENUM (\n            'not_paid', 'awaiting', 'authorized',\n            'partially_authorized', 'canceled'\n        );\n\n        CREATE TABLE IF NOT EXISTS payment_collection\n        (\n            id character varying NOT NULL,\n            created_at timestamp WITH time zone NOT NULL DEFAULT Now(),\n            updated_at timestamp WITH time zone NOT NULL DEFAULT Now(),\n            deleted_at timestamp WITH time zone NULL,\n            type \"PAYMENT_COLLECTION_TYPE_ENUM\" NOT NULL,\n            status \"PAYMENT_COLLECTION_STATUS_ENUM\" NOT NULL,\n            description text NULL,\n            amount integer NOT NULL,\n            authorized_amount integer NULL,\n            region_id character varying NOT NULL,\n            currency_code character varying NOT NULL,\n            metadata jsonb NULL,\n            created_by character varying NOT NULL,\n            CONSTRAINT \"PK_payment_collection_id\" PRIMARY KEY (\"id\")\n        );\n        CREATE INDEX \"IDX_payment_collection_region_id\" ON \"payment_collection\" (\"region_id\") WHERE deleted_at IS NULL;\n        CREATE INDEX \"IDX_payment_collection_currency_code\" ON \"payment_collection\" (\"currency_code\") WHERE deleted_at IS NULL;\n\n        ALTER TABLE \"payment_collection\" ADD CONSTRAINT \"FK_payment_collection_region_id\" FOREIGN KEY (\"region_id\") REFERENCES \"region\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n\n\n        CREATE TABLE payment_collection_sessions\n        (\n            payment_collection_id CHARACTER VARYING NOT NULL,\n            payment_session_id  CHARACTER VARYING NOT NULL,\n            CONSTRAINT \"PK_payment_collection_sessions\" PRIMARY KEY (\"payment_collection_id\", \"payment_session_id\")\n        );\n        CREATE INDEX \"IDX_payment_collection_sessions_payment_collection_id\" ON \"payment_collection_sessions\" (\"payment_collection_id\");\n        CREATE INDEX \"IDX_payment_collection_sessions_payment_session_id\" ON \"payment_collection_sessions\" (\"payment_session_id\");\n\n        ALTER TABLE \"payment_collection_sessions\" ADD CONSTRAINT \"FK_payment_collection_sessions_payment_collection_id\" FOREIGN KEY (\"payment_collection_id\") REFERENCES \"payment_collection\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION;\n        ALTER TABLE \"payment_collection_sessions\" ADD CONSTRAINT \"FK_payment_collection_sessions_payment_session_id\" FOREIGN KEY (\"payment_session_id\") REFERENCES \"payment_session\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION;\n\n\n        CREATE TABLE payment_collection_payments\n        (\n            payment_collection_id CHARACTER VARYING NOT NULL,\n            payment_id  CHARACTER VARYING NOT NULL,\n            CONSTRAINT \"PK_payment_collection_payments\" PRIMARY KEY (\"payment_collection_id\", \"payment_id\")\n        );\n        CREATE INDEX \"IDX_payment_collection_payments_payment_collection_id\" ON \"payment_collection_payments\" (\"payment_collection_id\");\n        CREATE INDEX \"IDX_payment_collection_payments_payment_id\" ON \"payment_collection_payments\" (\"payment_id\");\n\n        ALTER TABLE \"payment_collection_payments\" ADD CONSTRAINT \"FK_payment_collection_payments_payment_collection_id\" FOREIGN KEY (\"payment_collection_id\") REFERENCES \"payment_collection\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION;\n        ALTER TABLE \"payment_collection_payments\" ADD CONSTRAINT \"FK_payment_collection_payments_payment_id\" FOREIGN KEY (\"payment_id\") REFERENCES \"payment\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION;\n\n\n        ALTER TABLE order_edit ADD COLUMN payment_collection_id character varying NULL;\n        CREATE INDEX \"IDX_order_edit_payment_collection_id\" ON \"order_edit\" (\"payment_collection_id\");\n        ALTER TABLE \"order_edit\" ADD CONSTRAINT \"FK_order_edit_payment_collection_id\" FOREIGN KEY (\"payment_collection_id\") REFERENCES \"payment_collection\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n\n        ALTER TABLE payment_session ADD COLUMN payment_authorized_at timestamp WITH time zone NULL;\n        ALTER TABLE payment_session ADD COLUMN amount integer NULL;\n        ALTER TABLE payment_session ALTER COLUMN cart_id DROP NOT NULL;\n\n        ALTER TABLE refund ADD COLUMN payment_id character varying NULL;\n        CREATE INDEX \"IDX_refund_payment_id\" ON \"refund\" (\"payment_id\");\n        ALTER TABLE \"refund\" ADD CONSTRAINT \"FK_refund_payment_id\" FOREIGN KEY (\"payment_id\") REFERENCES \"payment\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n        ALTER TABLE refund ALTER COLUMN order_id DROP NOT NULL;\n    ")
                        // Add missing indexes
                    ];
                    case 1:
                        _a.sent();
                        // Add missing indexes
                        return [4 /*yield*/, queryRunner.query("\n        CREATE INDEX \"IDX_order_edit_order_id\" ON \"order_edit\" (\"order_id\");\n        CREATE INDEX \"IDX_money_amount_currency_code\" ON \"money_amount\" (\"currency_code\");\n        CREATE INDEX \"IDX_order_currency_code\" ON \"order\" (\"currency_code\");\n        CREATE INDEX \"IDX_payment_currency_code\" ON \"payment\" (\"currency_code\");\n        CREATE INDEX \"IDX_region_currency_code\" ON \"region\" (\"currency_code\");\n    ")];
                    case 2:
                        // Add missing indexes
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    paymentCollection1664880666982.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        DROP INDEX \"IDX_order_edit_payment_collection_id\";\n        ALTER TABLE order_edit DROP CONSTRAINT \"FK_order_edit_payment_collection_id\";\n\n        DROP INDEX \"IDX_refund_payment_id\";\n        ALTER TABLE refund DROP CONSTRAINT \"FK_refund_payment_id\";\n        ALTER TABLE refund ALTER COLUMN order_id SET NOT NULL;\n\n        ALTER TABLE payment_collection DROP CONSTRAINT \"FK_payment_collection_region_id\";\n        ALTER TABLE payment_collection_sessions DROP CONSTRAINT \"FK_payment_collection_sessions_payment_collection_id\";\n        ALTER TABLE payment_collection_sessions DROP CONSTRAINT \"FK_payment_collection_sessions_payment_session_id\";\n        ALTER TABLE payment_collection_payments DROP CONSTRAINT \"FK_payment_collection_payments_payment_collection_id\";\n        ALTER TABLE payment_collection_payments DROP CONSTRAINT \"FK_payment_collection_payments_payment_id\";\n        ALTER TABLE order_edit DROP COLUMN payment_collection_id;\n        ALTER TABLE payment_session DROP COLUMN payment_authorized_at;\n        ALTER TABLE payment_session DROP COLUMN amount;\n        ALTER TABLE payment_session ALTER COLUMN cart_id SET NOT NULL;\n        ALTER TABLE refund DROP COLUMN payment_id;\n\n        DROP TABLE payment_collection;\n        DROP TABLE payment_collection_sessions;\n        DROP TABLE payment_collection_payments;\n\n        DROP TYPE \"PAYMENT_COLLECTION_TYPE_ENUM\";\n        DROP TYPE \"PAYMENT_COLLECTION_STATUS_ENUM\";\n    ")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("\n        DROP INDEX \"IDX_order_edit_order_id\";\n        DROP INDEX \"IDX_money_amount_currency_code\";\n        DROP INDEX \"IDX_order_currency_code\";\n        DROP INDEX \"IDX_payment_currency_code\";\n        DROP INDEX \"IDX_region_currency_code\";\n    ")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return paymentCollection1664880666982;
}());
exports.paymentCollection1664880666982 = paymentCollection1664880666982;
//# sourceMappingURL=1664880666982-payment-collection.js.map