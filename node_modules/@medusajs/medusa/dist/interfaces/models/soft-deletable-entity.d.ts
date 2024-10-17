import { BaseEntity } from "./base-entity";
export declare abstract class SoftDeletableEntity extends BaseEntity {
    deleted_at: Date | null;
}
