"use strict";
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
exports.AdminGetNotificationsParams = void 0;
var class_validator_1 = require("class-validator");
var _1 = require("./");
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [get] /admin/notifications
 * operationId: "GetNotifications"
 * summary: "List Notifications"
 * description: "Retrieve a list of notifications. The notifications can be filtered by fields such as `event_name` or `resource_type`. The notifications can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} The number of inventory items to skip when retrieving the inventory items.
 *   - (query) limit=50 {integer} Limit the number of notifications returned.
 *   - (query) fields {string} Comma-separated fields that should be included in each returned notification.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned notification.
 *   - (query) event_name {string} Filter by the name of the event that triggered sending this notification.
 *   - (query) resource_type {string} Filter by the resource type.
 *   - (query) resource_id {string} Filter by the resource ID.
 *   - (query) to {string} Filter by the address that the Notification was sent to. This will usually be an email address, but it can also represent other addresses such as a chat bot user id.
 *   - (query) include_resends {string} A boolean indicating whether the result set should include resent notifications or not
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetNotificationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notifications.list()
 *       .then(({ notifications }) => {
 *         console.log(notifications.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminNotifications } from "medusa-react"
 *
 *       const Notifications = () => {
 *         const { notifications, isLoading } = useAdminNotifications()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {notifications && !notifications.length && (
 *               <span>No Notifications</span>
 *             )}
 *             {notifications && notifications.length > 0 && (
 *               <ul>
 *                 {notifications.map((notification) => (
 *                   <li key={notification.id}>{notification.to}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Notifications
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/notifications' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notifications
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotificationsListRes"
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
    var notificationService, _a, limit, offset, fields, expand, event_name, resource_id, resource_type, to, include_resends, selector, includeFields, expandFields, values, values, values, values, listConfig, _b, notifications, count, resultFields, data;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                notificationService = req.scope.resolve("notificationService");
                return [4 /*yield*/, (0, validator_1.validator)(AdminGetNotificationsParams, req.query)];
            case 1:
                _a = _e.sent(), limit = _a.limit, offset = _a.offset, fields = _a.fields, expand = _a.expand, event_name = _a.event_name, resource_id = _a.resource_id, resource_type = _a.resource_type, to = _a.to, include_resends = _a.include_resends;
                selector = {};
                includeFields = [];
                if (fields) {
                    includeFields = fields.split(",");
                }
                expandFields = [];
                if (expand) {
                    expandFields = expand.split(",");
                }
                if (event_name) {
                    values = event_name.split(",");
                    selector.event_name = values.length > 1 ? values : values[0];
                }
                if (resource_type) {
                    values = resource_type.split(",");
                    selector.resource_type = values.length > 1 ? values : values[0];
                }
                if (resource_id) {
                    values = resource_id.split(",");
                    selector.resource_id = values.length > 1 ? values : values[0];
                }
                if (to) {
                    values = to.split(",");
                    selector.to = values.length > 1 ? values : values[0];
                }
                if (!include_resends || include_resends === "false") {
                    selector.parent_id = null;
                }
                listConfig = {
                    select: (includeFields.length
                        ? includeFields
                        : _1.defaultAdminNotificationsFields),
                    relations: expandFields.length
                        ? expandFields
                        : _1.defaultAdminNotificationsRelations,
                    skip: offset,
                    take: limit,
                    order: { created_at: "DESC" },
                };
                return [4 /*yield*/, notificationService.listAndCount(selector, listConfig)];
            case 2:
                _b = __read.apply(void 0, [_e.sent(), 2]), notifications = _b[0], count = _b[1];
                resultFields = __spreadArray(__spreadArray([], __read(((_c = listConfig.select) !== null && _c !== void 0 ? _c : [])), false), __read(((_d = listConfig.relations) !== null && _d !== void 0 ? _d : [])), false);
                data = notifications.map(function (o) { return (0, lodash_1.pick)(o, resultFields); });
                res.json({ notifications: data, count: count, limit: limit, offset: offset });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved notifications.
 */
var AdminGetNotificationsParams = /** @class */ (function () {
    function AdminGetNotificationsParams() {
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 50
         */
        this.limit = 50;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        this.offset = 0;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetNotificationsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], AdminGetNotificationsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "fields", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "event_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "resource_type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "resource_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "to", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBooleanString)(),
        __metadata("design:type", String)
    ], AdminGetNotificationsParams.prototype, "include_resends", void 0);
    return AdminGetNotificationsParams;
}());
exports.AdminGetNotificationsParams = AdminGetNotificationsParams;
//# sourceMappingURL=list-notifications.js.map