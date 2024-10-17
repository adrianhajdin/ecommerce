import { ResolutionStack } from './container';
/**
 * An extendable error class.
 * @author https://github.com/bjyoungblood/es6-error/
 */
export declare class ExtendableError extends Error {
    /**
     * Constructor for the error.
     *
     * @param  {String} message
     * The error message.
     */
    constructor(message: string);
}
/**
 * Base error for all Awilix-specific errors.
 */
export declare class AwilixError extends ExtendableError {
}
/**
 * Error thrown to indicate a type mismatch.
 */
export declare class AwilixTypeError extends AwilixError {
    /**
     * Constructor, takes the function name, expected and given
     * type to produce an error.
     *
     * @param {string} funcDescription
     * Name of the function being guarded.
     *
     * @param {string} paramName
     * The parameter there was an issue with.
     *
     * @param {string} expectedType
     * Name of the expected type.
     *
     * @param {string} givenType
     * Name of the given type.
     */
    constructor(funcDescription: string, paramName: string, expectedType: string, givenType: any);
    /**
     * Asserts the given condition, throws an error otherwise.
     *
     * @param {*} condition
     * The condition to check
     *
     * @param {string} funcDescription
     * Name of the function being guarded.
     *
     * @param {string} paramName
     * The parameter there was an issue with.
     *
     * @param {string} expectedType
     * Name of the expected type.
     *
     * @param {string} givenType
     * Name of the given type.
     */
    static assert<T>(condition: T, funcDescription: string, paramName: string, expectedType: string, givenType: any): NonNullable<T>;
}
/**
 * A nice error class so we can do an instanceOf check.
 */
export declare class AwilixResolutionError extends AwilixError {
    /**
     * Constructor, takes the registered modules and unresolved tokens
     * to create a message.
     *
     * @param {string|symbol} name
     * The name of the module that could not be resolved.
     *
     * @param  {string[]} resolutionStack
     * The current resolution stack
     */
    constructor(name: string | symbol, resolutionStack: ResolutionStack, message?: string);
}
