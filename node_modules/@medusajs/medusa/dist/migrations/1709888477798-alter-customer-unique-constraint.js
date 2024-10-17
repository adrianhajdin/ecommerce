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
exports.AlterCustomerUniqueConstraint1709888477798 = void 0;
var AlterCustomerUniqueConstraint1709888477798 = /** @class */ (function () {
    function AlterCustomerUniqueConstraint1709888477798() {
    }
    AlterCustomerUniqueConstraint1709888477798.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      ALTER TABLE \"customer\" DROP CONSTRAINT \"UQ_unique_email_for_guests_and_customer_accounts\";\n\n      CREATE UNIQUE INDEX \"IDX_unique_email_for_guests_and_customer_accounts\" ON \"customer\" (\"email\", \"has_account\") WHERE \"deleted_at\" IS NULL;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlterCustomerUniqueConstraint1709888477798.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // ensure we dont have duplicated email,has_account to avoid violation of the previous unique constraint
                    return [4 /*yield*/, queryRunner.query("\n      WITH RankedCustomers AS (\n        SELECT\n          id,\n          ROW_NUMBER() OVER (\n            PARTITION BY email, has_account\n            ORDER BY CASE WHEN deleted_at IS NULL THEN 0 ELSE 1 END, id\n          ) AS rn\n        FROM\n          customer\n      )\n      DELETE FROM customer\n      WHERE id IN (\n        SELECT id FROM RankedCustomers WHERE rn > 1\n      );\n    ")];
                    case 1:
                        // ensure we dont have duplicated email,has_account to avoid violation of the previous unique constraint
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("\n      DROP INDEX \"IDX_unique_email_for_guests_and_customer_accounts\";\n\n      ALTER TABLE \"customer\" ADD CONSTRAINT \"UQ_unique_email_for_guests_and_customer_accounts\" UNIQUE (\"email\", \"has_account\");\n    ")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AlterCustomerUniqueConstraint1709888477798;
}());
exports.AlterCustomerUniqueConstraint1709888477798 = AlterCustomerUniqueConstraint1709888477798;
//# sourceMappingURL=1709888477798-alter-customer-unique-constraint.js.map