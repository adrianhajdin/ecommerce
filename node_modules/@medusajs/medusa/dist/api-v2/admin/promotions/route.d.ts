import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreatePromotionType, AdminGetPromotionsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPromotionsParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreatePromotionType>, res: MedusaResponse) => Promise<void>;
