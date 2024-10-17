import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminGetStoresParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetStoresParamsType>, res: MedusaResponse) => Promise<void>;
