import {
  Int,
  isStringInt,
  stringToInt,
  NonEmptyString,
} from '@tofu-apis/common-types';

export function mapToBool(
  inputValue: NonEmptyString | undefined,
  defaultValue: boolean,
  envVariableName: string,
): boolean {
  if (inputValue === undefined) {
    return defaultValue;
  }

  if (inputValue === 'false') {
    return false;
  } else if (inputValue === 'true') {
    return true;
  } else {
    throw new Error(
      `${envVariableName} must be a valid boolean string but is: ${inputValue}`,
    );
  }
}

export function mapToEnum<T extends { [key: string]: unknown }>(
  inputValue: NonEmptyString | undefined,
  enumType: T,
  defaultValue: T[keyof T],
  envVariableName: string,
): T[keyof T] {
  if (inputValue === undefined) {
    return defaultValue;
  }

  if (Object.values(enumType).includes(inputValue)) {
    return enumType[inputValue] as T[keyof T];
  }

  throw new Error(
    `${envVariableName} must be a valid [${typeof enumType}] enum string but is: ${inputValue}`,
  );
}

export function mapToInt(
  inputValue: NonEmptyString | undefined,
  defaultValue: Int,
  envVariableName: string,
): Int {
  if (inputValue === undefined) {
    return defaultValue;
  }

  if (isStringInt(inputValue)) {
    return stringToInt(inputValue);
  }

  throw new Error(
    `${envVariableName} must be a valid integer but is: ${inputValue}`,
  );
}
