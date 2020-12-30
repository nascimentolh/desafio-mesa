import { v4 } from 'uuid';
import ICreateLocalizationDTO from '@modules/localizations/dtos/ICreateLocalizationDTO';
import ILocalizationsRepository from '@modules/localizations/repositories/ILocalizationsRepository';
import Localization from '../../infra/typeorm/entities/Localization';

class LocalizationsRepository implements ILocalizationsRepository {
  private localizations: Localization[] = [];

  public async create({
    name,
    lng,
    lat,
  }: ICreateLocalizationDTO): Promise<Localization> {
    const localization = new Localization();

    Object.assign(localization, { id: v4(), name, lng, lat });

    this.localizations.push(localization);

    return localization;
  }
}

export default LocalizationsRepository;
