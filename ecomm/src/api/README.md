# Custom API Routes

You may define custom API Routes by putting files in the `/api` directory that export functions returning an express router or a collection of express routers.
Medusa supports adding custom API Routes using a file based approach. This means that you can add files in the `/api` directory and the files path will be used as the API Route path. For example, if you add a file called `/api/store/custom/route.ts` it will be available on the `/store/custom` API Route.

```ts
import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  res.json({
    message: "Hello world!",
  });
}
```

## Supported HTTP methods

The file based routing supports the following HTTP methods:

- GET
- POST
- PUT
- PATCH
- DELETE
- OPTIONS
- HEAD

You can define a handler for each of these methods by exporting a function with the name of the method in the paths `route.ts` file. For example, if you want to define a handler for the `GET`, `POST`, and `PUT` methods, you can do so by exporting functions with the names `GET`, `POST`, and `PUT`:

```ts
import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  // Handle GET requests
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  // Handle POST requests
}

export async function PUT(req: MedusaRequest, res: MedusaResponse) {
  // Handle PUT requests
}
```

## Parameters

You can define parameters in the path of your route by using wrapping the parameter name in square brackets. For example, if you want to define a route that takes a `productId` parameter, you can do so by creating a file called `/api/products/[productId]/route.ts`:

```ts
import type {
  MedusaRequest,
  MedusaResponse,
  ProductService,
} from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const { productId } = req.params;

  const productService: ProductService = req.scope.resolve("productService");

  const product = await productService.retrieve(productId);

  res.json({
    product,
  });
}
```

If you want to define a route that takes multiple parameters, you can do so by adding multiple parameters in the path. It is important that each parameter is given a unique name. For example, if you want to define a route that takes both a `productId` and a `variantId` parameter, you can do so by creating a file called `/api/products/[productId]/variants/[variantId]/route.ts`. Duplicate parameter names are not allowed, and will result in an error.

## Using the container

A global container is available on `req.scope` to allow you to use any of the registered services from the core, installed plugins or your local project:

```ts
import type {
  MedusaRequest,
  MedusaResponse,
  ProductService,
} from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const productService: ProductService = req.scope.resolve("productService");

  const products = await productService.list();

  res.json({
    products,
  });
}
```

## Middleware

You can apply middleware to your routes by creating a file called `/api/middlewares.ts`. This file should export a configuration object with what middleware you want to apply to which routes. For example, if you want to apply a custom middleware function to the `/store/custom` route, you can do so by adding the following to your `/api/middlewares.ts` file:

```ts
import type {
  MiddlewaresConfig,
  MedusaRequest,
  MedusaResponse,
  MedusaNextFunction,
} from "@medusajs/medusa";

async function logger(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) {
  console.log("Request received");
  next();
}

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/custom",
      middlewares: [logger],
    },
  ],
};
```

The `matcher` property can be either a string or a regular expression. The `middlewares` property accepts an array of middleware functions.

You might only want to apply middleware to certain HTTP methods. You can do so by adding a `method` property to the route configuration object:

```ts
export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/custom",
      method: "GET",
      middlewares: [logger],
    },
  ],
};
```

The `method` property can be either a HTTP method or an array of HTTP methods. By default the middlewares will apply to all HTTP methods for the given `matcher`.

### Default middleware

Some middleware functions are applied per default:

#### Global middleware

JSON parsing is applied to all routes. This means that you can access the request body as `req.body` and it will be parsed as JSON, if the request has a `Content-Type` header of `application/json`.

If you want to use a different parser for a specific route, such as `urlencoded`, you can do so by adding the following export to your `route.ts` file:

```ts
import { urlencoded } from "express";

export const config: MiddlewaresConfig = {
  routes: [
    {
      method: "POST",
      matcher: "/store/custom",
      middlewares: [urlencoded()],
    },
  ],
};
```

#### Store middleware

For all `/store` routes, the appropriate CORS settings are applied. The STORE_CORS value can be configured in your `medusa-config.js` file.

#### Admin middleware

For all `/admin` routes, the appropriate CORS settings are applied. The ADMIN_CORS value can be configured in your `medusa-config.js` file.

All `/admin` routes also have admin authentication applied per default. If you want to disable this for a specific route, you can do so by adding the following export to your `route.ts` file:

```ts
export const AUTHENTICATE = false;
```
