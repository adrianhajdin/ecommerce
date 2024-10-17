import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetTaxRateParamsType, AdminUpdateTaxRateType } from "../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateTaxRateType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetTaxRateParamsType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
