/**
 * Base class for all errors detected in the driver.
 */
export declare class DriverException extends Error {
    code?: string;
    errno?: number;
    sqlState?: string;
    sqlMessage?: string;
    errmsg?: string;
    constructor(previous: Error);
}
/**
 * Base class for all connection related errors detected in the driver.
 */
export declare class ConnectionException extends DriverException {
}
/**
 * Base class for all server related errors detected in the driver.
 */
export declare class ServerException extends DriverException {
}
/**
 * Base class for all constraint violation related errors detected in the driver.
 */
export declare class ConstraintViolationException extends ServerException {
}
/**
 * Base class for all already existing database object related errors detected in the driver.
 *
 * A database object is considered any asset that can be created in a database
 * such as schemas, tables, views, sequences, triggers,  constraints, indexes,
 * functions, stored procedures etc.
 */
export declare class DatabaseObjectExistsException extends ServerException {
}
/**
 * Base class for all unknown database object related errors detected in the driver.
 *
 * A database object is considered any asset that can be created in a database
 * such as schemas, tables, views, sequences, triggers,  constraints, indexes,
 * functions, stored procedures etc.
 */
export declare class DatabaseObjectNotFoundException extends ServerException {
}
/**
 * Exception for a deadlock error of a transaction detected in the driver.
 */
export declare class DeadlockException extends ServerException {
}
/**
 * Exception for a foreign key constraint violation detected in the driver.
 */
export declare class ForeignKeyConstraintViolationException extends ConstraintViolationException {
}
/**
 * Exception for a check constraint violation detected in the driver.
 */
export declare class CheckConstraintViolationException extends ConstraintViolationException {
}
/**
 * Exception for an invalid specified field name in a statement detected in the driver.
 */
export declare class InvalidFieldNameException extends ServerException {
}
/**
 * Exception for a lock wait timeout error of a transaction detected in the driver.
 */
export declare class LockWaitTimeoutException extends ServerException {
}
/**
 * Exception for a non-unique/ambiguous specified field name in a statement detected in the driver.
 */
export declare class NonUniqueFieldNameException extends ServerException {
}
/**
 * Exception for a NOT NULL constraint violation detected in the driver.
 */
export declare class NotNullConstraintViolationException extends ConstraintViolationException {
}
/**
 * Exception for a write operation attempt on a read-only database element detected in the driver.
 */
export declare class ReadOnlyException extends ServerException {
}
/**
 * Exception for a syntax error in a statement detected in the driver.
 */
export declare class SyntaxErrorException extends ServerException {
}
/**
 * Exception for an already existing table referenced in a statement detected in the driver.
 */
export declare class TableExistsException extends DatabaseObjectExistsException {
}
/**
 * Exception for an unknown table referenced in a statement detected in the driver.
 */
export declare class TableNotFoundException extends DatabaseObjectNotFoundException {
}
/**
 * Exception for a unique constraint violation detected in the driver.
 */
export declare class UniqueConstraintViolationException extends ConstraintViolationException {
}
