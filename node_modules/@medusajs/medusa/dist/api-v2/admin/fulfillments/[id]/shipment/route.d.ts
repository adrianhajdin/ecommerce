import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreateShipmentType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateShipmentType>, res: MedusaResponse) => Promise<void>;
