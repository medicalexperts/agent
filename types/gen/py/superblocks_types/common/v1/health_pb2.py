# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: common/v1/health.proto
# Protobuf Python Version: 5.29.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    3,
    '',
    'common/v1/health.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16\x63ommon/v1/health.proto\x12\tcommon.v1\"\xea\x01\n\x04Pool\x12\x17\n\x04hits\x18\x01 \x01(\rH\x00R\x04hits\x88\x01\x01\x12\x1b\n\x06misses\x18\x02 \x01(\rH\x01R\x06misses\x88\x01\x01\x12\x1f\n\x08timeouts\x18\x03 \x01(\rH\x02R\x08timeouts\x88\x01\x01\x12\x19\n\x05total\x18\x04 \x01(\rH\x03R\x05total\x88\x01\x01\x12\x17\n\x04idle\x18\x05 \x01(\rH\x04R\x04idle\x88\x01\x01\x12\x19\n\x05stale\x18\x06 \x01(\rH\x05R\x05stale\x88\x01\x01\x42\x07\n\x05_hitsB\t\n\x07_missesB\x0b\n\t_timeoutsB\x08\n\x06_totalB\x07\n\x05_idleB\x08\n\x06_stale\"\xbc\x01\n\x0eHealthResponse\x12\x18\n\x07message\x18\x01 \x01(\tR\x07message\x12\x16\n\x06uptime\x18\x02 \x01(\x03R\x06uptime\x12\x18\n\x07version\x18\x03 \x01(\tR\x07version\x12%\n\x05store\x18\x04 \x01(\x0b\x32\x0f.common.v1.PoolR\x05store\x12\'\n\x06stream\x18\x05 \x01(\x0b\x32\x0f.common.v1.PoolR\x06stream\x12\x0e\n\x02id\x18\x06 \x01(\tR\x02idB9Z7github.com/superblocksteam/agent/types/gen/go/common/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'common.v1.health_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z7github.com/superblocksteam/agent/types/gen/go/common/v1'
  _globals['_POOL']._serialized_start=38
  _globals['_POOL']._serialized_end=272
  _globals['_HEALTHRESPONSE']._serialized_start=275
  _globals['_HEALTHRESPONSE']._serialized_end=463
# @@protoc_insertion_point(module_scope)
