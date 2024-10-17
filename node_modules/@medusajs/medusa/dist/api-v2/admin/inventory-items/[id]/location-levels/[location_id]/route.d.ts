import { MedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { AdminUpdateInventoryLocationLevelType } from "../../../validators";
export declare const DELETE: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: MedusaRequest<AdminUpdateInventoryLocationLevelType>, res: MedusaResponse) => Promise<void>;
