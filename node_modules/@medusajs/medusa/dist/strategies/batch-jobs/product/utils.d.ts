import { TParsedProductImportRowData } from "./types";
/**
 * Pick keys for a new object by regex.
 * @param data - Initial data object
 * @param regex - A regex used to pick which keys are going to be copied in the new object
 */
export declare function pickObjectPropsByRegex(data: TParsedProductImportRowData, regex: RegExp): TParsedProductImportRowData;
/**
 * Pick data from parsed CSV object relevant for product create/update and remove prefixes from keys.
 */
export declare function transformProductData(data: TParsedProductImportRowData): TParsedProductImportRowData;
/**
 * Pick data from parsed CSV object relevant for variant create/update and remove prefixes from keys.
 */
export declare function transformVariantData(data: TParsedProductImportRowData): TParsedProductImportRowData;
