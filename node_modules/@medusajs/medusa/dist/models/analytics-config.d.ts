import { SoftDeletableEntity } from "../interfaces";
export declare class AnalyticsConfig extends SoftDeletableEntity {
    user_id: string;
    opt_out: boolean;
    anonymize: boolean;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
