import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateTaxRegionType, AdminGetTaxRegionsParamsType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateTaxRegionType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetTaxRegionsParamsType>, res: MedusaResponse) => Promise<void>;
