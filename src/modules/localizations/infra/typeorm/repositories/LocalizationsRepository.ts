import ICreateLocalizationDTO from '@modules/localizations/dtos/ICreateLocalizationDTO';
import ILocalizationsRepository from '@modules/localizations/repositories/ILocalizationsRepository';
import { getRepository, Repository } from 'typeorm';
import Localization from '../entities/Localization';

class LocalizationsRepository implements ILocalizationsRepository {
  private ormRepository: Repository<Localization>;

  constructor() {
    this.ormRepository = getRepository(Localization);
  }

  public async create(data: ICreateLocalizationDTO): Promise<Localization> {
    const localization = this.ormRepository.create(data);

    await this.ormRepository.save(localization);

    return localization;
  }

  public async listAll(): Promise<Localization[]> {
    return this.ormRepository.find({
      relations: ['ratings', 'ratings.user'],
    });
  }
}

export default LocalizationsRepository;
