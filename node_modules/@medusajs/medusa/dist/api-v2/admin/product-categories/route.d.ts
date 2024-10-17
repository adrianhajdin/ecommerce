import { AdminProductCategoryListResponse, AdminProductCategoryResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateProductCategoryType, AdminProductCategoriesParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminProductCategoriesParamsType>, res: MedusaResponse<AdminProductCategoryListResponse>) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateProductCategoryType>, res: MedusaResponse<AdminProductCategoryResponse>) => Promise<void>;
