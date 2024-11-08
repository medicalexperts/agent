# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/couchbase/v1/plugin.proto
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
    'plugins/couchbase/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.plugins.common.v1 import plugin_pb2 as plugins_dot_common_dot_v1_dot_plugin__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!plugins/couchbase/v1/plugin.proto\x12\x14plugins.couchbase.v1\x1a\x1eplugins/common/v1/plugin.proto\"\xa9\t\n\x06Plugin\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12P\n\nconnection\x18\x02 \x01(\x0b\x32\x30.plugins.couchbase.v1.Plugin.CouchbaseConnectionR\nconnection\x12z\n\x1e\x64ynamic_workflow_configuration\x18\x03 \x01(\x0b\x32/.plugins.common.v1.DynamicWorkflowConfigurationH\x01R\x1c\x64ynamicWorkflowConfiguration\x88\x01\x01\x12;\n\x06tunnel\x18\x04 \x01(\x0b\x32#.plugins.common.v1.SSHConfigurationR\x06tunnel\x12\x1f\n\x0b\x62ucket_name\x18\x05 \x01(\tR\nbucketName\x12:\n\x07run_sql\x18\x06 \x01(\x0b\x32\x1f.plugins.common.v1.SQLExecutionH\x00R\x06runSql\x12\x46\n\x06insert\x18\x07 \x01(\x0b\x32,.plugins.couchbase.v1.Plugin.CouchbaseInsertH\x00R\x06insert\x12=\n\x03get\x18\x08 \x01(\x0b\x32).plugins.couchbase.v1.Plugin.CouchbaseGetH\x00R\x03get\x12\x46\n\x06remove\x18\t \x01(\x0b\x32,.plugins.couchbase.v1.Plugin.CouchbaseRemoveH\x00R\x06remove\x1aK\n\x13\x43ouchbaseIdentifier\x12\x14\n\x05scope\x18\x01 \x01(\tR\x05scope\x12\x1e\n\ncollection\x18\x02 \x01(\tR\ncollection\x1aW\n\x13\x43ouchbaseConnection\x12\x12\n\x04user\x18\x02 \x01(\tR\x04user\x12\x1a\n\x08password\x18\x03 \x01(\tR\x08password\x12\x10\n\x03url\x18\x05 \x01(\tR\x03url\x1a\x8b\x01\n\x0f\x43ouchbaseInsert\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value\x12P\n\nidentifier\x18\x03 \x01(\x0b\x32\x30.plugins.couchbase.v1.Plugin.CouchbaseIdentifierR\nidentifier\x1ar\n\x0c\x43ouchbaseGet\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12P\n\nidentifier\x18\x02 \x01(\x0b\x32\x30.plugins.couchbase.v1.Plugin.CouchbaseIdentifierR\nidentifier\x1au\n\x0f\x43ouchbaseRemove\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12P\n\nidentifier\x18\x02 \x01(\x0b\x32\x30.plugins.couchbase.v1.Plugin.CouchbaseIdentifierR\nidentifierB\x12\n\x10\x63ouchbase_actionB!\n\x1f_dynamic_workflow_configuration\"\xb3\x02\n\x08Metadata\x12?\n\x07\x62uckets\x18\x01 \x03(\x0b\x32%.plugins.couchbase.v1.Metadata.BucketR\x07\x62uckets\x1a \n\nCollection\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x1ah\n\x05Scope\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12K\n\x0b\x63ollections\x18\x02 \x03(\x0b\x32).plugins.couchbase.v1.Metadata.CollectionR\x0b\x63ollections\x1aZ\n\x06\x42ucket\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12<\n\x06scopes\x18\x02 \x03(\x0b\x32$.plugins.couchbase.v1.Metadata.ScopeR\x06scopesBDZBgithub.com/superblocksteam/agent/types/gen/go/plugins/couchbase/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.couchbase.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZBgithub.com/superblocksteam/agent/types/gen/go/plugins/couchbase/v1'
  _globals['_PLUGIN']._serialized_start=92
  _globals['_PLUGIN']._serialized_end=1285
  _globals['_PLUGIN_COUCHBASEIDENTIFIER']._serialized_start=689
  _globals['_PLUGIN_COUCHBASEIDENTIFIER']._serialized_end=764
  _globals['_PLUGIN_COUCHBASECONNECTION']._serialized_start=766
  _globals['_PLUGIN_COUCHBASECONNECTION']._serialized_end=853
  _globals['_PLUGIN_COUCHBASEINSERT']._serialized_start=856
  _globals['_PLUGIN_COUCHBASEINSERT']._serialized_end=995
  _globals['_PLUGIN_COUCHBASEGET']._serialized_start=997
  _globals['_PLUGIN_COUCHBASEGET']._serialized_end=1111
  _globals['_PLUGIN_COUCHBASEREMOVE']._serialized_start=1113
  _globals['_PLUGIN_COUCHBASEREMOVE']._serialized_end=1230
  _globals['_METADATA']._serialized_start=1288
  _globals['_METADATA']._serialized_end=1595
  _globals['_METADATA_COLLECTION']._serialized_start=1365
  _globals['_METADATA_COLLECTION']._serialized_end=1397
  _globals['_METADATA_SCOPE']._serialized_start=1399
  _globals['_METADATA_SCOPE']._serialized_end=1503
  _globals['_METADATA_BUCKET']._serialized_start=1505
  _globals['_METADATA_BUCKET']._serialized_end=1595
# @@protoc_insertion_point(module_scope)
