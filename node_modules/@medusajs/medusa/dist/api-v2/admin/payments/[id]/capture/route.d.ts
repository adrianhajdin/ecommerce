import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreatePaymentCaptureType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreatePaymentCaptureType>, res: MedusaResponse) => Promise<void>;
