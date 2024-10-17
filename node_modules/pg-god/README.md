# pg-god 😇

A tiny library that helps you create or kill PostgreSQL database.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pg-god.svg)](https://npmjs.org/package/pg-god)
[![Downloads/week](https://img.shields.io/npm/dw/pg-god.svg)](https://npmjs.org/package/pg-god)
[![License](https://img.shields.io/npm/l/pg-god.svg)](https://github.com/ivawzh/pg-god/blob/master/package.json)

<!-- toc -->
* [pg-god 😇](#pg-god-)
* [With TypeORM](#with-typeorm)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh
$ npm install -g pg-god
```

Use as CLI to create/drop database. See full API at [cli-commands](#cli-commands).

```sh
$ pg-god db-create --databaseName=pokemon-bank
$ pg-god db-drop --databaseName=pokemon-bank
```

## Programmatic invocation

```ts
import { createDatabase, dropDatabase } from 'pg-god'

async function main() {
  await createDatabase({ databaseName: 'pokemon-bank' })
  await dropDatabase({ databaseName: 'pokemon-bank' })
}
```

API

```ts
function createDatabase(newDbConfig: NewDbConfig, dbCredential?: Partial<DbCredential>): Promise<void>

function dropDatabase(dropDbConfig: DropDbConfig, dbCredential?: Partial<DbCredential>): Promise<void>

export type NewDbConfig = {
  databaseName: string,
  errorIfExist?: boolean,
}

export type DropDbConfig = {
  databaseName: string,
  errorIfNonExist?: boolean,
  dropConnections?: boolean,
}

export type DbCredential = {
  user: string
  database: string
  port: number
  host: string
  password: string
}

const defaultDbCred: DbCredential = {
  user: 'postgres',
  database: 'postgres',
  password: '',
  port: 5432,
  host: 'localhost',
}
```

You may also use this to power TypeORM, see details at [With TypeORM](#with-typeorm).

<!-- usagestop -->
## CLI Commands
<!-- commands -->
- [pg-god 😇](#pg-god-)
  - [Usage](#usage)
  - [Programmatic invocation](#programmatic-invocation)
  - [CLI Commands](#cli-commands)
  - [`pg-god db-create`](#pg-god-db-create)
  - [`pg-god db-drop`](#pg-god-db-drop)
  - [`pg-god help [COMMAND]`](#pg-god-help-command)
- [With TypeORM](#with-typeorm)

## `pg-god db-create`

create an empty database

```
USAGE
  $ pg-god db-create

OPTIONS
  -e, --errorIfExist               [default: false] whether throw error if DB already exists
  -h, --help                       show CLI help
  -o, --host=host                  [default: localhost] DB host
  -i, --initialDb=initialDb        [default: postgres] Initial DB name
  -n, --databaseName=databaseName  new DB name
  -l, --url=url                    new DB URL
  -p, --port=port                  [default: 5432] DB port, default `5432`
  -u, --userName=userName          [default: postgres] DB user name
  -w, --password=password          [default: empty] DB password

ALIASES
  $ pg-god db:create

ALTERNATIVE_ENV
  DB_ERROR_IF_EXIST=errorIfExist
  DB_INITIAL=initialDb
  DB_NAME=databaseName
  DB_USERNAME=userName
  DB_PORT=port
  DB_HOST=host
  DB_PASSWORD=password
  DB_URL=url

EXAMPLES
  $ pg-god db-create --databaseName=bank-db
  $ DB_NAME=bank-db pg-god db-create
  $ pg-god db-create --url postgresql://localhost:5432/bank-db
  $ pg-god db-create --databaseName=bank-db --errorIfExist
  $ pg-god db-create --databaseName=bank-db --password=123 --port=5433 --host=a.example.com --userName=beer
```

## `pg-god db-drop`

drop a database

```
USAGE
  $ pg-god db-drop

OPTIONS
  -e, --errorIfNonExist            [default: false] whether throw error if DB doesn't exist
  -d, --dropConnections            [default: true] whether automatically drop DB connections
  -h, --help                       show CLI help
  -o, --host=host                  [default: localhost] DB host
  -i, --initialDb=initialDb        [default: postgres] Initial DB name
  -n, --databaseName=databaseName  name of DB that will be dropped
  -l, --url=url                    URL of DB that will be dropped
  -p, --port=port                  [default: 5432] DB port, default `5432`
  -u, --userName=userName          [default: postgres] DB user name
  -w, --password=password          [default: empty] DB password

ALIASES
  $ pg-god db:drop

ALTERNATIVES
  DB_ERROR_IF_NON_EXIST=errorIfNonExist
  DROP_CONNECTIONS=dropConnections
  DB_INITIAL=initialDb
  DB_NAME=databaseName
  DB_USERNAME=userName
  DB_PORT=port
  DB_HOST=host
  DB_PASSWORD=password
  DB_URL=url

EXAMPLES
  $ pg-god db-drop --databaseName=bank-db
  $ DB_NAME=bank-db pg-god db-drop
  $ pg-god db-drop --url postgresql://localhost:5432/bank-db
  $ pg-god db-drop --databaseName=bank-db --errorIfNonExist --no-dropConnections
  $ pg-god db-drop --databaseName=bank-db --password=123 --port=5433 --host=a.example.com --userName=beer
```

## `pg-god help [COMMAND]`

display help for pg-god

```
USAGE
  $ pg-god help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->

# With TypeORM

```ts
// at index.ts
import { createDatabase } from 'pg-god'
import { createConnection, Connection, getConnection, getConnectionOptions } from 'typeorm'

let conn: Connection | undefined

export async function superCreateConnection(): Promise<Connection> {
  if (conn) return conn
  // may either read from ormconfig or hardcode your options here
  const ormOpts: PostgresConnectionOptions = await getConnectionOptions()
  try {
    conn = await createConnection(ormOpts)
    return conn
  } catch (error) {
    if (error.code === '3D000') {
      // Database doesn't exist.
      // PG error code ref: https://docstore.mik.ua/manuals/sql/postgresql-8.2.6/errcodes-appendix.html
      await createDatabase(
        { databaseName: ormOpts.database },
        {
          user: ormOpts.username,
          port: ormOpts.port,
          host: ormOpts.host,
          password:
            (typeof ormOpts.password === 'undefined') ? undefined :
            (typeof ormOpts.password === 'string') ? ormOpts.password :
            await ormOpts.password()
          ,
        }
      )
      return superCreateConnection()
    }
    throw error
  }
}
```
