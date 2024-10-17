"use strict";
// tslint:disable no-implicit-dependencies
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
function addOclifExitCode(error, options) {
    if (!('oclif' in error)) {
        error.oclif = {};
    }
    error.oclif.exit = (options === null || options === void 0 ? void 0 : options.exit) === undefined ? 2 : options.exit;
    return error;
}
exports.addOclifExitCode = addOclifExitCode;
class CLIError extends Error {
    constructor(error, options = {}) {
        super(error instanceof Error ? error.message : error);
        this.oclif = {};
        addOclifExitCode(this, options);
        this.code = options.code;
    }
    get stack() {
        const clean = require('clean-stack');
        return clean(super.stack, { pretty: true });
    }
    /**
     * @deprecated `render` Errors display should be handled by display function, like pretty-print
     * @return {string} returns a string representing the dispay of the error
     */
    render() {
        if (config_1.config.debug) {
            return this.stack;
        }
        const wrap = require('wrap-ansi');
        const indent = require('indent-string');
        let output = `${this.name}: ${this.message}`;
        // eslint-disable-next-line node/no-missing-require
        output = wrap(output, require('../screen').errtermwidth - 6, { trim: false, hard: true });
        output = indent(output, 3);
        output = indent(output, 1, { indent: this.bang, includeEmptyLines: true });
        output = indent(output, 1);
        return output;
    }
    get bang() {
        let red = ((s) => s);
        try {
            red = require('chalk').red;
        }
        catch (_a) { }
        return red(process.platform === 'win32' ? '»' : '›');
    }
}
exports.CLIError = CLIError;
(function (CLIError) {
    class Warn extends CLIError {
        constructor(err) {
            super(err instanceof Error ? err.message : err);
            this.name = 'Warning';
        }
        get bang() {
            let yellow = ((s) => s);
            try {
                yellow = require('chalk').yellow;
            }
            catch (_a) { }
            return yellow(process.platform === 'win32' ? '»' : '›');
        }
    }
    CLIError.Warn = Warn;
})(CLIError = exports.CLIError || (exports.CLIError = {}));
