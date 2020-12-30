import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/', authController.authenticate);

export default authRouter;
