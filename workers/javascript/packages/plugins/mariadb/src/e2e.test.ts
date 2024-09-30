import fs from 'fs';
import path from 'path';
import {
  ActionConfiguration,
  DUMMY_EXECUTION_CONTEXT,
  ErrorCode,
  ExecutionOutput,
  MariaDBActionConfiguration,
  MariaDBDatasourceConfiguration,
  MySQLActionConfiguration,
  MySQLDatasourceConfiguration,
  PluginExecutionProps,
  prepContextForBindings,
  RelayDelegate,
  SqlOperations
} from '@superblocks/shared';
import { cloneDeep } from 'lodash';
import { Connection, createConnection } from 'mariadb';
import MariaDBPlugin from '.';

const SECOND = 1000;
jest.setTimeout(10 * SECOND);

const MARIADB_HOST = '127.0.0.1';
const MARIADB_PORT = 23306;
const MARIADB_USER = 'root';
const MARIADB_PASSWORD = 'password';
const MARIADB_DATABASE = 'public';

// helper functions
async function resetDatabase() {
  const initScriptPath = path.join(__dirname, '../../scripts/initMariaDb.sql');
  const initScript = await fs.promises.readFile(initScriptPath, 'utf8');

  // NOTE: (JOEY) we have to first connect to the default database to create the new database we want to use

  // Connect without specifying a database
  const tempClient = await createConnection({
    host: MARIADB_HOST,
    port: MARIADB_PORT,
    user: MARIADB_USER,
    password: MARIADB_PASSWORD,
    multipleStatements: true,
    allowPublicKeyRetrieval: true
  });

  await tempClient.query(initScript);
  await tempClient.end();
}

async function runQuery(query: string, params: (string | number | null)[] = []) {
  const rows: Record<string, unknown>[] = [];

  const res = await client.query(query, params);
  if (!res.insertId) {
    res.forEach((row) => {
      rows.push(row);
    });
  }
  return rows;
}

let client: Connection;

const plugin: MariaDBPlugin = new MariaDBPlugin();

// @ts-ignore
plugin.logger = { debug: (): void => undefined };

export const datasourceConfiguration = {
  connectionType: 'fields',
  endpoint: {
    host: MARIADB_HOST,
    port: MARIADB_PORT
  },
  authentication: {
    username: MARIADB_USER,
    password: MARIADB_PASSWORD,
    custom: {
      databaseName: {
        value: MARIADB_DATABASE
      }
    }
  },
  superblocksMetadata: {
    pluginVersion: '0.0.10'
  },
  name: '[Demo] Unit Test'
} as MariaDBDatasourceConfiguration;

const CONNECTION_URL = `mariadb://${MARIADB_USER}:${MARIADB_PASSWORD}@${MARIADB_HOST}:${MARIADB_PORT}/${MARIADB_DATABASE}`;

const actionConfiguration = {
  schema: MARIADB_DATABASE,
  usePreparedSql: true, // TODO: (JOEY) test with false
  superblocksMetadata: {
    pluginVersion: '0.0.10' // update as version changes
  },
  table: 'mytable', // update in individual tests as needed
  useAdvancedMatching: 'auto' // update in individual tests as needed
} as MariaDBActionConfiguration;

export const DUMMY_EXTRA_PLUGIN_EXECUTION_PROPS = {
  files: [],
  agentCredentials: {},
  recursionContext: {
    executedWorkflowsPath: [],
    isEvaluatingDatasource: false
  },
  environment: 'dev',
  relayDelegate: new RelayDelegate({
    body: {},
    headers: {},
    query: {}
  })
};

const context = DUMMY_EXECUTION_CONTEXT;
const props: PluginExecutionProps<MySQLDatasourceConfiguration, MySQLActionConfiguration> = {
  context,
  datasourceConfiguration,
  actionConfiguration,
  mutableOutput: new ExecutionOutput(),
  ...DUMMY_EXTRA_PLUGIN_EXECUTION_PROPS
};

