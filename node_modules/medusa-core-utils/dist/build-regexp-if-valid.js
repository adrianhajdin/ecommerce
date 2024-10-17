"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRegexpIfValid = void 0;
function buildRegexpIfValid(str) {
    try {
        var m = str.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/);
        if (m) {
            return new RegExp(m[2], m[3]);
        }
    }
    catch (e) { }
    return;
}
exports.buildRegexpIfValid = buildRegexpIfValid;
//# sourceMappingURL=build-regexp-if-valid.js.map