"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFunction = void 0;
const customEndpointFunctions_1 = require("./customEndpointFunctions");
const endpointFunctions_1 = require("./endpointFunctions");
const evaluateExpression_1 = require("./evaluateExpression");
const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0, evaluateExpression_1.evaluateExpression)(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in customEndpointFunctions_1.customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions_1.customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return endpointFunctions_1.endpointFunctions[fn](...evaluatedArgs);
};
exports.callFunction = callFunction;
