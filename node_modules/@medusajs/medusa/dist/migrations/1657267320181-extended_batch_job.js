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
exports.extendedBatchJob1657267320181 = void 0;
var extendedBatchJob1657267320181 = /** @class */ (function () {
    function extendedBatchJob1657267320181() {
        this.name = "extendedBatchJob1657267320181";
    }
    extendedBatchJob1657267320181.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var batchJobColumnStatusExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      SELECT exists (\n        SELECT FROM information_schema.columns\n        WHERE  table_name = 'batch_job'\n        AND    column_name   = 'status'\n      )")
                        // if the table exists, we alter the table to add the new columns
                    ];
                    case 1:
                        batchJobColumnStatusExists = _a.sent();
                        if (!batchJobColumnStatusExists[0].exists) return [3 /*break*/, 3];
                        return [4 /*yield*/, queryRunner.query("\n        ALTER TABLE \"batch_job\" DROP COLUMN \"status\";\n        DROP TYPE \"batch_job_status_enum\";\n        ALTER TABLE \"batch_job\" ADD \"dry_run\" boolean NOT NULL DEFAULT false;\n        ALTER TABLE \"batch_job\" ADD \"pre_processed_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" ADD \"processing_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" ADD \"confirmed_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" ADD \"completed_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" ADD \"canceled_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" ADD \"failed_at\" TIMESTAMP WITH TIME ZONE;\n        ALTER TABLE \"batch_job\" DROP COLUMN \"created_by\";\n        ALTER TABLE \"batch_job\" ADD \"created_by\" character varying;\n        ALTER TABLE \"batch_job\" ADD CONSTRAINT \"FK_cdf30493ba1c9ef207e1e80c10a\" FOREIGN KEY (\"created_by\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n        ")];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    extendedBatchJob1657267320181.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                void 0;
                return [2 /*return*/];
            });
        });
    };
    return extendedBatchJob1657267320181;
}());
exports.extendedBatchJob1657267320181 = extendedBatchJob1657267320181;
//# sourceMappingURL=1657267320181-extended_batch_job.js.map