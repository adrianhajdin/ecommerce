import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateProductTypeType, AdminGetProductTypesParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetProductTypesParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateProductTypeType>, res: MedusaResponse) => Promise<void>;
