# Custom models

You may define custom models (entities) that will be registered on the global container by creating files in the `src/models` directory that export an instance of `BaseEntity`.

## Example

### 1. Create the Entity

```ts
// src/models/post.ts

import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { generateEntityId } from "@medusajs/utils";
import { BaseEntity } from "@medusajs/medusa";

@Entity()
export class Post extends BaseEntity {
  @Column({type: 'varchar'})
  title: string | null;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "post")
  }
}
```

### 2. Create the Migration

You also need to create a Migration to create the new table in the database. See [How to Create Migrations](https://docs.medusajs.com/advanced/backend/migrations/) in the documentation.

### 3. Create a Repository
Entities data can be easily accessed and modified using [TypeORM Repositories](https://typeorm.io/working-with-repository). To create a repository, create a file in `src/repositories`. For example, here’s a repository `PostRepository` for the `Post` entity:

```ts
// src/repositories/post.ts

import { EntityRepository, Repository } from "typeorm"

import { Post } from "../models/post"

@EntityRepository(Post)
export class PostRepository extends Repository<Post> { }
```

See more about defining and accesing your custom [Entities](https://docs.medusajs.com/advanced/backend/entities/overview) in the documentation.