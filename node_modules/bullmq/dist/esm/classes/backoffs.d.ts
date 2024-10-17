import { BackoffOptions, MinimalJob } from '../interfaces';
import { BackoffStrategy } from '../types';
export interface BuiltInStrategies {
    [index: string]: (delay: number) => BackoffStrategy;
}
export declare class Backoffs {
    static builtinStrategies: BuiltInStrategies;
    static normalize(backoff: number | BackoffOptions): BackoffOptions | undefined;
    static calculate(backoff: BackoffOptions, attemptsMade: number, err: Error, job: MinimalJob, customStrategy?: BackoffStrategy): Promise<number> | number | undefined;
}
