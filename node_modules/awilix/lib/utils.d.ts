import { Constructor } from './resolvers';
/**
 * Quick flatten utility to flatten a 2-dimensional array.
 *
 * @param  {Array<Array<Item>>} array
 * The array to flatten.
 *
 * @return {Array<Item>}
 * The flattened array.
 */
export declare function flatten<T>(array: Array<Array<T>>): Array<T>;
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
export declare function nameValueToObject(name: string | symbol | object, value?: any): Record<string | symbol, any>;
/**
 * Returns the last item in the array.
 *
 * @param  {*[]} arr
 * The array.
 *
 * @return {*}
 * The last element.
 */
export declare function last<T>(arr: Array<T>): T;
/**
 * Determines if the given function is a class.
 *
 * @param  {Function} fn
 * @return {boolean}
 */
export declare function isClass(fn: Function | Constructor<any>): boolean;
/**
 * Determines if the given value is a function.
 *
 * @param  {Any} val
 * Any value to check if it's a function.
 *
 * @return {boolean}
 * true if the value is a function, false otherwise.
 */
export declare function isFunction(val: any): boolean;
/**
 * Returns the unique items in the array.
 *
 * @param {Array<T>}
 * The array to remove dupes from.
 *
 * @return {Array<T>}
 * The deduped array.
 */
export declare function uniq<T>(arr: Array<T>): Array<T>;
