import { Router } from 'express';
import authenticated from '@modules/users/infra/http/middlewares/authenticated';
import LocalizationsController from '../controllers/LocalizationsController';

const localizationsRouter = Router();
const localizationsController = new LocalizationsController();

localizationsRouter.use(authenticated);

localizationsRouter.post('/', localizationsController.create);

export default localizationsRouter;
