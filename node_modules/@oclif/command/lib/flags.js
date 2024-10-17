"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.version = exports.string = exports.enum = exports.option = exports.build = void 0;
const Parser = require("@oclif/parser");
function build(defaults) {
    return Parser.flags.build(defaults);
}
exports.build = build;
function option(options) {
    return build(options)();
}
exports.option = option;
const _enum = (opts) => {
    return build(Object.assign({ parse(input) {
            if (!opts.options.includes(input))
                throw new Error(`Expected --${this.name}=${input} to be one of: ${opts.options.join(', ')}`);
            return input;
        }, helpValue: `(${opts.options.join('|')})` }, opts))();
};
exports.enum = _enum;
const stringFlag = build({});
exports.string = stringFlag;
var flags_1 = require("@oclif/parser/lib/flags");
Object.defineProperty(exports, "boolean", { enumerable: true, get: function () { return flags_1.boolean; } });
Object.defineProperty(exports, "integer", { enumerable: true, get: function () { return flags_1.integer; } });
exports.version = (opts = {}) => {
    return Parser.flags.boolean(Object.assign(Object.assign({ 
        // char: 'v',
        description: 'show CLI version' }, opts), { parse: (_, cmd) => {
            cmd.log(cmd.config.userAgent);
            cmd.exit(0);
        } }));
};
exports.help = (opts = {}) => {
    return Parser.flags.boolean(Object.assign(Object.assign({ 
        // char: 'h',
        description: 'show CLI help' }, opts), { parse: (_, cmd) => {
            cmd._help();
        } }));
};
