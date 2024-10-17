import { RepeatBaseOptions, RepeatableJob, RepeatOptions } from '../interfaces';
import { JobsOptions } from '../types';
import { Job } from './job';
import { QueueBase } from './queue-base';
import { RedisConnection } from './redis-connection';
export declare class Repeat extends QueueBase {
    private repeatStrategy;
    private repeatKeyHashAlgorithm;
    constructor(name: string, opts: RepeatBaseOptions, Connection?: typeof RedisConnection);
    updateRepeatableJob<T = any, R = any, N extends string = string>(name: N, data: T, opts: JobsOptions, { override }: {
        override: boolean;
    }): Promise<Job<T, R, N> | undefined>;
    private createNextJob;
    getRepeatJobKey<T = any, N extends string = string>(name: N, nextMillis: number, repeatJobKey: string, data: T): string;
    removeRepeatable(name: string, repeat: RepeatOptions, jobId?: string): Promise<number>;
    removeRepeatableByKey(repeatJobKey: string): Promise<number>;
    private getRepeatableData;
    private keyToData;
    getRepeatableJobs(start?: number, end?: number, asc?: boolean): Promise<RepeatableJob[]>;
    getRepeatableCount(): Promise<number>;
    private hash;
    private getRepeatDelayedJobId;
    private getRepeatJobId;
}
export declare const getNextMillis: (millis: number, opts: RepeatOptions) => number | undefined;
