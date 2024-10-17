"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
/* eslint-disable no-process-exit */
/* eslint-disable unicorn/no-process-exit */
const config_1 = require("./config");
const pretty_print_1 = require("./errors/pretty-print");
const clean = require("clean-stack");
const cli_1 = require("./errors/cli");
exports.handle = (err) => {
    var _a, _b, _c;
    try {
        if (!err)
            err = new cli_1.CLIError('no error?');
        if (err.message === 'SIGINT')
            process.exit(1);
        const shouldPrint = !(err.code === 'EEXIT');
        const pretty = pretty_print_1.default(err);
        const stack = clean(err.stack || '', { pretty: true });
        if (shouldPrint) {
            console.error(pretty ? pretty : stack);
        }
        const exitCode = ((_a = err.oclif) === null || _a === void 0 ? void 0 : _a.exit) !== undefined && ((_b = err.oclif) === null || _b === void 0 ? void 0 : _b.exit) !== false ? (_c = err.oclif) === null || _c === void 0 ? void 0 : _c.exit : 1;
        if (config_1.config.errorLogger && err.code !== 'EEXIT') {
            if (stack) {
                config_1.config.errorLogger.log(stack);
            }
            config_1.config.errorLogger.flush()
                .then(() => process.exit(exitCode))
                .catch(console.error);
        }
        else
            process.exit(exitCode);
    }
    catch (error) {
        console.error(err.stack);
        console.error(error.stack);
        process.exit(1);
    }
};
