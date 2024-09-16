# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/databricks/v1/plugin.proto
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
    'plugins/databricks/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.plugins.common.v1 import plugin_pb2 as plugins_dot_common_dot_v1_dot_plugin__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\"plugins/databricks/v1/plugin.proto\x12\x15plugins.databricks.v1\x1a\x1eplugins/common/v1/plugin.proto\"\xb8\x05\n\x06Plugin\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12R\n\nconnection\x18\x02 \x01(\x0b\x32\x32.plugins.databricks.v1.Plugin.DatabricksConnectionR\nconnection\x12=\n\toperation\x18\x03 \x01(\x0e\x32\x1f.plugins.common.v1.SQLOperationR\toperation\x12\x38\n\x07run_sql\x18\x04 \x01(\x0b\x32\x1f.plugins.common.v1.SQLExecutionR\x06runSql\x12;\n\tbulk_edit\x18\x05 \x01(\x0b\x32\x1e.plugins.common.v1.SQLBulkEditR\x08\x62ulkEdit\x12z\n\x1e\x64ynamic_workflow_configuration\x18\x06 \x01(\x0b\x32/.plugins.common.v1.DynamicWorkflowConfigurationH\x00R\x1c\x64ynamicWorkflowConfiguration\x88\x01\x01\x1a\xf0\x01\n\x14\x44\x61tabricksConnection\x12,\n\x0f\x64\x65\x66\x61ult_catalog\x18\x01 \x01(\tH\x00R\x0e\x64\x65\x66\x61ultCatalog\x88\x01\x01\x12*\n\x0e\x64\x65\x66\x61ult_schema\x18\x02 \x01(\tH\x01R\rdefaultSchema\x88\x01\x01\x12\x19\n\x08host_url\x18\x03 \x01(\tR\x07hostUrl\x12\x12\n\x04path\x18\x04 \x01(\tR\x04path\x12\x12\n\x04port\x18\x05 \x01(\x05R\x04port\x12\x14\n\x05token\x18\x06 \x01(\tR\x05tokenB\x12\n\x10_default_catalogB\x11\n\x0f_default_schemaB!\n\x1f_dynamic_workflow_configurationBEZCgithub.com/superblocksteam/agent/types/gen/go/plugins/databricks/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.databricks.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZCgithub.com/superblocksteam/agent/types/gen/go/plugins/databricks/v1'
  _globals['_PLUGIN']._serialized_start=94
  _globals['_PLUGIN']._serialized_end=790
  _globals['_PLUGIN_DATABRICKSCONNECTION']._serialized_start=515
  _globals['_PLUGIN_DATABRICKSCONNECTION']._serialized_end=755
# @@protoc_insertion_point(module_scope)
