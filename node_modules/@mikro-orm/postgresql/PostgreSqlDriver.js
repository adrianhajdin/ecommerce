"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSqlDriver = void 0;
const knex_1 = require("@mikro-orm/knex");
const PostgreSqlConnection_1 = require("./PostgreSqlConnection");
const PostgreSqlPlatform_1 = require("./PostgreSqlPlatform");
class PostgreSqlDriver extends knex_1.AbstractSqlDriver {
    constructor(config) {
        super(config, new PostgreSqlPlatform_1.PostgreSqlPlatform(), PostgreSqlConnection_1.PostgreSqlConnection, ['knex', 'pg']);
    }
}
exports.PostgreSqlDriver = PostgreSqlDriver;
