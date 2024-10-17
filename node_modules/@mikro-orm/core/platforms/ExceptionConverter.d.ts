import type { Dictionary } from '../typings';
import { DriverException } from '../exceptions';
export declare class ExceptionConverter {
    convertException(exception: Error & Dictionary): DriverException;
}
