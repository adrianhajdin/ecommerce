import { flags as F } from '@oclif/command';
export declare function table<T extends object>(data: T[], columns: table.Columns<T>, options?: table.Options): void;
export declare namespace table {
    export const Flags: {
        columns: F.IOptionFlag<string | undefined>;
        sort: F.IOptionFlag<string | undefined>;
        filter: F.IOptionFlag<string | undefined>;
        csv: F.IFlag<boolean>;
        output: F.IOptionFlag<string | undefined>;
        extended: F.IFlag<boolean>;
        'no-truncate': F.IFlag<boolean>;
        'no-header': F.IFlag<boolean>;
    };
    type IFlags = typeof Flags;
    type ExcludeFlags<T, Z> = Pick<T, Exclude<keyof T, Z>>;
    type IncludeFlags<T, K extends keyof T> = Pick<T, K>;
    export function flags(): IFlags;
    export function flags<Z extends keyof IFlags = keyof IFlags>(opts: {
        except: Z | Z[];
    }): ExcludeFlags<IFlags, Z>;
    export function flags<K extends keyof IFlags = keyof IFlags>(opts: {
        only: K | K[];
    }): IncludeFlags<IFlags, K>;
    export type Columns<T extends object> = {
        [key: string]: Partial<Column<T>>;
    };
    export interface Column<T extends object> {
        header: string;
        extended: boolean;
        minWidth: number;
        get(row: T): any;
    }
    export interface Options {
        [key: string]: any;
        sort?: string;
        filter?: string;
        columns?: string;
        extended?: boolean;
        'no-truncate'?: boolean;
        output?: string;
        'no-header'?: boolean;
        printLine?(s: any): any;
    }
    export {};
}
