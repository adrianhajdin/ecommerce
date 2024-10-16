# Custom loader

The loader allows you have access to the Medusa service container. This allows you to access the database and the services registered on the container.
you can register custom registrations in the container or run custom code on startup.

```ts
// src/loaders/my-loader.ts

import { AwilixContainer } from 'awilix'

/**
 * 
 * @param container The container in which the registrations are made
 * @param config The options of the plugin or the entire config object
 */
export default (container: AwilixContainer, config: Record<string, unknown>): void | Promise<void> => {
  /* Implement your own loader. */
}
```