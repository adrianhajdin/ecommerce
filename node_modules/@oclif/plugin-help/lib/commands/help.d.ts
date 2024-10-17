import Command, { flags } from '@oclif/command';
export default class HelpCommand extends Command {
    static description: string;
    static flags: flags.Input<any>;
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    static strict: boolean;
    run(): Promise<void>;
}
