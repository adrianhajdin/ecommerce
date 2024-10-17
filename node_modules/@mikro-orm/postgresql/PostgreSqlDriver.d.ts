import type { Configuration } from '@mikro-orm/core';
import { AbstractSqlDriver } from '@mikro-orm/knex';
import { PostgreSqlConnection } from './PostgreSqlConnection';
export declare class PostgreSqlDriver extends AbstractSqlDriver<PostgreSqlConnection> {
    constructor(config: Configuration);
}
