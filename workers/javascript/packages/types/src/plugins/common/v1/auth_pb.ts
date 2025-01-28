// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file plugins/common/v1/auth.proto (package plugins.common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message plugins.common.v1.OAuthCommon
 */
export class OAuthCommon extends Message<OAuthCommon> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  /**
   * @generated from field: string token_url = 3;
   */
  tokenUrl = "";

  /**
   * @generated from field: string audience = 4;
   */
  audience = "";

  /**
   * @generated from field: string scope = 5;
   */
  scope = "";

  constructor(data?: PartialMessage<OAuthCommon>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.OAuthCommon";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "audience", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuthCommon {
    return new OAuthCommon().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuthCommon {
    return new OAuthCommon().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuthCommon {
    return new OAuthCommon().fromJsonString(jsonString, options);
  }

  static equals(a: OAuthCommon | PlainMessage<OAuthCommon> | undefined, b: OAuthCommon | PlainMessage<OAuthCommon> | undefined): boolean {
    return proto3.util.equals(OAuthCommon, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.OAuth
 */
export class OAuth extends Message<OAuth> {
  constructor(data?: PartialMessage<OAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.OAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth {
    return new OAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth {
    return new OAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth {
    return new OAuth().fromJsonString(jsonString, options);
  }

  static equals(a: OAuth | PlainMessage<OAuth> | undefined, b: OAuth | PlainMessage<OAuth> | undefined): boolean {
    return proto3.util.equals(OAuth, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.OAuth.PasswordGrantFlow
 */
export class OAuth_PasswordGrantFlow extends Message<OAuth_PasswordGrantFlow> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  /**
   * @generated from field: string token_url = 3;
   */
  tokenUrl = "";

  /**
   * @generated from field: string username = 4;
   */
  username = "";

  /**
   * @generated from field: string password = 5;
   */
  password = "";

  /**
   * @generated from field: string audience = 6;
   */
  audience = "";

  /**
   * @generated from field: string scope = 7;
   */
  scope = "";

  constructor(data?: PartialMessage<OAuth_PasswordGrantFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.OAuth.PasswordGrantFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "audience", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth_PasswordGrantFlow {
    return new OAuth_PasswordGrantFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth_PasswordGrantFlow {
    return new OAuth_PasswordGrantFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth_PasswordGrantFlow {
    return new OAuth_PasswordGrantFlow().fromJsonString(jsonString, options);
  }

  static equals(a: OAuth_PasswordGrantFlow | PlainMessage<OAuth_PasswordGrantFlow> | undefined, b: OAuth_PasswordGrantFlow | PlainMessage<OAuth_PasswordGrantFlow> | undefined): boolean {
    return proto3.util.equals(OAuth_PasswordGrantFlow, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.OAuth.ClientCredentialsFlow
 */
export class OAuth_ClientCredentialsFlow extends Message<OAuth_ClientCredentialsFlow> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  /**
   * @generated from field: string token_url = 3;
   */
  tokenUrl = "";

  /**
   * @generated from field: string audience = 4;
   */
  audience = "";

  /**
   * @generated from field: string scope = 5;
   */
  scope = "";

  constructor(data?: PartialMessage<OAuth_ClientCredentialsFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.OAuth.ClientCredentialsFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "audience", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth_ClientCredentialsFlow {
    return new OAuth_ClientCredentialsFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth_ClientCredentialsFlow {
    return new OAuth_ClientCredentialsFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth_ClientCredentialsFlow {
    return new OAuth_ClientCredentialsFlow().fromJsonString(jsonString, options);
  }

  static equals(a: OAuth_ClientCredentialsFlow | PlainMessage<OAuth_ClientCredentialsFlow> | undefined, b: OAuth_ClientCredentialsFlow | PlainMessage<OAuth_ClientCredentialsFlow> | undefined): boolean {
    return proto3.util.equals(OAuth_ClientCredentialsFlow, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.OAuth.AuthorizationCodeFlow
 */
export class OAuth_AuthorizationCodeFlow extends Message<OAuth_AuthorizationCodeFlow> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  /**
   * @generated from field: string token_url = 3;
   */
  tokenUrl = "";

  /**
   * @generated from field: string auth_url = 4;
   */
  authUrl = "";

  /**
   * @generated from field: string audience = 5;
   */
  audience = "";

  /**
   * @generated from field: string scope = 6;
   */
  scope = "";

  /**
   * @generated from field: string token_scope = 7;
   */
  tokenScope = "";

  /**
   * @generated from field: bool refresh_token_from_server = 8;
   */
  refreshTokenFromServer = false;

  /**
   * @generated from field: string client_auth_method = 9;
   */
  clientAuthMethod = "";

  /**
   * @generated from field: plugins.common.v1.OAuth.AuthorizationCodeFlow.SubjectTokenSource subject_token_source = 10;
   */
  subjectTokenSource = OAuth_AuthorizationCodeFlow_SubjectTokenSource.UNSPECIFIED;

  /**
   * @generated from field: string subject_token_source_static_token = 11;
   */
  subjectTokenSourceStaticToken = "";

  constructor(data?: PartialMessage<OAuth_AuthorizationCodeFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.OAuth.AuthorizationCodeFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "auth_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "audience", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "token_scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "refresh_token_from_server", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "client_auth_method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "subject_token_source", kind: "enum", T: proto3.getEnumType(OAuth_AuthorizationCodeFlow_SubjectTokenSource) },
    { no: 11, name: "subject_token_source_static_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth_AuthorizationCodeFlow {
    return new OAuth_AuthorizationCodeFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth_AuthorizationCodeFlow {
    return new OAuth_AuthorizationCodeFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth_AuthorizationCodeFlow {
    return new OAuth_AuthorizationCodeFlow().fromJsonString(jsonString, options);
  }

  static equals(a: OAuth_AuthorizationCodeFlow | PlainMessage<OAuth_AuthorizationCodeFlow> | undefined, b: OAuth_AuthorizationCodeFlow | PlainMessage<OAuth_AuthorizationCodeFlow> | undefined): boolean {
    return proto3.util.equals(OAuth_AuthorizationCodeFlow, a, b);
  }
}

/**
 * @generated from enum plugins.common.v1.OAuth.AuthorizationCodeFlow.SubjectTokenSource
 */
export enum OAuth_AuthorizationCodeFlow_SubjectTokenSource {
  /**
   * @generated from enum value: SUBJECT_TOKEN_SOURCE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SUBJECT_TOKEN_SOURCE_LOGIN_IDENTITY_PROVIDER = 1;
   */
  LOGIN_IDENTITY_PROVIDER = 1,

  /**
   * @generated from enum value: SUBJECT_TOKEN_SOURCE_STATIC_TOKEN = 2;
   */
  STATIC_TOKEN = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(OAuth_AuthorizationCodeFlow_SubjectTokenSource)
proto3.util.setEnumType(OAuth_AuthorizationCodeFlow_SubjectTokenSource, "plugins.common.v1.OAuth.AuthorizationCodeFlow.SubjectTokenSource", [
  { no: 0, name: "SUBJECT_TOKEN_SOURCE_UNSPECIFIED" },
  { no: 1, name: "SUBJECT_TOKEN_SOURCE_LOGIN_IDENTITY_PROVIDER" },
  { no: 2, name: "SUBJECT_TOKEN_SOURCE_STATIC_TOKEN" },
]);

/**
 * @generated from message plugins.common.v1.Basic
 */
export class Basic extends Message<Basic> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<Basic>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.Basic";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Basic {
    return new Basic().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Basic {
    return new Basic().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Basic {
    return new Basic().fromJsonString(jsonString, options);
  }

  static equals(a: Basic | PlainMessage<Basic> | undefined, b: Basic | PlainMessage<Basic> | undefined): boolean {
    return proto3.util.equals(Basic, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.Azure
 */
export class Azure extends Message<Azure> {
  /**
   * @generated from oneof plugins.common.v1.Azure.config
   */
  config: {
    /**
     * @generated from field: plugins.common.v1.Azure.Key key = 1;
     */
    value: Azure_Key;
    case: "key";
  } | {
    /**
     * @generated from field: plugins.common.v1.Azure.ClientCredentials client_credentials = 2;
     */
    value: Azure_ClientCredentials;
    case: "clientCredentials";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Azure>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.Azure";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: Azure_Key, oneof: "config" },
    { no: 2, name: "client_credentials", kind: "message", T: Azure_ClientCredentials, oneof: "config" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Azure {
    return new Azure().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Azure {
    return new Azure().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Azure {
    return new Azure().fromJsonString(jsonString, options);
  }

  static equals(a: Azure | PlainMessage<Azure> | undefined, b: Azure | PlainMessage<Azure> | undefined): boolean {
    return proto3.util.equals(Azure, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.Azure.Key
 */
export class Azure_Key extends Message<Azure_Key> {
  /**
   * @generated from field: string master_key = 1;
   */
  masterKey = "";

  constructor(data?: PartialMessage<Azure_Key>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.Azure.Key";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "master_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Azure_Key {
    return new Azure_Key().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Azure_Key {
    return new Azure_Key().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Azure_Key {
    return new Azure_Key().fromJsonString(jsonString, options);
  }

  static equals(a: Azure_Key | PlainMessage<Azure_Key> | undefined, b: Azure_Key | PlainMessage<Azure_Key> | undefined): boolean {
    return proto3.util.equals(Azure_Key, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.Azure.ClientCredentials
 */
export class Azure_ClientCredentials extends Message<Azure_ClientCredentials> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  constructor(data?: PartialMessage<Azure_ClientCredentials>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.Azure.ClientCredentials";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Azure_ClientCredentials {
    return new Azure_ClientCredentials().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Azure_ClientCredentials {
    return new Azure_ClientCredentials().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Azure_ClientCredentials {
    return new Azure_ClientCredentials().fromJsonString(jsonString, options);
  }

  static equals(a: Azure_ClientCredentials | PlainMessage<Azure_ClientCredentials> | undefined, b: Azure_ClientCredentials | PlainMessage<Azure_ClientCredentials> | undefined): boolean {
    return proto3.util.equals(Azure_ClientCredentials, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AwsAuth
 */
export class AwsAuth extends Message<AwsAuth> {
  /**
   * @generated from oneof plugins.common.v1.AwsAuth.config
   */
  config: {
    /**
     * @generated from field: plugins.common.v1.AwsAuth.Static static = 1;
     */
    value: AwsAuth_Static;
    case: "static";
  } | {
    /**
     * @generated from field: plugins.common.v1.AwsAuth.AssumeRole assume_role = 2;
     */
    value: AwsAuth_AssumeRole;
    case: "assumeRole";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: string region = 3;
   */
  region = "";

  constructor(data?: PartialMessage<AwsAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AwsAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "static", kind: "message", T: AwsAuth_Static, oneof: "config" },
    { no: 2, name: "assume_role", kind: "message", T: AwsAuth_AssumeRole, oneof: "config" },
    { no: 3, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsAuth {
    return new AwsAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsAuth {
    return new AwsAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsAuth {
    return new AwsAuth().fromJsonString(jsonString, options);
  }

  static equals(a: AwsAuth | PlainMessage<AwsAuth> | undefined, b: AwsAuth | PlainMessage<AwsAuth> | undefined): boolean {
    return proto3.util.equals(AwsAuth, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AwsAuth.Static
 */
export class AwsAuth_Static extends Message<AwsAuth_Static> {
  /**
   * @generated from field: string access_key_id = 1;
   */
  accessKeyId = "";

  /**
   * @generated from field: string secret_access_key = 2;
   */
  secretAccessKey = "";

  constructor(data?: PartialMessage<AwsAuth_Static>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AwsAuth.Static";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_key_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "secret_access_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsAuth_Static {
    return new AwsAuth_Static().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsAuth_Static {
    return new AwsAuth_Static().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsAuth_Static {
    return new AwsAuth_Static().fromJsonString(jsonString, options);
  }

  static equals(a: AwsAuth_Static | PlainMessage<AwsAuth_Static> | undefined, b: AwsAuth_Static | PlainMessage<AwsAuth_Static> | undefined): boolean {
    return proto3.util.equals(AwsAuth_Static, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AwsAuth.AssumeRole
 */
export class AwsAuth_AssumeRole extends Message<AwsAuth_AssumeRole> {
  /**
   * @generated from field: string role_arn = 3;
   */
  roleArn = "";

  constructor(data?: PartialMessage<AwsAuth_AssumeRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AwsAuth.AssumeRole";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "role_arn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsAuth_AssumeRole {
    return new AwsAuth_AssumeRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsAuth_AssumeRole {
    return new AwsAuth_AssumeRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsAuth_AssumeRole {
    return new AwsAuth_AssumeRole().fromJsonString(jsonString, options);
  }

  static equals(a: AwsAuth_AssumeRole | PlainMessage<AwsAuth_AssumeRole> | undefined, b: AwsAuth_AssumeRole | PlainMessage<AwsAuth_AssumeRole> | undefined): boolean {
    return proto3.util.equals(AwsAuth_AssumeRole, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.GcpAuth
 */
export class GcpAuth extends Message<GcpAuth> {
  /**
   * @generated from oneof plugins.common.v1.GcpAuth.config
   */
  config: {
    /**
     * @generated from field: bytes service_account = 1;
     */
    value: Uint8Array;
    case: "serviceAccount";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<GcpAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.GcpAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_account", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "config" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GcpAuth {
    return new GcpAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GcpAuth {
    return new GcpAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GcpAuth {
    return new GcpAuth().fromJsonString(jsonString, options);
  }

  static equals(a: GcpAuth | PlainMessage<GcpAuth> | undefined, b: GcpAuth | PlainMessage<GcpAuth> | undefined): boolean {
    return proto3.util.equals(GcpAuth, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AkeylessAuth
 */
export class AkeylessAuth extends Message<AkeylessAuth> {
  /**
   * @generated from oneof plugins.common.v1.AkeylessAuth.config
   */
  config: {
    /**
     * @generated from field: plugins.common.v1.AkeylessAuth.ApiKey api_key = 1;
     */
    value: AkeylessAuth_ApiKey;
    case: "apiKey";
  } | {
    /**
     * @generated from field: plugins.common.v1.AkeylessAuth.Email email = 2;
     */
    value: AkeylessAuth_Email;
    case: "email";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AkeylessAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AkeylessAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "api_key", kind: "message", T: AkeylessAuth_ApiKey, oneof: "config" },
    { no: 2, name: "email", kind: "message", T: AkeylessAuth_Email, oneof: "config" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AkeylessAuth {
    return new AkeylessAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AkeylessAuth {
    return new AkeylessAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AkeylessAuth {
    return new AkeylessAuth().fromJsonString(jsonString, options);
  }

  static equals(a: AkeylessAuth | PlainMessage<AkeylessAuth> | undefined, b: AkeylessAuth | PlainMessage<AkeylessAuth> | undefined): boolean {
    return proto3.util.equals(AkeylessAuth, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AkeylessAuth.ApiKey
 */
export class AkeylessAuth_ApiKey extends Message<AkeylessAuth_ApiKey> {
  /**
   * @generated from field: string access_id = 1;
   */
  accessId = "";

  /**
   * @generated from field: string access_key = 2;
   */
  accessKey = "";

  constructor(data?: PartialMessage<AkeylessAuth_ApiKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AkeylessAuth.ApiKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AkeylessAuth_ApiKey {
    return new AkeylessAuth_ApiKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AkeylessAuth_ApiKey {
    return new AkeylessAuth_ApiKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AkeylessAuth_ApiKey {
    return new AkeylessAuth_ApiKey().fromJsonString(jsonString, options);
  }

  static equals(a: AkeylessAuth_ApiKey | PlainMessage<AkeylessAuth_ApiKey> | undefined, b: AkeylessAuth_ApiKey | PlainMessage<AkeylessAuth_ApiKey> | undefined): boolean {
    return proto3.util.equals(AkeylessAuth_ApiKey, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.AkeylessAuth.Email
 */
export class AkeylessAuth_Email extends Message<AkeylessAuth_Email> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<AkeylessAuth_Email>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.AkeylessAuth.Email";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AkeylessAuth_Email {
    return new AkeylessAuth_Email().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AkeylessAuth_Email {
    return new AkeylessAuth_Email().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AkeylessAuth_Email {
    return new AkeylessAuth_Email().fromJsonString(jsonString, options);
  }

  static equals(a: AkeylessAuth_Email | PlainMessage<AkeylessAuth_Email> | undefined, b: AkeylessAuth_Email | PlainMessage<AkeylessAuth_Email> | undefined): boolean {
    return proto3.util.equals(AkeylessAuth_Email, a, b);
  }
}

/**
 * @generated from message plugins.common.v1.Auth
 */
export class Auth extends Message<Auth> {
  /**
   * @generated from oneof plugins.common.v1.Auth.method
   */
  method: {
    /**
     * @generated from field: plugins.common.v1.OAuth.PasswordGrantFlow password_grant_flow = 1;
     */
    value: OAuth_PasswordGrantFlow;
    case: "passwordGrantFlow";
  } | {
    /**
     * @generated from field: plugins.common.v1.OAuth.AuthorizationCodeFlow authorization_code_flow = 2;
     */
    value: OAuth_AuthorizationCodeFlow;
    case: "authorizationCodeFlow";
  } | {
    /**
     * @generated from field: plugins.common.v1.Basic basic = 3;
     */
    value: Basic;
    case: "basic";
  } | {
    /**
     * @generated from field: plugins.common.v1.OAuth.ClientCredentialsFlow client_credentials_flow = 4;
     */
    value: OAuth_ClientCredentialsFlow;
    case: "clientCredentialsFlow";
  } | {
    /**
     * todo: remove me when cosmos updates
     *
     * @generated from field: plugins.common.v1.Azure.Key key = 5;
     */
    value: Azure_Key;
    case: "key";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Auth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.common.v1.Auth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "password_grant_flow", kind: "message", T: OAuth_PasswordGrantFlow, oneof: "method" },
    { no: 2, name: "authorization_code_flow", kind: "message", T: OAuth_AuthorizationCodeFlow, oneof: "method" },
    { no: 3, name: "basic", kind: "message", T: Basic, oneof: "method" },
    { no: 4, name: "client_credentials_flow", kind: "message", T: OAuth_ClientCredentialsFlow, oneof: "method" },
    { no: 5, name: "key", kind: "message", T: Azure_Key, oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auth {
    return new Auth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJsonString(jsonString, options);
  }

  static equals(a: Auth | PlainMessage<Auth> | undefined, b: Auth | PlainMessage<Auth> | undefined): boolean {
    return proto3.util.equals(Auth, a, b);
  }
}

