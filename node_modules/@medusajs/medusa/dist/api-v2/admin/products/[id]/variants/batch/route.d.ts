import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { AdminBatchUpdateProductVariantType, AdminCreateProductType } from "../../../validators";
import { BatchMethodRequest } from "@medusajs/types";
export declare const POST: (req: AuthenticatedMedusaRequest<BatchMethodRequest<AdminCreateProductType, AdminBatchUpdateProductVariantType>>, res: MedusaResponse) => Promise<void>;
