import { EntityManager } from "typeorm";
import { IsolationLevel } from "typeorm/driver/types/IsolationLevel";
export declare abstract class TransactionBaseService {
    protected readonly __container__: any;
    protected readonly __configModule__?: Record<string, unknown> | undefined;
    protected readonly __moduleDeclaration__?: Record<string, unknown> | undefined;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected get activeManager_(): EntityManager;
    protected constructor(__container__: any, __configModule__?: Record<string, unknown> | undefined, __moduleDeclaration__?: Record<string, unknown> | undefined);
    withTransaction(transactionManager?: EntityManager): this;
    protected shouldRetryTransaction_(err: {
        code: string;
    } | Record<string, unknown>): boolean;
    /**
     * Wraps some work within a transactional block. If the service already has
     * a transaction manager attached this will be reused, otherwise a new
     * transaction manager is created.
     * @param work - the transactional work to be done
     * @param isolationOrErrorHandler - the isolation level to be used for the work.
     * @param maybeErrorHandlerOrDontFail Potential error handler
     * @return the result of the transactional work
     */
    protected atomicPhase_<TResult, TError>(work: (transactionManager: EntityManager) => Promise<TResult | never>, isolationOrErrorHandler?: IsolationLevel | ((error: TError) => Promise<never | TResult | void>), maybeErrorHandlerOrDontFail?: (error: TError) => Promise<never | TResult | void>): Promise<never | TResult>;
}
