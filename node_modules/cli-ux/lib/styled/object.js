"use strict";
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const util = tslib_1.__importStar(require("util"));
function styledObject(obj, keys) {
    const output = [];
    const keyLengths = Object.keys(obj).map(key => key.toString().length);
    const maxKeyLength = Math.max(...keyLengths) + 2;
    function pp(obj) {
        if (typeof obj === 'string' || typeof obj === 'number')
            return obj;
        if (typeof obj === 'object') {
            return Object.keys(obj)
                .map(k => k + ': ' + util.inspect(obj[k]))
                .join(', ');
        }
        return util.inspect(obj);
    }
    const logKeyValue = (key, value) => {
        return `${chalk_1.default.blue(key)}:` + ' '.repeat(maxKeyLength - key.length - 1) + pp(value);
    };
    for (const key of keys || Object.keys(obj).sort()) {
        const value = obj[key];
        if (Array.isArray(value)) {
            if (value.length > 0) {
                output.push(logKeyValue(key, value[0]));
                for (const e of value.slice(1)) {
                    output.push(' '.repeat(maxKeyLength) + pp(e));
                }
            }
        }
        else if (value !== null && value !== undefined) {
            output.push(logKeyValue(key, value));
        }
    }
    return output.join('\n');
}
exports.default = styledObject;
