import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetRegionParamsType, AdminUpdateRegionType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetRegionParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateRegionType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
