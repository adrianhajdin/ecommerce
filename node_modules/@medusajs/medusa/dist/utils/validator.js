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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
exports.validator = exports.registerOverriddenValidators = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var extendedValidators = new Map();
/**
 * When overriding a validator, you can register it to be used instead of the original one.
 * For example, the place where you are overriding the core validator, you can call this function
 * @example
 * ```ts
 * // /src/api/routes/admin/products/create-product.ts
 * import { registerOverriddenValidators } from "@medusajs/medusa"
 * import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product"
 * import { IsString } from "class-validator"
 *
 * class AdminPostProductsReq extends MedusaAdminPostProductsReq {
 *    @IsString()
 *    test: string
 * }
 *
 * registerOverriddenValidators(AdminPostProductsReq)
 * ```
 * @param extendedValidator
 */
function registerOverriddenValidators(extendedValidator) {
    extendedValidators.set(extendedValidator.name, extendedValidator);
}
exports.registerOverriddenValidators = registerOverriddenValidators;
var reduceErrorMessages = function (errs) {
    return errs.reduce(function (acc, next) {
        var e_1, _a;
        if (next.constraints) {
            try {
                for (var _b = __values(Object.entries(next.constraints)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), _1 = _d[0], msg = _d[1];
                    acc.push(msg);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (next.children) {
            acc.push.apply(acc, __spreadArray([], __read(reduceErrorMessages(next.children)), false));
        }
        return acc;
    }, []);
};
function validator(typedClass, plain, config) {
    var _a;
    if (config === void 0) { config = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var toValidate, errors, errorMessages;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    typedClass = (_a = extendedValidators.get(typedClass.name)) !== null && _a !== void 0 ? _a : typedClass;
                    toValidate = (0, class_transformer_1.plainToInstance)(typedClass, plain);
                    return [4 /*yield*/, (0, class_validator_1.validate)(toValidate, __assign({ whitelist: true, forbidNonWhitelisted: true }, config))];
                case 1:
                    errors = _b.sent();
                    errorMessages = reduceErrorMessages(errors);
                    if (errors === null || errors === void 0 ? void 0 : errors.length) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, errorMessages.join(", "));
                    }
                    return [2 /*return*/, toValidate];
            }
        });
    });
}
exports.validator = validator;
//# sourceMappingURL=validator.js.map