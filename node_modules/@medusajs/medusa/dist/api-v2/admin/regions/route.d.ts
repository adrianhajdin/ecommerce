import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateRegionType, AdminGetRegionsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetRegionsParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateRegionType>, res: MedusaResponse) => Promise<void>;
