import { TaxRate } from "../../../../..";
import { FindConfig } from "../../../../../types/common";
export declare function pickByConfig<T>(obj: T | T[], config: FindConfig<T>): Partial<T> | Partial<T>[];
export declare function getRetrieveConfig(fields?: (keyof TaxRate)[], expand?: string[]): FindConfig<TaxRate>;
export declare function getListConfig(fields?: (keyof TaxRate)[], expand?: string[], limit?: number, offset?: number, order?: {
    [k: symbol]: "DESC" | "ASC";
}): FindConfig<TaxRate>;
