import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { AdminRevokeApiKeyType } from "../../validators";
export declare const POST: (req: AuthenticatedMedusaRequest<AdminRevokeApiKeyType>, res: MedusaResponse) => Promise<void>;
