"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncIterable = void 0;
function isAsyncIterable(value) {
    return value?.[Symbol.asyncIterator] != null;
}
exports.isAsyncIterable = isAsyncIterable;
