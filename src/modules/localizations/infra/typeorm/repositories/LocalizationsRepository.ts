import ICreateLocalizationDTO from '@modules/localizations/dtos/ICreateLocalizationDTO';
import ILocalizationsRepository from '@modules/localizations/repositories/ILocalizationsRepository';
import { getManager, getRepository, Repository } from 'typeorm';
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

  public async save(localization: Localization): Promise<Localization> {
    return this.ormRepository.save(localization);
  }

  public async resultMapped(): Promise<any> {
    const entityManager = getManager();
    const getResultsMapped = await entityManager.query(
      `SELECT * FROM localizations`,
    );
    return getResultsMapped;
  }
}

export default LocalizationsRepository;
