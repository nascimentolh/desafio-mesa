import { container } from 'tsyringe';
import CacheRedisProvider from './implementations/CacheRedisProvider';
import ICacheProvider from './models/ICacheProvider';

const providers = {
  redis: CacheRedisProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
