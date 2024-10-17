"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNetworkError = isNetworkError;
exports.isRetryableError = isRetryableError;
exports.isSafeRequestError = isSafeRequestError;
exports.isIdempotentRequestError = isIdempotentRequestError;
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
exports.exponentialDelay = exponentialDelay;
exports.default = axiosRetry;
exports.DEFAULT_OPTIONS = exports.namespace = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isRetryAllowed = _interopRequireDefault(require("is-retry-allowed"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var namespace = 'axios-retry';
/**
 * @param  {Error}  error
 * @return {boolean}
 */

exports.namespace = namespace;

function isNetworkError(error) {
  var CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
  return !error.response && Boolean(error.code) && // Prevents retrying cancelled requests
  !CODE_EXCLUDE_LIST.includes(error.code) && // Prevents retrying timed out & cancelled requests
  (0, _isRetryAllowed.default)(error) // Prevents retrying unsafe errors
  ;
}

var SAFE_HTTP_METHODS = ['get', 'head', 'options'];
var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
/**
 * @param  {Error}  error
 * @return {boolean}
 */

function isRetryableError(error) {
  return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
}
/**
 * @param  {Error}  error
 * @return {boolean}
 */


function isSafeRequestError(error) {
  if (!error.config) {
    // Cannot determine if the request can be retried
    return false;
  }

  return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
/**
 * @param  {Error}  error
 * @return {boolean}
 */


function isIdempotentRequestError(error) {
  if (!error.config) {
    // Cannot determine if the request can be retried
    return false;
  }

  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
/**
 * @param  {Error}  error
 * @return {boolean}
 */


function isNetworkOrIdempotentRequestError(error) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}
/**
 * @return {number} - delay in milliseconds, always 0
 */


function noDelay() {
  return 0;
}
/**
 * Set delayFactor 1000 for an exponential delay to occur on the order
 * of seconds
 * @param  {number} [retryNumber=0]
 * @param  {Error}  error - unused; for existing API of retryDelay callback
 * @param  {number} [delayFactor=100] milliseconds
 * @return {number} - delay in milliseconds
 */


function exponentialDelay() {
  var retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var error = arguments.length > 1 ? arguments[1] : undefined;
  var delayFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var delay = Math.pow(2, retryNumber) * delayFactor;
  var randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay

  return delay + randomSum;
}
/** @type {IAxiosRetryConfig} */


var DEFAULT_OPTIONS = {
  retries: 3,
  retryCondition: isNetworkOrIdempotentRequestError,
  retryDelay: noDelay,
  shouldResetTimeout: false,
  onRetry: function onRetry() {}
};
/**
 * Returns the axios-retry options for the current request
 * @param  {AxiosRequestConfig} config
 * @param  {IAxiosRetryConfig} defaultOptions
 * @return {IAxiosRetryConfigExtended}
 */

exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;

function getRequestOptions(config, defaultOptions) {
  return _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_OPTIONS), defaultOptions), config[namespace]);
}
/**
 * Initializes and returns the retry state for the given request/config
 * @param  {AxiosRequestConfig} config
 * @param  {IAxiosRetryConfig} defaultOptions
 * @return {IAxiosRetryConfigExtended}
 */


function getCurrentState(config, defaultOptions) {
  var currentState = getRequestOptions(config, defaultOptions);
  currentState.retryCount = currentState.retryCount || 0;
  config[namespace] = currentState;
  return currentState;
}
/**
 * @param  {Axios} axios
 * @param  {AxiosRequestConfig} config
 */


function fixConfig(axios, config) {
  if (axios.defaults.agent === config.agent) {
    delete config.agent;
  }

  if (axios.defaults.httpAgent === config.httpAgent) {
    delete config.httpAgent;
  }

  if (axios.defaults.httpsAgent === config.httpsAgent) {
    delete config.httpsAgent;
  }
}
/**
 * Checks retryCondition if request can be retried. Handles it's returning value or Promise.
 * @param  {IAxiosRetryConfigExtended} currentState
 * @param  {Error} error
 * @return {Promise<boolean>}
 */


