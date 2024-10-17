import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { StoreCreateCustomerType } from "./validators";
export declare const POST: (req: AuthenticatedMedusaRequest<StoreCreateCustomerType>, res: MedusaResponse) => Promise<void>;
