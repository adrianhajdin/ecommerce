"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStrongPassword = exports.isStrongPassword = exports.IS_STRONG_PASSWORD = void 0;
const validator = __importStar(require("validator"));
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_STRONG_PASSWORD = 'isStrongPassword';
/**
 * Checks if the string is a strong password.
 * If given value is not a string, then it returns false.
 */
function isStrongPassword(value, options) {
    return typeof value === 'string' && validator.isStrongPassword(value, options);
}
exports.isStrongPassword = isStrongPassword;
/**
 * Checks if the string is a strong password.
 * If given value is not a string, then it returns false.
 */
function IsStrongPassword(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_STRONG_PASSWORD,
        constraints: [options],
        validator: {
            validate: (value, args) => isStrongPassword(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + '$property is not strong enough', validationOptions),
        },
    }, validationOptions);
}
exports.IsStrongPassword = IsStrongPassword;
//# sourceMappingURL=IsStrongPassword.js.map