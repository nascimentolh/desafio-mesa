import AppError from '@shared/errors/AppError';
import FakeLocalizationsRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
  it('should be able to create a new user with same email from another', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const hashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeRepository, hashProvider);

    const user = await createUser.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const hashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeRepository, hashProvider);

    await createUser.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Sr.Lorem',
        email: 'lorem@ipsum.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
