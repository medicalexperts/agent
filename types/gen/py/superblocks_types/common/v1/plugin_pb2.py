# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: common/v1/plugin.proto
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
    'common/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16\x63ommon/v1/plugin.proto\x12\tcommon.v1\x1a\x1cgoogle/protobuf/struct.proto\"\xd1\x04\n\x08Property\x12\x15\n\x03key\x18\x01 \x01(\tH\x00R\x03key\x88\x01\x01\x12\x19\n\x05value\x18\x02 \x01(\tH\x01R\x05value\x88\x01\x01\x12\x1f\n\x08\x65\x64itable\x18\x03 \x01(\x08H\x02R\x08\x65\x64itable\x88\x01\x01\x12\x1f\n\x08internal\x18\x04 \x01(\x08H\x03R\x08internal\x88\x01\x01\x12%\n\x0b\x64\x65scription\x18\x05 \x01(\tH\x04R\x0b\x64\x65scription\x88\x01\x01\x12!\n\tmandatory\x18\x06 \x01(\x08H\x05R\tmandatory\x88\x01\x01\x12\x17\n\x04type\x18\x07 \x01(\tH\x06R\x04type\x88\x01\x01\x12\'\n\x0c\x64\x65\x66\x61ultValue\x18\x08 \x01(\tH\x07R\x0c\x64\x65\x66\x61ultValue\x88\x01\x01\x12\x1f\n\x08minRange\x18\t \x01(\tH\x08R\x08minRange\x88\x01\x01\x12\x1f\n\x08maxRange\x18\n \x01(\tH\tR\x08maxRange\x88\x01\x01\x12\"\n\x0cvalueOptions\x18\x0b \x03(\tR\x0cvalueOptions\x12\x1b\n\x06system\x18\x0c \x01(\x08H\nR\x06system\x88\x01\x01\x12\x30\n\x04\x66ile\x18\r \x01(\x0b\x32\x17.common.v1.FileMetadataH\x0bR\x04\x66ile\x88\x01\x01\x42\x06\n\x04_keyB\x08\n\x06_valueB\x0b\n\t_editableB\x0b\n\t_internalB\x0e\n\x0c_descriptionB\x0c\n\n_mandatoryB\x07\n\x05_typeB\x0f\n\r_defaultValueB\x0b\n\t_minRangeB\x0b\n\t_maxRangeB\t\n\x07_systemB\x07\n\x05_file\";\n\x13SuperblocksMetadata\x12$\n\rpluginVersion\x18\x01 \x01(\tR\rpluginVersion\"\xa8\x02\n\x0eHttpParameters\x12:\n\x05query\x18\x01 \x03(\x0b\x32$.common.v1.HttpParameters.QueryEntryR\x05query\x12\x37\n\x04\x62ody\x18\x02 \x03(\x0b\x32#.common.v1.HttpParameters.BodyEntryR\x04\x62ody\x1aP\n\nQueryEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x16.google.protobuf.ValueR\x05value:\x02\x38\x01\x1aO\n\tBodyEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x16.google.protobuf.ValueR\x05value:\x02\x38\x01\"*\n\x0c\x46ileMetadata\x12\x1a\n\x08\x66ilename\x18\x01 \x01(\tR\x08\x66ilenameB9Z7github.com/superblocksteam/agent/types/gen/go/common/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'common.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z7github.com/superblocksteam/agent/types/gen/go/common/v1'
  _globals['_HTTPPARAMETERS_QUERYENTRY']._loaded_options = None
  _globals['_HTTPPARAMETERS_QUERYENTRY']._serialized_options = b'8\001'
  _globals['_HTTPPARAMETERS_BODYENTRY']._loaded_options = None
  _globals['_HTTPPARAMETERS_BODYENTRY']._serialized_options = b'8\001'
  _globals['_PROPERTY']._serialized_start=68
  _globals['_PROPERTY']._serialized_end=661
  _globals['_SUPERBLOCKSMETADATA']._serialized_start=663
  _globals['_SUPERBLOCKSMETADATA']._serialized_end=722
  _globals['_HTTPPARAMETERS']._serialized_start=725
  _globals['_HTTPPARAMETERS']._serialized_end=1021
  _globals['_HTTPPARAMETERS_QUERYENTRY']._serialized_start=860
  _globals['_HTTPPARAMETERS_QUERYENTRY']._serialized_end=940
  _globals['_HTTPPARAMETERS_BODYENTRY']._serialized_start=942
  _globals['_HTTPPARAMETERS_BODYENTRY']._serialized_end=1021
  _globals['_FILEMETADATA']._serialized_start=1023
  _globals['_FILEMETADATA']._serialized_end=1065
# @@protoc_insertion_point(module_scope)
