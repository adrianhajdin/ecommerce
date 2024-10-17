export { handle } from './handle';
export { ExitError } from './errors/exit';
export { CLIError } from './errors/cli';
export { Logger } from './logger';
export { config } from './config';
import { PrettyPrintableError } from './errors/pretty-print';
export { PrettyPrintableError };
export declare function exit(code?: number): never;
export declare function error(input: string | Error, options: {
    exit: false;
} & PrettyPrintableError): void;
export declare function error(input: string | Error, options?: {
    exit?: number;
} & PrettyPrintableError): never;
export declare function warn(input: string | Error): void;
