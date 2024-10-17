import type { Dictionary, FilterDef } from '../typings';
export declare function Filter<T>(options: FilterDef): <U>(target: U & Dictionary) => U & Dictionary;
