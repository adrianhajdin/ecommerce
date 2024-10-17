import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreateProductOptionType } from "../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateProductOptionType>, res: MedusaResponse) => Promise<void>;
