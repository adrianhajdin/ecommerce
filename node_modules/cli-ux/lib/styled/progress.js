"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3pp
const cliProgress = require('cli-progress');
function progress(options) {
    // if no options passed, create empty options
    if (!options) {
        options = {};
    }
    // set noTTYOutput for options
    options.noTTYOutput = Boolean(process.env.TERM === 'dumb' || !process.stdin.isTTY);
    return new cliProgress.SingleBar(options);
}
exports.default = progress;
