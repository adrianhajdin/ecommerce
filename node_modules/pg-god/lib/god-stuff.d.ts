export declare type DbCredential = {
    user: string;
    database: string;
    port: number;
    host: string;
    password: string;
};
export declare type NewDbConfig = {
    databaseName: string;
    errorIfExist?: boolean;
};
/**
 * @param newDbConfig Requires a `databaseName` you are trying to create. `errorIfExist` is default to false. When `errorIfExist` is `true`,
 * it will throw error when database already exist before executing creation.
 * @param dbCredential Default to localhost:5432 `postgres` database and `postgres` user with empty password.
 * @throws `PgDbGodError` More details at `errorProtocol`.
 *
 * @example createDatabase({ databaseName: 'bank-development' })
 */
export declare function createDatabase(newDbConfig: NewDbConfig, dbCredential?: Partial<DbCredential>): Promise<void>;
export declare type DropDbConfig = {
    databaseName: string;
    errorIfNonExist?: boolean;
    dropConnections?: boolean;
};
/**
 * @param dropDbConfig.databaseName Requires a `databaseName` you are trying to drop.
 * @param dropDbConfig.errorIfNonExist is default to false. When `errorIfNonExist` is `true`, it will throw error when database doesn't exist before executing drop.
 * @param dropDbConfig.dropConnections is default to true. When `dropConnections` is `true`, it will automatically drop all current connections to the database.
 * @param dbCredential Default to localhost:5432 `postgres` database and `postgres` user with empty password.
 * @throws `PgDbGodError` More details at `errorProtocol`.
 *
 * @example dropDatabase({ databaseName: 'bank-development' })
 */
export declare function dropDatabase(dropDbConfig: DropDbConfig, dbCredential?: Partial<DbCredential>): Promise<void>;
//# sourceMappingURL=god-stuff.d.ts.map