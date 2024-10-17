import { UpdateCartDataDTO } from "@medusajs/types";
import { MedusaRequest, MedusaResponse } from "../../../../types/routing";
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: MedusaRequest<UpdateCartDataDTO>, res: MedusaResponse) => Promise<void>;
