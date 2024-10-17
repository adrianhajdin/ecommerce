import { NextFunction, Request, Response } from "express";
export declare function checkRegisteredModules(services: {
    [serviceName: string]: string;
}): (req: Request, res: Response, next: NextFunction) => Promise<void>;
