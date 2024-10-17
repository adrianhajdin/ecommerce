/// <reference types="multer" />
/// <reference types="node" />
import { EntityManager } from "typeorm";
import { AbstractFileService } from "../interfaces";
import { FileServiceGetUploadStreamResult, FileServiceUploadResult, GetUploadedFileType, UploadStreamDescriptorType } from "@medusajs/types";
declare class DefaultFileService extends AbstractFileService {
    upload(fileData: Express.Multer.File): Promise<FileServiceUploadResult>;
    uploadProtected(fileData: Express.Multer.File): Promise<FileServiceUploadResult>;
    delete(fileData: Record<string, any>): Promise<void>;
    getUploadStreamDescriptor(fileData: UploadStreamDescriptorType): Promise<FileServiceGetUploadStreamResult>;
    getDownloadStream(fileData: GetUploadedFileType): Promise<NodeJS.ReadableStream>;
    getPresignedDownloadUrl(fileData: GetUploadedFileType): Promise<string>;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
}
export default DefaultFileService;
