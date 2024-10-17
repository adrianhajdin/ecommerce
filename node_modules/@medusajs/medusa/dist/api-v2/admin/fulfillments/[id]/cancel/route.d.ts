import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCancelFulfillmentType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCancelFulfillmentType>, res: MedusaResponse) => Promise<void>;
