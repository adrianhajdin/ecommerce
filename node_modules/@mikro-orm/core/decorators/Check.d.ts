import type { CheckConstraint } from '../typings';
export declare function Check<T>(options: CheckOptions<T>): (target: any, propertyName?: string) => any;
export type CheckOptions<T = any> = CheckConstraint<T>;
