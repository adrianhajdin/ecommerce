"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lifetime = void 0;
/**
 * Lifetime types.
 */
exports.Lifetime = {
    /**
     * The registration will be resolved once and only once.
     * @type {String}
     */
    SINGLETON: 'SINGLETON',
    /**
     * The registration will be resolved every time (never cached).
     * @type {String}
     */
    TRANSIENT: 'TRANSIENT',
    /**
     * The registration will be resolved once per scope.
     * @type {String}
     */
    SCOPED: 'SCOPED',
};
//# sourceMappingURL=lifetime.js.map