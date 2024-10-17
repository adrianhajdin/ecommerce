"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityIdentifier = void 0;
/**
 * @internal
 */
class EntityIdentifier {
    constructor(value) {
        this.value = value;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.EntityIdentifier = EntityIdentifier;
