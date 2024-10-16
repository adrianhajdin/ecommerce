# Custom scheduled jobs

You may define custom scheduled jobs (cron jobs) by creating files in the `/jobs` directory.

```ts
import {
  ProductService,
  ScheduledJobArgs,
  ScheduledJobConfig,
} from "@medusajs/medusa";

export default async function myCustomJob({ container }: ScheduledJobArgs) {
  const productService: ProductService = container.resolve("productService");

  const products = await productService.listAndCount();

  // Do something with the products
}

export const config: ScheduledJobConfig = {
  name: "daily-product-report",
  schedule: "0 0 * * *", // Every day at midnight
};
```

A scheduled job is defined in two parts a `handler` and a `config`. The `handler` is a function which is invoked when the job is scheduled. The `config` is an object which defines the name of the job, the schedule, and an optional data object.

The `handler` is a function which takes one parameter, an `object` of type `ScheduledJobArgs` with the following properties:

- `container` - a `MedusaContainer` instance which can be used to resolve services.
- `data` - an `object` containing data passed to the job when it was scheduled. This object is passed in the `config` object.
- `pluginOptions` - an `object` containing plugin options, if the job is defined in a plugin.
