import Localization from '@modules/localizations/infra/typeorm/entities/Localization';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { injectable, inject } from 'tsyringe';
import ILocalizationsRepository from '../repositories/ILocalizationsRepository';

interface IRequest {
  name: string;
  lng: number;
  lat: number;
}

@injectable()
class CreateLocalizationService {
  constructor(
    @inject('LocalizationsRepository')
    private localizationsRepository: ILocalizationsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ name, lng, lat }: IRequest): Promise<Localization> {
    const localization = await this.localizationsRepository.create({
      name,
      lng,
      lat,
    });

    await this.cacheProvider.invalidatePrefix(`geo-location`);
    await this.cacheProvider.invalidatePrefix(`list-localizations`);

    return localization;
  }
}

export default CreateLocalizationService;
