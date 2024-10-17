"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionConverter = void 0;
const exceptions_1 = require("../exceptions");
class ExceptionConverter {
    /* istanbul ignore next */
    convertException(exception) {
        return new exceptions_1.DriverException(exception);
    }
}
exports.ExceptionConverter = ExceptionConverter;
