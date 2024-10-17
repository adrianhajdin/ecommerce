import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateTaxRateType, AdminGetTaxRatesParamsType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateTaxRateType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetTaxRatesParamsType>, res: MedusaResponse) => Promise<void>;