function shouldRetry(_x, _x2) {
  return _shouldRetry.apply(this, arguments);
}
/**
 * Adds response interceptors to an axios instance to retry requests failed due to network issues
 *
 * @example
 *
 * import axios from 'axios';
 *
 * axiosRetry(axios, { retries: 3 });
 *
 * axios.get('http://example.com/test') // The first request fails and the second returns 'ok'
 *   .then(result => {
 *     result.data; // 'ok'
 *   });
 *
 * // Exponential back-off retry delay between requests
 * axiosRetry(axios, { retryDelay : axiosRetry.exponentialDelay});
 *
 * // Custom retry delay
 * axiosRetry(axios, { retryDelay : (retryCount) => {
 *   return retryCount * 1000;
 * }});
 *
 * // Also works with custom axios instances
 * const client = axios.create({ baseURL: 'http://example.com' });
 * axiosRetry(client, { retries: 3 });
 *
 * client.get('/test') // The first request fails and the second returns 'ok'
 *   .then(result => {
 *     result.data; // 'ok'
 *   });
 *
 * // Allows request-specific configuration
 * client
 *   .get('/test', {
 *     'axios-retry': {
 *       retries: 0
 *     }
 *   })
 *   .catch(error => { // The first request fails
 *     error !== undefined
 *   });
 *
 * @param {Axios} axios An axios instance (the axios object or one created from axios.create)
 * @param {Object} [defaultOptions]
 * @param {number} [defaultOptions.retries=3] Number of retries
 * @param {boolean} [defaultOptions.shouldResetTimeout=false]
 *        Defines if the timeout should be reset between retries
 * @param {Function} [defaultOptions.retryCondition=isNetworkOrIdempotentRequestError]
 *        A function to determine if the error can be retried
 * @param {Function} [defaultOptions.retryDelay=noDelay]
 *        A function to determine the delay between retry requests
 * @param {Function} [defaultOptions.onRetry=()=>{}]
 *        A function to get notified when a retry occurs
 * @return {{ requestInterceptorId: number, responseInterceptorId: number }}
 *        The ids of the interceptors added to the request and to the response (so they can be ejected at a later time)
 */


function _shouldRetry() {
  _shouldRetry = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(currentState, error) {
    var retries, retryCondition, shouldRetryOrPromise, shouldRetryPromiseResult;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            retries = currentState.retries, retryCondition = currentState.retryCondition;
            shouldRetryOrPromise = currentState.retryCount < retries && retryCondition(error); // This could be a promise

            if (!((0, _typeof2.default)(shouldRetryOrPromise) === 'object')) {
              _context2.next = 13;
              break;
            }

            _context2.prev = 3;
            _context2.next = 6;
            return shouldRetryOrPromise;

          case 6:
            shouldRetryPromiseResult = _context2.sent;
            return _context2.abrupt("return", shouldRetryPromiseResult !== false);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", false);

          case 13:
            return _context2.abrupt("return", shouldRetryOrPromise);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _shouldRetry.apply(this, arguments);
}

function axiosRetry(axios, defaultOptions) {
  var requestInterceptorId = axios.interceptors.request.use(function (config) {
    var currentState = getCurrentState(config, defaultOptions);
    currentState.lastRequestTime = Date.now();
    return config;
  });
  var responseInterceptorId = axios.interceptors.response.use(null, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(error) {
      var config, currentState, retryDelay, shouldResetTimeout, onRetry, delay, lastRequestDuration, timeout;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = error.config; // If we have no information to retry the request

              if (config) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", Promise.reject(error));

            case 3:
              currentState = getCurrentState(config, defaultOptions);
              _context.next = 6;
              return shouldRetry(currentState, error);

            case 6:
              if (!_context.sent) {
                _context.next = 21;
                break;
              }

              currentState.retryCount += 1;
              retryDelay = currentState.retryDelay, shouldResetTimeout = currentState.shouldResetTimeout, onRetry = currentState.onRetry;
              delay = retryDelay(currentState.retryCount, error); // Axios fails merging this configuration to the default configuration because it has an issue
              // with circular structures: https://github.com/mzabriskie/axios/issues/370

              fixConfig(axios, config);

              if (!(!shouldResetTimeout && config.timeout && currentState.lastRequestTime)) {
                _context.next = 17;
                break;
              }

              lastRequestDuration = Date.now() - currentState.lastRequestTime;
              timeout = config.timeout - lastRequestDuration - delay;

              if (!(timeout <= 0)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", Promise.reject(error));

            case 16:
              config.timeout = timeout;

            case 17:
              config.transformRequest = [function (data) {
                return data;
              }];
              _context.next = 20;
              return onRetry(currentState.retryCount, error, config);

            case 20:
              return _context.abrupt("return", new Promise(function (resolve) {
                return setTimeout(function () {
                  return resolve(axios(config));
                }, delay);
              }));

            case 21:
              return _context.abrupt("return", Promise.reject(error));

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    requestInterceptorId: requestInterceptorId,
    responseInterceptorId: responseInterceptorId
  };
} // Compatibility with CommonJS


axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
//# sourceMappingURL=index.js.map