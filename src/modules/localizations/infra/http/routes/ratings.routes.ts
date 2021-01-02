import { Router } from 'express';
import authenticated from '@modules/users/infra/http/middlewares/authenticated';
import RatingsController from '../controllers/RatingsController';

const ratingsRouter = Router();
const ratingsController = new RatingsController();

ratingsRouter.use(authenticated);

ratingsRouter.post('/', ratingsController.create);

export default ratingsRouter;
