"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractParser = void 0;
/**
 * Abstract class implementation of the IParser interface. All different parsing implementations should extend this class
 */
var AbstractParser = /** @class */ (function () {
    function AbstractParser(schema) {
        this.$$schema = schema;
    }
    return AbstractParser;
}());
exports.AbstractParser = AbstractParser;
//# sourceMappingURL=abstract-parser.js.map