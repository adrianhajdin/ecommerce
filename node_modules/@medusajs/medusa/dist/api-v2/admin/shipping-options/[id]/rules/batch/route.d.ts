import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { BatchMethodRequest } from "@medusajs/types";
import { AdminCreateShippingOptionRuleType, AdminUpdateShippingOptionRuleType } from "../../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<BatchMethodRequest<AdminCreateShippingOptionRuleType, AdminUpdateShippingOptionRuleType>>, res: MedusaResponse) => Promise<void>;
