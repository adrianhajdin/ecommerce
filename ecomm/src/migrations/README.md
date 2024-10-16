# Custom migrations

You may define custom models (entities) that will be registered on the global container by creating files in the `src/models` directory that export an instance of `BaseEntity`.
In that case you also need to provide a migration in order to create the table in the database.

## Example

### 1. Create the migration

See [How to Create Migrations](https://docs.medusajs.com/advanced/backend/migrations/) in the documentation.

```ts
// src/migration/my-migration.ts

import { MigrationInterface, QueryRunner } from "typeorm"

export class MyMigration1617703530229 implements MigrationInterface {
  name = "myMigration1617703530229"

  public async up(queryRunner: QueryRunner): Promise<void> {
    // write you migration here
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // write you migration here
  }
}

```