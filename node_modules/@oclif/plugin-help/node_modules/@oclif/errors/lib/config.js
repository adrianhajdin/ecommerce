"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
// eslint-disable-next-line no-multi-assign
const g = global.oclif = global.oclif || {};
function displayWarnings() {
    if (process.listenerCount('warning') > 1)
        return;
    process.on('warning', (warning) => {
        console.error(warning.stack);
        if (warning.detail)
            console.error(warning.detail);
    });
}
exports.config = {
    errorLogger: undefined,
    get debug() {
        return Boolean(g.debug);
    },
    set debug(enabled) {
        g.debug = enabled;
        if (enabled)
            displayWarnings();
    },
    get errlog() {
        return g.errlog;
    },
    set errlog(errlog) {
        g.errlog = errlog;
        if (errlog)
            this.errorLogger = new logger_1.Logger(errlog);
        else
            delete this.errorLogger;
    },
};
