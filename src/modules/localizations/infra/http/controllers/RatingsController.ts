import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRatingsService from '@modules/localizations/services/CreateRatingsService';

export default class RatingsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { localization_id, rating, comment } = request.body;

    const createRating = container.resolve(CreateRatingsService);

    const resRating = await createRating.execute({
      user_id,
      localization_id,
      rating,
      comment,
    });

    return response.json(resRating);
  }
}
