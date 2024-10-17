import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateReservationType, AdminGetReservationsParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetReservationsParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateReservationType>, res: MedusaResponse) => Promise<void>;
