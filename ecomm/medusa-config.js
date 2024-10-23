const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Common Redis options to optimize connections
const commonRedisConfig = {
  tls: true,
  maxRetriesPerRequest: 1,
  enableOfflineQueue: false,
  commandTimeout: 5000,
  maxConnections: 10,
  keepAlive: 30000,
  connectTimeout: 10000,
  reconnectOnError: (err) => {
    const targetError = 'READONLY';
    return err.message.includes(targetError);
  },
  retryStrategy: (times) => {
    if (times > 3) return null;
    return Math.min(times * 1000, 3000);
  }
};

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
      },
    },
  },
  {
    resolve: `medusa-plugin-sendgrid`,
    options: {
      api_key: process.env.SENDGRID_API_KEY,
      from: "giannnlaa@gmail.com",
      order_placed_template: "d-e69e46b356e7493c8dd7d0b692828f38",
    },
  },
];

// Use local event bus and cache in development to reduce Redis usage
const isDev = false //process.env.NODE_ENV === 'development';

const modules = {
  eventBus: isDev ? {
    resolve: "@medusajs/event-bus-local"
  } : {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: process.env.EVENTS_REDIS_URL,
      ...commonRedisConfig,
      healthCheckInterval: 30000,
      lockDuration: 30000,
      subscriberDefinitions: {
        // Event subscriptions here
      }
    },
  },
  cacheService: isDev ? {
    resolve: "@medusajs/cache-inmemory"
  } : {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: process.env.CACHE_REDIS_URL,
      ...commonRedisConfig,
      // Cache specific optimizations
      ttl: 30, // 30 seconds
      keyPrefix: "cache:", // Add prefix to distinguish cache keys
      maxMemoryPolicy: 'allkeys-lru',
      compressionThreshold: 1024, // Compress values larger than 1KB
    },
  },
};

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwt_secret: process.env.JWT_SECRET,
  cookie_secret: process.env.COOKIE_SECRET,
  store_cors: STORE_CORS,
  database_url: DATABASE_URL,
  admin_cors: ADMIN_CORS,
  redis_url: REDIS_URL,
  database_type: "postgres",
  database_extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  redis_options: {
    ...commonRedisConfig,
    keyPrefix: "medusa:",
    scripts: {}, // Add any custom Redis scripts here
  }
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
};