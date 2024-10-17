"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOptionalDate = exports.transformDate = void 0;
var utils_1 = require("@medusajs/utils");
var transformDate = function (_a) {
    var value = _a.value;
    return (0, utils_1.isDate)(value) ? new Date(value) : new Date(Number(value) * 1000);
};
exports.transformDate = transformDate;
var transformOptionalDate = function (_a) {
    var value = _a.value;
    return !(0, utils_1.isDate)(value) ? value : (0, exports.transformDate)({ value: value });
};
exports.transformOptionalDate = transformOptionalDate;
//# sourceMappingURL=date-transform.js.map