"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../../utils");
var QUERY_RUNNER_RELEASED = "QueryRunnerAlreadyReleasedError";
var TRANSACTION_STARTED = "TransactionAlreadyStartedError";
var TRANSACTION_NOT_STARTED = "TransactionNotStartedError";
var API_ERROR = "api_error";
var INVALID_REQUEST_ERROR = "invalid_request_error";
var INVALID_STATE_ERROR = "invalid_state_error";
exports.default = (function () {
    return function (err, req, res, next) {
        var logger = req.scope.resolve("logger");
        err = (0, utils_1.formatException)(err);
        logger.error(err);
        var errorType = err.type || err.name;
        var errObj = {
            code: err.code,
            type: err.type,
            message: err.message,
        };
        var statusCode = 500;
        switch (errorType) {
            case QUERY_RUNNER_RELEASED:
            case TRANSACTION_STARTED:
            case TRANSACTION_NOT_STARTED:
            case medusa_core_utils_1.MedusaError.Types.CONFLICT:
                statusCode = 409;
                errObj.code = INVALID_STATE_ERROR;
                errObj.message =
                    "The request conflicted with another request. You may retry the request with the provided Idempotency-Key.";
                break;
            case medusa_core_utils_1.MedusaError.Types.UNAUTHORIZED:
                statusCode = 401;
                break;
            case medusa_core_utils_1.MedusaError.Types.PAYMENT_AUTHORIZATION_ERROR:
                statusCode = 422;
                break;
            case medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR:
                statusCode = 422;
                errObj.code = INVALID_REQUEST_ERROR;
                break;
            case medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED:
            case medusa_core_utils_1.MedusaError.Types.INVALID_DATA:
                statusCode = 400;
                break;
            case medusa_core_utils_1.MedusaError.Types.NOT_FOUND:
                statusCode = 404;
                break;
            case medusa_core_utils_1.MedusaError.Types.DB_ERROR:
                statusCode = 500;
                errObj.code = API_ERROR;
                break;
            case medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE:
            case medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT:
                break;
            default:
                errObj.code = "unknown_error";
                errObj.message = "An unknown error occurred.";
                errObj.type = "unknown_error";
                break;
        }
        res.status(statusCode).json(errObj);
    };
});
/**
 * @schema Error
 * title: "Response Error"
 * type: object
 * properties:
 *  code:
 *    type: string
 *    description: A slug code to indicate the type of the error.
 *    enum: [invalid_state_error, invalid_request_error, api_error, unknown_error]
 *  message:
 *    type: string
 *    description: Description of the error that occurred.
 *    example: "first_name must be a string"
 *  type:
 *    type: string
 *    description: A slug indicating the type of the error.
 *    enum: [QueryRunnerAlreadyReleasedError, TransactionAlreadyStartedError, TransactionNotStartedError, conflict, unauthorized, payment_authorization_error, duplicate_error, not_allowed, invalid_data, not_found, database_error, unexpected_state, invalid_argument, unknown_error]
 */
//# sourceMappingURL=error-handler.js.map