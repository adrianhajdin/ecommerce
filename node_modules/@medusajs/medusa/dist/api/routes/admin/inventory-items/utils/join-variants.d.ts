import { ProductVariantInventoryService, ProductVariantService } from "../../../../../services";
import { InventoryItemDTO } from "@medusajs/types";
import { ProductVariant } from "../../../../../models";
export type InventoryItemsWithVariants = Partial<InventoryItemDTO> & {
    variants?: ProductVariant[];
};
export declare const getVariantsByInventoryItemId: (inventoryItems: InventoryItemDTO[], productVariantInventoryService: ProductVariantInventoryService, productVariantService: ProductVariantService) => Promise<Record<string, ProductVariant[]>>;
export declare const joinVariants: (inventoryItems: InventoryItemDTO[], productVariantInventoryService: ProductVariantInventoryService, productVariantService: ProductVariantService) => Promise<{
    variants: ProductVariant[];
    id: string;
    sku?: string | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    requires_shipping: boolean;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date | null;
}[]>;
