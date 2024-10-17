import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateInventoryItemType, AdminGetInventoryItemsParamsType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateInventoryItemType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetInventoryItemsParamsType>, res: MedusaResponse) => Promise<void>;
