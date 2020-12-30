import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;
let authenticateUserService: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to authenticate', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    const response = await authenticateUserService.execute({
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(response).toHaveProperty('access_token');
  });

  it('should not be able to authenticate with non existing user', async () => {
    expect(
      authenticateUserService.execute({
        email: 'lorem@ipsum.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with non matched password', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    expect(
      authenticateUserService.execute({
        email: 'lorem@ipsum.com',
        password: '123455',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
