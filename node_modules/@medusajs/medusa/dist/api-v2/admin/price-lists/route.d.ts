import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreatePriceListType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreatePriceListType>, res: MedusaResponse) => Promise<void>;
