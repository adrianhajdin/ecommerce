import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { StoreGetCustomerParamsType, StoreUpdateCustomerType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<StoreGetCustomerParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<StoreUpdateCustomerType>, res: MedusaResponse) => Promise<void>;
