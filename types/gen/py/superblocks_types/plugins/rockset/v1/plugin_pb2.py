# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/rockset/v1/plugin.proto
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
    'plugins/rockset/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1fplugins/rockset/v1/plugin.proto\x12\x12plugins.rockset.v1\x1a\x19google/protobuf/any.proto\";\n\x13SuperblocksMetadata\x12$\n\rpluginVersion\x18\x01 \x01(\tR\rpluginVersion\"5\n\rMappedColumns\x12\x12\n\x04json\x18\x01 \x01(\tR\x04json\x12\x10\n\x03sql\x18\x02 \x01(\tR\x03sql\"E\n\x05Tuple\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12*\n\x05value\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyR\x05value\"\xb1\x04\n\x06Plugin\x12\x12\n\x04\x62ody\x18\x01 \x01(\tR\x04\x62ody\x12&\n\x0eusePreparedSql\x18\x02 \x01(\x08R\x0eusePreparedSql\x12!\n\toperation\x18\x03 \x01(\tH\x00R\toperation\x88\x01\x01\x12\x30\n\x13useAdvancedMatching\x18\x04 \x01(\tR\x13useAdvancedMatching\x12\x14\n\x05table\x18\x05 \x01(\tR\x05table\x12\x37\n\tnewValues\x18\x06 \x03(\x0b\x32\x19.plugins.rockset.v1.TupleR\tnewValues\x12\x37\n\toldValues\x18\x07 \x03(\x0b\x32\x19.plugins.rockset.v1.TupleR\toldValues\x12\x1a\n\x08\x66ilterBy\x18\x08 \x03(\tR\x08\x66ilterBy\x12 \n\x0bmappingMode\x18\t \x01(\tR\x0bmappingMode\x12G\n\rmappedColumns\x18\n \x03(\x0b\x32!.plugins.rockset.v1.MappedColumnsR\rmappedColumns\x12\x1e\n\nhttpMethod\x18\x0b \x01(\tR\nhttpMethod\x12Y\n\x13superblocksMetadata\x18\x0c \x01(\x0b\x32\'.plugins.rockset.v1.SuperblocksMetadataR\x13superblocksMetadataB\x0c\n\n_operationBBZ@github.com/superblocksteam/agent/types/gen/go/plugins/rockset/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.rockset.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z@github.com/superblocksteam/agent/types/gen/go/plugins/rockset/v1'
  _globals['_SUPERBLOCKSMETADATA']._serialized_start=82
  _globals['_SUPERBLOCKSMETADATA']._serialized_end=141
  _globals['_MAPPEDCOLUMNS']._serialized_start=143
  _globals['_MAPPEDCOLUMNS']._serialized_end=196
  _globals['_TUPLE']._serialized_start=198
  _globals['_TUPLE']._serialized_end=267
  _globals['_PLUGIN']._serialized_start=270
  _globals['_PLUGIN']._serialized_end=831
# @@protoc_insertion_point(module_scope)
