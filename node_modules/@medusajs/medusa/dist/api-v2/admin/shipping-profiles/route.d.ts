import { AdminShippingProfileResponse, AdminShippingProfilesResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateShippingProfileType, AdminGetShippingProfilesParamsType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateShippingProfileType>, res: MedusaResponse<AdminShippingProfileResponse>) => Promise<void>;
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetShippingProfilesParamsType>, res: MedusaResponse<AdminShippingProfilesResponse>) => Promise<void>;
