import { MedusaContainer } from "@medusajs/types";
export declare const refetchCategory: (categoryId: string, scope: MedusaContainer, fields: string[], filterableFields?: Record<string, any>) => Promise<any>;
export declare const applyCategoryFilters: (req: any, res: any, next: any) => void;
