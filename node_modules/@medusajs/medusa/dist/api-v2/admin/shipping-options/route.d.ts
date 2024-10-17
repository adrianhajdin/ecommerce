import { AdminShippingOptionListResponse, AdminShippingOptionRetrieveResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateShippingOptionType, AdminGetShippingOptionsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetShippingOptionsParamsType>, res: MedusaResponse<AdminShippingOptionListResponse>) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateShippingOptionType>, res: MedusaResponse<AdminShippingOptionRetrieveResponse>) => Promise<void>;
