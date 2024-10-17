import { ValidationOptions } from '../ValidationOptions';
export declare const IS_DEFINED: string;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
export declare function isDefined<T>(value: T | undefined | null): value is T;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
export declare function IsDefined(validationOptions?: ValidationOptions): PropertyDecorator;
