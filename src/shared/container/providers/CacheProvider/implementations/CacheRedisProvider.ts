import ICacheProvider from '../models/ICacheProvider';
import cacheConfig from '@config/cache';
import Redis, { Redis as RedisClient } from 'ioredis';

export default class CacheRedisProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }
  public async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }
  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) {
      return null;
    }

    const parsed = JSON.parse(data) as T;

    return parsed;
  }

  public async geoSave(
    key: string,
    lng: number,
    lat: number,
    name: string,
  ): Promise<void> {
    await this.client.geoadd(key, lng, lat, name);
  }

  public async geoLocsPerProximity(
    key: string,
    lng: number,
    lat: number,
    radius: number,
  ): Promise<string[] | null> {
    const data = await this.client.georadius(
      key,
      lng,
      lat,
      radius,
      'km',
      'ASC',
    );
    return data;
  }

  public async invalidate(key: string): Promise<void> {}

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(`${prefix}:*`);

    const pipeline = this.client.pipeline();

    keys.forEach(key => {
      pipeline.del(key);
    });

    await pipeline.exec();
  }
}
