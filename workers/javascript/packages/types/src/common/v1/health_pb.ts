// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file common/v1/health.proto (package common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message common.v1.Pool
 */
export class Pool extends Message<Pool> {
  /**
   * @generated from field: optional uint32 hits = 1;
   */
  hits?: number;

  /**
   * @generated from field: optional uint32 misses = 2;
   */
  misses?: number;

  /**
   * @generated from field: optional uint32 timeouts = 3;
   */
  timeouts?: number;

  /**
   * @generated from field: optional uint32 total = 4;
   */
  total?: number;

  /**
   * @generated from field: optional uint32 idle = 5;
   */
  idle?: number;

  /**
   * @generated from field: optional uint32 stale = 6;
   */
  stale?: number;

  constructor(data?: PartialMessage<Pool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.Pool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hits", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 2, name: "misses", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 3, name: "timeouts", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 5, name: "idle", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 6, name: "stale", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool {
    return new Pool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJsonString(jsonString, options);
  }

  static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean {
    return proto3.util.equals(Pool, a, b);
  }
}

/**
 * @generated from message common.v1.HealthResponse
 */
export class HealthResponse extends Message<HealthResponse> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: int64 uptime = 2;
   */
  uptime = protoInt64.zero;

  /**
   * @generated from field: string version = 3;
   */
  version = "";

  /**
   * @generated from field: common.v1.Pool store = 4;
   */
  store?: Pool;

  /**
   * @generated from field: common.v1.Pool stream = 5;
   */
  stream?: Pool;

  /**
   * @generated from field: string id = 6;
   */
  id = "";

  constructor(data?: PartialMessage<HealthResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.HealthResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uptime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "store", kind: "message", T: Pool },
    { no: 5, name: "stream", kind: "message", T: Pool },
    { no: 6, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthResponse {
    return new HealthResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthResponse {
    return new HealthResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthResponse {
    return new HealthResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthResponse | PlainMessage<HealthResponse> | undefined, b: HealthResponse | PlainMessage<HealthResponse> | undefined): boolean {
    return proto3.util.equals(HealthResponse, a, b);
  }
}

