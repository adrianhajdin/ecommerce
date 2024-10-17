import { AdminProductCategoryResponse, LinkMethodRequest } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
export declare const POST: (req: AuthenticatedMedusaRequest<LinkMethodRequest>, res: MedusaResponse<AdminProductCategoryResponse>) => Promise<void>;
