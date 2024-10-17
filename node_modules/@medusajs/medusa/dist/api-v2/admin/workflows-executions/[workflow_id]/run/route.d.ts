import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreateWorkflowsRunType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateWorkflowsRunType>, res: MedusaResponse) => Promise<MedusaResponse<unknown>>;
