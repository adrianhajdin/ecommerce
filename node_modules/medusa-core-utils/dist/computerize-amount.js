"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zero_decimal_currencies_1 = __importDefault(require("./zero-decimal-currencies"));
var computerizeAmount = function (amount, currency) {
    var divisor = 100;
    if (zero_decimal_currencies_1.default.includes(currency.toLowerCase())) {
        divisor = 1;
    }
    return Math.round(amount * divisor);
};
exports.default = computerizeAmount;
//# sourceMappingURL=computerize-amount.js.map