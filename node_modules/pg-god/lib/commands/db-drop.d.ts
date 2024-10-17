import { Command, flags } from '@oclif/command';
export default class DbDrop extends Command {
    static aliases: string[];
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        errorIfNonExist: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        dropConnections: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        initialDb: flags.IOptionFlag<string>;
        databaseName: flags.IOptionFlag<string | undefined>;
        userName: flags.IOptionFlag<string>;
        port: import("@oclif/parser/lib/flags").IOptionFlag<number>;
        host: flags.IOptionFlag<string>;
        password: flags.IOptionFlag<string>;
        url: flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
//# sourceMappingURL=db-drop.d.ts.map