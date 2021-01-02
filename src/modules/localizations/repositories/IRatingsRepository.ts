import ICreateRatingsDTO from '../dtos/ICreateRatingsDTO';
import Rating from '../infra/typeorm/entities/Rating';

export default interface IRatingsRepository {
  create(data: ICreateRatingsDTO): Promise<Rating>;
}
