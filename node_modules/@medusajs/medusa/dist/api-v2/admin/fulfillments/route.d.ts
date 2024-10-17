import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateFulfillmentType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateFulfillmentType>, res: MedusaResponse) => Promise<void>;
