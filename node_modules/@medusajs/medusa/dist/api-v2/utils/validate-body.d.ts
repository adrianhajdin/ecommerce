import { NextFunction } from "express";
import { z } from "zod";
import { MedusaRequest, MedusaResponse } from "../../types/routing";
export declare function zodValidator<T>(zodSchema: z.ZodObject<any, any> | z.ZodEffects<any, any>, body: T): Promise<z.ZodRawShape>;
export declare function validateAndTransformBody(zodSchema: z.ZodObject<any, any> | z.ZodEffects<any, any>): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void>;
