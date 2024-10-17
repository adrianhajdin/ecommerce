import { PrettyPrintableError } from './pretty-print';
/**
 * properties specific to internal oclif error handling
 */
export interface OclifError {
    oclif: {
        exit?: number | false;
    };
}
export declare function addOclifExitCode(error: Record<string, any>, options?: {
    exit?: number | false;
}): OclifError;
export declare class CLIError extends Error implements OclifError {
    oclif: OclifError['oclif'];
    code?: string;
    constructor(error: string | Error, options?: {
        exit?: number | false;
    } & PrettyPrintableError);
    get stack(): string;
    /**
     * @deprecated `render` Errors display should be handled by display function, like pretty-print
     * @return {string} returns a string representing the dispay of the error
     */
    render(): string;
    get bang(): string;
}
export declare namespace CLIError {
    class Warn extends CLIError {
        constructor(err: string | Error);
        get bang(): string;
    }
}
