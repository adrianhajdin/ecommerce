import { MedusaError } from "medusa-core-utils";
export declare enum PostgresError {
    DUPLICATE_ERROR = "23505",
    FOREIGN_KEY_ERROR = "23503",
    SERIALIZATION_FAILURE = "40001",
    NULL_VIOLATION = "23502"
}
export declare const formatException: (err: any) => MedusaError;
