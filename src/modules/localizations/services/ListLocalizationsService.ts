import Localization from '@modules/localizations/infra/typeorm/entities/Localization';
import { injectable, inject } from 'tsyringe';
import ILocalizationsRepository from '../repositories/ILocalizationsRepository';
import axios from 'axios';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface IRequest {
  user_id: string;
  query?: string;
}

interface IDataIp {
  latitude: number;
  longitude: number;
}

@injectable()
class ListLocalizationsService {
  constructor(
    @inject('LocalizationsRepository')
    private localizationsRepository: ILocalizationsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async list({ user_id, query }: IRequest): Promise<Localization[]> {
    let localizations = await this.cacheProvider.recover<Localization[]>(
      `list-localizations:${user_id}`,
    );

    let ipData = await this.cacheProvider.recover<IDataIp>(
      `ip-data:${user_id}`,
    );

    if (!ipData) {
      ipData = { latitude: -18.7907, longitude: -41.9902 };
      const { data } = await axios({
        url:
          'https://api.ipdata.co?api-key=52a01d116c430d88fb99028ba593eedd4d5e5418d67c6c6504288b54',
        method: 'get',
      });

      await this.cacheProvider.save(`ip-data:${user_id}`, data);
    }

    if (!localizations) {
      localizations = await this.localizationsRepository.listAll();
      await this.cacheProvider.save(
        `list-localizations:${user_id}`,
        localizations,
      );

      localizations.map(async localization => {
        await this.cacheProvider.geoSave(
          `geo-location:${user_id}`,
          localization.lng,
          localization.lat,
          localization.id,
        );
      });
    }

    if (query === 'map') {
      const geoLocs = await this.cacheProvider.geoLocsPerProximity(
        `geo-location:${user_id}`,
        ipData.longitude,
        ipData.latitude,
        5000,
      );

      let mapped: Localization[] = [];
      geoLocs?.forEach(key => {
        let found = false;
        localizations?.filter(item => {
          if (!found && item.id == key) {
            mapped.push(item);
            found = true;
            return false;
          } else {
            return true;
          }
        });
      });

      return mapped;
    }

    return localizations;
  }
}

export default ListLocalizationsService;
