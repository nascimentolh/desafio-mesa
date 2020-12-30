import Localization from '@modules/localizations/infra/typeorm/entities/Localization';
import { getRepository } from 'typeorm';
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
  ) {}

  public async execute({ name, lng, lat }: IRequest): Promise<Localization> {
    const localization = await this.localizationsRepository.create({
      name,
      lng,
      lat,
    });

    return localization;
  }
}

export default CreateLocalizationService;
