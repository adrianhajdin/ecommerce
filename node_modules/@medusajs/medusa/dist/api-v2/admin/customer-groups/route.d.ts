import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateCustomerGroupType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateCustomerGroupType>, res: MedusaResponse) => Promise<void>;
