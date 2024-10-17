import { BaseEntity } from "../interfaces";
import { FindConfig, QueryConfig, RequestQueryFields } from "../types/common";
export declare function pickByConfig<TModel extends BaseEntity>(obj: TModel | TModel[], config: FindConfig<TModel>): Partial<TModel> | Partial<TModel>[];
export declare function prepareListQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(validated: T, queryConfig?: QueryConfig<TEntity>): {
    listConfig: {
        select: string[] | undefined;
        relations: string[];
        skip: number;
        take: number;
        order: {
            [k: symbol]: "ASC" | "DESC";
        } | undefined;
    };
    remoteQueryConfig: {
        fields: string[];
        pagination: {
            skip: number;
            take: number;
            order: {
                [k: symbol]: "ASC" | "DESC";
            } | undefined;
        } | {
            skip?: undefined;
            take?: undefined;
            order?: undefined;
        };
    };
};
export declare function prepareRetrieveQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(validated: T, queryConfig?: QueryConfig<TEntity>): {
    retrieveConfig: {
        select: string[] | undefined;
        relations: string[];
    };
    remoteQueryConfig: {
        fields: string[];
        pagination: {};
    };
};
