"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsExpectUnion = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const awsExpectUnion = (value) => {
    if (value == null) {
        return undefined;
    }
    if (typeof value === "object" && "__type" in value) {
        delete value.__type;
    }
    return (0, smithy_client_1.expectUnion)(value);
};
exports.awsExpectUnion = awsExpectUnion;
