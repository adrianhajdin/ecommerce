import cli = require('@rushstack/ts-command-line');
import type { Umzug } from './umzug';
export declare abstract class ApplyMigrationsAction extends cli.CommandLineAction {
    protected readonly umzug: Umzug;
    private _params;
    actionName: 'up' | 'down';
    protected constructor(umzug: Umzug, cliOptions: cli.ICommandLineActionOptions & {
        actionName: 'up' | 'down';
    });
    private static _defineParameters;
    onDefineParameters(): void;
    private static getVerb;
    onExecute(): Promise<void>;
}
export declare class UpAction extends ApplyMigrationsAction {
    constructor(umzug: Umzug);
}
export declare class DownAction extends ApplyMigrationsAction {
    constructor(umzug: Umzug);
}
export declare class ListAction extends cli.CommandLineAction {
    private readonly action;
    private readonly umzug;
    private _params;
    constructor(action: 'pending' | 'executed', umzug: Umzug);
    private static _defineParameters;
    onDefineParameters(): void;
    onExecute(): Promise<void>;
}
export declare class CreateAction extends cli.CommandLineAction {
    readonly umzug: Umzug;
    private _params;
    constructor(umzug: Umzug);
    private static _defineParameters;
    onDefineParameters(): void;
    onExecute(): Promise<void>;
}
export declare type CommandLineParserOptions = {
    toolFileName?: string;
    toolDescription?: string;
};
export declare class UmzugCLI extends cli.CommandLineParser {
    readonly umzug: Umzug;
    constructor(umzug: Umzug, commandLineParserOptions?: CommandLineParserOptions);
    onDefineParameters(): void;
}