describe('MariaDB Test', () => {
  beforeAll(async () => {
    client = await createConnection({
      host: MARIADB_HOST,
      port: MARIADB_PORT,
      user: MARIADB_USER,
      password: MARIADB_PASSWORD,
      database: MARIADB_DATABASE,
      allowPublicKeyRetrieval: true,
      multipleStatements: true
    });
  });

  afterAll(async () => {
    await client.end();
  });

  beforeEach(async () => {
    await resetDatabase();
  });

  // BASE CASES

  test('connection fields', async () => {
    await plugin.test(datasourceConfiguration);
  });

  test('connection url', async () => {
    await plugin.test({ connectionType: 'url', connectionUrl: CONNECTION_URL });
  });

  test('connection url errors if no url given', async () => {
    await expect(plugin.test({ connectionType: 'url', connectionUrl: '' })).rejects.toThrow(
      'Test connection failed: failed to create MariaDBPlugin connection: IntegrationError: Expected to receive connection url for connection type url'
    );
  });

  test('get metadata', async () => {
    // NOTE: (JOEY) this could probably be more explicit. for maintainablity, we can keep it like this for now to make writing tests easier
    const resp = await plugin.metadata(datasourceConfiguration);

    // TABLES
    // names
    expect(resp.dbSchema?.tables.map((table) => table.name)).toEqual(['commacolumntable', 'MixedCaseTable', 'mytable', 'mytable_nopk']);
    // table schemas
    expect(resp.dbSchema?.tables?.map((table) => table.schema)).toEqual(['public', 'public', 'public', 'public']);
    // types
    expect(resp.dbSchema?.tables?.map((table) => table.type)).toEqual(['TABLE', 'TABLE', 'TABLE', 'TABLE']);
    // column names
    expect(resp.dbSchema?.tables?.map((table) => table.columns.map((column) => column.name))).toEqual([
      ['id', 'column,name'],
      ['MixedPk', 'MixedName', 'ALLUPPER', 'age'],
      ['id', 'name', 'age'],
      ['name', 'age']
    ]);

    // SCHEMAS
    // names
    expect(resp.dbSchema?.schemas?.map((schema) => schema.name)).toEqual(['public']);
  });

  test('execute sql with no context', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.RUN_SQL;
    newProps.actionConfiguration.body = 'select * from public.mytable limit 1;';
    await plugin.executePooled(newProps, client);
    const output = newProps.mutableOutput.output as { [key: string]: Record<string, unknown> };
    expect(output['0']).toEqual({ id: 1, name: 'Frank Basil', age: 29 });
  });

  test('execute invalid sql with no context', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.RUN_SQL;
    newProps.actionConfiguration.body = 'select * from public.mytabledoesnotexist limit 1;';
    await plugin
      .executePooled(newProps, client)
      .then((_) => {
        expect('should not pass').toEqual(true);
      })
      .catch((error) => {
        expect(error.message).toMatch(/Table 'public\.mytabledoesnotexist' doesn't exist/);
        expect(error.code).toEqual(ErrorCode.INTEGRATION_SYNTAX);
      });
  });

  test('execute sql with context', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.RUN_SQL;
    newProps.actionConfiguration.body = 'select * from public.mytable limit ?;';
    newProps.context.preparedStatementContext = [1];
    await plugin.executePooled(newProps, client);
    const output = newProps.mutableOutput.output as { [key: string]: Record<string, unknown> };
    expect(output['0']).toEqual({ id: 1, name: 'Frank Basil', age: 29 });
  });

  test('bindings resolve correctly when using parameterized sql', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.body = `SELECT * FROM public.myTable LIMIT {{binding1}};`;
    newProps.actionConfiguration.usePreparedSql = true;

    prepContextForBindings(newProps.context, { binding1: '1' });

    const resp = await plugin.resolveActionConfigurationProperty({
      context: newProps.context,
      actionConfiguration: newProps.actionConfiguration as ActionConfiguration,
      files: null,
      property: 'body',
      escapeStrings: false
    });
    expect(resp.resolved).toEqual('SELECT * FROM public.myTable LIMIT ?;');
    expect(resp.placeholdersInfo?.['?']?.value).toEqual('"1"');
  });

  test('bindings dont resolve when not using parameterized sql', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.body = `SELECT * FROM public.myTable LIMIT {{binding1}};`;
    newProps.actionConfiguration.usePreparedSql = false;

    prepContextForBindings(newProps.context, { binding1: '1' });

    const resp = await plugin.resolveActionConfigurationProperty({
      context: newProps.context,
      actionConfiguration: newProps.actionConfiguration as ActionConfiguration,
      files: null,
      property: 'body',
      escapeStrings: false
    });
    expect(resp.resolved).toEqual('SELECT * FROM public.myTable LIMIT 1;');
  });

  // INSERT

  test('insert a single row [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test name', age: 30 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert a single row with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ MixedName: 'test name', age: 30, ALLUPPER: true }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([
      { MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 },
      { MixedPk: 2, MixedName: 'Joey Antonio', age: 26, ALLUPPER: 1 },
      { MixedPk: 3, MixedName: 'test name', age: 30, ALLUPPER: 1 }
    ]);
  });

  test('insert a single row with null in a non-nullable column [AUTO MAPPING] [AUTO MATCHING] [SYNTAX SPECIFIC BEHAVIOR]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: null, name: 'test name', age: 30 }]; // id is not nullable
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert 3 rows with different columns given [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test 1' }, { age: 2 }, { name: 'test 3', age: 3 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test 1', age: null },
      { id: 5, name: null, age: 2 },
      { id: 6, name: 'test 3', age: 3 }
    ]);
  });

  test('insert 3 rows with different columns given [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_name: 'test 1' }, { m_age: 2 }, { m_name: 'test 3', m_age: 3 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test 1', age: null },
      { id: 5, name: null, age: 2 },
      { id: 6, name: 'test 3', age: 3 }
    ]);
  });

  test('insert 3 rows with different columns given [AUTO MAPPING] [ADVANCED MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test 1' }, { age: 2 }, { name: 'test 3', age: 3 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    newProps.actionConfiguration.useAdvancedMatching = 'advanced' as const;
    newProps.actionConfiguration.oldValues = [];
    newProps.actionConfiguration.filterBy = ['id'];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test 1', age: null },
      { id: 5, name: null, age: 2 },
      { id: 6, name: 'test 3', age: 3 }
    ]);
  });

  test('insert a single row [AUTO MAPPING] [ADVANCED MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test name', age: 30 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    newProps.actionConfiguration.useAdvancedMatching = 'advanced' as const;
    newProps.actionConfiguration.oldValues = [];
    newProps.actionConfiguration.filterBy = ['id'];

    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert a single row without a nullable column [AUTO MAPPING] [ADVANCED MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test name' }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    newProps.actionConfiguration.useAdvancedMatching = 'advanced' as const;
    newProps.actionConfiguration.oldValues = [];
    newProps.actionConfiguration.filterBy = ['id'];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: null }
    ]);
  });

  test('insert a single row [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_id: 4, m_name: 'test name', m_age: 30 }];
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert a single row without a nullable column [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_name: 'test name', m_age: 30 }];
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert a single row with extra columns [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_name: 'test name', m_age: 30, extra: 1 }];
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  test('insert a single row without all mapped columns [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_name: 'test name' }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable WHERE id = ?', [4]);
    expect(rows).toEqual([{ id: 4, name: 'test name', age: null }]);
  });

  test('insert a single row with a null value [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: null, age: 10 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: null, age: 10 }
    ]);
  });

  test('insert a single row with an undefined value [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: null, age: 10 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: null, age: 10 }
    ]);
  });

  test('insert a single row into a table with no PK [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'foo', age: 10 }];
    newProps.actionConfiguration.table = 'mytable_nopk';

    await expect(async () => {
      await plugin.executePooled(newProps, client);
    }).rejects.toThrow('Table public.mytable_nopk has no primary keys');

    const rows = await runQuery('SELECT * FROM public.mytable_nopk');
    expect(rows).toEqual([
      { name: 'Frank Basil', age: 29 },
      { name: 'Joey Antonio', age: 26 },
      { name: 'Domi James', age: 19 }
    ]);
  });

  test('insert a single row without giving schema [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ name: 'test name', age: 30 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    newProps.actionConfiguration.schema = undefined;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'test name', age: 30 }
    ]);
  });

  // UPDATE

  test('update a single row [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.newValues = [{ id: 2, name: 'Monika Marie', age: 27 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Monika Marie', age: 27 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('update a single row with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.newValues = [{ MixedPk: 1, MixedName: 'new name', age: 30, ALLUPPER: true }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([
      { MixedPk: 1, MixedName: 'new name', age: 30, ALLUPPER: 1 },
      { MixedPk: 2, MixedName: 'Joey Antonio', age: 26, ALLUPPER: 1 }
    ]);
  });

  test('update a single row [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.newValues = [{ m_id: 2, m_name: 'Monika Marie', m_age: 27 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Monika Marie', age: 27 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  // DELETE

  test('delete a single row [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ id: 2, name: 'Joey Antonio', age: 26 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete a single row with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([{ MixedPk: 2, MixedName: 'Joey Antonio', age: 26, ALLUPPER: 1 }]);
  });

  test('delete 2 rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 }
    ];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([{ id: 1, name: 'Frank Basil', age: 29 }]);
  });

  test('delete a single row [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'Joey Antonio', m_age: 26 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete a single row [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [
      { m_id: 2, m_name: 'Joey Antonio', m_age: 26 },
      { m_id: 3, m_name: 'Domi James', m_age: 19 }
    ];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([{ id: 1, name: 'Frank Basil', age: 29 }]);
  });

  test('delete a single row without all mapped columns [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'Joey Antonio' }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete 2 rows with different columns [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ name: 'Joey Antonio' }, { age: 29 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([{ id: 3, name: 'Domi James', age: 19 }]);
  });

  test('delete a single row that doesnt exist [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'i do not exist', m_age: 29 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete a single row that matches multiple rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    await runQuery(`INSERT INTO public.mytable (id, name, age) values (?, ?, ?)`, [5, 'Frank Basil', 29]); // a row with this name already exists!
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ name: 'Frank Basil' }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;

    await expect(async () => {
      await plugin.executePooled(newProps, client);
    }).rejects.toThrow('The number of rows given to delete (1) is less than the number of rows that would be deleted (2).');
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 }, // still there (the real frank)
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 5, name: 'Frank Basil', age: 29 } // still there (the fake frank)
    ]);
  });

  test('delete a single row with a null value [AUTO MAPPING] [AUTO MATCHING]', async () => {
    await runQuery(`INSERT INTO public.mytable (id, name, age) values (?, ?, ?)`, [4, null, 10]);
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ id: 4, name: null, age: 10 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete a single row with an undefined value [AUTO MAPPING] [AUTO MATCHING]', async () => {
    await runQuery(`INSERT INTO public.mytable (id, name, age) values (?, ?, ?)`, [4, null, 10]);
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ id: 4, name: undefined, age: 10 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Joey Antonio', age: 26 },
      { id: 3, name: 'Domi James', age: 19 }
    ]);
  });

  test('delete a single row from a table with a comma column name [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'commacolumntable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.deletedRows = [{ 'column,name': 'foo' }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.commacolumntable');
    expect(rows).toEqual([
      { 'column,name': 'baz', id: 2 },
      { 'column,name': 'bar', id: 3 }
    ]);
  });

  // INSERT AND UPDATE

  test('insert and update 2 single rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: 'Vincey Thomas', age: 18 }];
    newProps.actionConfiguration.newValues = [{ id: 2, name: 'Monika Marie', age: 27 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Monika Marie', age: 27 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  test('insert and update 2 single rows with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ MixedName: 'new name', age: 20, ALLUPPER: false }];
    newProps.actionConfiguration.newValues = [{ MixedPk: 2, MixedName: 'Monika Marie', age: 27, ALLUPPER: 1 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([
      { MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 },
      { MixedPk: 2, MixedName: 'Monika Marie', age: 27, ALLUPPER: 1 },
      { MixedPk: 3, MixedName: 'new name', age: 20, ALLUPPER: 0 }
    ]);
  });

  test('insert and update 2 single rows [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_id: 4, m_name: 'Vincey Thomas', m_age: 18 }];
    newProps.actionConfiguration.newValues = [{ m_id: 2, m_name: 'Monika Marie', m_age: 27 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 2, name: 'Monika Marie', age: 27 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  // INSERT AND DELETE

  test('insert and delete 2 single rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: 'Vincey Thomas', age: 18 }];
    newProps.actionConfiguration.deletedRows = [{ id: 2, name: 'Joey Antonio', age: 26 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  test('insert and delete 2 single rows with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ MixedName: 'new name', age: 20, ALLUPPER: false }];
    newProps.actionConfiguration.deletedRows = [{ MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([
      { MixedPk: 2, MixedName: 'Joey Antonio', age: 26, ALLUPPER: 1 },
      { MixedPk: 3, MixedName: 'new name', age: 20, ALLUPPER: 0 }
    ]);
  });

  test('insert and delete 2 single rows [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_id: 4, m_name: 'Vincey Thomas', m_age: 18 }];
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'Joey Antonio', m_age: 26 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  // UPDATE AND DELETE

  test('update and delete 2 single rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: 'Vincey Thomas', age: 18 }];
    newProps.actionConfiguration.deletedRows = [{ id: 2, name: 'Joey Antonio', age: 26 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  test('update and delete 2 single rows with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.newValues = [{ MixedPk: 2, MixedName: 'new name', age: 20, ALLUPPER: 0 }];
    newProps.actionConfiguration.deletedRows = [{ MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([{ MixedPk: 2, MixedName: 'new name', age: 20, ALLUPPER: 0 }]);
  });

  test('update and delete 2 single rows [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_id: 4, m_name: 'Vincey Thomas', m_age: 18 }];
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'Joey Antonio', m_age: 26 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Frank Basil', age: 29 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  // INSERT, UPDATE, AND DELETE

  test('insert update and delete 3 single rows [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ id: 4, name: 'Vincey Thomas', age: 18 }];
    newProps.actionConfiguration.newValues = [{ id: 1, name: 'Giovanna Joy', age: 23 }];
    newProps.actionConfiguration.deletedRows = [{ id: 2, name: 'Joey Antonio', age: 26 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Giovanna Joy', age: 23 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });

  test('insert update and delete 2 single rows with mixed case [AUTO MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.table = 'MixedCaseTable';
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ MixedName: 'Monika Marie', age: 27, ALLUPPER: 1 }];
    newProps.actionConfiguration.newValues = [{ MixedPk: 2, MixedName: 'new name', age: 20, ALLUPPER: 0 }];
    newProps.actionConfiguration.deletedRows = [{ MixedPk: 1, MixedName: 'Frank Basil', age: 29, ALLUPPER: 0 }];
    newProps.actionConfiguration.mappingMode = 'auto' as const;
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.MixedCaseTable');
    expect(rows).toEqual([
      { MixedPk: 2, MixedName: 'new name', age: 20, ALLUPPER: 0 },
      { MixedPk: 3, MixedName: 'Monika Marie', age: 27, ALLUPPER: 1 }
    ]);
  });

  test('insert update and delete 3 single rows [MANUAL MAPPING] [AUTO MATCHING]', async () => {
    const newProps = cloneDeep(props);
    newProps.actionConfiguration.operation = SqlOperations.UPDATE_ROWS;
    newProps.actionConfiguration.insertedRows = [{ m_id: 4, m_name: 'Vincey Thomas', m_age: 18 }];
    newProps.actionConfiguration.newValues = [{ m_id: 1, m_name: 'Giovanna Joy', m_age: 23 }];
    newProps.actionConfiguration.deletedRows = [{ m_id: 2, m_name: 'Joey Antonio', m_age: 26 }];
    newProps.actionConfiguration.mappingMode = 'manual' as const;
    newProps.actionConfiguration.mappedColumns = [
      { json: 'm_id', sql: 'id' },
      { json: 'm_name', sql: 'name' },
      { json: 'm_age', sql: 'age' }
    ];
    await plugin.executePooled(newProps, client);
    const rows = await runQuery('SELECT * FROM public.mytable');
    expect(rows).toEqual([
      { id: 1, name: 'Giovanna Joy', age: 23 },
      { id: 3, name: 'Domi James', age: 19 },
      { id: 4, name: 'Vincey Thomas', age: 18 }
    ]);
  });
});
