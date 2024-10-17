import { MedusaRequest, MedusaResponse } from "../../../../../types/routing";
import { StoreAddCartPromotionsType, StoreRemoveCartPromotionsType } from "../../validators";
export declare const POST: (req: MedusaRequest<StoreAddCartPromotionsType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: MedusaRequest<StoreRemoveCartPromotionsType>, res: MedusaResponse) => Promise<void>;
