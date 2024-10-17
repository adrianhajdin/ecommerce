import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { BatchMethodRequest } from "@medusajs/types";
import { AdminCreatePromotionRuleType, AdminUpdatePromotionRuleType } from "../../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<BatchMethodRequest<AdminCreatePromotionRuleType, AdminUpdatePromotionRuleType>>, res: MedusaResponse) => Promise<void>;
