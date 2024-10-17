import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetProductTypeParamsType, AdminUpdateProductTypeType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetProductTypeParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateProductTypeType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
