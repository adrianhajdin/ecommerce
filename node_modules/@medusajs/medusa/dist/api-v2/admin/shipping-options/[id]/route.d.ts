import { AdminShippingOptionDeleteResponse, AdminShippingOptionRetrieveResponse } from "@medusajs/types";
import { AdminUpdateShippingOptionType } from "../validators";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateShippingOptionType>, res: MedusaResponse<AdminShippingOptionRetrieveResponse>) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminShippingOptionDeleteResponse>) => Promise<void>;
