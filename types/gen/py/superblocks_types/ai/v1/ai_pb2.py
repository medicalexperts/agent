# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ai/v1/ai.proto
# Protobuf Python Version: 5.28.2
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
    2,
    '',
    'ai/v1/ai.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2
from superblocks_types.common.v1 import language_pb2 as common_dot_v1_dot_language__pb2
from superblocks_types.common.v1 import utils_pb2 as common_dot_v1_dot_utils__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2
from superblocks_types.validate import validate_pb2 as validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0e\x61i/v1/ai.proto\x12\x05\x61i.v1\x1a\x1b\x62uf/validate/validate.proto\x1a\x18\x63ommon/v1/language.proto\x1a\x15\x63ommon/v1/utils.proto\x1a\x1cgoogle/protobuf/struct.proto\x1a\x17validate/validate.proto\"T\n\x07Message\x12\x1f\n\x04role\x18\x01 \x01(\x0e\x32\x0b.ai.v1.RoleR\x04role\x12(\n\x07\x63ontent\x18\x02 \x01(\tB\x0e\xfa\x42\x04r\x02\x10\x01\xbaH\x04r\x02\x10\x01R\x07\x63ontent\"\xe0\t\n\x04Task\x12\x32\n\x08optimize\x18\x01 \x01(\x0b\x32\x14.ai.v1.Task.OptimizeH\x00R\x08optimize\x12&\n\x04\x65\x64it\x18\x02 \x01(\x0b\x32\x10.ai.v1.Task.EditH\x00R\x04\x65\x64it\x12/\n\x07\x65xplain\x18\x03 \x01(\x0b\x32\x13.ai.v1.Task.ExplainH\x00R\x07\x65xplain\x12,\n\x06\x63reate\x18\x04 \x01(\x0b\x32\x12.ai.v1.Task.CreateH\x00R\x06\x63reate\x12)\n\x05\x64\x65\x62ug\x18\x05 \x01(\x0b\x32\x11.ai.v1.Task.DebugH\x00R\x05\x64\x65\x62ug\x12\x35\n\ttranspile\x18\x07 \x01(\x0b\x32\x15.ai.v1.Task.TranspileH\x00R\ttranspile\x12&\n\x04mock\x18\x08 \x01(\x0b\x32\x10.ai.v1.Task.MockH\x00R\x04mock\x12(\n\x07history\x18\x06 \x03(\x0b\x32\x0e.ai.v1.MessageR\x07history\x1a\n\n\x08Optimize\x1a\x07\n\x05\x44\x65\x62ug\x1a\x0b\n\tTranspile\x1a\xad\x02\n\x04\x45\x64it\x12\x16\n\x06prompt\x18\x01 \x01(\tR\x06prompt\x12%\n\x06syntax\x18\x02 \x01(\x0e\x32\r.ai.v1.SyntaxR\x06syntax\x12\x18\n\x07snippet\x18\x03 \x01(\tR\x07snippet\x12\x32\n\x07\x63ontext\x18\x04 \x01(\x0b\x32\x18.ai.v1.Task.Edit.ContextR\x07\x63ontext\x1a\x97\x01\n\x07\x43ontext\x12\x35\n\x08metadata\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructH\x00R\x08metadata\x12\x44\n\x11\x63onfiguration_ids\x18\x02 \x01(\x0b\x32\x15.common.v1.StringListH\x00R\x10\x63onfigurationIdsB\x0f\n\rconfiguration\x1a\x97\x02\n\x06\x43reate\x12\x16\n\x06prompt\x18\x01 \x01(\tR\x06prompt\x12%\n\x06syntax\x18\x02 \x01(\x0e\x32\r.ai.v1.SyntaxR\x06syntax\x12\x34\n\x07\x63ontext\x18\x03 \x01(\x0b\x32\x1a.ai.v1.Task.Create.ContextR\x07\x63ontext\x1a\x97\x01\n\x07\x43ontext\x12\x35\n\x08metadata\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructH\x00R\x08metadata\x12\x44\n\x11\x63onfiguration_ids\x18\x02 \x01(\x0b\x32\x15.common.v1.StringListH\x00R\x10\x63onfigurationIdsB\x0f\n\rconfiguration\x1a\x97\x01\n\x07\x45xplain\x12%\n\x06syntax\x18\x01 \x01(\x0e\x32\r.ai.v1.SyntaxR\x06syntax\x12\x18\n\x07snippet\x18\x02 \x01(\tR\x07snippet\x12\x1a\n\x08\x63ontents\x18\x03 \x01(\tR\x08\x63ontents\x12/\n\x08language\x18\x04 \x01(\x0e\x32\x13.common.v1.LanguageR\x08language\x1a[\n\x04Mock\x12%\n\x06syntax\x18\x01 \x01(\x0e\x32\r.ai.v1.SyntaxR\x06syntax\x12\x14\n\x05shape\x18\x02 \x01(\tR\x05shape\x12\x16\n\x06prompt\x18\x03 \x01(\tR\x06promptB\x06\n\x04kind*K\n\x03LLM\x12\x13\n\x0fLLM_UNSPECIFIED\x10\x00\x12\x0e\n\nLLM_OPENAI\x10\x01\x12\x11\n\rLLM_ANTHROPIC\x10\x02\x12\x0c\n\x08LLM_MOCK\x10\x03*\x8e\x08\n\x05MODEL\x12\x15\n\x11MODEL_UNSPECIFIED\x10\x00\x12\x1d\n\x19MODEL_ANTHROPIC_CLAUDE_V1\x10\x01\x12\x1f\n\x1bMODEL_ANTHROPIC_CLAUDE_V1_0\x10\x02\x12\x1f\n\x1bMODEL_ANTHROPIC_CLAUDE_V1_2\x10\x03\x12%\n!MODEL_ANTHROPIC_CLAUDE_INSTANT_V1\x10\x04\x12\'\n#MODEL_ANTHROPIC_CLAUDE_INSTANT_V1_0\x10\x05\x12\x1c\n\x18MODEL_OPENAI_GPT432K0314\x10\x06\x12\x1c\n\x18MODEL_OPENAI_GPT432K0613\x10\x1a\x12\x18\n\x14MODEL_OPENAI_GPT432K\x10\x07\x12\x19\n\x15MODEL_OPENAI_GPT40314\x10\x08\x12\x19\n\x15MODEL_OPENAI_GPT40613\x10\x1b\x12\x15\n\x11MODEL_OPENAI_GPT4\x10\t\x12\"\n\x1eMODEL_OPENAI_GPT3_5_TURBO_0301\x10\n\x12\"\n\x1eMODEL_OPENAI_GPT3_5_TURBO_0613\x10\x1c\x12\x1d\n\x19MODEL_OPENAI_GPT3_5_TURBO\x10\x0b\x12!\n\x1dMODEL_OPENAI_GPT3_5_TURBO_16K\x10\x1d\x12&\n\"MODEL_OPENAI_GPT3_5_TURBO_16K_0613\x10\x1e\x12&\n\"MODEL_OPENAI_GPT3_TEXT_DAVINCI_003\x10\x0c\x12&\n\"MODEL_OPENAI_GPT3_TEXT_DAVINCI_002\x10\r\x12$\n MODEL_OPENAI_GPT3_TEXT_CURIE_001\x10\x0e\x12&\n\"MODEL_OPENAI_GPT3_TEXT_BAGGAGE_001\x10\x0f\x12\"\n\x1eMODEL_OPENAI_GPT3_TEXT_ADA_001\x10\x10\x12&\n\"MODEL_OPENAI_GPT3_TEXT_DAVINCI_001\x10\x11\x12+\n\'MODEL_OPENAI_GPT3_DAVINCI_INSTRUCT_BETA\x10\x12\x12\x1d\n\x19MODEL_OPENAI_GPT3_DAVINCI\x10\x13\x12)\n%MODEL_OPENAI_GPT3_CURIE_INSTRUCT_BETA\x10\x14\x12\x1b\n\x17MODEL_OPENAI_GPT3_CURIE\x10\x15\x12\x19\n\x15MODEL_OPENAI_GPT3_ADA\x10\x16\x12\x1d\n\x19MODEL_OPENAI_GPT3_BAGGAGE\x10\x17\x12\x17\n\x13MODEL_MOCK_TIER_ONE\x10\x18\x12\x17\n\x13MODEL_MOCK_TIER_TWO\x10\x19*P\n\x04Role\x12\x14\n\x10ROLE_UNSPECIFIED\x10\x00\x12\r\n\tROLE_USER\x10\x01\x12\x12\n\x0eROLE_ASSISTANT\x10\x02\x12\x0f\n\x0bROLE_SYSTEM\x10\x03*\xd6\x03\n\x06Syntax\x12\x16\n\x12SYNTAX_UNSPECIFIED\x10\x00\x12\x15\n\x11SYNTAX_JAVASCRIPT\x10\x01\x12\x11\n\rSYNTAX_PYTHON\x10\x02\x12\x15\n\x11SYNTAX_POSTGRESQL\x10\x03\x12\x10\n\x0cSYNTAX_MSSQL\x10\x04\x12\x10\n\x0cSYNTAX_MYSQL\x10\x05\x12\x12\n\x0eSYNTAX_MARIADB\x10\x06\x12\x14\n\x10SYNTAX_SNOWFLAKE\x10\x07\x12\x16\n\x12SYNTAX_COCKROACHDB\x10\x08\x12\x12\n\x0eSYNTAX_ROCKSET\x10\t\x12\x13\n\x0fSYNTAX_REDSHIFT\x10\n\x12\x13\n\x0fSYNTAX_BIGQUERY\x10\x0b\x12\x13\n\x0fSYNTAX_DYNAMODB\x10\x0c\x12\x12\n\x0eSYNTAX_MONGODB\x10\r\x12\x12\n\x0eSYNTAX_BINDING\x10\x0e\x12\x0f\n\x0bSYNTAX_JSON\x10\x0f\x12\x0f\n\x0bSYNTAX_HTML\x10\x10\x12\x0e\n\nSYNTAX_API\x10\x11\x12\x19\n\x15SYNTAX_PLUGIN_RESTAPI\x10\x12\x12\x19\n\x15SYNTAX_PLUGIN_GRAPHQL\x10\x13\x12\x13\n\x0fSYNTAX_ORACLEDB\x10\x14\x12\x15\n\x11SYNTAX_DATABRICKS\x10\x15*N\n\x07Persona\x12\x17\n\x13PERSONA_UNSPECIFIED\x10\x00\x12\x15\n\x11PERSONA_DEVELOPER\x10\x01\x12\x13\n\x0fPERSONA_TEACHER\x10\x02\x42\x35Z3github.com/superblocksteam/agent/types/gen/go/ai/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ai.v1.ai_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z3github.com/superblocksteam/agent/types/gen/go/ai/v1'
  _globals['_MESSAGE'].fields_by_name['content']._loaded_options = None
  _globals['_MESSAGE'].fields_by_name['content']._serialized_options = b'\372B\004r\002\020\001\272H\004r\002\020\001'
  _globals['_LLM']._serialized_start=1495
  _globals['_LLM']._serialized_end=1570
  _globals['_MODEL']._serialized_start=1573
  _globals['_MODEL']._serialized_end=2611
  _globals['_ROLE']._serialized_start=2613
  _globals['_ROLE']._serialized_end=2693
  _globals['_SYNTAX']._serialized_start=2696
  _globals['_SYNTAX']._serialized_end=3166
  _globals['_PERSONA']._serialized_start=3168
  _globals['_PERSONA']._serialized_end=3246
  _globals['_MESSAGE']._serialized_start=158
  _globals['_MESSAGE']._serialized_end=242
  _globals['_TASK']._serialized_start=245
  _globals['_TASK']._serialized_end=1493
  _globals['_TASK_OPTIMIZE']._serialized_start=620
  _globals['_TASK_OPTIMIZE']._serialized_end=630
  _globals['_TASK_DEBUG']._serialized_start=632
  _globals['_TASK_DEBUG']._serialized_end=639
  _globals['_TASK_TRANSPILE']._serialized_start=641
  _globals['_TASK_TRANSPILE']._serialized_end=652
  _globals['_TASK_EDIT']._serialized_start=655
  _globals['_TASK_EDIT']._serialized_end=956
  _globals['_TASK_EDIT_CONTEXT']._serialized_start=805
  _globals['_TASK_EDIT_CONTEXT']._serialized_end=956
  _globals['_TASK_CREATE']._serialized_start=959
  _globals['_TASK_CREATE']._serialized_end=1238
  _globals['_TASK_CREATE_CONTEXT']._serialized_start=805
  _globals['_TASK_CREATE_CONTEXT']._serialized_end=956
  _globals['_TASK_EXPLAIN']._serialized_start=1241
  _globals['_TASK_EXPLAIN']._serialized_end=1392
  _globals['_TASK_MOCK']._serialized_start=1394
  _globals['_TASK_MOCK']._serialized_end=1485
# @@protoc_insertion_point(module_scope)
