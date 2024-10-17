import { MedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetInventoryItemParamsType, AdminUpdateInventoryItemType } from "../validators";
export declare const GET: (req: MedusaRequest<AdminGetInventoryItemParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: MedusaRequest<AdminUpdateInventoryItemType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
