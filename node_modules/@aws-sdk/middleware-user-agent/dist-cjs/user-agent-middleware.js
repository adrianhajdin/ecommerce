"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgentPlugin = exports.getUserAgentMiddlewareOptions = exports.userAgentMiddleware = void 0;
const util_endpoints_1 = require("@aws-sdk/util-endpoints");
const protocol_http_1 = require("@smithy/protocol-http");
const constants_1 = require("./constants");
const userAgentMiddleware = (options) => (next, context) => async (args) => {
    var _a, _b;
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
    const prefix = (0, util_endpoints_1.getUserAgentPrefix)();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(constants_1.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(constants_1.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[constants_1.X_AMZ_USER_AGENT] = headers[constants_1.X_AMZ_USER_AGENT]
                ? `${headers[constants_1.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[constants_1.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[constants_1.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
exports.userAgentMiddleware = userAgentMiddleware;
const escapeUserAgent = (userAgentPair) => {
    var _a;
    const name = userAgentPair[0]
        .split(constants_1.UA_NAME_SEPARATOR)
        .map((part) => part.replace(constants_1.UA_NAME_ESCAPE_REGEX, constants_1.UA_ESCAPE_CHAR))
        .join(constants_1.UA_NAME_SEPARATOR);
    const version = (_a = userAgentPair[1]) === null || _a === void 0 ? void 0 : _a.replace(constants_1.UA_VALUE_ESCAPE_REGEX, constants_1.UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(constants_1.UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
exports.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.userAgentMiddleware)(config), exports.getUserAgentMiddlewareOptions);
    },
});
exports.getUserAgentPlugin = getUserAgentPlugin;
