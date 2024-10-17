import { StoreProductCategoryListResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { StoreProductCategoriesParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<StoreProductCategoriesParamsType>, res: MedusaResponse<StoreProductCategoryListResponse>) => Promise<void>;
