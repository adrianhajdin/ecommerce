import { ValidationOptions } from '../ValidationOptions';
import * as ValidatorJS from 'validator';
export declare const IS_POSTAL_CODE = "isPostalCode";
/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
export declare function isPostalCode(value: unknown, locale: 'any' | ValidatorJS.PostalCodeLocale): boolean;
/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
export declare function IsPostalCode(locale?: 'any' | ValidatorJS.PostalCodeLocale, validationOptions?: ValidationOptions): PropertyDecorator;
