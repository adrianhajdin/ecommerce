"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBodyLength = void 0;
const fs_1 = require("fs");
const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, fs_1.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0, fs_1.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};
exports.calculateBodyLength = calculateBodyLength;
