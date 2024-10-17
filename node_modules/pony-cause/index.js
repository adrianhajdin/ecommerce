'use strict';

const { ErrorWithCause } = require('./lib/error-with-cause'); // linemod-replace-with: export { ErrorWithCause } from './lib/error-with-cause.mjs';

const { // linemod-replace-with: export {
  findCauseByReference,
  getErrorCause,
  messageWithCauses,
  stackWithCauses,
} = require('./lib/helpers'); // linemod-replace-with: } from './lib/helpers.mjs';

module.exports = {      // linemod-remove
  ErrorWithCause,       // linemod-remove
  findCauseByReference, // linemod-remove
  getErrorCause,        // linemod-remove
  stackWithCauses,      // linemod-remove
  messageWithCauses,    // linemod-remove
};                      // linemod-remove
