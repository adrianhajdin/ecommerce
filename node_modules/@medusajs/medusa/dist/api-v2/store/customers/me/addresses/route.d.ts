import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { StoreCreateCustomerAddressType, StoreGetCustomerAddressesParamsType } from "../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<StoreGetCustomerAddressesParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<StoreCreateCustomerAddressType>, res: MedusaResponse) => Promise<void>;
