import { __rest } from "tslib";
import { parseExpression } from 'cron-parser';
import { createHash } from 'crypto';
import { QueueBase } from './queue-base';
export class Repeat extends QueueBase {
    constructor(name, opts, Connection) {
        super(name, opts, Connection);
        this.repeatStrategy =
            (opts.settings && opts.settings.repeatStrategy) || getNextMillis;
        this.repeatKeyHashAlgorithm =
            (opts.settings && opts.settings.repeatKeyHashAlgorithm) || 'md5';
    }
    async updateRepeatableJob(name, data, opts, { override }) {
        var _a, _b;
        // Backwards compatibility for repeatable jobs for versions <= 3.0.0
        const repeatOpts = Object.assign({}, opts.repeat);
        (_a = repeatOpts.pattern) !== null && _a !== void 0 ? _a : (repeatOpts.pattern = repeatOpts.cron);
        delete repeatOpts.cron;
        // Check if we reached the limit of the repeatable job's iterations
        const iterationCount = repeatOpts.count ? repeatOpts.count + 1 : 1;
        if (typeof repeatOpts.limit !== 'undefined' &&
            iterationCount > repeatOpts.limit) {
            return;
        }
        // Check if we reached the end date of the repeatable job
        let now = Date.now();
        const { endDate } = repeatOpts;
        if (!(typeof endDate === undefined) && now > new Date(endDate).getTime()) {
            return;
        }
        const prevMillis = opts.prevMillis || 0;
        now = prevMillis < now ? now : prevMillis;
        const nextMillis = await this.repeatStrategy(now, repeatOpts, name);
        const { every, pattern } = repeatOpts;
        const hasImmediately = Boolean((every || pattern) && repeatOpts.immediately);
        const offset = hasImmediately && every ? now - nextMillis : undefined;
        if (nextMillis) {
            // We store the undecorated opts.jobId into the repeat options
            if (!prevMillis && opts.jobId) {
                repeatOpts.jobId = opts.jobId;
            }
            const legacyRepeatKey = getRepeatConcatOptions(name, repeatOpts);
            const newRepeatKey = (_b = opts.repeat.key) !== null && _b !== void 0 ? _b : this.hash(legacyRepeatKey);
            let repeatJobKey;
            if (override) {
                repeatJobKey = await this.scripts.addRepeatableJob(newRepeatKey, nextMillis, {
                    name,
                    endDate: endDate ? new Date(endDate).getTime() : undefined,
                    tz: repeatOpts.tz,
                    pattern,
                    every,
                }, legacyRepeatKey);
            }
            else {
                const client = await this.client;
                repeatJobKey = await this.scripts.updateRepeatableJobMillis(client, newRepeatKey, nextMillis, legacyRepeatKey);
            }
            const { immediately } = repeatOpts, filteredRepeatOpts = __rest(repeatOpts, ["immediately"]);
            return this.createNextJob(name, nextMillis, repeatJobKey, Object.assign(Object.assign({}, opts), { repeat: Object.assign({ offset }, filteredRepeatOpts) }), data, iterationCount, hasImmediately);
        }
    }
    async createNextJob(name, nextMillis, repeatJobKey, opts, data, currentCount, hasImmediately) {
        //
        // Generate unique job id for this iteration.
        //
        const jobId = this.getRepeatJobKey(name, nextMillis, repeatJobKey, data);
        const now = Date.now();
        const delay = nextMillis + (opts.repeat.offset ? opts.repeat.offset : 0) - now;
        const mergedOpts = Object.assign(Object.assign({}, opts), { jobId, delay: delay < 0 || hasImmediately ? 0 : delay, timestamp: now, prevMillis: nextMillis, repeatJobKey });
        mergedOpts.repeat = Object.assign(Object.assign({}, opts.repeat), { count: currentCount });
        return this.Job.create(this, name, data, mergedOpts);
    }
    // TODO: remove legacy code in next breaking change
    getRepeatJobKey(name, nextMillis, repeatJobKey, data) {
        if (repeatJobKey.split(':').length > 2) {
            return this.getRepeatJobId({
                name: name,
                nextMillis: nextMillis,
                namespace: this.hash(repeatJobKey),
                jobId: data === null || data === void 0 ? void 0 : data.id,
            });
        }
        return this.getRepeatDelayedJobId({
            customKey: repeatJobKey,
            nextMillis,
        });
    }
    async removeRepeatable(name, repeat, jobId) {
        var _a;
        const repeatConcatOptions = getRepeatConcatOptions(name, Object.assign(Object.assign({}, repeat), { jobId }));
        const repeatJobKey = (_a = repeat.key) !== null && _a !== void 0 ? _a : this.hash(repeatConcatOptions);
        const legacyRepeatJobId = this.getRepeatJobId({
            name,
            nextMillis: '',
            namespace: this.hash(repeatConcatOptions),
            jobId: jobId !== null && jobId !== void 0 ? jobId : repeat.jobId,
            key: repeat.key,
        });
        return this.scripts.removeRepeatable(legacyRepeatJobId, repeatConcatOptions, repeatJobKey);
    }
    async removeRepeatableByKey(repeatJobKey) {
        const data = this.keyToData(repeatJobKey);
        const legacyRepeatJobId = this.getRepeatJobId({
            name: data.name,
            nextMillis: '',
            namespace: this.hash(repeatJobKey),
            jobId: data.id,
        });
        return this.scripts.removeRepeatable(legacyRepeatJobId, '', repeatJobKey);
    }
    async getRepeatableData(client, key, next) {
        const jobData = await client.hgetall(this.toKey('repeat:' + key));
        if (jobData) {
            return {
                key,
                name: jobData.name,
                endDate: parseInt(jobData.endDate) || null,
                tz: jobData.tz || null,
                pattern: jobData.pattern || null,
                every: jobData.every || null,
                next,
            };
        }
        return this.keyToData(key, next);
    }
    keyToData(key, next) {
        const data = key.split(':');
        const pattern = data.slice(4).join(':') || null;
        return {
            key,
            name: data[0],
            id: data[1] || null,
            endDate: parseInt(data[2]) || null,
            tz: data[3] || null,
            pattern,
            next,
        };
    }
    async getRepeatableJobs(start = 0, end = -1, asc = false) {
        const client = await this.client;
        const key = this.keys.repeat;
        const result = asc
            ? await client.zrange(key, start, end, 'WITHSCORES')
            : await client.zrevrange(key, start, end, 'WITHSCORES');
        const jobs = [];
        for (let i = 0; i < result.length; i += 2) {
            jobs.push(this.getRepeatableData(client, result[i], parseInt(result[i + 1])));
        }
        return Promise.all(jobs);
    }
    async getRepeatableCount() {
        const client = await this.client;
        return client.zcard(this.toKey('repeat'));
    }
    hash(str) {
        return createHash(this.repeatKeyHashAlgorithm).update(str).digest('hex');
    }
    getRepeatDelayedJobId({ nextMillis, customKey, }) {
        return `repeat:${customKey}:${nextMillis}`;
    }
    getRepeatJobId({ name, nextMillis, namespace, jobId, key, }) {
        const checksum = key !== null && key !== void 0 ? key : this.hash(`${name}${jobId || ''}${namespace}`);
        return `repeat:${checksum}:${nextMillis}`;
    }
}
function getRepeatConcatOptions(name, repeat) {
    const endDate = repeat.endDate ? new Date(repeat.endDate).getTime() : '';
    const tz = repeat.tz || '';
    const pattern = repeat.pattern;
    const suffix = (pattern ? pattern : String(repeat.every)) || '';
    const jobId = repeat.jobId ? repeat.jobId : '';
    return `${name}:${jobId}:${endDate}:${tz}:${suffix}`;
}
export const getNextMillis = (millis, opts) => {
    const pattern = opts.pattern;
    if (pattern && opts.every) {
        throw new Error('Both .pattern and .every options are defined for this repeatable job');
    }
    if (opts.every) {
        return (Math.floor(millis / opts.every) * opts.every +
            (opts.immediately ? 0 : opts.every));
    }
    const currentDate = opts.startDate && new Date(opts.startDate) > new Date(millis)
        ? new Date(opts.startDate)
        : new Date(millis);
    const interval = parseExpression(pattern, Object.assign(Object.assign({}, opts), { currentDate }));
    try {
        if (opts.immediately) {
            return new Date().getTime();
        }
        else {
            return interval.next().getTime();
        }
    }
    catch (e) {
        // Ignore error
    }
};
//# sourceMappingURL=repeat.js.map