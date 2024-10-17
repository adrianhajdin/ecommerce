import { MedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetStockLocationParamsType, AdminUpdateStockLocationType } from "../validators";
export declare const POST: (req: MedusaRequest<AdminUpdateStockLocationType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: MedusaRequest<AdminGetStockLocationParamsType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
