# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: superblocks/v1/options.proto
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
    'superblocks/v1/options.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import descriptor_pb2 as google_dot_protobuf_dot_descriptor__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1csuperblocks/v1/options.proto\x12\x0esuperblocks.v1\x1a google/protobuf/descriptor.proto\"*\n\x0cIntegrations\x12\x1a\n\x08registry\x18\x01 \x01(\x08R\x08registry\":\n\x12IntegrationOptions\x12\x1e\n\npluginType\x18\x02 \x01(\tR\npluginTypeJ\x04\x08\x01\x10\x02:c\n\x0cintegrations\x12\x1f.google.protobuf.MessageOptions\x18\xd0\x86\x03 \x01(\x0b\x32\x1c.superblocks.v1.IntegrationsR\x0cintegrations:t\n\x13integration_options\x12\x1d.google.protobuf.FieldOptions\x18\xe0\xd4\x03 \x01(\x0b\x32\".superblocks.v1.IntegrationOptionsR\x12integrationOptionsB>Z<github.com/superblocksteam/agent/types/gen/go/superblocks/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'superblocks.v1.options_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z<github.com/superblocksteam/agent/types/gen/go/superblocks/v1'
  _globals['_INTEGRATIONS']._serialized_start=82
  _globals['_INTEGRATIONS']._serialized_end=124
  _globals['_INTEGRATIONOPTIONS']._serialized_start=126
  _globals['_INTEGRATIONOPTIONS']._serialized_end=184
# @@protoc_insertion_point(module_scope)
