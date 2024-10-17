import { MedusaRequest, MedusaResponse } from "../../../../../../types/routing";
import { StoreUpdateCartLineItemType } from "../../../validators";
export declare const POST: (req: MedusaRequest<StoreUpdateCartLineItemType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
