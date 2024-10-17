/**
 * Shallow merge objects without overriding fields with `undefined`.
 * TODO: return better types
 */
export declare function merge(target: object, ...sources: object[]): any;
export declare function parsePostgresUrl(dbUrl: string): {
    scheme: string | undefined;
    userName: string | undefined;
    password: string | undefined;
    host: string | undefined;
    port: string | undefined;
    databaseName: string | undefined;
};
//# sourceMappingURL=utils.d.ts.map