import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: 'redis-12375.c81.us-east-1-2.ec2.cloud.redislabs.com',
      port: 12375,
      password: 'lmtoejPhDxlePM0INxA1byr9mh6WnExr',
    },
  },
} as ICacheConfig;
