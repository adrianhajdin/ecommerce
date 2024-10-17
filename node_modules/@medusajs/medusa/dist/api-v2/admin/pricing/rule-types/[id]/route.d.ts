import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminGetPricingRuleTypeParamsType, AdminUpdatePricingRuleTypeType } from "../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPricingRuleTypeParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdatePricingRuleTypeType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
