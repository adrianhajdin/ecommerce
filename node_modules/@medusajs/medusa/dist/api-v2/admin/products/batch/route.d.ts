import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminBatchUpdateProductType, AdminCreateProductType } from "../validators";
import { BatchMethodRequest } from "@medusajs/types";
export declare const POST: (req: AuthenticatedMedusaRequest<BatchMethodRequest<AdminCreateProductType, AdminBatchUpdateProductType>>, res: MedusaResponse) => Promise<void>;
