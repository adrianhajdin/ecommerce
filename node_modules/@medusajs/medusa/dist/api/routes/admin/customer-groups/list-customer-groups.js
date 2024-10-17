"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AdminGetCustomerGroupsParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var customer_groups_1 = require("../../../../types/customer-groups");
/**
 * @oas [get] /admin/customer-groups
 * operationId: "GetCustomerGroups"
 * summary: "List Customer Groups"
 * description: "Retrieve a list of customer groups. The customer groups can be filtered by fields such as `name` or `id. The customer groups can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search customer groups by name.
 *   - (query) offset=0 {integer} The number of customer groups to skip when retrieving the customer groups.
 *   - (query) order {string} A field to sort order the retrieved customer groups by.
 *   - (query) discount_condition_id {string} Filter by discount condition ID.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by the customer group ID
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: customer group ID
 *         - type: array
 *           description: an array of customer group IDs
 *           items:
 *             type: string
 *         - type: object
 *           properties:
 *             lt:
 *               type: string
 *               description: filter by IDs less than this ID
 *             gt:
 *               type: string
 *               description: filter by IDs greater than this ID
 *             lte:
 *               type: string
 *               description: filter by IDs less than or equal to this ID
 *             gte:
 *               type: string
 *               description: filter by IDs greater than or equal to this ID
 *   - in: query
 *     name: name
 *     style: form
 *     explode: false
 *     description: Filter by the customer group name
 *     schema:
 *       type: array
 *       description: an array of customer group names
 *       items:
 *         type: string
 *         description: customer group name
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
 *   - (query) limit=10 {integer} The number of customer groups to return.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned customer groups.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned customer groups.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetCustomerGroupsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.list()
 *       .then(({ customer_groups, limit, offset, count }) => {
 *         console.log(customer_groups.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCustomerGroups } from "medusa-react"
 *
 *       const CustomerGroups = () => {
 *         const {
 *           customer_groups,
 *           isLoading,
 *         } = useAdminCustomerGroups()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {customer_groups && !customer_groups.length && (
 *               <span>No Customer Groups</span>
 *             )}
 *             {customer_groups && customer_groups.length > 0 && (
 *               <ul>
 *                 {customer_groups.map(
 *                   (customerGroup) => (
 *                     <li key={customerGroup.id}>
 *                       {customerGroup.name}
 *                     </li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default CustomerGroups
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/customer-groups' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customer Groups
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomerGroupsListRes"
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
    var customerGroupService, _a, data, count, _b, limit, offset;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                customerGroupService = req.scope.resolve("customerGroupService");
                return [4 /*yield*/, customerGroupService.listAndCount(req.filterableFields, req.listConfig)];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 2]), data = _a[0], count = _a[1];
                _b = req.validatedQuery, limit = _b.limit, offset = _b.offset;
                res.json({
                    count: count,
                    customer_groups: data,
                    offset: offset,
                    limit: limit,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved customer groups.
 */
var AdminGetCustomerGroupsParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomerGroupsParams, _super);
    function AdminGetCustomerGroupsParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         */
        _this.offset = 0;
        /**
         * {@inheritDoc FindPaginationParams.limit}
         */
        _this.limit = 10;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCustomerGroupsParams.prototype, "order", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetCustomerGroupsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetCustomerGroupsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCustomerGroupsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCustomerGroupsParams.prototype, "fields", void 0);
    return AdminGetCustomerGroupsParams;
}(customer_groups_1.FilterableCustomerGroupProps));
exports.AdminGetCustomerGroupsParams = AdminGetCustomerGroupsParams;
//# sourceMappingURL=list-customer-groups.js.map