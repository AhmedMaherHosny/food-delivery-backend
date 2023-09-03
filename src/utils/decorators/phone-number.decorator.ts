import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'phoneNumber', async: false })
export class PhoneNumberValidator implements ValidatorConstraintInterface {
  validate(phoneNumber: string) {
    // Check if the phone number starts with '+' and all characters after '+' are numbers
    return /^\+\d+$/.test(phoneNumber);
  }
}

export function IsPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PhoneNumberValidator,
    });
  };
}
