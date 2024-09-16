# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/salesforce/v1/plugin.proto
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
    'plugins/salesforce/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.plugins.common.v1 import auth_pb2 as plugins_dot_common_dot_v1_dot_auth__pb2
from superblocks_types.plugins.common.v1 import plugin_pb2 as plugins_dot_common_dot_v1_dot_plugin__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\"plugins/salesforce/v1/plugin.proto\x12\x15plugins.salesforce.v1\x1a\x1cplugins/common/v1/auth.proto\x1a\x1eplugins/common/v1/plugin.proto\"\xf5\x0c\n\x06Plugin\x12\x17\n\x04name\x18\x01 \x01(\tH\x01R\x04name\x88\x01\x01\x12R\n\nconnection\x18\x02 \x01(\x0b\x32\x32.plugins.salesforce.v1.Plugin.SalesforceConnectionR\nconnection\x12\x38\n\x04soql\x18\x03 \x01(\x0b\x32\".plugins.salesforce.v1.Plugin.SoqlH\x00R\x04soql\x12\x38\n\x04\x63rud\x18\x04 \x01(\x0b\x32\".plugins.salesforce.v1.Plugin.CrudH\x00R\x04\x63rud\x12\x38\n\x04\x62ulk\x18\x05 \x01(\x0b\x32\".plugins.salesforce.v1.Plugin.BulkH\x00R\x04\x62ulk\x12z\n\x1e\x64ynamic_workflow_configuration\x18\x06 \x01(\x0b\x32/.plugins.common.v1.DynamicWorkflowConfigurationH\x02R\x1c\x64ynamicWorkflowConfiguration\x88\x01\x01\x1a\x66\n\x14SalesforceConnection\x12!\n\x0cinstance_url\x18\x01 \x01(\tR\x0binstanceUrl\x12+\n\x04\x61uth\x18\x02 \x01(\x0b\x32\x17.plugins.common.v1.AuthR\x04\x61uth\x1a\xf2\x01\n\x08Metadata\x12G\n\x07objects\x18\x01 \x03(\x0b\x32-.plugins.salesforce.v1.Plugin.Metadata.ObjectR\x07objects\x1a\x9c\x01\n\x06Object\x12K\n\x06\x66ields\x18\x01 \x03(\x0b\x32\x33.plugins.salesforce.v1.Plugin.Metadata.Object.FieldR\x06\x66ields\x1a\x45\n\x05\x46ield\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x14\n\x05label\x18\x02 \x01(\tR\x05label\x12\x12\n\x04type\x18\x03 \x01(\tR\x04type\x1a\xa9\x01\n\x04Soql\x12\x19\n\x08sql_body\x18\x01 \x01(\tR\x07sqlBody\x12\x45\n\x06\x61\x63tion\x18\x02 \x01(\x0e\x32-.plugins.salesforce.v1.Plugin.Soql.SoqlActionR\x06\x61\x63tion\"?\n\nSoqlAction\x12\x1b\n\x17SOQL_ACTION_UNSPECIFIED\x10\x00\x12\x14\n\x10SOQL_ACTION_SOQL\x10\x01\x1a\xc2\x02\n\x04\x43rud\x12#\n\rresource_type\x18\x01 \x01(\tR\x0cresourceType\x12\x45\n\x06\x61\x63tion\x18\x02 \x01(\x0e\x32-.plugins.salesforce.v1.Plugin.Crud.CrudActionR\x06\x61\x63tion\x12#\n\rresource_body\x18\x03 \x01(\tR\x0cresourceBody\x12\x1f\n\x0bresource_id\x18\x04 \x01(\tR\nresourceId\"\x87\x01\n\nCrudAction\x12\x1b\n\x17\x43RUD_ACTION_UNSPECIFIED\x10\x00\x12\x16\n\x12\x43RUD_ACTION_CREATE\x10\x01\x12\x16\n\x12\x43RUD_ACTION_UPDATE\x10\x02\x12\x16\n\x12\x43RUD_ACTION_DELETE\x10\x03\x12\x14\n\x10\x43RUD_ACTION_READ\x10\x04\x1a\xc4\x02\n\x04\x42ulk\x12#\n\rresource_type\x18\x01 \x01(\tR\x0cresourceType\x12\x45\n\x06\x61\x63tion\x18\x02 \x01(\x0e\x32-.plugins.salesforce.v1.Plugin.Bulk.BulkActionR\x06\x61\x63tion\x12#\n\rresource_body\x18\x03 \x01(\tR\x0cresourceBody\x12\x1f\n\x0b\x65xternal_id\x18\x04 \x01(\tR\nexternalId\"\x89\x01\n\nBulkAction\x12\x1b\n\x17\x42ULK_ACTION_UNSPECIFIED\x10\x00\x12\x16\n\x12\x42ULK_ACTION_CREATE\x10\x01\x12\x16\n\x12\x42ULK_ACTION_UPDATE\x10\x02\x12\x16\n\x12\x42ULK_ACTION_DELETE\x10\x03\x12\x16\n\x12\x42ULK_ACTION_UPSERT\x10\x04\x42\x13\n\x11salesforce_actionB\x07\n\x05_nameB!\n\x1f_dynamic_workflow_configurationBEZCgithub.com/superblocksteam/agent/types/gen/go/plugins/salesforce/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.salesforce.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZCgithub.com/superblocksteam/agent/types/gen/go/plugins/salesforce/v1'
  _globals['_PLUGIN']._serialized_start=124
  _globals['_PLUGIN']._serialized_end=1777
  _globals['_PLUGIN_SALESFORCECONNECTION']._serialized_start=541
  _globals['_PLUGIN_SALESFORCECONNECTION']._serialized_end=643
  _globals['_PLUGIN_METADATA']._serialized_start=646
  _globals['_PLUGIN_METADATA']._serialized_end=888
  _globals['_PLUGIN_METADATA_OBJECT']._serialized_start=732
  _globals['_PLUGIN_METADATA_OBJECT']._serialized_end=888
  _globals['_PLUGIN_METADATA_OBJECT_FIELD']._serialized_start=819
  _globals['_PLUGIN_METADATA_OBJECT_FIELD']._serialized_end=888
  _globals['_PLUGIN_SOQL']._serialized_start=891
  _globals['_PLUGIN_SOQL']._serialized_end=1060
  _globals['_PLUGIN_SOQL_SOQLACTION']._serialized_start=997
  _globals['_PLUGIN_SOQL_SOQLACTION']._serialized_end=1060
  _globals['_PLUGIN_CRUD']._serialized_start=1063
  _globals['_PLUGIN_CRUD']._serialized_end=1385
  _globals['_PLUGIN_CRUD_CRUDACTION']._serialized_start=1250
  _globals['_PLUGIN_CRUD_CRUDACTION']._serialized_end=1385
  _globals['_PLUGIN_BULK']._serialized_start=1388
  _globals['_PLUGIN_BULK']._serialized_end=1712
  _globals['_PLUGIN_BULK_BULKACTION']._serialized_start=1575
  _globals['_PLUGIN_BULK_BULKACTION']._serialized_end=1712
# @@protoc_insertion_point(module_scope)
