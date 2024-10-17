import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Image } from "../models";
export declare const ImageRepository: import("typeorm").Repository<Image> & {
    insertBulk(data: QueryDeepPartialEntity<Image>[]): Promise<Image[]>;
    upsertImages(imageUrls: string[]): Promise<Image[]>;
};
export default ImageRepository;
