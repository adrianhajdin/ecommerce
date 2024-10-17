"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCrtAvailable = void 0;
const crt_availability_1 = require("./crt-availability");
const isCrtAvailable = () => {
    if (crt_availability_1.crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};
exports.isCrtAvailable = isCrtAvailable;
