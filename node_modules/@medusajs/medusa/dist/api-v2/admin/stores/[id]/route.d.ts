import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetStoreParamsType, AdminUpdateStoreType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetStoreParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateStoreType>, res: MedusaResponse) => Promise<void>;
