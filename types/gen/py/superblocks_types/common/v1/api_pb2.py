# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: common/v1/api.proto
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
    'common/v1/api.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13\x63ommon/v1/api.proto\x12\tcommon.v1\"\x85\x01\n\x05Links\x12\x31\n\x05links\x18\x01 \x03(\x0b\x32\x1b.common.v1.Links.LinksEntryR\x05links\x1aI\n\nLinksEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12%\n\x05value\x18\x02 \x01(\x0b\x32\x0f.common.v1.LinkR\x05value:\x02\x38\x01\"\x18\n\x04Link\x12\x10\n\x03url\x18\x01 \x01(\tR\x03urlB9Z7github.com/superblocksteam/agent/types/gen/go/common/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'common.v1.api_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z7github.com/superblocksteam/agent/types/gen/go/common/v1'
  _globals['_LINKS_LINKSENTRY']._loaded_options = None
  _globals['_LINKS_LINKSENTRY']._serialized_options = b'8\001'
  _globals['_LINKS']._serialized_start=35
  _globals['_LINKS']._serialized_end=168
  _globals['_LINKS_LINKSENTRY']._serialized_start=95
  _globals['_LINKS_LINKSENTRY']._serialized_end=168
  _globals['_LINK']._serialized_start=170
  _globals['_LINK']._serialized_end=194
# @@protoc_insertion_point(module_scope)
