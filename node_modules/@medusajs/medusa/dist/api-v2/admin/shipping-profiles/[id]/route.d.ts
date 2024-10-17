import { AdminShippingProfileDeleteResponse, AdminShippingProfileResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetShippingProfileParamsType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetShippingProfileParamsType>, res: MedusaResponse<AdminShippingProfileResponse>) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminShippingProfileDeleteResponse>) => Promise<void>;
