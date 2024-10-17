import { ValidationOptions } from '../ValidationOptions';
import * as ValidatorJS from 'validator';
export declare const IS_UUID = "isUuid";
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export declare function isUUID(value: unknown, version?: ValidatorJS.UUIDVersion): boolean;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export declare function IsUUID(version?: ValidatorJS.UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator;
