import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateSalesChannelType, AdminGetSalesChannelsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetSalesChannelsParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateSalesChannelType>, res: MedusaResponse) => Promise<void>;
