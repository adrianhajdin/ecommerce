import { NextFunction } from "express";
import { MedusaRequest, MedusaResponse } from "../../types/routing";
import { MiddlewareFunction } from "../../types/middlewares";
export declare const unlessPath: (onPath: RegExp, middleware: MiddlewareFunction) => (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => any;
