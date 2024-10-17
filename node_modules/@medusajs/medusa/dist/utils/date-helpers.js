"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFuture = exports.isPast = void 0;
var lodash_1 = require("lodash");
var isPast = function (date) {
    var now = new Date();
    return (0, lodash_1.isDate)(date) && now > date;
};
exports.isPast = isPast;
var isFuture = function (date) {
    var now = new Date();
    return (0, lodash_1.isDate)(date) && date > now;
};
exports.isFuture = isFuture;
//# sourceMappingURL=date-helpers.js.map