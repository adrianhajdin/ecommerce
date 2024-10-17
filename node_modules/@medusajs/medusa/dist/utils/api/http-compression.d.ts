import { Request, Response } from "express";
import { ProjectConfigOptions, HttpCompressionOptions } from "@medusajs/types";
export declare function shouldCompressResponse(req: Request, res: Response): any;
export declare function compressionOptions(config: ProjectConfigOptions): HttpCompressionOptions;
