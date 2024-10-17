import { AdminCustomerResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../../types/routing";
import { AdminUpdateCustomerType } from "../validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminCustomerResponse>) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminUpdateCustomerType>, res: MedusaResponse<AdminCustomerResponse>) => Promise<void>;
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
