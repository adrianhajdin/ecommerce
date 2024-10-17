import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetPaymentParamsType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPaymentParamsType>, res: MedusaResponse) => Promise<void>;
