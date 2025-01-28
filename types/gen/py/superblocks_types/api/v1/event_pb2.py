# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: api/v1/event.proto
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
    'api/v1/event.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2
from superblocks_types.common.v1 import errors_pb2 as common_dot_v1_dot_errors__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from superblocks_types.validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x12\x61pi/v1/event.proto\x12\x06\x61pi.v1\x1a\x1b\x62uf/validate/validate.proto\x1a\x16\x63ommon/v1/errors.proto\x1a\x1cgoogle/protobuf/struct.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x17validate/validate.proto\"l\n\x08Resolved\x12,\n\x05value\x18\x01 \x01(\x0b\x32\x16.google.protobuf.ValueR\x05value\x12\x32\n\x08\x62indings\x18\x02 \x03(\x0b\x32\x16.google.protobuf.ValueR\x08\x62indings\"\xd0\x07\n\x05\x45vent\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x30\n\x04type\x18\x02 \x01(\x0e\x32\x11.api.v1.BlockTypeB\t\xbaH\x06\x82\x01\x03\"\x01\x00R\x04type\x12\x38\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\ttimestamp\x12+\n\x05start\x18\x04 \x01(\x0b\x32\x13.api.v1.Event.StartH\x00R\x05start\x12%\n\x03\x65nd\x18\x05 \x01(\x0b\x32\x11.api.v1.Event.EndH\x00R\x03\x65nd\x12(\n\x04\x64\x61ta\x18\x07 \x01(\x0b\x32\x12.api.v1.Event.DataH\x00R\x04\x64\x61ta\x12\x31\n\x07request\x18\t \x01(\x0b\x32\x15.api.v1.Event.RequestH\x00R\x07request\x12\x34\n\x08response\x18\n \x01(\x0b\x32\x16.api.v1.Event.ResponseH\x00R\x08response\x12\x1b\n\x06parent\x18\x06 \x01(\tH\x01R\x06parent\x88\x01\x01\x12,\n\x0f\x65xecution_index\x18\x08 \x01(\tH\x02R\x0e\x65xecutionIndex\x88\x01\x01\x1a\x34\n\x04\x44\x61ta\x12,\n\x05value\x18\x01 \x01(\x0b\x32\x16.google.protobuf.ValueR\x05value\x1a\t\n\x07Request\x1aH\n\x08Response\x12\x12\n\x04last\x18\x01 \x01(\tR\x04last\x12(\n\x06\x65rrors\x18\x03 \x03(\x0b\x32\x10.common.v1.ErrorR\x06\x65rrors\x1a\x07\n\x05Start\x1a\xd8\x02\n\x03\x45nd\x12\x35\n\x0bperformance\x18\x01 \x01(\x0b\x32\x13.api.v1.PerformanceR\x0bperformance\x12&\n\x06output\x18\x02 \x01(\x0b\x32\x0e.api.v1.OutputR\x06output\x12&\n\x05\x65rror\x18\x03 \x01(\x0b\x32\x10.common.v1.ErrorR\x05\x65rror\x12>\n\x06status\x18\x04 \x01(\x0e\x32\x13.api.v1.BlockStatusB\x11\xfa\x42\x05\x82\x01\x02 \x00\xbaH\x06\x82\x01\x03\"\x01\x00R\x06status\x12;\n\x08resolved\x18\x05 \x03(\x0b\x32\x1f.api.v1.Event.End.ResolvedEntryR\x08resolved\x1aM\n\rResolvedEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12&\n\x05value\x18\x02 \x01(\x0b\x32\x10.api.v1.ResolvedR\x05value:\x02\x38\x01\x42\x07\n\x05\x65ventB\t\n\x07_parentB\x12\n\x10_execution_index\"\xff\x01\n\x0bPerformance\x12\x14\n\x05start\x18\x01 \x01(\x03R\x05start\x12\x16\n\x06\x66inish\x18\x02 \x01(\x03R\x06\x66inish\x12\x14\n\x05total\x18\x03 \x01(\x03R\x05total\x12\x1c\n\texecution\x18\x04 \x01(\x03R\texecution\x12\x1a\n\x08overhead\x18\x05 \x01(\x03R\x08overhead\x12\x37\n\x06\x63ustom\x18\x06 \x03(\x0b\x32\x1f.api.v1.Performance.CustomEntryR\x06\x63ustom\x1a\x39\n\x0b\x43ustomEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\x03R\x05value:\x02\x38\x01\"\xa5\x02\n\x06Output\x12.\n\x06result\x18\x01 \x01(\x0b\x32\x16.google.protobuf.ValueR\x06result\x12\x18\n\x07request\x18\x02 \x01(\tR\x07request\x12\x16\n\x06stdout\x18\x03 \x03(\tR\x06stdout\x12\x16\n\x06stderr\x18\x04 \x03(\tR\x06stderr\x12\x35\n\nrequest_v2\x18\x05 \x01(\x0b\x32\x16.api.v1.Output.RequestR\trequestV2\x1aj\n\x07Request\x12\x18\n\x07summary\x18\x01 \x01(\tR\x07summary\x12\x38\n\x08metadata\x18\x05 \x01(\x0b\x32\x17.google.protobuf.StructH\x00R\x08metadata\x88\x01\x01\x42\x0b\n\t_metadata\"\xad\x01\n\tOutputOld\x12.\n\x06output\x18\x01 \x01(\x0b\x32\x16.google.protobuf.ValueR\x06output\x12\x10\n\x03log\x18\x02 \x03(\tR\x03log\x12\x18\n\x07request\x18\x03 \x01(\tR\x07request\x12\x44\n\x12place_holders_info\x18\x04 \x01(\x0b\x32\x16.google.protobuf.ValueR\x10placeHoldersInfo*a\n\x0b\x42lockStatus\x12\x1c\n\x18\x42LOCK_STATUS_UNSPECIFIED\x10\x00\x12\x1a\n\x16\x42LOCK_STATUS_SUCCEEDED\x10\x01\x12\x18\n\x14\x42LOCK_STATUS_ERRORED\x10\x02*\xbd\x02\n\tBlockType\x12\x1a\n\x16\x42LOCK_TYPE_UNSPECIFIED\x10\x00\x12\x14\n\x10\x42LOCK_TYPE_BREAK\x10\x01\x12\x15\n\x11\x42LOCK_TYPE_RETURN\x10\x02\x12\x13\n\x0f\x42LOCK_TYPE_WAIT\x10\x03\x12\x17\n\x13\x42LOCK_TYPE_PARALLEL\x10\x04\x12\x1a\n\x16\x42LOCK_TYPE_CONDITIONAL\x10\x05\x12\x13\n\x0f\x42LOCK_TYPE_LOOP\x10\x06\x12\x17\n\x13\x42LOCK_TYPE_TRYCATCH\x10\x07\x12\x13\n\x0f\x42LOCK_TYPE_STEP\x10\x08\x12\x18\n\x14\x42LOCK_TYPE_VARIABLES\x10\t\x12\x14\n\x10\x42LOCK_TYPE_THROW\x10\n\x12\x13\n\x0f\x42LOCK_TYPE_SEND\x10\x0b\x12\x15\n\x11\x42LOCK_TYPE_STREAM\x10\x0c\x42\x36Z4github.com/superblocksteam/agent/types/gen/go/api/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'api.v1.event_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z4github.com/superblocksteam/agent/types/gen/go/api/v1'
  _globals['_EVENT_END_RESOLVEDENTRY']._loaded_options = None
  _globals['_EVENT_END_RESOLVEDENTRY']._serialized_options = b'8\001'
  _globals['_EVENT_END'].fields_by_name['status']._loaded_options = None
  _globals['_EVENT_END'].fields_by_name['status']._serialized_options = b'\372B\005\202\001\002 \000\272H\006\202\001\003\"\001\000'
  _globals['_EVENT'].fields_by_name['type']._loaded_options = None
  _globals['_EVENT'].fields_by_name['type']._serialized_options = b'\272H\006\202\001\003\"\001\000'
  _globals['_PERFORMANCE_CUSTOMENTRY']._loaded_options = None
  _globals['_PERFORMANCE_CUSTOMENTRY']._serialized_options = b'8\001'
  _globals['_BLOCKSTATUS']._serialized_start=1990
  _globals['_BLOCKSTATUS']._serialized_end=2087
  _globals['_BLOCKTYPE']._serialized_start=2090
  _globals['_BLOCKTYPE']._serialized_end=2407
  _globals['_RESOLVED']._serialized_start=171
  _globals['_RESOLVED']._serialized_end=279
  _globals['_EVENT']._serialized_start=282
  _globals['_EVENT']._serialized_end=1258
  _globals['_EVENT_DATA']._serialized_start=725
  _globals['_EVENT_DATA']._serialized_end=777
  _globals['_EVENT_REQUEST']._serialized_start=779
  _globals['_EVENT_REQUEST']._serialized_end=788
  _globals['_EVENT_RESPONSE']._serialized_start=790
  _globals['_EVENT_RESPONSE']._serialized_end=862
  _globals['_EVENT_START']._serialized_start=864
  _globals['_EVENT_START']._serialized_end=871
  _globals['_EVENT_END']._serialized_start=874
  _globals['_EVENT_END']._serialized_end=1218
  _globals['_EVENT_END_RESOLVEDENTRY']._serialized_start=1141
  _globals['_EVENT_END_RESOLVEDENTRY']._serialized_end=1218
  _globals['_PERFORMANCE']._serialized_start=1261
  _globals['_PERFORMANCE']._serialized_end=1516
  _globals['_PERFORMANCE_CUSTOMENTRY']._serialized_start=1459
  _globals['_PERFORMANCE_CUSTOMENTRY']._serialized_end=1516
  _globals['_OUTPUT']._serialized_start=1519
  _globals['_OUTPUT']._serialized_end=1812
  _globals['_OUTPUT_REQUEST']._serialized_start=1706
  _globals['_OUTPUT_REQUEST']._serialized_end=1812
  _globals['_OUTPUTOLD']._serialized_start=1815
  _globals['_OUTPUTOLD']._serialized_end=1988
# @@protoc_insertion_point(module_scope)
