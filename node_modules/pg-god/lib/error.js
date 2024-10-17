"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgGodError = exports.errorProtocol = void 0;
// PG error ref: https://docstore.mik.ua/manuals/sql/postgresql-8.2.6/errcodes-appendix.html
exports.errorProtocol = {
    '42P04': {
        name: 'PDG_ERR::DuplicateDatabase',
        code: '42P04',
        message: 'Database already exist.'
    },
    '3D000': {
        name: 'PDG_ERR::InvalidCatalogName',
        code: '3D000',
        message: 'Database does not exist.'
    },
    '23505': {
        name: 'PDG_ERR::UniqueViolation',
        code: '23505',
        message: 'Attempt to create multiple databases concurrently.'
    },
    '55006': {
        name: 'PDG_ERR::DropDatabaseInUse',
        code: '55006',
        message: 'Cannot delete a database that is being accessed by other users.'
    },
};
class PgGodError {
    constructor(name, message, code, stack) {
        this.name = name;
        this.message = message;
        this.code = code;
        this.stack = stack;
    }
    static fromPgError(pgError) {
        var _a, _b;
        return new PgGodError(
        // Until resolution of index issue: https://github.com/Microsoft/TypeScript/issues/14951#issuecomment-291617624
        // @ts-ignore
        ((_a = exports.errorProtocol[pgError.code]) === null || _a === void 0 ? void 0 : _a.name) || 'PDG_ERR::UnexpectedError', 
        // @ts-ignore
        (((_b = exports.errorProtocol[pgError.code]) === null || _b === void 0 ? void 0 : _b.message) || pgError.message), pgError.code || 'unknown', pgError.stack);
    }
    static dbAlreadyExist() {
        const code = '42P04';
        return new PgGodError(exports.errorProtocol[code].name, exports.errorProtocol[code].message, code, Error().stack);
    }
    static dbDoesNotExist() {
        const code = '3D000';
        return new PgGodError(exports.errorProtocol[code].name, exports.errorProtocol[code].message, code, Error().stack);
    }
}
exports.PgGodError = PgGodError;
//# sourceMappingURL=error.js.map