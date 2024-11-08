# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ai/v1/service.proto
# Protobuf Python Version: 5.28.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    3,
    '',
    'ai/v1/service.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.ai.v1 import ai_pb2 as ai_dot_v1_dot_ai__pb2
from superblocks_types.buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2
from superblocks_types.common.v1 import health_pb2 as common_dot_v1_dot_health__pb2
from superblocks_types.google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from superblocks_types.protoc_gen_openapiv2.options import annotations_pb2 as protoc__gen__openapiv2_dot_options_dot_annotations__pb2
from superblocks_types.validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13\x61i/v1/service.proto\x12\x05\x61i.v1\x1a\x0e\x61i/v1/ai.proto\x1a\x1b\x62uf/validate/validate.proto\x1a\x16\x63ommon/v1/health.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x17validate/validate.proto\"M\n\tOverrides\x12\x1c\n\x03llm\x18\x01 \x01(\x0e\x32\n.ai.v1.LLMR\x03llm\x12\"\n\x05model\x18\x02 \x01(\x0e\x32\x0c.ai.v1.MODELR\x05model\"t\n\x11\x43reateTaskRequest\x12/\n\x04task\x18\x01 \x01(\x0b\x32\x0b.ai.v1.TaskB\x0e\xfa\x42\x05\x8a\x01\x02\x10\x01\xbaH\x03\xc8\x01\x01R\x04task\x12.\n\toverrides\x18\x02 \x01(\x0b\x32\x10.ai.v1.OverridesR\toverrides\"s\n\tTaskEvent\x12\x14\n\x05\x63hunk\x18\x01 \x01(\tR\x05\x63hunk\x12\x1c\n\x03llm\x18\x02 \x01(\x0e\x32\n.ai.v1.LLMR\x03llm\x12\"\n\x05model\x18\x03 \x01(\x0e\x32\x0c.ai.v1.MODELR\x05model\x12\x0e\n\x02id\x18\x04 \x01(\tR\x02id2\x8d\x01\n\x0fMetadataService\x12z\n\x06Health\x12\x16.google.protobuf.Empty\x1a\x19.common.v1.HealthResponse\"=\x92\x41\x10*\x0eService Health\x82\xd3\xe4\x93\x02$\x12\r/v1/ai/healthZ\x13\x12\x11/api/v1/ai/health2\x85\x01\n\x0bTaskService\x12v\n\x06\x43reate\x12\x18.ai.v1.CreateTaskRequest\x1a\x10.ai.v1.TaskEvent\">\x92\x41\r*\x0b\x43reate Task\x82\xd3\xe4\x93\x02(\"\x0c/v1/ai/tasks:\x01*Z\x15\"\x10/api/v1/ai/tasks:\x01*0\x01\x42~Z3github.com/superblocksteam/agent/types/gen/go/ai/v1\x92\x41\x46\x12\x1d\n\x16Superblocks AI Service2\x03\x31.0*\x01\x02\x32\x10\x61pplication/json:\x10\x61pplication/jsonb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ai.v1.service_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z3github.com/superblocksteam/agent/types/gen/go/ai/v1\222AF\022\035\n\026Superblocks AI Service2\0031.0*\001\0022\020application/json:\020application/json'
  _globals['_CREATETASKREQUEST'].fields_by_name['task']._loaded_options = None
  _globals['_CREATETASKREQUEST'].fields_by_name['task']._serialized_options = b'\372B\005\212\001\002\020\001\272H\003\310\001\001'
  _globals['_METADATASERVICE'].methods_by_name['Health']._loaded_options = None
  _globals['_METADATASERVICE'].methods_by_name['Health']._serialized_options = b'\222A\020*\016Service Health\202\323\344\223\002$\022\r/v1/ai/healthZ\023\022\021/api/v1/ai/health'
  _globals['_TASKSERVICE'].methods_by_name['Create']._loaded_options = None
  _globals['_TASKSERVICE'].methods_by_name['Create']._serialized_options = b'\222A\r*\013Create Task\202\323\344\223\002(\"\014/v1/ai/tasks:\001*Z\025\"\020/api/v1/ai/tasks:\001*'
  _globals['_OVERRIDES']._serialized_start=231
  _globals['_OVERRIDES']._serialized_end=308
  _globals['_CREATETASKREQUEST']._serialized_start=310
  _globals['_CREATETASKREQUEST']._serialized_end=426
  _globals['_TASKEVENT']._serialized_start=428
  _globals['_TASKEVENT']._serialized_end=543
  _globals['_METADATASERVICE']._serialized_start=546
  _globals['_METADATASERVICE']._serialized_end=687
  _globals['_TASKSERVICE']._serialized_start=690
  _globals['_TASKSERVICE']._serialized_end=823
# @@protoc_insertion_point(module_scope)
