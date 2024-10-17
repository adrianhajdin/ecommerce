"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = exports.isFunction = exports.isClass = exports.last = exports.nameValueToObject = exports.flatten = void 0;
const function_tokenizer_1 = require("./function-tokenizer");
/**
 * Quick flatten utility to flatten a 2-dimensional array.
 *
 * @param  {Array<Array<Item>>} array
 * The array to flatten.
 *
 * @return {Array<Item>}
 * The flattened array.
 */
function flatten(array) {
    const result = [];
    array.forEach((arr) => {
        arr.forEach((item) => {
            result.push(item);
        });
    });
    return result;
}
exports.flatten = flatten;
/**
 * Creates a { name: value } object if the input isn't already in that format.
 *
 * @param  {string|object} name
 * Either a string or an object.
 *
 * @param  {*} value
 * The value, only used if name is not an object.
 *
 * @return {object}
 */
function nameValueToObject(name, value) {
    let obj = name;
    if (typeof obj === 'string' || typeof obj === 'symbol') {
        return { [name]: value };
    }
    return obj;
}
exports.nameValueToObject = nameValueToObject;
/**
 * Returns the last item in the array.
 *
 * @param  {*[]} arr
 * The array.
 *
 * @return {*}
 * The last element.
 */
function last(arr) {
    return arr[arr.length - 1];
}
exports.last = last;
/**
 * Determines if the given function is a class.
 *
 * @param  {Function} fn
 * @return {boolean}
 */
function isClass(fn) {
    /*tslint:disable-next-line*/
    if (typeof fn !== 'function') {
        return false;
    }
    // Should only need 2 tokens.
    const tokenizer = (0, function_tokenizer_1.createTokenizer)(fn.toString());
    const first = tokenizer.next();
    if (first.type === 'class') {
        return true;
    }
    const second = tokenizer.next();
    if (first.type === 'function' && second.value) {
        if (second.value[0] === second.value[0].toUpperCase()) {
            return true;
        }
    }
    return false;
}
exports.isClass = isClass;
/**
 * Determines if the given value is a function.
 *
 * @param  {Any} val
 * Any value to check if it's a function.
 *
 * @return {boolean}
 * true if the value is a function, false otherwise.
 */
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
/**
 * Returns the unique items in the array.
 *
 * @param {Array<T>}
 * The array to remove dupes from.
 *
 * @return {Array<T>}
 * The deduped array.
 */
function uniq(arr) {
    return Array.from(new Set(arr));
}
exports.uniq = uniq;
//# sourceMappingURL=utils.js.map