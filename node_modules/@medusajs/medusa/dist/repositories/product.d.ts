import { ExtendedFindConfig } from "@medusajs/types";
import { FindOperator, FindOptionsWhere, SelectQueryBuilder } from "typeorm";
import { PriceList, Product, ProductCategory, ProductTag, SalesChannel } from "../models";
export type DefaultWithoutRelations = Omit<ExtendedFindConfig<Product>, "relations">;
type CategoryQueryParams = {
    value: string[];
};
export type FindWithoutRelationsOptions = DefaultWithoutRelations & {
    where: DefaultWithoutRelations["where"] & {
        price_list_id?: FindOperator<PriceList>;
        sales_channel_id?: FindOperator<SalesChannel>;
        category_id?: CategoryQueryParams;
        categories?: FindOptionsWhere<ProductCategory>;
        tags?: FindOperator<ProductTag>;
        include_category_children?: boolean;
        discount_condition_id?: string;
    };
};
export declare const ProductRepository: import("typeorm").Repository<Product> & {
    queryProducts(optionsWithoutRelations: FindWithoutRelationsOptions, shouldCount?: boolean): Promise<[Product[], number]>;
    queryProductsWithIds({ entityIds, groupedRelations, withDeleted, select, order, where, }: {
        entityIds: string[];
        groupedRelations: {
            [toplevel: string]: string[];
        };
        withDeleted?: boolean | undefined;
        select?: (keyof Product)[] | undefined;
        order?: {
            [column: string]: "ASC" | "DESC";
        } | undefined;
        where?: FindOptionsWhere<Product> | undefined;
    }): Promise<Product[]>;
    findWithRelationsAndCount(relations?: string[], idsOrOptionsWithoutRelations?: FindWithoutRelationsOptions): Promise<[Product[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: FindWithoutRelationsOptions | string[], withDeleted?: boolean): Promise<Product[]>;
    findOneWithRelations(relations?: string[], optionsWithoutRelations?: FindWithoutRelationsOptions): Promise<Product>;
    bulkAddToCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    bulkRemoveFromCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    getFreeTextSearchResultsAndCount(q: string, options?: FindWithoutRelationsOptions, relations?: string[]): Promise<[Product[], number]>;
    getCategoryIdsFromInput(categoryId?: CategoryQueryParams, includeCategoryChildren?: boolean): Promise<string[]>;
    getCategoryIdsRecursively(productCategory: ProductCategory): string[];
    _findWithRelations({ relations, idsOrOptionsWithoutRelations, withDeleted, shouldCount, }: {
        relations: string[];
        idsOrOptionsWithoutRelations: string[] | FindWithoutRelationsOptions;
        withDeleted: boolean;
        shouldCount: boolean;
    }): Promise<[Product[], number]>;
    isProductInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    _applyCategoriesQuery(qb: SelectQueryBuilder<Product>, { alias, categoryAlias, where, joinName }: {
        alias: any;
        categoryAlias: any;
        where: any;
        joinName: any;
    }): SelectQueryBuilder<Product>;
};
export default ProductRepository;
