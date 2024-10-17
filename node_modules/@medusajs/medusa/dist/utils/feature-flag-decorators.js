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
exports.FeatureFlagEntity = exports.FeatureFlagClassDecorators = exports.FeatureFlagDecorators = exports.FeatureFlagColumn = void 0;
var typeorm_1 = require("typeorm");
var feature_flags_1 = require("../loaders/feature-flags");
var class_validator_1 = require("class-validator");
var utils_1 = require("@medusajs/utils");
/**
 * If that file is required in a non node environment then the setImmediate timer does not exists.
 * This can happen when a client package require a server based package and that one of the import
 * require to import that file which is using the setImmediate.
 * In order to take care of those cases, the setImmediate timer will use the one provided by the api (node)
 * if possible and will provide a mock in a browser like environment.
 */
var setImmediate_;
try {
    setImmediate_ = setImmediate;
}
catch (e) {
    console.warn("[feature-flag-decorator.ts] setImmediate will use a mock, this happen when this file is required in a browser environment and should not impact you");
    setImmediate_ = function (callback) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, callback()];
    }); }); };
}
function FeatureFlagColumn(featureFlag, columnOptions) {
    if (columnOptions === void 0) { columnOptions = {}; }
    return function (target, propertyName) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                return;
            }
            (0, typeorm_1.Column)(columnOptions)(target, propertyName);
        });
    };
}
exports.FeatureFlagColumn = FeatureFlagColumn;
function FeatureFlagDecorators(featureFlag, decorators) {
    return function (target, propertyName) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                (0, class_validator_1.ValidateIf)(function (o) { return (0, utils_1.isDefined)(o[propertyName]); })(target, propertyName);
                (0, class_validator_1.Equals)(undefined, {
                    message: "".concat(propertyName, " should not exist"),
                })(target, propertyName);
                return;
            }
            decorators.forEach(function (decorator) {
                decorator(target, propertyName);
            });
        });
    };
}
exports.FeatureFlagDecorators = FeatureFlagDecorators;
function FeatureFlagClassDecorators(featureFlag, decorators) {
    return function (target) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                return;
            }
            decorators.forEach(function (decorator) {
                decorator(target);
            });
        });
    };
}
exports.FeatureFlagClassDecorators = FeatureFlagClassDecorators;
function FeatureFlagEntity(featureFlag, name, options) {
    return function (target) {
        target["isFeatureEnabled"] = function () {
            return feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag);
        };
        (0, typeorm_1.Entity)(name, options)(target);
    };
}
exports.FeatureFlagEntity = FeatureFlagEntity;
//# sourceMappingURL=feature-flag-decorators.js.map