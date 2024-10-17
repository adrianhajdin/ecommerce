import { FindOperator, FindOptionsRelations, FindOptionsSelect, FindOptionsWhere } from "typeorm";
import { ExtendedFindConfig, FindConfig } from "../types/common";
import { FindOptionsOrder } from "typeorm/find-options/FindOptionsOrder";
/**
 * Used to build TypeORM queries.
 * @param selector The selector
 * @param config The config
 * @return The QueryBuilderConfig
 */
export declare function buildQuery<TWhereKeys extends object, TEntity = unknown>(selector: TWhereKeys, config?: FindConfig<TEntity>): ExtendedFindConfig<TEntity>;
/**
 * Revert new object structure of find options to the legacy structure of previous version
 * @deprecated in favor of import { objectToStringPath } from "@medusajs/utils"
 * @example
 * input: {
 *   test: {
 *     test1: true,
 *     test2: true,
 *     test3: {
 *       test4: true
 *     },
 *   },
 *   test2: true
 * }
 * output: ['test.test1', 'test.test2', 'test.test3.test4', 'test2']
 * @param input
 */
export declare function buildLegacyFieldsListFrom<TEntity>(input?: FindOptionsWhere<TEntity> | FindOptionsSelect<TEntity> | FindOptionsOrder<TEntity> | FindOptionsRelations<TEntity>): (keyof TEntity)[];
export declare function addOrderToSelect<TEntity>(order: FindOptionsOrder<TEntity>, select: FindOptionsSelect<TEntity>): void;
export declare function nullableValue(value: any): FindOperator<any>;
