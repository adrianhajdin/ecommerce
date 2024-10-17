import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminCreatePricingRuleTypeType, AdminGetPricingRuleTypesParamsType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetPricingRuleTypesParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreatePricingRuleTypeType>, res: MedusaResponse) => Promise<void>;
