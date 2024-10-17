import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { AdminUpdateProductOptionType } from "../../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateProductOptionType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
