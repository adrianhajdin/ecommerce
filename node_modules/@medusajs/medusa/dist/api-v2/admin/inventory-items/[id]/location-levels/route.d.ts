import { MedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminCreateInventoryLocationLevelType, AdminGetInventoryLocationLevelsParamsType } from "../../validators";
export declare const POST: (req: MedusaRequest<AdminCreateInventoryLocationLevelType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: MedusaRequest<AdminGetInventoryLocationLevelsParamsType>, res: MedusaResponse) => Promise<void>;
