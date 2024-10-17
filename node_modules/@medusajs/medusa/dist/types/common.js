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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedFindParamsMixin = exports.FindPaginationParams = exports.FindParams = exports.AddressCreatePayload = exports.AddressPayload = exports.NumericalComparisonOperator = exports.StringComparisonOperator = exports.DateComparisonOperator = exports.EmptyQueryParams = void 0;
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var date_transform_1 = require("../utils/validators/date-transform");
var EmptyQueryParams = /** @class */ (function () {
    function EmptyQueryParams() {
    }
    return EmptyQueryParams;
}());
exports.EmptyQueryParams = EmptyQueryParams;
/**
 * Fields used to apply flexible filters on dates.
 */
var DateComparisonOperator = /** @class */ (function () {
    function DateComparisonOperator() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformDate),
        __metadata("design:type", Date
        /**
         * The filtered date must be greater than this value.
         */
        )
    ], DateComparisonOperator.prototype, "lt", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformDate),
        __metadata("design:type", Date
        /**
         * The filtered date must be greater than or equal to this value.
         */
        )
    ], DateComparisonOperator.prototype, "gt", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformDate),
        __metadata("design:type", Date
        /**
         * The filtered date must be less than or equal to this value.
         */
        )
    ], DateComparisonOperator.prototype, "gte", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformDate),
        __metadata("design:type", Date)
    ], DateComparisonOperator.prototype, "lte", void 0);
    return DateComparisonOperator;
}());
exports.DateComparisonOperator = DateComparisonOperator;
/**
 * Fields used to apply flexible filters on strings.
 */
var StringComparisonOperator = /** @class */ (function () {
    function StringComparisonOperator() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "lt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "gt", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "gte", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "lte", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "contains", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "starts_with", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StringComparisonOperator.prototype, "ends_with", void 0);
    return StringComparisonOperator;
}());
exports.StringComparisonOperator = StringComparisonOperator;
/**
 * Fields used to apply flexible filters on numbers.
 */
var NumericalComparisonOperator = /** @class */ (function () {
    function NumericalComparisonOperator() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], NumericalComparisonOperator.prototype, "lt", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], NumericalComparisonOperator.prototype, "gt", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], NumericalComparisonOperator.prototype, "gte", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], NumericalComparisonOperator.prototype, "lte", void 0);
    return NumericalComparisonOperator;
}());
exports.NumericalComparisonOperator = NumericalComparisonOperator;
/**
 * @schema AddressPayload
 * type: object
 * description: "Address fields used when creating/updating an address."
 * properties:
 *   first_name:
 *     description: First name
 *     type: string
 *     example: Arno
 *   last_name:
 *     description: Last name
 *     type: string
 *     example: Willms
 *   phone:
 *     type: string
 *     description: Phone Number
 *     example: 16128234334802
 *   company:
 *     type: string
 *     description: Company
 *   address_1:
 *     description: Address line 1
 *     type: string
 *     example: 14433 Kemmer Court
 *   address_2:
 *     description: Address line 2
 *     type: string
 *     example: Suite 369
 *   city:
 *     description: City
 *     type: string
 *     example: South Geoffreyview
 *   country_code:
 *     description: The 2 character ISO code of the country in lower case
 *     type: string
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *       description: See a list of codes.
 *     example: st
 *   province:
 *     description: Province
 *     type: string
 *     example: Kentucky
 *   postal_code:
 *     description: Postal Code
 *     type: string
 *     example: 72093
 *   metadata:
 *     type: object
 *     example: {car: "white"}
 *     description: An optional key-value map with additional details
 */
