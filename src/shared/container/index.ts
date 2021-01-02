import { container } from 'tsyringe';

import '@modules/users/providers';
import '../container/providers';

import LocalizationsRepository from '@modules/localizations/infra/typeorm/repositories/LocalizationsRepository';
import ILocalizationsRepository from '@modules/localizations/repositories/ILocalizationsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IRatingsRepository from '@modules/localizations/repositories/IRatingsRepository';
import RatingsRepository from '@modules/localizations/infra/typeorm/repositories/RatingsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ILocalizationsRepository>(
  'LocalizationsRepository',
  LocalizationsRepository,
);

container.registerSingleton<IRatingsRepository>(
  'RatingsRepository',
  RatingsRepository,
);
