import ICreateRatingsDTO from '@modules/localizations/dtos/ICreateRatingsDTO';
import IRatingsRepository from '@modules/localizations/repositories/IRatingsRepository';
import { getRepository, Repository } from 'typeorm';
import Rating from '../entities/Rating';

class RatingsRepository implements IRatingsRepository {
  private ormRepository: Repository<Rating>;

  constructor() {
    this.ormRepository = getRepository(Rating);
  }

  public async create(data: ICreateRatingsDTO): Promise<Rating> {
    const rating = this.ormRepository.create(data);

    await this.ormRepository.save(rating);

    return rating;
  }
}

export default RatingsRepository;
