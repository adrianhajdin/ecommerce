import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminUpdateCollectionType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateCollectionType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
