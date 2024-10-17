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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetReservationsParams = void 0;
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var is_type_1 = require("../../../../utils/validators/is-type");
var join_inventory_items_1 = require("./utils/join-inventory-items");
var join_line_items_1 = require("./utils/join-line-items");
/**
 * @oas [get] /admin/reservations
 * operationId: "GetReservations"
 * summary: "List Reservations"
 * description: "Retrieve a list of Reservations. The reservations can be filtered by fields such as `location_id` or `quantity`. The reservations can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Filter by location ID
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: inventory_item_id
 *     style: form
 *     explode: false
 *     description: Filter by inventory item ID.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: line_item_id
 *     style: form
 *     explode: false
 *     description: Filter by line item ID.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: quantity
 *     description: Filter by reservation quantity
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *           type: number
 *           description: filter by reservation quantity less than this number
 *         gt:
 *           type: number
 *           description: filter by reservation quantity greater than this number
 *         lte:
 *           type: number
 *           description: filter by reservation quantity less than or equal to this number
 *         gte:
 *           type: number
 *           description: filter by reservation quantity greater than or equal to this number
 *   - in: query
 *     name: description
 *     description: Filter by description.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: description value to filter by.
 *         - type: object
 *           properties:
 *             contains:
 *               type: string
 *               description: filter by reservation description containing search string.
 *             starts_with:
 *               type: string
 *               description: filter by reservation description starting with search string.
 *             ends_with:
 *               type: string
 *               description: filter by reservation description ending with search string.
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
 *   - (query) offset=0 {integer} The number of reservations to skip when retrieving the reservations.
 *   - (query) limit=20 {integer} Limit the number of reservations returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned reservations.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned reservations.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetReservationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.reservations.list()
 *       .then(({ reservations, count, limit, offset }) => {
 *         console.log(reservations.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminReservations } from "medusa-react"
 *
 *       const Reservations = () => {
 *         const { reservations, isLoading } = useAdminReservations()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {reservations && !reservations.length && (
 *               <span>No Reservations</span>
 *             )}
 *             {reservations && reservations.length > 0 && (
 *               <ul>
 *                 {reservations.map((reservation) => (
 *                   <li key={reservation.id}>{reservation.quantity}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Reservations
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Reservations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReservationsListRes"
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
    var inventoryService, manager, filterableFields, listConfig, relations, includeItems, includeInventoryItems, _a, reservations, count, promises, lineItemService, _b, limit, offset;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                inventoryService = req.scope.resolve("inventoryService");
                manager = req.scope.resolve("manager");
                filterableFields = req.filterableFields, listConfig = req.listConfig;
                relations = new Set((_c = listConfig.relations) !== null && _c !== void 0 ? _c : []);
                includeItems = relations.delete("line_item");
                includeInventoryItems = relations.delete("inventory_item");
                if ((_d = listConfig.relations) === null || _d === void 0 ? void 0 : _d.length) {
                    listConfig.relations = __spreadArray([], __read(relations), false);
                }
                return [4 /*yield*/, inventoryService.listReservationItems(filterableFields, listConfig, {
                        transactionManager: manager,
                    })];
            case 1:
                _a = __read.apply(void 0, [_e.sent(), 2]), reservations = _a[0], count = _a[1];
                promises = [];
                if (includeInventoryItems) {
                    promises.push((0, join_inventory_items_1.joinInventoryItems)(reservations, {
                        inventoryService: inventoryService,
                        manager: manager,
                    }));
                }
                if (includeItems) {
                    lineItemService = req.scope.resolve("lineItemService");
                    promises.push((0, join_line_items_1.joinLineItems)(reservations, lineItemService));
                }
                return [4 /*yield*/, (0, utils_1.promiseAll)(promises)];
            case 2:
                _e.sent();
                _b = req.validatedQuery, limit = _b.limit, offset = _b.offset;
                res.json({ reservations: reservations, count: count, limit: limit, offset: offset });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved reservations.
 */
var AdminGetReservationsParams = /** @class */ (function (_super) {
    __extends(AdminGetReservationsParams, _super);
    function AdminGetReservationsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminGetReservationsParams.prototype, "location_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminGetReservationsParams.prototype, "inventory_item_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminGetReservationsParams.prototype, "line_item_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminGetReservationsParams.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.NumericalComparisonOperator; }),
        __metadata("design:type", common_1.NumericalComparisonOperator
        /**
         * Date filters to apply on the reservations' `created_at` field.
         */
        )
    ], AdminGetReservationsParams.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the reservations' `updated_at` field.
         */
        )
    ], AdminGetReservationsParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * String filters to apply on the reservations' `description` field.
         */
        )
    ], AdminGetReservationsParams.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.StringComparisonOperator, String]),
        __metadata("design:type", Object)
    ], AdminGetReservationsParams.prototype, "description", void 0);
    return AdminGetReservationsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 20,
    offset: 0,
})));
exports.AdminGetReservationsParams = AdminGetReservationsParams;
//# sourceMappingURL=list-reservations.js.map