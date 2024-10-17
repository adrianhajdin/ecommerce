"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueKeys = void 0;
class QueueKeys {
    constructor(prefix = 'bull') {
        this.prefix = prefix;
    }
    getKeys(name) {
        const keys = {};
        [
            '',
            'active',
            'wait',
            'waiting-children',
            'paused',
            'id',
            'delayed',
            'prioritized',
            'stalled-check',
            'completed',
            'failed',
            'stalled',
            'repeat',
            'limiter',
            'meta',
            'events',
            'pc',
            'marker',
            'de', // deduplication key
        ].forEach(key => {
            keys[key] = this.toKey(name, key);
        });
        return keys;
    }
    toKey(name, type) {
        return `${this.getQueueQualifiedName(name)}:${type}`;
    }
    getQueueQualifiedName(name) {
        return `${this.prefix}:${name}`;
    }
}
exports.QueueKeys = QueueKeys;
//# sourceMappingURL=queue-keys.js.map