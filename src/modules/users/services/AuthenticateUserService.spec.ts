import AppError from '@shared/errors/AppError';
import FakeLocalizationsRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const hashProvider = new FakeHashProvider();
    const authenticateUser = new AuthenticateUserService(
      fakeRepository,
      hashProvider,
    );
    const createUser = new CreateUserService(fakeRepository, hashProvider);

    await createUser.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(response).toHaveProperty('access_token');
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const hashProvider = new FakeHashProvider();
    const authenticateUser = new AuthenticateUserService(
      fakeRepository,
      hashProvider,
    );

    expect(
      authenticateUser.execute({
        email: 'lorem@ipsum.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with non matched password', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const hashProvider = new FakeHashProvider();
    const authenticateUser = new AuthenticateUserService(
      fakeRepository,
      hashProvider,
    );
    const createUser = new CreateUserService(fakeRepository, hashProvider);

    await createUser.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(
      authenticateUser.execute({
        email: 'lorem@ipsum.com',
        password: '123455',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
