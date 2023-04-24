import {
  NonEmptyString,
  castToNonEmptyString,
  isNonEmptyString,
} from '@tofu-apis/common-types';

export function getRequiredEnvVariable(envVarName: string): NonEmptyString {
  const envVarValue = process.env[envVarName];

  return castToNonEmptyString(envVarValue);
}

export function getEnvVariable(envVarName: string): NonEmptyString | undefined {
  const envVarValue = process.env[envVarName];

  if (!isNonEmptyString(envVarValue)) {
    return undefined;
  }

  return castToNonEmptyString(envVarValue);
}
