import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreateProductVariantType } from "../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateProductVariantType>, res: MedusaResponse) => Promise<void>;
