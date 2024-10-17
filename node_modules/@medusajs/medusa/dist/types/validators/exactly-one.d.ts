import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare class ExactlyOne implements ValidatorConstraintInterface {
    validate(propertyValue: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
    getFailedConstraints(args: ValidationArguments): boolean[];
}
