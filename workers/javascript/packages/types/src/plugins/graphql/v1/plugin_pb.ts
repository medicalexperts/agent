// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file plugins/graphql/v1/plugin.proto (package plugins.graphql.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Property, SuperblocksMetadata } from "../../../common/v1/plugin_pb";

/**
 * @generated from message plugins.graphql.v1.Custom
 */
export class Custom extends Message<Custom> {
  /**
   * @generated from field: common.v1.Property variables = 1;
   */
  variables?: Property;

  /**
   * @generated from field: common.v1.Property requestFormat = 2;
   */
  requestFormat?: Property;

  constructor(data?: PartialMessage<Custom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.graphql.v1.Custom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "variables", kind: "message", T: Property },
    { no: 2, name: "requestFormat", kind: "message", T: Property },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Custom {
    return new Custom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Custom {
    return new Custom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Custom {
    return new Custom().fromJsonString(jsonString, options);
  }

  static equals(a: Custom | PlainMessage<Custom> | undefined, b: Custom | PlainMessage<Custom> | undefined): boolean {
    return proto3.util.equals(Custom, a, b);
  }
}

/**
 * @generated from message plugins.graphql.v1.Plugin
 */
export class Plugin extends Message<Plugin> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: repeated common.v1.Property headers = 2;
   */
  headers: Property[] = [];

  /**
   * @generated from field: string body = 3;
   */
  body = "";

  /**
   * @generated from field: optional plugins.graphql.v1.Custom custom = 4;
   */
  custom?: Custom;

  /**
   * @generated from field: common.v1.SuperblocksMetadata superblocksMetadata = 5;
   */
  superblocksMetadata?: SuperblocksMetadata;

  /**
   * Include HTTP response metadata in output
   *
   * @generated from field: bool verboseHttpOutput = 6;
   */
  verboseHttpOutput = false;

  /**
   * Fail executions for GraphQL responses that contain errors
   *
   * @generated from field: bool failOnGraphqlErrors = 7;
   */
  failOnGraphqlErrors = false;

  constructor(data?: PartialMessage<Plugin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.graphql.v1.Plugin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "headers", kind: "message", T: Property, repeated: true },
    { no: 3, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "custom", kind: "message", T: Custom, opt: true },
    { no: 5, name: "superblocksMetadata", kind: "message", T: SuperblocksMetadata },
    { no: 6, name: "verboseHttpOutput", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "failOnGraphqlErrors", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plugin {
    return new Plugin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plugin {
    return new Plugin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plugin {
    return new Plugin().fromJsonString(jsonString, options);
  }

  static equals(a: Plugin | PlainMessage<Plugin> | undefined, b: Plugin | PlainMessage<Plugin> | undefined): boolean {
    return proto3.util.equals(Plugin, a, b);
  }
}

