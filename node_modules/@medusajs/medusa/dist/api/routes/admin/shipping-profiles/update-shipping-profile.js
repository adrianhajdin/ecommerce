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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostShippingProfilesProfileReq = void 0;
var class_validator_1 = require("class-validator");
var models_1 = require("../../../../models");
var validator_1 = require("../../../../utils/validator");
var _1 = require(".");
/**
 * @oas [post] /admin/shipping-profiles/{id}
 * operationId: "PostShippingProfilesProfile"
 * summary: "Update a Shipping Profile"
 * description: "Update a Shipping Profile's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Shipping Profile.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostShippingProfilesProfileReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingProfiles.update(shippingProfileId, {
 *         name: 'Large Products'
 *       })
 *       .then(({ shipping_profile }) => {
 *         console.log(shipping_profile.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { ShippingProfileType } from "@medusajs/medusa"
 *       import { useAdminUpdateShippingProfile } from "medusa-react"
 *
 *       type Props = {
 *         shippingProfileId: string
 *       }
 *
 *       const ShippingProfile = ({ shippingProfileId }: Props) => {
 *         const updateShippingProfile = useAdminUpdateShippingProfile(
 *           shippingProfileId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           name: string,
 *           type: ShippingProfileType
 *         ) => {
 *           updateShippingProfile.mutate({
 *             name,
 *             type
 *           }, {
 *             onSuccess: ({ shipping_profile }) => {
 *               console.log(shipping_profile.name)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ShippingProfile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/shipping-profiles/{id} \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Large Products"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Profiles
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingProfilesRes"
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
    var profile_id, validated, profileService, manager, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                profile_id = req.params.profile_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostShippingProfilesProfileReq, req.body)];
            case 1:
                validated = _a.sent();
                profileService = req.scope.resolve("shippingProfileService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, profileService
                                        .withTransaction(transactionManager)
                                        .update(profile_id, validated)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, profileService.retrieve(profile_id, {
                        select: _1.defaultAdminShippingProfilesFields,
                        relations: _1.defaultAdminShippingProfilesRelations,
                    })];
            case 3:
                data = _a.sent();
                res.status(200).json({ shipping_profile: data });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostShippingProfilesProfileReq
 * type: object
 * description: "The detail to update of the shipping profile."
 * properties:
 *   name:
 *     description: The name of the Shipping Profile
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   type:
 *     description: The type of the Shipping Profile
 *     type: string
 *     enum: [default, gift_card, custom]
 *   products:
 *     description: product IDs to associate with the Shipping Profile
 *     type: array
 *   shipping_options:
 *     description: Shipping option IDs to associate with the Shipping Profile
 *     type: array
 */
var AdminPostShippingProfilesProfileReq = /** @class */ (function () {
    function AdminPostShippingProfilesProfileReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostShippingProfilesProfileReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsObject)(),
        __metadata("design:type", Object)
    ], AdminPostShippingProfilesProfileReq.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(models_1.ShippingProfileType, {
            message: "type must be one of 'default', 'custom', 'gift_card'",
        }),
        __metadata("design:type", String)
    ], AdminPostShippingProfilesProfileReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostShippingProfilesProfileReq.prototype, "products", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostShippingProfilesProfileReq.prototype, "shipping_options", void 0);
    return AdminPostShippingProfilesProfileReq;
}());
exports.AdminPostShippingProfilesProfileReq = AdminPostShippingProfilesProfileReq;
//# sourceMappingURL=update-shipping-profile.js.map