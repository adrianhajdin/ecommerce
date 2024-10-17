import { IdempotencyCallbackResult } from "../../types/idempotency-key";
import { EntityManager } from "typeorm";
import { IdempotencyKey } from "../../models";
import { AwilixContainer } from "awilix";
import { IsolationLevel } from "typeorm/driver/types/IsolationLevel";
export type RunIdempotencyStepOptions = {
    manager: EntityManager;
    idempotencyKey: IdempotencyKey;
    container: AwilixContainer;
    isolationLevel: IsolationLevel;
};
export declare function runIdempotencyStep(handler: ({ manager, }: {
    manager: EntityManager;
}) => Promise<IdempotencyCallbackResult>, { manager, idempotencyKey, container, isolationLevel, }: RunIdempotencyStepOptions): Promise<void>;
