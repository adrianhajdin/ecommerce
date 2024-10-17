import { CLIError, OclifError } from './cli';
export declare class ExitError extends CLIError implements OclifError {
    oclif: {
        exit: number;
    };
    code: string;
    constructor(exitCode?: number);
    render(): string;
}
