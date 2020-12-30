import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLocalizationService from '@modules/localizations/services/CreateLocalizationService';

export default class LocalizationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, lng, lat } = request.body;

    const createLocalization = container.resolve(CreateLocalizationService);

    const localization = await createLocalization.execute({ name, lng, lat });

    return response.json(localization);
  }
}
