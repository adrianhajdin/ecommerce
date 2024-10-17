"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitError = void 0;
const cli_1 = require("./cli");
class ExitError extends cli_1.CLIError {
    constructor(exitCode = 0) {
        super(`EEXIT: ${exitCode}`, { exit: exitCode });
        this.code = 'EEXIT';
    }
    render() {
        return '';
    }
}
exports.ExitError = ExitError;
