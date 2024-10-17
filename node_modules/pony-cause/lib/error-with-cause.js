'use strict';

/** @template [T=undefined] */
class ErrorWithCause extends Error { // linemod-prefix-with: export
  /**
   * @param {string} message
   * @param {{ cause?: T }} options
   */
  constructor (message, { cause } = {}) {
    super(message);

    /** @type {string} */
    this.name = ErrorWithCause.name;
    if (cause) {
      /** @type {T} */
      this.cause = cause;
    }
    /** @type {string} */
    this.message = message;
  }
}

module.exports = {      // linemod-remove
  ErrorWithCause,       // linemod-remove
};                      // linemod-remove
