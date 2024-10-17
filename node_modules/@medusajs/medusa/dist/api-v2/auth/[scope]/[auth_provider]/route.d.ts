import { MedusaRequest, MedusaResponse } from "../../../../types/routing";
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<MedusaResponse<unknown> | undefined>;
export declare const POST: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
