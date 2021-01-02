"use strict";

require("reflect-metadata");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _UpdateUserService = _interopRequireDefault(require("./UpdateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let updateUserService;
describe('UpdateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    updateUserService = new _UpdateUserService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to update user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    const updatedUser = await updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com'
    });
    expect(updatedUser.name).toBe('Sr.Lorem Ipsum');
  });
  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@example.com',
      password: '123456'
    });
    await expect(updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem@ipsum.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should be able to update password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    const updatedUser = await updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com',
      old_password: '123456',
      password: '123123'
    });
    expect(updatedUser.password).toBe('123123');
  });
  it('should not be able to update password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    await expect(updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    await expect(updateUserService.execute({
      user_id: user.id,
      name: 'Sr.Lorem Ipsum',
      email: 'lorem1@ipsum.com',
      old_password: 'wrong-old',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able update from non existing user', async () => {
    await expect(updateUserService.execute({
      user_id: 'non-existing-id',
      name: 'teste',
      email: 'test@example.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});