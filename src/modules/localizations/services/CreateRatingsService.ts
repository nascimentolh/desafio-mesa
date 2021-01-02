import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Rating from '../infra/typeorm/entities/Rating';
import IRatingsRepository from '../repositories/IRatingsRepository';

interface IRequest {
  user_id: string;
  localization_id: string;
  rating: number;
  comment?: string;
}

@injectable()
class CreateRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    user_id,
    localization_id,
    rating,
    comment,
  }: IRequest): Promise<Rating> {
    if (rating > 5) {
      throw new AppError('Please insert valid rating (0-5)');
    }
    const response = await this.ratingsRepository.create({
      user_id: user_id,
      localization_id: localization_id,
      rating: rating,
      comment: comment,
    });

    await this.cacheProvider.invalidatePrefix(`geo-location`);
    await this.cacheProvider.invalidatePrefix(`list-localizations`);

    return response;
  }
}

export default CreateRatingsService;
