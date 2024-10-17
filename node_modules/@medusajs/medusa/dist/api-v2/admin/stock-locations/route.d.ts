import { MedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateStockLocationType, AdminGetStockLocationsParamsType } from "./validators";
export declare const POST: (req: MedusaRequest<AdminCreateStockLocationType>, res: MedusaResponse) => Promise<void>;
export declare const GET: (req: MedusaRequest<AdminGetStockLocationsParamsType>, res: MedusaResponse) => Promise<void>;
