/**
 * Filter response data to contain props specified in the `allowedProperties`.
 * You can read more in the transformQuery middleware utility methods.
 *
 * @param data - record or an array of records in the response
 * @param fields - record props allowed in the response
 */
declare function cleanResponseData<T extends unknown | unknown[]>(data: T, fields: string[]): T extends [] ? Partial<T>[] : Partial<T>;
export { cleanResponseData };
