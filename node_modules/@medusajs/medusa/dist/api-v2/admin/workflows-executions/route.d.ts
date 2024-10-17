import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminGetWorkflowExecutionsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetWorkflowExecutionsParamsType>, res: MedusaResponse) => Promise<void>;
