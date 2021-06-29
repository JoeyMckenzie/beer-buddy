import { Maybe } from '../types';

export const isNullOrUndefined = <T>(objectToValidate: Maybe<T>): boolean =>
  objectToValidate === null || objectToValidate === undefined;

export const isStringNullUndefinedOrEmpty = <T>(
  stringToValidate: Maybe<T>,
): boolean =>
  typeof stringToValidate === 'string'
    ? stringToValidate.length === 0
    : isNullOrUndefined(stringToValidate);
