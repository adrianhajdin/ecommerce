import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateProductType, AdminGetProductsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetProductsParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateProductType>, res: MedusaResponse) => Promise<void>;
