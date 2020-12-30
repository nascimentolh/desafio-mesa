import ICreateLocalizationDTO from '../dtos/ICreateLocalizationDTO';
import Localization from '../infra/typeorm/entities/Localization';

export default interface ILocalizationsRepository {
  create(data: ICreateLocalizationDTO): Promise<Localization>;
}
