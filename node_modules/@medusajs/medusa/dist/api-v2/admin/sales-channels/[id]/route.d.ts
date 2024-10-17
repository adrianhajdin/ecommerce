import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetSalesChannelParamsType, AdminUpdateSalesChannelType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetSalesChannelParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateSalesChannelType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
