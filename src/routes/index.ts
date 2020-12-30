import { Router } from 'express';
import authRouter from './auth.routes';
import localizationsRouter from './localizations.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/localizations', localizationsRouter);
routes.use('/users', usersRouter);

export default routes;
