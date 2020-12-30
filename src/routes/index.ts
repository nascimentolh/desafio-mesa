import { Router } from 'express';
import localizationsRouter from './localizations.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/localizations', localizationsRouter);
routes.use('/users', usersRouter);

export default routes;
