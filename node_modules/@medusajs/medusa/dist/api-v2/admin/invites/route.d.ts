import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateInviteType, AdminGetInvitesParamsType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetInvitesParamsType>, res: MedusaResponse) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateInviteType>, res: MedusaResponse) => Promise<void>;
