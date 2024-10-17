import type { Dictionary } from '../typings';
export declare function Embeddable(options?: EmbeddableOptions): <T>(target: T & Dictionary) => T & Dictionary;
export type EmbeddableOptions = {
    discriminatorColumn?: string;
    discriminatorMap?: Dictionary<string>;
    discriminatorValue?: number | string;
    abstract?: boolean;
};
