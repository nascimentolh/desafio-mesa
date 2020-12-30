import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to create a new user with same email from another', async () => {
    const user = await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'Sr.Lorem',
        email: 'lorem@ipsum.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
