"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHttp = void 0;
const tslib_1 = require("tslib");
const node_http_handler_1 = require("@smithy/node-http-handler");
const property_provider_1 = require("@smithy/property-provider");
const promises_1 = tslib_1.__importDefault(require("fs/promises"));
const checkUrl_1 = require("./checkUrl");
const requestHelpers_1 = require("./requestHelpers");
const retry_wrapper_1 = require("./retry-wrapper");
const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromHttp = (options) => {
    var _a, _b, _c, _d, _e, _f;
    let host;
    const relative = (_a = options.awsContainerCredentialsRelativeUri) !== null && _a !== void 0 ? _a : process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
    const full = (_b = options.awsContainerCredentialsFullUri) !== null && _b !== void 0 ? _b : process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
    const token = (_c = options.awsContainerAuthorizationToken) !== null && _c !== void 0 ? _c : process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
    const tokenFile = (_d = options.awsContainerAuthorizationTokenFile) !== null && _d !== void 0 ? _d : process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
    if (relative && full) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        console.warn("awsContainerCredentialsFullUri will take precedence.");
    }
    if (token && tokenFile) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        console.warn("awsContainerAuthorizationToken will take precedence.");
    }
    if (full) {
        host = full;
    }
    else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
    }
    else {
        throw new property_provider_1.CredentialsProviderError("No HTTP credential provider host provided.");
    }
    const url = new URL(host);
    (0, checkUrl_1.checkUrl)(url);
    const requestHandler = new node_http_handler_1.NodeHttpHandler();
    return (0, retry_wrapper_1.retryWrapper)(async () => {
        const request = (0, requestHelpers_1.createGetRequest)(url);
        if (token) {
            request.headers.Authorization = token;
        }
        else if (tokenFile) {
            request.headers.Authorization = (await promises_1.default.readFile(tokenFile)).toString();
        }
        const result = await requestHandler.handle(request);
        return (0, requestHelpers_1.getCredentials)(result.response);
    }, (_e = options.maxRetries) !== null && _e !== void 0 ? _e : 3, (_f = options.timeout) !== null && _f !== void 0 ? _f : 1000);
};
exports.fromHttp = fromHttp;
