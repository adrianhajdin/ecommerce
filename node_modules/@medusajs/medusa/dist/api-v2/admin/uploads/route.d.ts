import { CreateProductDTO } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
export declare const POST: (req: AuthenticatedMedusaRequest<CreateProductDTO>, res: MedusaResponse) => Promise<void>;
