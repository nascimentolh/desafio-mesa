import { Router } from 'express';
import authenticated from '@modules/users/infra/http/middlewares/authenticated';
import CreateLocalizationService from '@modules/localizations/services/CreateLocalizationService';

const localizationsRouter = Router();

localizationsRouter.use(authenticated);

localizationsRouter.post('/', async (request, response) => {
  const { name, long, lat } = request.body;

  const createLocalization = new CreateLocalizationService();

  const localization = await createLocalization.execute({ name, long, lat });

  return response.send(localization);
});

export default localizationsRouter;