var AddressPayload = /** @class */ (function () {
    function AddressPayload() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsObject)(),
        __metadata("design:type", Object)
    ], AddressPayload.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressPayload.prototype, "postal_code", void 0);
    return AddressPayload;
}());
exports.AddressPayload = AddressPayload;
/**
 * @schema AddressCreatePayload
 * type: object
 * description: "Address fields used when creating an address."
 * required:
 *   - first_name
 *   - last_name
 *   - address_1
 *   - city
 *   - country_code
 *   - postal_code
 * properties:
 *   first_name:
 *     description: First name
 *     type: string
 *     example: Arno
 *   last_name:
 *     description: Last name
 *     type: string
 *     example: Willms
 *   phone:
 *     type: string
 *     description: Phone Number
 *     example: 16128234334802
 *   company:
 *     type: string
 *   address_1:
 *     description: Address line 1
 *     type: string
 *     example: 14433 Kemmer Court
 *   address_2:
 *     description: Address line 2
 *     type: string
 *     example: Suite 369
 *   city:
 *     description: City
 *     type: string
 *     example: South Geoffreyview
 *   country_code:
 *     description: The 2 character ISO code of the country in lower case
 *     type: string
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *       description: See a list of codes.
 *     example: st
 *   province:
 *     description: Province
 *     type: string
 *     example: Kentucky
 *   postal_code:
 *     description: Postal Code
 *     type: string
 *     example: 72093
 *   metadata:
 *     type: object
 *     example: {car: "white"}
 *     description: An optional key-value map with additional details
 */
var AddressCreatePayload = /** @class */ (function () {
    function AddressCreatePayload() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AddressCreatePayload.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AddressCreatePayload.prototype, "postal_code", void 0);
    return AddressCreatePayload;
}());
exports.AddressCreatePayload = AddressCreatePayload;
/**
 * Parameters that can be used to configure how data is retrieved.
 */
var FindParams = /** @class */ (function () {
    function FindParams() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FindParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FindParams.prototype, "fields", void 0);
    return FindParams;
}());
exports.FindParams = FindParams;
/**
 * Parameters that can be used to configure how a list of data is paginated.
 */
var FindPaginationParams = /** @class */ (function () {
    function FindPaginationParams() {
        /**
         * {@inheritDoc RequestQueryFields.offset}
         * @defaultValue 0
         */
        this.offset = 0;
        /**
         * {@inheritDoc RequestQueryFields.limit}
         * @defaultValue 20
         */
        this.limit = 20;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], FindPaginationParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], FindPaginationParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", String)
    ], FindPaginationParams.prototype, "order", void 0);
    return FindPaginationParams;
}());
exports.FindPaginationParams = FindPaginationParams;
function extendedFindParamsMixin(_a) {
    var _b = _a === void 0 ? {} : _a, limit = _b.limit, offset = _b.offset, order = _b.order;
    /**
     * {@inheritDoc FindParams}
     */
    var FindExtendedPaginationParams = /** @class */ (function (_super) {
        __extends(FindExtendedPaginationParams, _super);
        function FindExtendedPaginationParams() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * {@inheritDoc FindPaginationParams.offset}
             * @defaultValue 0
             */
            _this.offset = offset !== null && offset !== void 0 ? offset : 0;
            /**
             * {@inheritDoc FindPaginationParams.limit}
             * @defaultValue 20
             */
            _this.limit = limit !== null && limit !== void 0 ? limit : 20;
            /**
             * {@inheritDoc FindPaginationParams.order}
             */
            _this.order = order;
            return _this;
        }
        __decorate([
            (0, class_validator_1.IsNumber)(),
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return Number; }),
            __metadata("design:type", Number)
        ], FindExtendedPaginationParams.prototype, "offset", void 0);
        __decorate([
            (0, class_validator_1.IsNumber)(),
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return Number; }),
            __metadata("design:type", Number)
        ], FindExtendedPaginationParams.prototype, "limit", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return String; }),
            __metadata("design:type", String)
        ], FindExtendedPaginationParams.prototype, "order", void 0);
        return FindExtendedPaginationParams;
    }(FindParams));
    return FindExtendedPaginationParams;
}
exports.extendedFindParamsMixin = extendedFindParamsMixin;
//# sourceMappingURL=common.js.map