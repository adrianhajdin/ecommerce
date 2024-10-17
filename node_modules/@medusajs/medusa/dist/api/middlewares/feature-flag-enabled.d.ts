import { NextFunction, Request, Response } from "express";
export declare function isFeatureFlagEnabled(flagKey: string): (req: Request, res: Response, next: NextFunction) => Promise<void>;
