'use strict';

/** @template [T=undefined] */
export class ErrorWithCause extends Error {
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
