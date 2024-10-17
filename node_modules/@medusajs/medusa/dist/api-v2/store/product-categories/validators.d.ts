import { z } from "zod";
export type StoreProductCategoryParamsType = z.infer<typeof StoreProductCategoryParams>;
export declare const StoreProductCategoryParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    include_ancestors_tree: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    include_descendants_tree: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
    include_ancestors_tree?: boolean | undefined;
    include_descendants_tree?: boolean | undefined;
}, {
    fields?: string | undefined;
    include_ancestors_tree?: unknown;
    include_descendants_tree?: unknown;
}>;
export type StoreProductCategoriesParamsType = z.infer<typeof StoreProductCategoriesParams>;
export declare const StoreProductCategoriesParams: any;
