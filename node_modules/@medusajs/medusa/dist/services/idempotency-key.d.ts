import { CreateIdempotencyKeyInput, IdempotencyCallbackResult } from "../types/idempotency-key";
import { DeepPartial, EntityManager } from "typeorm";
import { IdempotencyKey } from "../models";
import { IdempotencyKeyRepository } from "../repositories/idempotency-key";
import { Selector } from "../types/common";
import { TransactionBaseService } from "../interfaces";
type InjectedDependencies = {
    manager: EntityManager;
    idempotencyKeyRepository: typeof IdempotencyKeyRepository;
};
declare class IdempotencyKeyService extends TransactionBaseService {
    protected readonly idempotencyKeyRepository_: typeof IdempotencyKeyRepository;
    constructor({ idempotencyKeyRepository }: InjectedDependencies);
    /**
     * Execute the initial steps in a idempotent request.
     * @param headerKey - potential idempotency key from header
     * @param reqMethod - method of request
     * @param reqParams - params of request
     * @param reqPath - path of request
     * @return the existing or created idempotency key
     */
    initializeRequest(headerKey: string, reqMethod: string, reqParams: Record<string, unknown>, reqPath: string): Promise<IdempotencyKey>;
    /**
     * Creates an idempotency key for a request.
     * If no idempotency key is provided in request, we will create a unique
     * identifier.
     * @param payload - payload of request to create idempotency key for
     * @return the created idempotency key
     */
    create(payload: CreateIdempotencyKeyInput): Promise<IdempotencyKey>;
    /**
     * Retrieves an idempotency key
     * @param idempotencyKeyOrSelector - key or selector to retrieve
     * @return idempotency key
     */
    retrieve(idempotencyKeyOrSelector: string | Selector<IdempotencyKey>): Promise<IdempotencyKey | never>;
    /**
     * Locks an idempotency.
     * @param idempotencyKey - key to lock
     * @return result of the update operation
     */
    lock(idempotencyKey: string): Promise<IdempotencyKey | never>;
    /**
     * Locks an idempotency.
     * @param {string} idempotencyKey - key to update
     * @param {object} update - update object
     * @return {Promise} result of the update operation
     */
    update(idempotencyKey: string, update: DeepPartial<IdempotencyKey>): Promise<IdempotencyKey>;
    /**
     * Performs an atomic work stage.
     * An atomic work stage contains some related functionality, that needs to be
     * transactionally executed in isolation. An idempotent request will
     * always consist of 2 or more of these phases. The required phases are
     * "started" and "finished".
     * @param idempotencyKey - current idempotency key
     * @param callback - functionality to execute within the phase
     * @return new updated idempotency key
     */
    workStage(idempotencyKey: string, callback: (transactionManager: EntityManager) => Promise<IdempotencyCallbackResult | never>): Promise<IdempotencyKey>;
}
export default IdempotencyKeyService;
