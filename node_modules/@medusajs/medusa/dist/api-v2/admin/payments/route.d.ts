import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminGetPaymentsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPaymentsParamsType>, res: MedusaResponse) => Promise<void>;
