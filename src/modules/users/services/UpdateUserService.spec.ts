import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserService from './UpdateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateUserService: UpdateUserService;

describe('UpdateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateUserService = new UpdateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to update user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    const updatedUser = await updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com',
    });

    expect(updatedUser.name).toBe('Sr.Lorem Ipsum');
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@example.com',
      password: '123456',
    });

    await expect(
      updateUserService.execute({
        user_id: user.id,
        name: 'Sr.Lorem Ipsum',
        email: 'lorem@ipsum.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    const updatedUser = await updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    await expect(
      updateUserService.execute({
        user_id: user.id,
        name: 'Sr.Lorem Ipsum',
        email: 'lorem1@ipsum.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456',
    });

    await expect(
      updateUserService.execute({
        user_id: user.id,
        name: 'Sr.Lorem Ipsum',
        email: 'lorem1@ipsum.com',
        old_password: 'wrong-old',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able update from non existing user', async () => {
    await expect(
      updateUserService.execute({
        user_id: 'non-existing-id',
        name: 'teste',
        email: 'test@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
