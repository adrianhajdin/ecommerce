"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformFromString = exports.transformToString = void 0;
const util_base64_1 = require("@smithy/util-base64");
const util_utf8_1 = require("@smithy/util-utf8");
const Uint8ArrayBlobAdapter_1 = require("./Uint8ArrayBlobAdapter");
function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return (0, util_base64_1.toBase64)(payload);
    }
    return (0, util_utf8_1.toUtf8)(payload);
}
exports.transformToString = transformToString;
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_base64_1.fromBase64)(str));
    }
    return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_utf8_1.fromUtf8)(str));
}
exports.transformFromString = transformFromString;
