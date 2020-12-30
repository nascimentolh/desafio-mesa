import { Router } from 'express';
import authRouter from '@modules/users/infra/http/routes/auth.routes';
import localizationsRouter from '@modules/localizations/infra/http/routes/localizations.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/localizations', localizationsRouter);
routes.use('/users', usersRouter);

export default routes;
