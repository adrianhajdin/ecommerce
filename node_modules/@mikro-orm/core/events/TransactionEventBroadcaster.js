"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEventBroadcaster = void 0;
class TransactionEventBroadcaster {
    constructor(em, uow) {
        this.em = em;
        this.uow = uow;
        this.eventManager = this.em.getEventManager();
    }
    async dispatchEvent(event, transaction) {
        await this.eventManager.dispatchEvent(event, { em: this.em, transaction, uow: this.uow });
    }
}
exports.TransactionEventBroadcaster = TransactionEventBroadcaster;
