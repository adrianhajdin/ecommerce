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
exports.ProductSalesChannelsLink1698056997411 = exports.featureFlag = void 0;
var utils_1 = require("@medusajs/utils");
exports.featureFlag = utils_1.MedusaV2Flag.key;
var ProductSalesChannelsLink1698056997411 = /** @class */ (function () {
    function ProductSalesChannelsLink1698056997411() {
    }
    ProductSalesChannelsLink1698056997411.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        ALTER TABLE \"product_sales_channel\" ADD COLUMN IF NOT EXISTS \"id\" text;\n        UPDATE \"product_sales_channel\" SET \"id\" = 'prodsc_' || substr(md5(random()::text), 0, 27) WHERE id is NULL;\n        ALTER TABLE \"product_sales_channel\" ALTER COLUMN \"id\" SET NOT NULL;\n\n        ALTER TABLE \"product_sales_channel\" DROP CONSTRAINT IF EXISTS \"PK_fd29b6a8bd641052628dee19583\";\n        ALTER TABLE \"product_sales_channel\" ADD CONSTRAINT \"product_sales_channel_pk\" PRIMARY KEY (id);\n        ALTER TABLE \"product_sales_channel\" ADD CONSTRAINT \"product_sales_channel_product_id_sales_channel_id_unique\" UNIQUE (product_id, sales_channel_id);\n\n        ALTER TABLE \"product_sales_channel\" ADD COLUMN IF NOT EXISTS \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();\n        ALTER TABLE \"product_sales_channel\" ADD COLUMN IF NOT EXISTS \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();\n        ALTER TABLE \"product_sales_channel\" ADD COLUMN IF NOT EXISTS \"deleted_at\" TIMESTAMP WITH TIME ZONE;\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductSalesChannelsLink1698056997411.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n        ALTER TABLE product_sales_channel DROP CONSTRAINT IF EXISTS \"product_sales_channel_pk\";\n        ALTER TABLE product_sales_channel DROP CONSTRAINT IF EXISTS \"product_sales_channel_product_id_sales_channel_id_unique\";\n        ALTER TABLE product_sales_channel drop column if exists \"id\";\n\n        ALTER TABLE \"product_sales_channel\" DROP COLUMN IF EXISTS \"created_at\";\n        ALTER TABLE \"product_sales_channel\" DROP COLUMN IF EXISTS \"updated_at\";\n        ALTER TABLE \"product_sales_channel\" DROP COLUMN IF EXISTS \"deleted_at\";\n\n        ALTER TABLE product_sales_channel ADD CONSTRAINT \"PK_product_sales_channel\" PRIMARY KEY (product_id, sales_channel_id);\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductSalesChannelsLink1698056997411;
}());
exports.ProductSalesChannelsLink1698056997411 = ProductSalesChannelsLink1698056997411;
//# sourceMappingURL=1698056997411-product-sales-channels-link.js.map