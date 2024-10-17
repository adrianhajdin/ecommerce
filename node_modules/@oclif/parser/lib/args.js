"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newArg = void 0;
function newArg(arg) {
    return Object.assign(Object.assign({ parse: (i) => i }, arg), { required: Boolean(arg.required) });
}
exports.newArg = newArg;
