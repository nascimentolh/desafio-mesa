import Localization from '@modules/localizations/infra/typeorm/entities/Localization';
import { getRepository } from 'typeorm';

interface Request {
  name: string;
  long: string;
  lat: string;
}

class CreateLocalizationService {
  public async execute({ name, long, lat }: Request): Promise<Localization> {
    const localizationRepository = getRepository(Localization);

    const localization = localizationRepository.create({ name, long, lat });

    await localizationRepository.save(localization);

    return localization;
  }
}

export default CreateLocalizationService;
