import { Router } from 'express';
import authenticated from 'middlewares/authenticated';
import CreateLocalizationService from 'services/CreateLocalizationService';

const localizationsRouter = Router();

localizationsRouter.use(authenticated);

localizationsRouter.post('/', async (request, response) => {
  try {
    const { name, long, lat } = request.body;

    const createLocalization = new CreateLocalizationService();

    const localization = await createLocalization.execute({ name, long, lat });

    return response.send(localization);
  } catch (err) {
    return response.status(404).json({ error: err.message });
  }
});

export default localizationsRouter;
