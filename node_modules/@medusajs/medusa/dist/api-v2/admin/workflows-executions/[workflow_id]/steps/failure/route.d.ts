import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { AdminCreateWorkflowsAsyncResponseType } from "../../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateWorkflowsAsyncResponseType>, res: MedusaResponse) => Promise<MedusaResponse<unknown>>;
