import * as Config from '@oclif/config';
import { getHelpClass } from './util';
export interface HelpOptions {
    all?: boolean;
    maxWidth: number;
    stripAnsi?: boolean;
}
export declare abstract class HelpBase {
    constructor(config: Config.IConfig, opts?: Partial<HelpOptions>);
    protected config: Config.IConfig;
    protected opts: HelpOptions;
    /**
     * Show help, used in multi-command CLIs
     * @param args passed into your command, useful for determining which type of help to display
     */
    abstract showHelp(argv: string[]): void;
    /**
     * Show help for an individual command
     * @param command
     * @param topics
     */
    abstract showCommandHelp(command: Config.Command, topics: Config.Topic[]): void;
}
export default class Help extends HelpBase {
    render: (input: string) => string;
    private get _topics();
    protected get sortedCommands(): Config.Command.Plugin[];
    protected get sortedTopics(): Config.Topic[];
    constructor(config: Config.IConfig, opts?: Partial<HelpOptions>);
    showHelp(argv: string[]): void;
    showCommandHelp(command: Config.Command): void;
    protected showRootHelp(): void;
    protected showTopicHelp(topic: Config.Topic): void;
    protected formatRoot(): string;
    protected formatCommand(command: Config.Command): string;
    protected formatCommands(commands: Config.Command[]): string;
    protected formatTopic(topic: Config.Topic): string;
    protected formatTopics(topics: Config.Topic[]): string;
    /**
     * @deprecated used for readme generation
     * @param {object} command The command to generate readme help for
     * @return {string} the readme help string for the given command
     */
    protected command(command: Config.Command): string;
}
export { Help, getHelpClass, };
