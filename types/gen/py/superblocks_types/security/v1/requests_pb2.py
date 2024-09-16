# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: security/v1/requests.proto
# Protobuf Python Version: 5.28.1
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
    1,
    '',
    'security/v1/requests.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from superblocks_types.security.v1 import service_pb2 as security_dot_v1_dot_service__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1asecurity/v1/requests.proto\x12\x0bsecurity.v1\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x19security/v1/service.proto\"O\n\x18ResourcesToResignRequest\x12\x1d\n\nclaimed_by\x18\x01 \x01(\tR\tclaimedBy\x12\x14\n\x05limit\x18\x02 \x01(\x05R\x05limit\"P\n\x19ResourcesToResignResponse\x12\x33\n\tresources\x18\x01 \x03(\x0b\x32\x15.security.v1.ResourceR\tresources\"\xfb\x02\n\x0bKeyRotation\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x36\n\x06status\x18\x02 \x01(\x0e\x32\x1e.security.v1.KeyRotationStatusR\x06status\x12/\n\x13resources_completed\x18\x03 \x01(\x05R\x12resourcesCompleted\x12\'\n\x0fresources_total\x18\x04 \x01(\x05R\x0eresourcesTotal\x12$\n\x0esigning_key_id\x18\x05 \x01(\tR\x0csigningKeyId\x12\x34\n\x07\x63reated\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x07\x63reated\x12\x34\n\x07updated\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x07updated\x12\x38\n\tcompleted\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcompleted\"U\n\x14KeyRotationsResponse\x12=\n\rkey_rotations\x18\x01 \x03(\x0b\x32\x18.security.v1.KeyRotationR\x0ckeyRotations*\xc2\x01\n\x11KeyRotationStatus\x12#\n\x1fKEY_ROTATION_STATUS_UNSPECIFIED\x10\x00\x12#\n\x1fKEY_ROTATION_STATUS_IN_PROGRESS\x10\x01\x12!\n\x1dKEY_ROTATION_STATUS_COMPLETED\x10\x02\x12\x1e\n\x1aKEY_ROTATION_STATUS_FAILED\x10\x03\x12 \n\x1cKEY_ROTATION_STATUS_CANCELED\x10\x04\x42;Z9github.com/superblocksteam/agent/types/gen/go/security/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'security.v1.requests_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z9github.com/superblocksteam/agent/types/gen/go/security/v1'
  _globals['_KEYROTATIONSTATUS']._serialized_start=736
  _globals['_KEYROTATIONSTATUS']._serialized_end=930
  _globals['_RESOURCESTORESIGNREQUEST']._serialized_start=103
  _globals['_RESOURCESTORESIGNREQUEST']._serialized_end=182
  _globals['_RESOURCESTORESIGNRESPONSE']._serialized_start=184
  _globals['_RESOURCESTORESIGNRESPONSE']._serialized_end=264
  _globals['_KEYROTATION']._serialized_start=267
  _globals['_KEYROTATION']._serialized_end=646
  _globals['_KEYROTATIONSRESPONSE']._serialized_start=648
  _globals['_KEYROTATIONSRESPONSE']._serialized_end=733
# @@protoc_insertion_point(module_scope)
