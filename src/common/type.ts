interface RequiredType {
  isRequired: true;
}
interface OptionalType {
  isRequired: false;
}

enum PrimitiveType {
  String = 'string',
  Boolean = 'boolean',
  Integer = 'integer',
}
type EnvVarValueType = {
  name: 'boo';
};

type EnvVarType = {
  valueType: PrimitiveType;
} & (OptionalType | RequiredType);

export const RequiredBoolean: EnvVarType = {
  valueType: PrimitiveType.Boolean,
  isRequired: true,
};
export const Boolean: EnvVarType = {
  valueType: PrimitiveType.Boolean,
  isRequired: false,
};
export const RequiredInteger: EnvVarType = {
  valueType: PrimitiveType.Integer,
  isRequired: true,
};
export const Integer: EnvVarType = {
  valueType: PrimitiveType.Integer,
  isRequired: false,
};
export const RequiredString: EnvVarType = {
  valueType: PrimitiveType.String,
  isRequired: true,
};
export const String: EnvVarType = {
  valueType: PrimitiveType.String,
  isRequired: false,
};
