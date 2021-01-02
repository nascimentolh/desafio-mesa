import { v4 } from 'uuid';
import IRatingsRepository from '../IRatingsRepository';
import Rating from '@modules/localizations/infra/typeorm/entities/Rating';
import ICreateRatingsDTO from '@modules/localizations/dtos/ICreateRatingsDTO';

class FakeRatingsRepository implements IRatingsRepository {
  private ratings: Rating[] = [];

  public async create(data: ICreateRatingsDTO): Promise<Rating> {
    const ratingN = new Rating();

    Object.assign(
      ratingN,
      {
        id: v4(),
      },
      data,
    );

    this.ratings.push(ratingN);

    return ratingN;
  }
}

export default FakeRatingsRepository;
