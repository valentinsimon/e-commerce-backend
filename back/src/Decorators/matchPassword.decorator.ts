import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({
    name: "matchpassword",
    async: false,
})
export class matchpassword implements ValidatorConstraintInterface{
    validate(password: string, args: ValidationArguments) {
        if (password !== (args.object as any)[args.constraints[0]]) {
            return false;
        }
        return true;
    }
    defaultMessage(args?: ValidationArguments): string {
        return "Passwords do not match"
    }
}