import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminInviteAcceptType } from "../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminInviteAcceptType>, res: MedusaResponse) => Promise<void>;
