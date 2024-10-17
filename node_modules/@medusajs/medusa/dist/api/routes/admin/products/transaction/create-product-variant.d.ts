import { DistributedTransaction } from "@medusajs/orchestration";
import { IInventoryService } from "@medusajs/types";
import { ProductVariantInventoryService, ProductVariantService } from "../../../../../services";
import { CreateProductVariantInput } from "../../../../../types/product-variant";
import { EntityManager } from "typeorm";
type InjectedDependencies = {
    manager: EntityManager;
    productVariantService: ProductVariantService;
    productVariantInventoryService: ProductVariantInventoryService;
    inventoryService?: IInventoryService;
};
export declare const createVariantsTransaction: (dependencies: InjectedDependencies, productId: string, input: CreateProductVariantInput[]) => Promise<DistributedTransaction>;
export declare const revertVariantTransaction: (dependencies: InjectedDependencies, transaction: DistributedTransaction) => Promise<void>;
export {};
