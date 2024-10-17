import { ColumnOptions, EntityOptions } from "typeorm";
export declare function FeatureFlagColumn(featureFlag: string, columnOptions?: ColumnOptions): PropertyDecorator;
export declare function FeatureFlagDecorators(featureFlag: string | string[], decorators: PropertyDecorator[]): PropertyDecorator;
export declare function FeatureFlagClassDecorators(featureFlag: string | string[], decorators: ClassDecorator[]): ClassDecorator;
export declare function FeatureFlagEntity(featureFlag: string | string[], name?: string, options?: EntityOptions): ClassDecorator;
