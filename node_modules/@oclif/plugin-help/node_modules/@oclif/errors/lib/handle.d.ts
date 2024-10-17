import { PrettyPrintableError } from './errors/pretty-print';
import { OclifError } from './errors/cli';
export declare const handle: (err: Error & Partial<PrettyPrintableError> & Partial<OclifError>) => void;
