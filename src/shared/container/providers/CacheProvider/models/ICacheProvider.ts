export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  geoSave(key: string, lng: number, lat: number, name: string): Promise<void>;
  geoLocsPerProximity(
    key: string,
    lng: number,
    lat: number,
    radius: number,
  ): Promise<string[] | null>;
  recover<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}
