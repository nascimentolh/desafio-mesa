import { Router } from 'express';
import { container } from 'tsyringe';
import authenticated from '@modules/users/infra/http/middlewares/authenticated';
import CreateLocalizationService from '@modules/localizations/services/CreateLocalizationService';

const localizationsRouter = Router();

localizationsRouter.use(authenticated);

localizationsRouter.post('/', async (request, response) => {
  const { name, lng, lat } = request.body;

  const createLocalization = container.resolve(CreateLocalizationService);

  const localization = await createLocalization.execute({ name, lng, lat });

  return response.send(localization);
});

export default localizationsRouter;
