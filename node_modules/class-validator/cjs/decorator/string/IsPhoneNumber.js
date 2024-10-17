"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPhoneNumber = exports.isPhoneNumber = exports.IS_PHONE_NUMBER = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const max_1 = require("libphonenumber-js/max");
exports.IS_PHONE_NUMBER = 'isPhoneNumber';
/**
 * Checks if the string is a valid phone number. To successfully validate any phone number the text must include
 * the intl. calling code, if the calling code wont be provided then the region must be set.
 *
 * @param value the potential phone number string to test
 * @param region 2 characters uppercase country code (e.g. DE, US, CH) for country specific validation.
 * If text doesn't start with the international calling code (e.g. +41), then you must set this parameter.
 */
function isPhoneNumber(value, region) {
    if (typeof value !== 'string' || value.trim() !== value) {
        return false;
    }
    try {
        const phoneNumber = (0, max_1.parsePhoneNumber)(value, region);
        /**
         * We fail the validation if the user provided a region code
         * and it doesn't match with the country code of the parsed number.
         **/
        if (region && phoneNumber.country !== region) {
            return false;
        }
        return phoneNumber.isValid();
    }
    catch (error) {
        return false;
    }
}
exports.isPhoneNumber = isPhoneNumber;
/**
 * Checks if the string is a valid phone number. To successfully validate any phone number the text must include
 * the intl. calling code, if the calling code wont be provided then the region must be set.
 *
 * @param region 2 characters uppercase country code (e.g. DE, US, CH) for country specific validation.
 * If text doesn't start with the international calling code (e.g. +41), then you must set this parameter.
 */
function IsPhoneNumber(region, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_PHONE_NUMBER,
        constraints: [region],
        validator: {
            validate: (value, args) => isPhoneNumber(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + '$property must be a valid phone number', validationOptions),
        },
    }, validationOptions);
}
exports.IsPhoneNumber = IsPhoneNumber;
//# sourceMappingURL=IsPhoneNumber.js.map