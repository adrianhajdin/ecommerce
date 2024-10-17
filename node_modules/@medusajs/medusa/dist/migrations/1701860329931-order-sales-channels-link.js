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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSalesChannelLink1701860329931 = exports.featureFlag = void 0;
var utils_1 = require("@medusajs/utils");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
exports.featureFlag = [sales_channels_1.default.key, utils_1.MedusaV2Flag.key];
var OrderSalesChannelLink1701860329931 = /** @class */ (function () {
    function OrderSalesChannelLink1701860329931() {
    }
    OrderSalesChannelLink1701860329931.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        CREATE TABLE IF NOT EXISTS \"order_sales_channel\"\n        (\n            \"id\"                character varying        NOT NULL,\n            \"order_id\"          character varying        NOT NULL,\n            \"sales_channel_id\"  character varying        NOT NULL,\n            \"created_at\"        TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),\n            \"updated_at\"        TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),\n            \"deleted_at\"        TIMESTAMP WITH TIME ZONE,\n                                CONSTRAINT \"order_sales_channel_pk\" PRIMARY KEY (\"order_id\", \"sales_channel_id\"),\n                                CONSTRAINT \"order_sales_channel_order_id_unique\"  UNIQUE (\"order_id\")\n            );\n        CREATE INDEX IF NOT EXISTS \"IDX_id_order_sales_channel\" ON \"order_sales_channel\" (\"id\");\n\n        insert into \"order_sales_channel\" (id, order_id, sales_channel_id)\n            (select 'ordersc_' || substr(md5(random()::text), 0, 27), id, sales_channel_id from \"order\" WHERE sales_channel_id IS NOT NULL);\n\n        ALTER TABLE \"order\" DROP CONSTRAINT IF EXISTS \"FK_6ff7e874f01b478c115fdd462eb\";\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderSalesChannelLink1701860329931.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        UPDATE \"order\" \n            SET \"sales_channel_id\" = \"order_sales_channel\".\"sales_channel_id\"\n            FROM \"order_sales_channel\"\n            WHERE \"order\".\"id\" = \"order_sales_channel\".\"order_id\";\n\n        DROP TABLE IF EXISTS \"order_sales_channel\";\n\n        ALTER TABLE \"order\" ADD CONSTRAINT \"FK_6ff7e874f01b478c115fdd462eb\" FOREIGN KEY (\"sales_channel_id\") REFERENCES \"sales_channel\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OrderSalesChannelLink1701860329931;
}());
exports.OrderSalesChannelLink1701860329931 = OrderSalesChannelLink1701860329931;
//# sourceMappingURL=1701860329931-order-sales-channels-link.js.map