"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const god_stuff_1 = require("../god-stuff");
const cli_ux_1 = require("cli-ux");
const utils_1 = require("../utils");
class DbCreate extends command_1.Command {
    async run() {
        const _a = this.parse(DbCreate).flags, { help, errorIfExist, initialDb, url: dbUrl } = _a, flags = tslib_1.__rest(_a, ["help", "errorIfExist", "initialDb", "url"]);
        const urlParams = dbUrl ? utils_1.parsePostgresUrl(dbUrl) : {};
        const finalParams = utils_1.merge(flags, urlParams);
        const { databaseName, userName, port, host, password, } = finalParams;
        cli_ux_1.default.action.start(`😇 Create database '${databaseName}'`);
        if (!databaseName)
            throw new Error('Missing required flags/ENV - databaseName("DB_NAME") or url("DB_URL")');
        await god_stuff_1.createDatabase({ databaseName, errorIfExist }, {
            user: userName,
            database: initialDb,
            port,
            host,
            password,
        });
        cli_ux_1.default.action.stop();
    }
}
exports.default = DbCreate;
DbCreate.aliases = ['db:create'];
DbCreate.description = 'create an empty database';
DbCreate.examples = [
    `$ pg-god db-create --databaseName=bank-db`,
    `$ DB_NAME=bank-db pg-god db-create`,
    `$ pg-god db-create --url postgresql://localhost:5432/bank-db`,
    `$ pg-god db-create --databaseName=bank-db --errorIfExist`,
    `$ pg-god db-create --databaseName=bank-db --password=123 --port=5433 --host=a.example.com --userName=beer`,
];
DbCreate.flags = {
    help: command_1.flags.help({ char: 'h' }),
    errorIfExist: command_1.flags.boolean({ char: 'e', default: false, description: '[default: false] whether throw error if DB already exists', env: 'DB_ERROR_IF_EXIST' }),
    initialDb: command_1.flags.string({ char: 'i', default: 'postgres', description: 'Initial DB name', env: 'DB_INITIAL' }),
    databaseName: command_1.flags.string({ char: 'n', description: 'new DB name', env: 'DB_NAME', exclusive: ['url'] }),
    userName: command_1.flags.string({ char: 'u', default: 'postgres', description: 'DB user name', env: 'DB_USERNAME', exclusive: ['url'] }),
    port: command_1.flags.integer({ char: 'p', default: 5432, description: 'DB port, default `5432`', env: 'DB_PORT', exclusive: ['url'] }),
    host: command_1.flags.string({ char: 'o', default: 'localhost', description: 'new DB host', env: 'DB_HOST', exclusive: ['url'] }),
    password: command_1.flags.string({ char: 'w', default: '', description: '[default: empty] DB password', env: 'DB_PASSWORD', exclusive: ['url'] }),
    url: command_1.flags.string({ char: 'l', description: 'DB URL, e.g. postgres://username:password@localhost:5432/my_db', env: 'DB_URL', exclusive: [
            'databaseName',
            'userName',
            'port',
            'host',
            'password',
        ] }),
};
//# sourceMappingURL=db-create.js.map