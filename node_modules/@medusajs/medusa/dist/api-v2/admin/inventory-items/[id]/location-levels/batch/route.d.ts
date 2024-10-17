import { AdminCreateInventoryLocationLevelType, AdminUpdateInventoryLocationLevelType } from "../../../validators";
import { MedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { BatchMethodRequest } from "@medusajs/types";
export declare const POST: (req: MedusaRequest<BatchMethodRequest<AdminCreateInventoryLocationLevelType, AdminUpdateInventoryLocationLevelType>>, res: MedusaResponse) => Promise<void>;
