import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { StoreGetCustomerAddressParamsType, StoreUpdateCustomerAddressType } from "../../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<StoreGetCustomerAddressParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<StoreUpdateCustomerAddressType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
