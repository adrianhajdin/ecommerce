import { AdminFulfillmentSetResponse, AdminServiceZoneDeleteResponse, AdminServiceZoneResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { AdminUpdateFulfillmentSetServiceZonesType } from "../../../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminServiceZoneResponse>) => Promise<void>;
export declare const POST: (req: MedusaRequest<AdminUpdateFulfillmentSetServiceZonesType>, res: MedusaResponse<AdminFulfillmentSetResponse>) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminServiceZoneDeleteResponse>) => Promise<void>;
