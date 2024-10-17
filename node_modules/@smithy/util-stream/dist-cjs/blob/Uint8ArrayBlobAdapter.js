"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uint8ArrayBlobAdapter = void 0;
const transforms_1 = require("./transforms");
class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return (0, transforms_1.transformFromString)(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return (0, transforms_1.transformToString)(this, encoding);
    }
}
exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter;
