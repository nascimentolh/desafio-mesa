import Localization from '@modules/localizations/infra/typeorm/entities/Localization';
import { injectable, inject } from 'tsyringe';
import ILocalizationsRepository from '../repositories/ILocalizationsRepository';

@injectable()
class ListLocalizationsService {
  constructor(
    @inject('LocalizationsRepository')
    private localizationsRepository: ILocalizationsRepository,
  ) {}

  public async list(): Promise<Localization[]> {
    return this.localizationsRepository.listAll();
  }
}

export default ListLocalizationsService;
