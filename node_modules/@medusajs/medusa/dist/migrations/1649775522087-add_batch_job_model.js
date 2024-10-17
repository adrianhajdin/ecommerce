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
exports.addBatchJobModel1649775522087 = void 0;
var addBatchJobModel1649775522087 = /** @class */ (function () {
    function addBatchJobModel1649775522087() {
        this.name = "addBatchJobModel1649775522087";
    }
    addBatchJobModel1649775522087.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"batch_job\"\n         (\n             \"id\"                       character varying                NOT NULL,\n             \"type\"                     text                             NOT NULL,\n             \"created_by\"               character varying,\n             \"context\"                  jsonb,\n             \"result\"                   jsonb,\n             \"dry_run\"                  boolean                          NOT NULL DEFAULT FALSE,\n             \"created_at\"               TIMESTAMP WITH TIME ZONE         NOT NULL DEFAULT now(),\n             \"pre_processed_at\"            TIMESTAMP WITH TIME ZONE,\n             \"confirmed_at\"             TIMESTAMP WITH TIME ZONE,\n             \"processing_at\"            TIMESTAMP WITH TIME ZONE,\n             \"completed_at\"             TIMESTAMP WITH TIME ZONE,\n             \"failed_at\"                TIMESTAMP WITH TIME ZONE,\n             \"canceled_at\"              TIMESTAMP WITH TIME ZONE,\n             \"updated_at\"               TIMESTAMP WITH TIME ZONE         NOT NULL DEFAULT now(),\n             \"deleted_at\"               TIMESTAMP WITH TIME ZONE,\n             CONSTRAINT \"PK_e57f84d485145d5be96bc6d871e\" PRIMARY KEY (\"id\")\n         )")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"batch_job\"\n                ADD CONSTRAINT \"FK_fa53ca4f5fd90605b532802a626\" FOREIGN KEY (\"created_by\") REFERENCES \"user\" (\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    addBatchJobModel1649775522087.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"batch_job\"\n                DROP CONSTRAINT \"FK_fa53ca4f5fd90605b532802a626\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"batch_job\"")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return addBatchJobModel1649775522087;
}());
exports.addBatchJobModel1649775522087 = addBatchJobModel1649775522087;
//# sourceMappingURL=1649775522087-add_batch_job_model.js.map