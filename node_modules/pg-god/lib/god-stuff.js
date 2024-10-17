"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropDatabase = exports.createDatabase = void 0;
const pg_1 = require("pg");
const error_1 = require("./error");
const defaultDbCred = {
    user: 'postgres',
    database: 'postgres',
    password: '',
    port: 5432,
    host: 'localhost',
};
/**
 * @param newDbConfig Requires a `databaseName` you are trying to create. `errorIfExist` is default to false. When `errorIfExist` is `true`,
 * it will throw error when database already exist before executing creation.
 * @param dbCredential Default to localhost:5432 `postgres` database and `postgres` user with empty password.
 * @throws `PgDbGodError` More details at `errorProtocol`.
 *
 * @example createDatabase({ databaseName: 'bank-development' })
 */
async function createDatabase(newDbConfig, dbCredential = defaultDbCred) {
    const client = new pg_1.Client(Object.assign(Object.assign({}, defaultDbCred), dbCredential));
    try {
        await client.connect();
        const existingDb = await client.query(`
      SELECT datname
      FROM pg_catalog.pg_database
      WHERE lower(datname) = lower('${newDbConfig.databaseName}');
    `);
        if (existingDb.rowCount > 0 && newDbConfig.errorIfExist)
            throw error_1.PgGodError.dbAlreadyExist();
        if (existingDb.rowCount > 0 && !newDbConfig.errorIfExist)
            return;
        await client.query(`CREATE DATABASE "${newDbConfig.databaseName}";`);
    }
    catch (error) {
        throw error_1.PgGodError.fromPgError(error);
    }
    finally {
        await client.end();
    }
}
exports.createDatabase = createDatabase;
/**
 * @param dropDbConfig.databaseName Requires a `databaseName` you are trying to drop.
 * @param dropDbConfig.errorIfNonExist is default to false. When `errorIfNonExist` is `true`, it will throw error when database doesn't exist before executing drop.
 * @param dropDbConfig.dropConnections is default to true. When `dropConnections` is `true`, it will automatically drop all current connections to the database.
 * @param dbCredential Default to localhost:5432 `postgres` database and `postgres` user with empty password.
 * @throws `PgDbGodError` More details at `errorProtocol`.
 *
 * @example dropDatabase({ databaseName: 'bank-development' })
 */
async function dropDatabase(dropDbConfig, dbCredential = defaultDbCred) {
    const client = new pg_1.Client(Object.assign(Object.assign({}, defaultDbCred), dbCredential));
    try {
        await client.connect();
        const existingDb = await client.query(`
      SELECT datname
      FROM pg_catalog.pg_database
      WHERE lower(datname) = lower('${dropDbConfig.databaseName}');
    `);
        if (existingDb.rowCount === 0 && dropDbConfig.errorIfNonExist)
            throw error_1.PgGodError.dbDoesNotExist();
        if (existingDb.rowCount === 0 && !dropDbConfig.errorIfNonExist)
            return;
        if (dropDbConfig.dropConnections !== false)
            await dropDbOtherUserConnections(client, dropDbConfig.databaseName);
        await client.query(`DROP DATABASE "${dropDbConfig.databaseName}";`);
    }
    catch (error) {
        throw error_1.PgGodError.fromPgError(error);
    }
    finally {
        await client.end();
    }
}
exports.dropDatabase = dropDatabase;
async function dropDbOtherUserConnections(client, dbName) {
    return client.query(`
    SELECT
      pg_terminate_backend(pg_stat_activity.pid)
    FROM
      pg_stat_activity
    WHERE
      pg_stat_activity.datname = '${dbName}'
      AND pid <> pg_backend_pid();
  `);
}
//# sourceMappingURL=god-stuff.js.map