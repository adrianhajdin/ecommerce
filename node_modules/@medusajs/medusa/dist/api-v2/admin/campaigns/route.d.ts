import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateCampaignType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateCampaignType>, res: MedusaResponse) => Promise<void>;
