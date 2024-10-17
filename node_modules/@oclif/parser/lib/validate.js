"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("@oclif/errors");
const errors_2 = require("./errors");
function validate(parse) {
    function validateArgs() {
        const maxArgs = parse.input.args.length;
        if (parse.input.strict && parse.output.argv.length > maxArgs) {
            const extras = parse.output.argv.slice(maxArgs);
            throw new errors_2.UnexpectedArgsError({ parse, args: extras });
        }
        const missingRequiredArgs = [];
        let hasOptional = false;
        parse.input.args.forEach((arg, index) => {
            if (!arg.required) {
                hasOptional = true;
            }
            else if (hasOptional) {
                // (required arg) check whether an optional has occurred before
                // optionals should follow required, not before
                throw new errors_2.InvalidArgsSpecError({ parse, args: parse.input.args });
            }
            if (arg.required) {
                if (!parse.output.argv[index] && parse.output.argv[index] !== 0) {
                    missingRequiredArgs.push(arg);
                }
            }
        });
        if (missingRequiredArgs.length > 0) {
            throw new errors_2.RequiredArgsError({ parse, args: missingRequiredArgs });
        }
    }
    function validateAcrossFlags(flag) {
        var _a;
        const intersection = Object.entries(parse.input.flags)
            .map(entry => entry[0]) // array of flag names
            .filter(flagName => parse.output.flags[flagName] !== undefined) // with values
            .filter(flagName => flag.exactlyOne && flag.exactlyOne.includes(flagName)); // and in the exactlyOne list
        if (intersection.length === 0) {
            // the command's exactlyOne may or may not include itself, so we'll use Set to add + de-dupe
            throw new errors_1.CLIError(`Exactly one of the following must be provided: ${[
                ...new Set((_a = flag.exactlyOne) === null || _a === void 0 ? void 0 : _a.map(flag => `--${flag}`)),
            ].join(', ')}`);
        }
    }
    function validateFlags() {
        for (const [name, flag] of Object.entries(parse.input.flags)) {
            if (parse.output.flags[name] !== undefined) {
                for (const also of flag.dependsOn || []) {
                    if (!parse.output.flags[also]) {
                        throw new errors_1.CLIError(`--${also}= must also be provided when using --${name}=`);
                    }
                }
                for (const also of flag.exclusive || []) {
                    // do not enforce exclusivity for flags that were defaulted
                    if (parse.output.metadata.flags[also] &&
                        parse.output.metadata.flags[also].setFromDefault)
                        continue;
                    if (parse.output.metadata.flags[name] &&
                        parse.output.metadata.flags[name].setFromDefault)
                        continue;
                    if (parse.output.flags[also]) {
                        throw new errors_1.CLIError(`--${also}= cannot also be provided when using --${name}=`);
                    }
                }
                for (const also of flag.exactlyOne || []) {
                    if (also !== name && parse.output.flags[also]) {
                        throw new errors_1.CLIError(`--${also}= cannot also be provided when using --${name}=`);
                    }
                }
            }
            else if (flag.required) {
                throw new errors_2.RequiredFlagError({ parse, flag });
            }
            else if (flag.exactlyOne && flag.exactlyOne.length > 0) {
                validateAcrossFlags(flag);
            }
        }
    }
    validateArgs();
    validateFlags();
}
exports.validate = validate;
