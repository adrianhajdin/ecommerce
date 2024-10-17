import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { BatchMethodRequest } from "@medusajs/types";
import { AdminCreatePriceListPriceType, AdminUpdatePriceListPriceType } from "../../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<BatchMethodRequest<AdminCreatePriceListPriceType, AdminUpdatePriceListPriceType>>, res: MedusaResponse) => Promise<void>;
