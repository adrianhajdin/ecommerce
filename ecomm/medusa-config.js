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
const isDev = process.env.NODE_ENV === 'dev'; // Use local redis docker container in development to reduce cloud upstash Redis usage. 

// Common Redis options to optimize connections
const commonRedisConfig = {
  tls: !isDev,
  maxRetriesPerRequest: 1,
  enableOfflineQueue: false,
  commandTimeout: 5000,
  maxConnections: 5,
  keepAlive: 60000,
  connectTimeout: 10000,
  lazyConnect: true,
  showFriendlyErrorStack: isDev,
  retryStrategy: (times) => {
    if (times > 2) return null;
    return Math.min(times * 2000, 10000);
  },
  reconnectOnError: (err) => {
    const targetError = 'READONLY';
    return err.message.includes(targetError);
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


const modules = {
  eventBus: isDev ? {
    resolve: "@medusajs/event-bus-local"  // Use local event bus in development
  } : {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: process.env.EVENTS_REDIS_URL,
      ...commonRedisConfig,
      healthCheckInterval: 60000,
      lockDuration: 60000,
      pollInterval: 5000,
      maxPollingAttempts: 3,
      subscriberDefinitions: {},
    },
  },
  cacheService: isDev ? {
    resolve: "@medusajs/cache-inmemory"  // Use in-memory cache in development
  } : {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: process.env.CACHE_REDIS_URL,
      ...commonRedisConfig,
      ttl: 300,
      keyPrefix: "cache:",
      maxMemoryPolicy: 'allkeys-lru',
      disableKeepAlive: true,
      lazyConnect: true,
      maxLoadingRetryTime: 2000,
      noDelay: true
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
    scripts: {}, 
    connectionPool: {
      min: 1,
      max: 3,
      acquireTimeoutMillis: 5000,
      createTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 200,
    }
  }
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
};