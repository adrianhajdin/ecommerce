import { NextFunction, Request, Response } from "express";
/**
 * Normalize an input query, especially from array like query params to an array type
 * e.g: /admin/orders/?fields[]=id,status,cart_id becomes { fields: ["id", "status", "cart_id"] }
 */
declare const _default: () => (req: Request, res: Response, next: NextFunction) => void;
export default _default;
