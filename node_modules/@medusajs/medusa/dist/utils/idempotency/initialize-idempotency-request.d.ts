import { Request, Response } from "express";
import { IdempotencyKey } from "../../models";
export declare function initializeIdempotencyRequest(req: Request, res: Response): Promise<IdempotencyKey>;
