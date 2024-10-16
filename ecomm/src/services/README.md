# Custom services

You may define custom services that will be registered on the global container by creating files in the `/services` directory that export an instance of `BaseService`.

```ts
// src/services/my-custom.ts

import { Lifetime } from "awilix"
import { TransactionBaseService } from "@medusajs/medusa";
import { IEventBusService } from "@medusajs/types";

export default class MyCustomService extends TransactionBaseService {
  static LIFE_TIME = Lifetime.SCOPED
  protected readonly eventBusService_: IEventBusService

  constructor(
      { eventBusService }: { eventBusService: IEventBusService },
      options: Record<string, unknown>
  ) {
    // @ts-ignore
    super(...arguments)

    this.eventBusService_ = eventBusService
  }
}

```

The first argument to the `constructor` is the global giving you access to easy dependency injection. The container holds all registered services from the core, installed plugins and from other files in the `/services` directory. The registration name is a camelCased version of the file name with the type appended i.e.: `my-custom.js` is registered as `myCustomService`, `custom-thing.js` is registered as `customThingService`.

You may use the services you define here in custom endpoints by resolving the services defined.

```js
import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-product", async (req, res) => {
    const myService = req.scope.resolve("myCustomService")

    res.json({
      message: await myService.getProductMessage()
    })
  })

  return router;
}
```
