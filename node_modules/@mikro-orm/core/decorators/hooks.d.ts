export declare function BeforeCreate(): (target: any, method: string) => void;
export declare function AfterCreate(): (target: any, method: string) => void;
export declare function BeforeUpdate(): (target: any, method: string) => void;
export declare function AfterUpdate(): (target: any, method: string) => void;
export declare function BeforeUpsert(): (target: any, method: string) => void;
export declare function AfterUpsert(): (target: any, method: string) => void;
export declare function OnInit(): (target: any, method: string) => void;
export declare function OnLoad(): (target: any, method: string) => void;
/**
 * Called before deleting entity, but only when providing initialized entity to EM#remove()
 */
export declare function BeforeDelete(): (target: any, method: string) => void;
/**
 * Called after deleting entity, but only when providing initialized entity to EM#remove()
 */
export declare function AfterDelete(): (target: any, method: string) => void;
