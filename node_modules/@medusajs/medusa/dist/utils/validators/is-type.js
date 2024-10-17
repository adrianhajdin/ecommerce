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
exports.IsType = void 0;
var class_validator_1 = require("class-validator");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../validator");
var utils_1 = require("@medusajs/utils");
function typeValidator(typedClass, plain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, errors_1, result;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = typedClass;
                    switch (_a) {
                        case String: return [3 /*break*/, 1];
                        case Number: return [3 /*break*/, 2];
                        case Date: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 4];
                case 1:
                    if (!(0, class_validator_1.isString)(plain)) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "String validation failed: ".concat(plain, " is not a string"));
                    }
                    return [2 /*return*/, true];
                case 2:
                    if (!(0, class_validator_1.isNumber)(Number(plain))) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Number validation failed: ".concat(plain, " is not a number"));
                    }
                    return [2 /*return*/, true];
                case 3:
                    if (!(0, lodash_1.isDate)(new Date(plain))) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Date validation failed: ".concat(plain, " is not a date"));
                    }
                    return [2 /*return*/, true];
                case 4:
                    if (!((0, class_validator_1.isArray)(typedClass) && (0, class_validator_1.isArray)(plain))) return [3 /*break*/, 6];
                    errors_1 = new Map();
                    return [4 /*yield*/, (0, utils_1.promiseAll)(plain.map(function (p) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, typeValidator(typedClass[0], p).catch(function (e) {
                                            errors_1.set(typedClass[0].name, e.message.split(","));
                                            return false;
                                        })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                case 5:
                    result = (_b.sent()).some(Boolean);
                    if (result) {
                        return [2 /*return*/, true];
                    }
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, Object.fromEntries(errors_1.entries()));
                case 6: return [4 /*yield*/, (0, validator_1.validator)(typedClass, plain).then(function () { return true; })];
                case 7: return [2 /*return*/, ((_b.sent()) &&
                        typeof plain === "object")];
            }
        });
    });
}
function IsType(types, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "IsType",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    return __awaiter(this, void 0, void 0, function () {
                        var errors, results;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    errors = new Map();
                                    return [4 /*yield*/, (0, utils_1.promiseAll)(types.map(function (v) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, typeValidator(v, value).catch(function (e) {
                                                            errors.set(v.name, e.message.split(",").filter(Boolean));
                                                            return false;
                                                        })];
                                                    case 1: return [2 /*return*/, _a.sent()];
                                                }
                                            });
                                        }); }))];
                                case 1:
                                    results = _a.sent();
                                    if (results.some(Boolean)) {
                                        return [2 /*return*/, true];
                                    }
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, JSON.stringify({
                                        message: "".concat(args.property, " must be one of: ").concat(types.map(function (t) { var _a; return "".concat(t.name || (Array.isArray(t) ? (_a = t[0]) === null || _a === void 0 ? void 0 : _a.name : "")); })),
                                        details: Object.fromEntries(errors.entries()),
                                    }));
                            }
                        });
                    });
                },
                defaultMessage: function (validationArguments) {
                    var names = types.map(function (t) { return t.name || ((0, class_validator_1.isArray)(t) ? "".concat(t[0].name, "[]") : ""); });
                    return "".concat(validationArguments === null || validationArguments === void 0 ? void 0 : validationArguments.property, " must be one of ").concat(names
                        .join(", ")
                        .replace(/, ([^,]*)$/, " or $1"));
                },
            },
        });
    };
}
exports.IsType = IsType;
//# sourceMappingURL=is-type.js.map