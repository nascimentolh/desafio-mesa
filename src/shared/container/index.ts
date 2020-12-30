import LocalizationsRepository from '@modules/localizations/infra/typeorm/repositories/LocalizationsRepository';
import ILocalizationsRepository from '@modules/localizations/repositories/ILocalizationsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ILocalizationsRepository>(
  'LocalizationsRepository',
  LocalizationsRepository,
);
