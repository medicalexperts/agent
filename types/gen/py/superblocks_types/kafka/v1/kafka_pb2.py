# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: kafka/v1/kafka.proto
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
    'kafka/v1/kafka.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14kafka/v1/kafka.proto\x12\x08kafka.v1\x1a\x1cgoogle/protobuf/struct.proto\"\x94\x03\n\x18IntegrationMetadataEvent\x12\x43\n\x06upsert\x18\x01 \x01(\x0b\x32).kafka.v1.IntegrationMetadataEvent.UpsertH\x00R\x06upsert\x1a\xa9\x02\n\x06Upsert\x12R\n\x18\x64\x61tasource_configuration\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x17\x64\x61tasourceConfiguration\x12%\n\x0eintegration_id\x18\x02 \x01(\tR\rintegrationId\x12)\n\x10\x63onfiguration_id\x18\x03 \x01(\tR\x0f\x63onfigurationId\x12)\n\x10integration_type\x18\x04 \x01(\tR\x0fintegrationType\x12\'\n\x0forganization_id\x18\x05 \x01(\tR\x0eorganizationId\x12%\n\x0eschema_version\x18\x06 \x01(\tR\rschemaVersionB\x07\n\x05\x65ventB8Z6github.com/superblocksteam/agent/types/gen/go/kafka/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'kafka.v1.kafka_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z6github.com/superblocksteam/agent/types/gen/go/kafka/v1'
  _globals['_INTEGRATIONMETADATAEVENT']._serialized_start=65
  _globals['_INTEGRATIONMETADATAEVENT']._serialized_end=469
  _globals['_INTEGRATIONMETADATAEVENT_UPSERT']._serialized_start=163
  _globals['_INTEGRATIONMETADATAEVENT_UPSERT']._serialized_end=460
# @@protoc_insertion_point(module_scope)
