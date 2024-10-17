import { AdminProductCategoryResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminProductCategoryParamsType, AdminUpdateProductCategoryType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminProductCategoryParamsType>, res: MedusaResponse<AdminProductCategoryResponse>) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateProductCategoryType>, res: MedusaResponse<AdminProductCategoryResponse>) => Promise<void>;
