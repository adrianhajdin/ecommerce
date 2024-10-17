import { AuthenticatedMedusaRequest, MedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateDraftOrderType } from "./validators";
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateDraftOrderType>, res: MedusaResponse) => Promise<void>;
