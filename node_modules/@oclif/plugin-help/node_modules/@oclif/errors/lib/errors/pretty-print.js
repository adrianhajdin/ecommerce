"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap = require("wrap-ansi");
const indent = require("indent-string");
const screen = require("../screen");
const config_1 = require("../config");
function applyPrettyPrintOptions(error, options) {
    const prettyErrorKeys = ['message', 'code', 'ref', 'suggestions'];
    prettyErrorKeys.forEach(key => {
        const applyOptionsKey = !(key in error) && options[key];
        if (applyOptionsKey) {
            error[key] = options[key];
        }
    });
    return error;
}
exports.applyPrettyPrintOptions = applyPrettyPrintOptions;
const formatSuggestions = (suggestions) => {
    const label = 'Try this:';
    if (!suggestions || suggestions.length === 0)
        return undefined;
    if (suggestions.length === 1)
        return `${label} ${suggestions[0]}`;
    const multiple = suggestions.map(suggestion => `* ${suggestion}`).join('\n');
    return `${label}\n${indent(multiple, 2)}`;
};
function prettyPrint(error) {
    if (config_1.config.debug) {
        return error.stack;
    }
    const { message, code, suggestions, ref, name: errorSuffix, bang } = error;
    // errorSuffix is pulled from the 'name' property on CLIError
    // and is like either Error or Warning
    const formattedHeader = message ? `${errorSuffix || 'Error'}: ${message}` : undefined;
    const formattedCode = code ? `Code: ${code}` : undefined;
    const formattedSuggestions = formatSuggestions(suggestions);
    const formattedReference = ref ? `Reference: ${ref}` : undefined;
    const formatted = [formattedHeader, formattedCode, formattedSuggestions, formattedReference]
        .filter(Boolean)
        .join('\n');
    let output = wrap(formatted, screen.errtermwidth - 6, { trim: false, hard: true });
    output = indent(output, 3);
    output = indent(output, 1, { indent: bang || '', includeEmptyLines: true });
    output = indent(output, 1);
    return output;
}
exports.default = prettyPrint;
