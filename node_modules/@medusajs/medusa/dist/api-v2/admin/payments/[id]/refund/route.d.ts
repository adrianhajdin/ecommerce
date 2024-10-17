import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreatePaymentRefundType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreatePaymentRefundType>, res: MedusaResponse) => Promise<void>;
