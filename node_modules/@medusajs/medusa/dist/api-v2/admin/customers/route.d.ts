import { AdminCustomerListResponse, AdminCustomerResponse } from "@medusajs/types";
import { AuthenticatedMedusaRequest, MedusaResponse } from "../../../types/routing";
import { AdminCreateCustomerType } from "./validators";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse<AdminCustomerListResponse>) => Promise<void>;
export declare const POST: (req: AuthenticatedMedusaRequest<AdminCreateCustomerType>, res: MedusaResponse<AdminCustomerResponse>) => Promise<void>;
