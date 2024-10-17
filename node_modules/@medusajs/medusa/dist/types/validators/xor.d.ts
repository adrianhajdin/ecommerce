import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare class XorConstraint implements ValidatorConstraintInterface {
    validate(propertyValue: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
