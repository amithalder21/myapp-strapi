import Redis from "ioredis";

export default ({ env }) => ({
  redis: {
    client: new Redis({
      host: env("REDIS_HOST", "localhost"),
      port: env.int("REDIS_PORT", 6379),
      password: env("REDIS_PASSWORD", undefined),
      lazyConnect: true
    }),
  },
});
