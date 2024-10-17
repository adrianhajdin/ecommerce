"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvRevertCellContentFormatter = exports.csvCellContentFormatter = void 0;
function csvCellContentFormatter(str) {
    var newLineRegexp = new RegExp(/\n/g);
    var doubleQuoteRegexp = new RegExp(/"/g);
    var comaRegexp = new RegExp(/,/g);
    var semicolonRegexp = new RegExp(/;/g);
    var hasNewLineChar = !!str.match(newLineRegexp);
    var hasComaChar = !!str.match(comaRegexp);
    var hasSemicolonChar = !!str.match(semicolonRegexp);
    if (!hasNewLineChar && !hasComaChar && !hasSemicolonChar) {
        return str;
    }
    var formatterStr = str.replace(doubleQuoteRegexp, "\"\"");
    return "\"".concat(formatterStr, "\"");
}
exports.csvCellContentFormatter = csvCellContentFormatter;
function csvRevertCellContentFormatter(str) {
    if (str.startsWith("\"")) {
        str = str.substring(1, str.length - 1);
    }
    return str;
}
exports.csvRevertCellContentFormatter = csvRevertCellContentFormatter;
//# sourceMappingURL=csv-cell-content-formatter.js.map