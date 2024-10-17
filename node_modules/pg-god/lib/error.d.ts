export declare const errorProtocol: {
    '42P04': {
        name: string;
        code: string;
        message: string;
    };
    '3D000': {
        name: string;
        code: string;
        message: string;
    };
    23505: {
        name: string;
        code: string;
        message: string;
    };
    55006: {
        name: string;
        code: string;
        message: string;
    };
};
export declare class PgGodError implements Error {
    readonly name: string;
    readonly message: string;
    readonly code: string;
    readonly stack?: string | undefined;
    constructor(name: string, message: string, code: string, stack?: string | undefined);
    static fromPgError(pgError: Error & {
        code?: string;
    }): PgGodError;
    static dbAlreadyExist(): PgGodError;
    static dbDoesNotExist(): PgGodError;
}
//# sourceMappingURL=error.d.ts.map