import ICacheProvider from '../models/ICacheProvider';

interface ICacheData {
  [key: string]: string;
}

export default class FakeCacheProvider implements ICacheProvider {
  private cache: ICacheData = {};

  public async save(key: string, value: any): Promise<void> {
    this.cache[key] = JSON.stringify(value);
  }
  public async recover<T>(key: string): Promise<T | null> {
    const data = this.cache[key];
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
    this.cache[key] = JSON.stringify({ lng, lat, name });
  }

  public async geoLocsPerProximity(
    key: string,
    lng: number,
    lat: number,
    radius: number,
  ): Promise<string[] | null> {
    const data = this.cache[key];
    const parsed = JSON.parse(data);
    return [parsed.name];
  }

  public async invalidate(key: string): Promise<void> {}

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key =>
      key.startsWith(`${prefix}:`),
    );

    keys.forEach(key => {
      delete this.cache[key];
    });
  }
}
