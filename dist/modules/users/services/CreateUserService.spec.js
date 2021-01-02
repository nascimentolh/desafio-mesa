"use strict";

require("reflect-metadata");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let createUserService;
describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    createUserService = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to create a new user with same email from another', async () => {
    const user = await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    expect(user).toHaveProperty('id');
  });
  it('should not be able to create a new user', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    await expect(createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});