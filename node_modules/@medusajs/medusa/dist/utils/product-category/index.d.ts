import { FindOptionsWhere } from "typeorm";
import { ProductCategory } from "../../models";
export declare const categoryMatchesScope: (category: ProductCategory, query: FindOptionsWhere<ProductCategory>) => boolean;
export declare const fetchCategoryDescendantsIds: (productCategory: ProductCategory, query: FindOptionsWhere<ProductCategory>) => string[];
