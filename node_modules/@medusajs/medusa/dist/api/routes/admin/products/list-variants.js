"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetProductsVariantsParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var common_1 = require("../../../../types/common");
var utils_1 = require("../../../../utils");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
/**
 * @oas [get] /admin/products/{id}/variants
 * operationId: "GetProductsProductVariants"
 * summary: "List a Product's Variants"
 * description: |
 *   Retrieve a list of Product Variants associated with a Product. The variants can be paginated.
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} ID of the product.
 *   - (query) id {string} IDs to filter product variants by.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product variants.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product variants.
 *   - (query) offset=0 {integer} The number of product variants to skip when retrieving the product variants.
 *   - (query) limit=100 {integer} Limit the number of product variants returned.
 *   - (query) q {string} Search term to search product variants' title, sku, and products' title.
 *   - (query) order {string} The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *   - (query) manage_inventory {boolean} Filter product variants by whether their inventory is managed or not.
 *   - (query) allow_backorder {boolean} Filter product variants by whether they are allowed to be backordered or not.
 *   - in: query
 *     name: inventory_quantity
 *     description: Filter by available inventory quantity
 *     schema:
 *       oneOf:
 *         - type: number
 *           description: a specific number to filter by.
 *         - type: object
 *           description: filter using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: filter by inventory quantity greater than or equal to this number
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 * x-codegen:
 *   method: listVariants
 *   queryParams: AdminGetProductsVariantsParams
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/products/{id}/variants' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsListVariantsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, productVariantService, _a, skip, take, _b, variants, count;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = req.params.id;
                productVariantService = req.scope.resolve("productVariantService");
                _a = req.listConfig, skip = _a.skip, take = _a.take;
                return [4 /*yield*/, productVariantService.listAndCount(__assign({ product_id: id }, req.filterableFields), req.listConfig)];
            case 1:
                _b = __read.apply(void 0, [_c.sent(), 2]), variants = _b[0], count = _b[1];
                res.json({
                    count: count,
                    variants: variants,
                    offset: skip,
                    limit: take,
                });
                return [2 /*return*/];
        }
    });
}); });
var AdminGetProductsVariantsParams = /** @class */ (function () {
    function AdminGetProductsVariantsParams() {
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        this.offset = 0;
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 100
         */
        this.limit = 100;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetProductsVariantsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductsVariantsParams.prototype, "fields", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductsVariantsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetProductsVariantsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetProductsVariantsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductsVariantsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetProductsVariantsParams.prototype, "order", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], AdminGetProductsVariantsParams.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], AdminGetProductsVariantsParams.prototype, "manage_inventory", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], AdminGetProductsVariantsParams.prototype, "allow_backorder", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the product variants' `updated_at` date.
         */
        )
    ], AdminGetProductsVariantsParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], AdminGetProductsVariantsParams.prototype, "updated_at", void 0);
    return AdminGetProductsVariantsParams;
}());
exports.AdminGetProductsVariantsParams = AdminGetProductsVariantsParams;
//# sourceMappingURL=list-variants.js.map