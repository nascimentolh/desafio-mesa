import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
import authenticated from '../middlewares/authenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(authenticated);
profileRouter.put('/', profileController.update);

export default profileRouter;
