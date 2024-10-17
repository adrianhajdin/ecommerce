"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
function isDate(value) {
    var date = new Date(value);
    return !isNaN(date.valueOf());
}
exports.isDate = isDate;
//# sourceMappingURL=is-date.js.map