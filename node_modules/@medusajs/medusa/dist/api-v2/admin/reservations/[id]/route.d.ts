import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminGetReservationParamsType, AdminUpdateReservationType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetReservationParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateReservationType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
