import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetPromotionParamsType, AdminUpdatePromotionType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPromotionParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdatePromotionType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
