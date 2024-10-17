import { StoreProductCategoryResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { StoreProductCategoryParamsType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<StoreProductCategoryParamsType>, res: MedusaResponse<StoreProductCategoryResponse>) => Promise<void>;
